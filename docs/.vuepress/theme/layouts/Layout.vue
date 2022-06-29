<script setup>
import ParentLayout from "@vuepress/theme-default/lib/client/layouts/Layout.vue";
</script>

<template>
  <ParentLayout>
    <template #sidebar-top>
      <pattern-options-list></pattern-options-list>
    </template>
  </ParentLayout>
</template>



<style lang="css">
.my-footer {
  text-align: center;
}

h4 {
  margin: 10px;
}
</style>
