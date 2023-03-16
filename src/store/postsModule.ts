import axios from "axios";
import { ActionContext, GetterTree } from "vuex";

interface Post {
  id: number;
  title: string;
  body: string;
  userId: number;
}

interface PostsState {
  posts: Post[];
  searchQuery: string;
  isPostsLoading: boolean;
  currentPage: number;
  limit: number;
  totalPages: number;
  sortedValue: "title" | "body" | "";
}

export default {
  state: {
    posts: [],
    searchQuery: "",
    isPostsLoading: false,
    currentPage: 1,
    limit: 10,
    totalPages: 0,
    sortedValue: "",
  } as PostsState,
  getters: {
    sortedPosts(state: PostsState) {
      return [...state.posts].sort((p1, p2) => {
        const sortKey = state.sortedValue;
        if (sortKey === "title" || sortKey === "body") {
          return p1[sortKey].localeCompare(p2[sortKey]);
        }

        return 0;
      });
    },

    searchAndSortedPosts(state: PostsState, getters: any) {
      return getters.sortedPosts.filter(
        (p: Post) =>
          p.title.toLowerCase().includes(state.searchQuery) ||
          p.body.toLowerCase().includes(state.searchQuery)
      );
    },
  },
  mutations: {
    setPosts(state: PostsState, newPosts: Post[]) {
      state.posts = newPosts;
    },
    setSearchQuery(state: PostsState, newQuery: string) {
      state.searchQuery = newQuery;
    },
    setIsPostsLoading(state: PostsState, newLoadingValue: boolean) {
      state.isPostsLoading = newLoadingValue;
    },
    setCurrentPage(state: PostsState, newCurrentPage: number) {
      state.currentPage = newCurrentPage;
    },
    setTotalPages(state: PostsState, newTotalPages: number) {
      state.totalPages = newTotalPages;
    },
    setSortedValue(state: PostsState, newSortedValue: "title" | "body" | "") {
      state.sortedValue = newSortedValue;
    },
    addNewPost(state: PostsState, newPost: Post) {
      state.posts.push(newPost);
    },
    removePost(state: PostsState, postId: number) {
      state.posts = state.posts.filter((p) => p.id !== postId);
    },
  },
  actions: {
    async fetchPosts({ state, commit }: ActionContext<PostsState, any>) {
      try {
        commit("setIsPostsLoading", true);
        const result = await axios.get(
          "https://jsonplaceholder.typicode.com/posts",
          {
            params: {
              _page: state.currentPage,
              _limit: state.limit,
            },
          }
        );

        if (result) {
          const newPosts = [...result.data];
          commit("setIsPostsLoading", false);
          commit("setPosts", newPosts);
          commit(
            "setTotalPages",
            Math.ceil(result.headers["x-total-count"] / state.limit)
          );
        }
      } catch (e) {
        console.log(e);
        alert("Error");
      } finally {
        commit("setIsPostsLoading", false);
      }
    },
    async loadMorePosts({ state, commit }: ActionContext<PostsState, any>) {
      try {
        commit("setCurrentPage", state.currentPage + 1);

        const result = await axios.get(
          "https://jsonplaceholder.typicode.com/posts",
          {
            params: {
              _page: state.currentPage,
              _limit: state.limit,
            },
          }
        );

        if (result) {
          const newPosts = [...state.posts, ...result.data];

          if (result.headers["x-total-count"] !== state.posts.length) {
            commit("setPosts", newPosts);
          }
        }
      } catch (e) {
        console.log(e);
        alert("Error");
      }
    },
  },
  namespaced: true,
};
