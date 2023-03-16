<template>
  <div id="scrollArea">
    <div
      class="postList"
      v-if="searchAndSortedPosts.length > 0 && !isPostsLoading"
    >
      <transition-group name="post-list" tag="p">
        <post
          v-for="post in searchAndSortedPosts"
          :post="post"
          :key="post.id"
        />
      </transition-group>
      <!--   <my-pagination-btns
        style="margin: 10px 0px"
        :totalPages="totalPages"
        v-model:currentPage="currentPage"
      /> -->
    </div>
    <h2 style="margin-top: 10px" v-else-if="!isPostsLoading">No posts</h2>
    <p v-if="isPostsLoading">Loading</p>
    <div v-intersection="loadMorePostsHandler" ref="observer" />
  </div>
</template>

<script>
import Post from "../post/post.vue";
import axios from "axios";
import { mapActions, mapMutations, mapState, mapGetters } from "vuex";

export default {
  components: {
    Post,
  },
  props: {},
  data() {},
  methods: {
    ...mapActions({
      fetchPosts: "posts/fetchPosts",
      loadMorePosts: "posts/loadMorePosts",
    }),
    ...mapMutations({
      setCurrentPage: "posts/setCurrentPage",
    }),
    loadMorePostsHandler() {
      if (this.currentPage < this.totalPages) {
        this.loadMorePosts();
      }
    },
  },
  computed: {
    ...mapState({
      posts: (state) => state.posts.posts,
      isPostsLoading: (state) => state.posts.isPostsLoading,
      currentPage: (state) => state.posts.currentPage,
      limit: (state) => state.posts.limit,
      totalPages: (state) => state.posts.totalPages,
    }),
    ...mapGetters({
      sortedPosts: "posts/sortedPosts",
      searchAndSortedPosts: "posts/searchAndSortedPosts",
    }),
  },

  mounted() {
    this.fetchPosts();
  },
  /*   watch: {
    currentPage() {
      this.fetchPosts();
    },
  }, */
};
</script>

<style>
.postList {
  display: flex;
  flex-direction: column;
}
.posy-list-enter-active,
.post-list-leave-active {
  transition: all 0.5s ease;
}
.post-list-enter-from,
.post-list-leave-to {
  opacity: 0;
  transform: translateY(30px);
}
.post-list-move {
  transition: transform 0.5s ease;
}
</style>
