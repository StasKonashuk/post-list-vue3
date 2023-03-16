<template>
  <div class="header-wrapper">
    <router-link class="header-link" to="/">Home</router-link>
    <router-link class="header-link" to="/posts">All posts</router-link>
  </div>
</template>
<script>
export default {
  name: "my-header",
};
</script>
<style>
.header-wrapper {
  display: flex;
  height: 50px;
  position: fixed;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
  background: #42b983;
  padding: 10px 20px;
  color: white;
}
.header-link {
  color: white;
  text-decoration: none;
  border: 1px solid white;
  padding: 4px;
  border-radius: 5px;
  cursor: pointer;
  margin-right: 10px;
  transition: all 0.5s ease;
}
.header-link:hover {
  border: 1px solid #8342b9;
  color: #8342b9;
  transition: all 0.4s ease;
}
</style>
