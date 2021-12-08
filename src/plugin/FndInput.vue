<template>
  <div class="fnd-input">
    <input
      :type="type"
      class="fnd-input__inner"
      :value="value"
      @input="handleInput"
    />
  </div>
</template>
<script>
export default {
  props: ["value", "type"],
  data() {
    return {};
  },
  created() {},
  mounted() {},
  methods: {
    handleInput(e) {
      setTimeout(() => {
        this.$emit("input", e.target.value);
      });
    },
  },
};
</script>

<style scoped lang="scss">
.fnd-input {
  position: relative;
  font-size: 14px;
  display: inline-block;
  &.is-disabled {
    .fnd-input__inner {
      background-color: #f5f7fa;
      border-color: #e4e7ed;
      color: #c0c4cc;
      cursor: not-allowed;

      width: 100%;
    }
  }
  &.is-error {
    .fnd-input__inner {
      border-color: #f56c6c;
    }
  }
}

.fnd-input__inner {
  -webkit-appearance: none;
  background-color: #fff;
  background-image: none;
  border-radius: 4px;
  border: 1px solid #dcdfe6;
  box-sizing: border-box;
  color: #606266;
  display: inline-block;
  font-size: inherit;
  height: 40px;
  line-height: 40px;
  outline: none;
  padding: 0 15px;
  transition: border-color 0.2s cubic-bezier(0.645, 0.045, 0.355, 1);
}
</style>
