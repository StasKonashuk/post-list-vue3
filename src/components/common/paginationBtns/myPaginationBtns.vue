<template>
  <div class="paginationBtnWrapper">
    <button
      v-for="pageNumber in totalPages"
      :pageNumber="pageNumber"
      :key="pageNumber"
      class="paginationBtn"
      @click="updatePageNumber(pageNumber)"
      :class="{
        'first-btn': pageNumber === 1,
        'last-btn': pageNumber === totalPages.length,
        'current-page': pageNumber === currentPage,
      }"
    >
      {{ pageNumber }}
    </button>
  </div>
</template>
<script>
export default {
  name: "my-pagination-btns",
  props: {
    totalPages: { type: Number, required: true },
    currentPage: { type: Number, required: true },
  },
  methods: {
    updatePageNumber(pageNumber) {
      this.$emit("update:currentPage", pageNumber);
    },
  },
};
</script>
<style>
.paginationBtnWrapper {
  display: flex;
  flex-direction: row;
}

.first-btn {
  margin-left: 0px !important;
}
.last-btn {
  margin-right: 0px !important;
}
.paginationBtn {
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #42b983;
  border-radius: 5px;
  color: white;
  padding: 10px;
  height: 40px;
  width: 40px;
  margin: 0px 5px;
  border: none;
  cursor: pointer;
}
.current-page {
  background-color: #1a4a34 !important;
}
</style>
