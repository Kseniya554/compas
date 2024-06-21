<template>
  <section class="card-block">
    <div class="card">
      <img class="card__img" src="../images/1.svg" alt="иконка" />
      <div class="card__info">
        <h3 class="card__info-title">Неограниченый автопарк</h3>
        <p class="card__info-subtitle">
          Можно добавить неограниченное кол-во машин и водителей
        </p>
      </div>
    </div>
    <div class="card">
      <img class="card__img" src="../images/2.svg" alt="иконка" />
      <div class="card__info">
        <h3 class="card__info-title">Сокращение затрат до 50%</h3>
        <p class="card__info-subtitle">
          Максимально быстро узнаете о штрафах в автоматическом режиме, тем
          самым у вас есть время оплатить по скидке
        </p>
      </div>
    </div>
    <div class="card">
      <img class="card__img" src="../images/3.svg" alt="иконка" />
      <div class="card__info">
        <h3 class="card__info-title">Безопасность</h3>
        <p class="card__info-subtitle">
          Данные передаются в зашифрованном виде, они доступны только получателю
        </p>
      </div>
    </div>
    <div class="card">
      <img class="card__img" src="../images/4.svg" alt="иконка" />
      <div class="card__info">
        <h3 class="card__info-title">Уведомление о погашении</h3>
        <p class="card__info-subtitle">
          Мы оповестим вас о том, что штраф был погашен и соответствующая запись
          создана в ГИС ГМП
        </p>
      </div>
    </div>
    <div class="card">
      <img class="card__img" src="../images/5.svg" alt="иконка" />
      <div class="card__info">
        <h3 class="card__info-title">Квитанция об оплате</h3>
        <p class="card__info-subtitle">
          После совершения оплаты банковской картой на Вашу электронную почту
          придет квитанция об успешной оплате.
        </p>
      </div>
    </div>
    <div class="card">
      <img class="card__img" src="../images/6.svg" alt="иконка" />
      <div class="card__info">
        <h3 class="card__info-title">
          Все история сохраняется по каждой машине
        </h3>
        <p class="card__info-subtitle">
          Вся история штрафов сохраняется по машине и водителю, позволяет
          анализировать статистику по штрафам
        </p>
      </div>
    </div>
  </section>
</template>

<style scoped>
.card-block {
  width: 1136px;
  margin: 0 auto;
  display: flex;
  flex-wrap: wrap;
  row-gap: 35px;
  justify-content: space-between;
  padding-top: 33px;
  padding-bottom: 35px;
}

.card {
  border: 1px solid #eeeff1;
  width: 362px;
  height: 151px;
  border-radius: 10px;
  background-color: #fbfcfd;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  padding: 0 20.11px;
  justify-content: space-between;
}

.card__img {
}

.card__info {
  width: 247.37px;
}

.card__info-title {
  margin: 0;
  font-family: 'PT Sans', sans-serif;
  font-size: 18px;
  font-weight: 700;
  line-height: 21.6px;
  color: #1253a2;
}

.card__info-subtitle {
  margin: 0;
  font-family: 'PT Sans', sans-serif;
  font-size: 15px;
  font-weight: 400;
  line-height: 18px;
  padding-top: 10px;
}

@media screen and (max-width: 1140px){
  .card-block{
    width: 95%;
    justify-content: center;
  }
}
</style>
