<template>
  <div class="span">
    <span class="span__text">Главная страница </span>
    <span class="span__dots"></span>
    <span class="span__text">Документы </span>
    <span class="span__dots"></span>
    <span class="span__text">Лицензионный договор</span>
  </div>
</template>

<style scoped>
.span {
  margin: 20px auto;
  width: 60.625%;
  display: flex;
  gap: 5px;
  align-items: center;
}

.span__text {
  font-family: 'PT Sans', sans-serif;
  font-size: 13px;
  font-weight: 400;
  line-height: 15.6px;
}

.span__text:last-child {
  color: #8f8f8f;
}

.span__dots {
  width: 5px;
  height: 5px;
  border-radius: 50%;
  background-color: #000000;
}
</style>
