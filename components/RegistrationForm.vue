<template>
  <section class="block-form">
    <h1 class="block-form__title">
      Проверьте штрафы и зарегестрируйтесь в 1 клик
    </h1>
    <form class="block-form__form" @submit.prevent="handleSubmit">
      <div class="block-form__box">
        <label class="block-form__label" for="number">Номер автомобиля</label>
        <input
          class="block-form__input"
          type="text"
          id="number"
          name="number"
          v-model="form.number"
          :class="{'error-border': !form.number && formSubmitted}"
          @focus="handleFocus"
          ref="number"
          required
        />
      </div>
      <div class="block-form__box">
        <label class="block-form__label" for="region">Регион</label>
        <input
          class="block-form__input"
          type="text"
          id="region"
          name="region"
          v-model="form.region"
          :class="{'error-border': !form.region && formSubmitted}"
          @focus="handleFocus"
          ref="region"
          required
        />
      </div>
      <div class="block-form__box">
        <label class="block-form__label" for="register">Свидетельство о регистрации ТС</label>
        <input
          class="block-form__input"
          type="text"
          id="register"
          name="register"
          v-model="form.register"
          :class="{'error-border': !form.register && formSubmitted}"
          @focus="handleFocus"
          ref="register"
          required
        />
      </div>
      <div class="block-form__button-block">
        <button class="block-form__button" type="submit">
          Проверить штрафы
          <img class="block-form__button-img" src="../images/Path-12.svg" />
        </button>
        <button class="block-form__button" type="button" @click="openModal">
          <img class="block-form__button-img" src="../images/Frame.svg" />
          О сервисе
          <span class="block-form__button-span"> (1 мин. 20 сек)</span>
        </button>
      </div>
      <span class="block-form__span">
        Нажимая «Проверить штрафы» вы соглашаетесь с политикой обработки
        персональных данных и принимаете оферту
      </span>
    </form>
    <img class="block-form__img" src="../images/image 2.png" alt="изображение" />
    <h3 class="block-form__title-next">
      Плюсы использования сервиса «Компас» для анализа штрафов
    </h3>

    <div v-if="isModalOpen" class="modal">
      <div class="modal__content">
        <span class="modal__close" @click="closeModal">&times;</span>
        <iframe class="modal__iframe"
          src="https://www.youtube.com/embed/dQw4w9WgXcQ"
          frameborder="0"
          allowfullscreen
        ></iframe>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      form: {
        number: '',
        region: '',
        register: ''
      },
      isModalOpen: false,
      formSubmitted: false
    };
  },
  methods: {
    handleFocus(event) {
      event.target.style.borderColor = '#0584fe';
    },
    handleSubmit() {
      console.log("handleSubmit called"); 
      this.formSubmitted = true;
      console.log("formSubmitted:", this.formSubmitted);
      console.log("Form data:", this.form);
      
      if (!this.form.number || !this.form.region || !this.form.register) {
        return;
      }
      // Обработка формы
      alert('Форма отправлена!');
    },
    openModal() {
      this.isModalOpen = true;
    },
    closeModal() {
      this.isModalOpen = false;
    }
  }
};
</script>

<style scoped>
.block-form {
  width: 1135.18px;
  margin: 79px auto 0;
  /* margin-left: 374px;
  margin-top: 79px; */
  box-sizing: border-box;
  height: 513px;
  position: relative;
}

.block-form__title {
  max-width: 620px;
  font-family: 'PT Sans', sans-serif;
  font-size: 41px;
  font-weight: 700;
  line-height: 49.2px;
  text-align: left;
  margin-top: 0;
  margin-bottom: 25px;
}

.block-form__form {
  width: 563px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}

.block-form__box {
  display: flex;
  flex-direction: column;
}

.block-form__box:nth-child(1) {
  width: 56.838%;
}

.block-form__box:nth-child(2) {
  width: 37.833%;
}

.block-form__box:nth-child(3) {
  width: 100%;
  margin-top: 16px;
  margin-bottom: 15px;
}

.block-form__label {
  font-family: 'PT Sans', sans-serif;
  font-size: 12px;
  font-weight: 400;
  line-height: 14.4px;
}

.block-form__input {
  width: 100%;
  height: 40px;
  border-radius: 5px;
  border: 1px solid #bcbcbc;
}

.block-form__input.error-border {
  border: 2px solid red !important;
}

.block-form__button-block {
  display: flex;
  gap: 21px;
}

.block-form__button {
  display: flex;
  justify-content: center;
  gap: 2px;
  height: 45px;
  cursor: pointer;
  align-items: center;
  background-color: inherit;
  font-family: 'PT Sans', sans-serif;
  font-size: 18px;
  font-weight: 400;
  line-height: 23.29px;
  box-sizing: border-box;
  border-radius: 7px;
}

.block-form__button:hover{
  opacity: 0.4;
}

.block-form__button:nth-child(1) {
  width: 210px;
  background-color: #0584fe;
  color: #ffffff;
  border: none;
}

.block-form__button:nth-child(2) {
  width: 258px;
  border: 1px solid #0584fe;
}

.block-form__button-span {
  font-size: 15px;
  line-height: 19.41px;
  color: #1253a2;
}

.block-form__span {
  color: #8f8f8f;
  width: 100%;
  font-family: 'PT Sans', sans-serif;
  font-size: 13px;
  font-weight: 400;
  line-height: 15.6px;
  margin-top: 16px;
  margin-bottom: 98px;
}

.block-form__img {
  position: absolute;
  right: 0;
  top: 0;
  width: 532.18px;
  height: 335px;
}

.block-form__title-next {
  margin: 0 auto;
  text-align: center;
  font-family: 'PT Sans', sans-serif;
  font-size: 34px;
  font-weight: 700;
  line-height: 40.8px;
}

.modal {
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  z-index: 1000;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  overflow: auto;
  background-color: rgba(0, 0, 0, 0.5);
  /* position: relative; */
}

.modal__content {
  background-color: inherit;
  border: 1px solid #888;
  width: 50%;
  max-width: 960px;
  height: 530px;
  position: relative;
  margin:277px auto auto;
  box-sizing: border-box;
  
}

.modal__close {
  color: #ffffff;
  position: absolute;
  top: -35px;
  right: 0;
  font-size: 31px;
  font-weight: bold;
  cursor: pointer;
}

.modal__close:hover,
.modal__close:focus {
  color: black;
  text-decoration: none;
  cursor: pointer;
}

.modal__iframe{
  width: 100%;
  height: 100%;
}

.error-border {
  border: 2px solid red !important;
}

@media screen and (max-width: 1140px){
  .block-form{
    display: flex;
    flex-direction: column;
    height: auto;
    justify-content: center;
    width: 90%;
  }

  .block-form__title{
    text-align: center;
  }

  .block-form__title,
  .block-form__form{
    margin-left: auto;
    margin-right: auto;
  }

  .block-form__img{
    position: relative;
    margin-left: auto;
    margin-right: auto;
  }

  .block-form__title-next{
    width: 70%;
  }

  @media screen and (max-width: 650px){
    .block-form__img{
      width: 81.85%;
      height: 51.54vw;
    }

    .block-form__title{
      font-size: 22px;
      line-height: 22px;
    }

    .block-form__title-next{
      font-size: 18px;
      line-height: 20px;
    }

    .block-form__form{
      width: 95%;
    }

    .block-form__button-block{
      width: 100%;
    }

    .block-form__button{
      font-size: 12px;
    }
    .block-form__button:nth-child(1){
      width: 40%;
    }

    .block-form__button:nth-child(2) {
      width: 65%;
    }
  }
}
</style>
