<template>
  <select :value="value" @change="onChangeSelect" class="select">
    <option value="">Chose sort value</option>
    <option v-for="option in options" :key="option.value" :value="option.value">
      {{ option.name }}
    </option>
  </select>
</template>
<script>
export default {
  name: "my-select",
  props: {
    value: { type: String, required: true },
    options: {
      type: Array,
    },
  },
  methods: {
    onChangeSelect(event) {
      this.$emit("update:value", event.target.value);
    },
  },
};
</script>
<style>
.select {
  width: 100%;
  border-radius: 5px;
  border: 1px solid #42b983;
  height: 100%;
}
</style>
