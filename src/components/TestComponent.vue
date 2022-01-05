<template>
  <div>これはコンポーネントから表示されています。</div>
  <p>{{ messages }}</p>
  <p>{{ isEnabled }}</p>
  <button @click="onClick()">親のメソットを実行する</button>
</template>

<script>
export default {
  props: ["messages", "isEnabled"],
  methods: {
    onClick() {
      this.$emit("toggle");
    },
  },
};
</script>
