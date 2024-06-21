<template>
  <section class="doc">
    <h2 class="doc__title">Документы</h2>
    <div class="doc__slider-container">
      <button class="doc__arrow doc__arrow--left" @click="prevSlide">
        <img src="../images/left.svg" />
      </button>
      <div class="doc__slider" :style="sliderStyle">
        <div class="doc__block" ref="slider">
          <div class="doc__card" v-for="(card, index) in cards" :key="index">
            <h3 class="doc__card-title">{{ card.title }}</h3>
            <p class="doc__card-subtitle">{{ card.subtitle }}</p>
            <button class="doc__card-button">Перейти</button>
          </div>
        </div>
      </div>
      <button class="doc__arrow doc__arrow--right" @click="nextSlide">
        <img src="../images/right.svg" />
      </button>
    </div>
    <div class="doc__dots">
      <span
        v-for="(dot, index) in totalPages"
        :key="index"
        :class="{ active: index === currentPage }"
        @click="goToSlide(index)"
      ></span>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      cards: [
        {
          title: 'Лицензионный договор',
          subtitle:
            'Механизм разбрасывания веерного типа приводится в действие от колес тележки, отличается простой и надежной конструкцией, не нуждается в смазке.',
        },
        {
          title: 'Политика обработки персональных данных',
          subtitle:
            'Радиус разброса ПГМ составляет до 3 метров и может регулироваться.',
        },
        {
          title: 'Информация об оплате',
          subtitle:
            'Десятипозиционный переключатель дозировки расположен на ручке тележки и позволяет очень точно регулировать объем рассыпаемого реагента с учетом его массы и фракции.',
        },
        {
          title: 'Лицензионный договор',
          subtitle:
            'Механизм разбрасывания веерного типа приводится в действие от колес тележки, отличается простой и надежной конструкцией, не нуждается в смазке.',
        },
        {
          title: 'Политика обработки персональных данных',
          subtitle:
            'Радиус разброса ПГМ составляет до 3 метров и может регулироваться.',
        },
        {
          title: 'Информация об оплате',
          subtitle:
            'Десятипозиционный переключатель дозировки расположен на ручке тележки и позволяет очень точно регулировать объем рассыпаемого реагента с учетом его массы и фракции.',
        },
      ],
      currentPage: 0,
      perPage: 3,
    };
  },
  computed: {
    sliderStyle() {
      return {
        transform: `translateX(-${
          (this.currentPage * 100) / this.totalPages
        }%)`,
        width: `${(this.cards.length / this.perPage) * 100}%`,
      };
    },
    totalPages() {
      return Math.ceil(this.cards.length / this.perPage);
    },
    paginatedCards() {
      const start = this.currentPage * this.perPage;
      return this.cards.slice(start, start + this.perPage);
    },
  },
  methods: {
    nextSlide() {
      if (this.currentPage < this.totalPages - 1) {
        this.currentPage++;
      }
    },
    prevSlide() {
      if (this.currentPage > 0) {
        this.currentPage--;
      }
    },
    goToSlide(index) {
      this.currentPage = index;
    },
    updatePerPage() {
      if (window.innerWidth <= 600) {
        this.perPage = 1;
      } else if (window.innerWidth <= 890) {
        this.perPage = 2;
      } else {
        this.perPage = 3;
      }
      this.currentPage = 0;
    },
  },
  mounted() {
    this.updatePerPage();
    window.addEventListener('resize', this.updatePerPage);
  },
  beforeDestroy() {
    window.removeEventListener('resize', this.updatePerPage);
  },
};
</script>

<style scoped>
.doc {
  width: 100%;
  max-width: 1148px;
  margin: 0 auto;
}

.doc__title {
  font-family: 'PT Sans', sans-serif;
  font-size: 34px;
  font-weight: 700;
  line-height: 40.8px;
  text-align: center;
  margin-top: 50px;
  margin-bottom: 30px;
}

.doc__slider-container {
  position: relative;
  overflow: hidden;
  padding-top: 10px;
  padding-bottom: 13px;
  padding-left: 31px;
  padding-right: 27px;
  box-sizing: border-box;
}

.doc__slider {
  display: flex;
  transition: transform 0.5s ease;
}

.doc__block {
  display: flex;
  gap: 35px;
  justify-content: space-around;
  width: 100%;
}

.doc__card {
  flex: 0 0 auto;
  width: 340px;
  box-sizing: border-box;
  padding: 25px;
  border: 1px solid #eeeff1;
  border-radius: 10px;
  box-shadow: 0 0 10px 5px rgba(238, 239, 241, 1);
  height: 450px;
  display: flex;
  flex-direction: column;
}

.doc__card-title {
  font-family: 'PT Sans', sans-serif;
  color: #1253a2;
  margin-bottom: 15px;
  margin-top: 0;
  font-size: 31px;
  font-weight: 700;
  line-height: 37.2px;
}

.doc__card:nth-child(2) .doc__card-title {
  margin-bottom: 10px;
}

.doc__card-subtitle {
  font-family: 'PT Sans', sans-serif;
  margin: 0;
  font-size: 18px;
  font-weight: 400;
  line-height: 21.6px;
}

.doc__card-button {
  background-color: #0584fe;
  color: #ffffff;
  font-family: 'PT Sans', sans-serif;
  font-size: 16px;
  font-weight: 400;
  text-align: center;
  border: none;
  cursor: pointer;
  border-radius: 10px;
  width: 100%;
  height: 45px;
  margin-bottom: 0;
  margin-top: auto;
}

.doc__card-button:hover,
.doc__arrow--left:hover,
.doc__arrow--right:hover{
  opacity: 0.3;
}

.doc__arrow {
  padding: 0;
  border: none;
  position: absolute;
  top: 198px;
  background: inherit;
  cursor: pointer;
  z-index: 10;
}

.doc__arrow--left {
  left: 0;
}

.doc__arrow--right {
  right: 0;
}

.doc__dots {
  display: flex;
  justify-content: center;
  gap: 1px;
  background-color: inherit;
}

.doc__dots span {
  width: 7px;
  height: 7px;
  background-color: #ddd;
  border-radius: 50%;
  cursor: pointer;
  transition: background-color 0.3s;
}

.doc__dots span.active {
  background-color: #0584fe;
  width: 10px;
  height: 10px;
}

@media screen and (max-width: 1140px){
  .doc__card{
    width: 250px;
  }

  .doc__card-title{
    font-size: 18px;
    line-height: 20px;
  }

  .doc__card-subtitle{
    font-size: 14px;
    left: 16px;
  }

  @media screen and (max-width: 890px){
    .doc__block{
      gap: 15px
    }

    .doc__title{
      font-size: 18px;
      line-height: 20px;
    }
  }
}
</style>
