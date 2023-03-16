<template>
  <div class="post">
    <div>
      {{ post.id }}
      <div class="postName">
        <p>
          <strong> Name: </strong>
          {{ post.title }}
        </p>
      </div>
      <div class="postDescription">
        <span>
          <strong> Description: </strong>
          {{ post.body }}
        </span>
      </div>
    </div>

    <div class="postBtnsWrapper">
      <my-button @click="postDetailsHandler" class="detailBtn"
        >Details</my-button
      >
      <my-button @click="removeHandler" class="removeBtn">Delete</my-button>
    </div>
  </div>
</template>
<script>
import { mapMutations } from "vuex";

export default {
  props: {
    post: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {};
  },
  methods: {
    ...mapMutations({
      removePost: "posts/removePost",
      setCurrentPage: "posts/setCurrentPage",
    }),
    removeHandler() {
      this.removePost(this.post.id);
    },
    postDetailsHandler() {
      this.setCurrentPage(1);
      console.log(this.post.id);
      this.$router.push(`/posts/${this.post.id}`);
    },
  },
};
</script>
<style>
.post {
  display: flex;
  padding: 10px;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  border: 1px solid #42b983;
  border-radius: 5px;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  margin-top: 15px;
}
.postDescription {
  margin-top: 5px;
  text-align: left;
}
.removeBtn {
  background-color: white !important;
  color: black !important;
  border: 1px solid #42b983 !important;
  padding: 5px;
  transition: all 0.3s ease;
}
.removeBtn:hover {
  border: 1px solid #ff3333 !important;
  color: #ff3333 !important;
  transition: all 0.3s ease;
}
.detailBtn {
  background-color: white !important;
  color: black !important;
  border: 1px solid #42b983 !important;
  padding: 5px;
  margin-right: 10px;
  transition: all 0.3s ease;
}
.detailBtn:hover {
  border: 1px solid #8342b9 !important;
  color: #8342b9 !important;
  transition: all 0.3s ease;
}
.postBtnsWrapper {
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-left: 10px;
}
</style>
