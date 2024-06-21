<template>
  <div class="index">
    <Header />
    <RegistrationForm />
    <CardBlock />
    <DocBlock />
  </div>
</template>

<script setup>
import Header from '~/components/Header.vue';
import CardBlock from '~/components/CardBlock.vue';
import RegistrationForm from '~/components/RegistrationForm.vue';
import DocBlock from '~/components/DocBlock.vue';
</script>

<style scoped>
.index {
  max-width: 1920px;
  box-sizing: border-box;
  width: 100%;
  margin: 0 auto 474px;
}

* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  overflow-y: hidden;
}

body{
  margin: 0;
}

</style>
