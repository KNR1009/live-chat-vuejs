<template>
  <div>{{ title }}</div>
  <TestComponent
    messages="親から渡ってきました"
    :isEnabled="isEnabled"
    @toggle="toggle"
  />
</template>

<script>
import TestComponent from "../components/TestComponent";
export default {
  components: {
    TestComponent,
  },
  data() {
    return {
      title: "初めてのVue.jsアプリです！",
      subtitle: "テスト",
    };
  },
  methods: {
    toggle() {
      alert("クリックしました");
    },
  },
};
</script>
