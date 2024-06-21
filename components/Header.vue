<template>
  <header class="header">
    <a class="header__link" href="http://localhost:3000/">
      <img src="../images/Logo.svg" alt="логотип" class="header__logo" /></a>
    <nav class="header__nav">
      <div class="header__nav-left">
        <a class="header__nav-link" href="http://localhost:3000/empty-page"
          >Тарифы</a
        >
        <a class="header__nav-link" href="http://localhost:3000/empty-page"
          >Контакты</a
        >
      </div>
      <div class="header__nav-right">
        <p class="header__tel">+7 495 118-44-22</p>
        <button class="header__button"
          >Вход</button
        >
        <button
          class="header__button header__registration"
          >Регистрация</button
        >
      </div>
    </nav>
  </header>
</template>

<style scoped>
.header {
  max-width: 1920px;
  width: 100%;
  height: 60px;
  background: linear-gradient(to right, #000000 30%, #1c2734 100%);
  display: flex;
  align-items: center;
}

.header__link{
  width: 119px;
  height: 26px;
  margin-left: 374px;
  margin-right: 30px;
}

.header__logo {
  width: 100%;
  height: 100%
}

.header__nav {
  display: flex;
  justify-content: space-between;
  width: 72.76%;
}

.header__nav-left {
  display: flex;
  align-items: center;
  gap: 30px;
}

.header__nav-link {
  text-decoration: none;
  font-family: 'PT Sans', sans-serif;
  font-size: 18px;
  font-weight: 400;
  line-height: 23.29px;
  color: #ffffff;
  cursor: pointer;
}

.header__nav-right {
  display: flex;
  align-items: center;
  margin-right: 385px;
  margin-left: auto;
  gap: 30px;
  font-size: 15px;
}

.header__tel {
  font-family: 'PT Sans', sans-serif;
  font-size: 18px;
  font-weight: 700;
  line-height: 23.29px;
  color: #ffffff;
}

.header__button{
  border: none;
  background: inherit;
  font-family: 'PT Sans', sans-serif;
  font-size: 18px;
  font-weight: 400;
  line-height: 23.29px;
  color: #ffffff;
  cursor: pointer;
}

.header__button:hover{
  opacity: 0.3;
}

.header__registration {
  background-color: #0584fe;
  width: 117px;
  height: 37px;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 15px;
  line-height: 19.41px;
  border-radius: 8px;
}

@media screen and (max-width: 1486px){
  .header__link{
    margin-left: 15px;
  }

  .header__nav-right{
    margin-right: 15px;
  }

  .header__nav{
    width: 90%;
  }

  @media screen and (max-width: 750px){
    .header,
    .header__tel,
    .header__nav-link,
    .header__button,
    .header__registration{
      font-size: 11px;
    }

    .header__nav-right,
    .header__nav-left{
      gap: 5px;
    }

    .header__link{
      margin-right: 5px;
      width: 50px;
      height: 20px;
    }

    .header__registration{
      width: 90px;
      height: 33px;
    }
  }

  @media screen and (max-width: 430px){
    .header,
    .header__tel,
    .header__nav-link,
    .header__button,
    .header__registration{
      font-size: 8px;
    }

    .header__link{
    margin-left: 5px;
  }

  .header__nav-right{
    margin-right: 5px;
  }
  }
}
</style>
