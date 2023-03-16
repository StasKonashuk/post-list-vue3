<template>
  <button class="btn">
    <slot></slot>
  </button>
</template>
<script>
export default {
  name: "my-button",
};
</script>
<style>
.btn {
  background-color: #42b983;
  border-radius: 5px;
  color: white;
  border: none;
  cursor: pointer;
}
</style>
