<template>
  <div>
    <my-modal v-if="modalActive === true" v-model:open="modalActive">
      <form class="form" @submit.prevent>
        <my-input v-model:value="post.title" placeholder="Post name" />
        <my-input v-model:value="post.body" placeholder="Post description" />
        <my-button class="addPostBtn" @click="addPostHandler"
          >Add post</my-button
        >
      </form>
    </my-modal>
    <div class="btnsWrapper">
      <my-button class="createPostBtn" @click="openModalHandler">
        Create new Post
      </my-button>
      <div class="selectWrapper">
        <my-select
          style="padding: 0px 5px"
          :value="sortedValue"
          @update:value="setSortedValue"
          :options="selectOptions"
        />
      </div>
    </div>
  </div>
</template>

<script>
import { mapMutations, mapState } from "vuex";

export default {
  props: {
    posts: {
      type: Array,
      required: true,
    },
  },
  data() {
    return {
      post: {
        title: "",
        body: "",
      },
      modalActive: false,
      selectOptions: [
        {
          value: "title",
          name: "Sort by name",
        },
        {
          value: "body",
          name: "Sort by description",
        },
      ],
    };
  },
  methods: {
    ...mapMutations({
      setSortedValue: "posts/setSortedValue",
      addNewPost: "posts/addNewPost",
    }),
    addPostHandler() {
      const newPost = {
        id: Date.now(),
        title: this.post.title,
        body: this.post.body,
      };

      this.addNewPost(newPost);

      this.post.title = "";
      this.post.body = "";
      this.modalActive = false;
    },
    openModalHandler() {
      this.modalActive = true;
    },
  },
  computed: {
    ...mapState({
      posts: (state) => state.posts.posts,
      sortedValue: (state) => state.posts.sortedValue,
    }),
  },
};
</script>

<style>
.form {
  display: flex;
  flex-direction: column;
  width: 100%;
  justify-content: center;
}
.addPostBtn {
  width: 200px;
  height: 50px;
  margin-top: 10px;
}
.createPostBtn {
  width: 200px;
  height: 50px;
  margin-top: 10px;
}
.btnsWrapper {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-end;
}
.selectWrapper {
  width: 150px;
  height: 30px;
}
</style>
