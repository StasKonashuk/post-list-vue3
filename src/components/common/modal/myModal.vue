<template>
  <div class="modalWrapper" @click="closeModal">
    <div class="modalContent" @click.stop>
      <button class="closeIconWrapper" @click="closeModal">
        <svg
          width="20px"
          height="20px"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          stroke="#707070"
        >
          <g id="SVGRepo_bgCarrier" stroke-width="0" />

          <g
            id="SVGRepo_tracerCarrier"
            stroke-linecap="round"
            stroke-linejoin="round"
          />

          <g id="SVGRepo_iconCarrier">
            <path
              d="M6 6L18 18M18 6L6 18"
              stroke="#707070"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </g>
        </svg>
      </button>
      <slot></slot>
    </div>
  </div>
</template>
<script>
export default {
  name: "my-modal",
  props: {
    open: Boolean,
    required: true,
  },
  methods: {
    closeModal(event) {
      this.$emit("update:open", false);
    },
  },
};
</script>
<style>
.modalWrapper {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  width: 100%;
  background: rgba(0, 0, 0, 0.5);
}
.closeIconWrapper {
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  position: absolute;
  top: 10px;
  right: 10px;
  cursor: pointer;
  background: none;
  border: none;
}
.modalContent {
  background: white;
  display: flex;
  flex-direction: column;
  border-radius: 5px;
  padding: 40px 20px 20px 20px;
  position: relative;
}
</style>
