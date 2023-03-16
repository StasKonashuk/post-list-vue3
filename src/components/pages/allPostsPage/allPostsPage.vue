<template>
  <div class="wrapper">
    <my-input
      :value="searchQuery"
      @update:value="setSearchQuery"
      placeholder="Search..."
    />
    <post-form />
    <post-list />
  </div>
</template>

<script>
import PostForm from "../../layouts/postForm/postForm.vue";
import PostList from "../../layouts/postList/postList";
import { mapState, mapActions, mapGetters, mapMutations } from "vuex";

export default {
  components: {
    PostList,
    PostForm,
  },
  data() {},

  methods: {
    ...mapMutations({
      setSearchQuery: "posts/setSearchQuery",
    }),
  },
  computed: {
    ...mapState({
      posts: (state) => state.posts.posts,
      searchQuery: (state) => state.posts.searchQuery,
    }),
    ...mapGetters({
      sortedPosts: "posts/sortedPosts",
      searchAndSortedPosts: "posts/searchAndSortedPosts",
    }),
  },
};
</script>

<style>
.wrapper {
  display: flex;
  flex-direction: column;
  padding: 20px;
  padding-top: 70px;
}
</style>
