<template>
  <input :value="value" @input="onChangeInput" type="text" class="input" />
</template>
<script>
export default {
  name: "my-input",
  props: {
    value: [String, Number],
  },
  methods: {
    onChangeInput(event) {
      this.$emit("update:value", event.target.value);
    },
  },
};
</script>
<style>
.input {
  width: 100%;
  border-radius: 5px;
  border: 1px solid #42b983;
  margin-bottom: 10px;
  height: 50px;
  padding: 10px;
}
</style>
