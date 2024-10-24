<template>
  <swiper :autoplay="{
    delay: 2500,
    disableOnInteraction: false,
  }" dir="rtl" :loop="true" :effect="'coverflow'" :grabCursor="true" :centeredSlides="true" :slidesPerView="'auto'"
    :coverflowEffect="{
      rotate: 50,
      stretch: 0,
      depth: 100,
      modifier: 1,
      slideShadows: true,

    }" :modules="modules" class="mySwiper">
    <swiper-slide class="imh"><img class="im" src="/public/photo/s1.jpg" /></swiper-slide><swiper-slide class="imh"><img
        class="im" src="/public/photo/s2.jpg" /></swiper-slide><swiper-slide class="imh"><img class="im"
        src="/public/photo/s3.jpg" /></swiper-slide><swiper-slide class="imh"><img class="im"
        src="/public/photo/s4.jpg" /></swiper-slide><swiper-slide class="imh"><img class="im"
        src="/public/photo/s5.jpg" /></swiper-slide><swiper-slide class="imh"><img class="im"
        src="/public/photo/s6.jpg" /></swiper-slide><swiper-slide class="imh"><img class="im"
        src="/public/photo/s7.jpg" /></swiper-slide><swiper-slide class="imh"><img class="im"
        src="/public/photo/s8.jpg" /></swiper-slide>
  </swiper>
</template>
<script>
// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from 'swiper/vue';

// Import Swiper styles
import 'swiper/css';

import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';

// import './style.css';

// import required modules
import { Autoplay, EffectCoverflow, Pagination } from 'swiper/modules';

export default {
  data() {
    return {

    }
  },
  components: {
    Swiper,
    SwiperSlide,
  },
  setup() {
    return {
      modules: [Autoplay, EffectCoverflow, Pagination],

    };
  },
};
</script>

<style scoped>
html,
body {
  position: relative;
  height: 100%;
}

body {
  background: #eee;
  font-family: Helvetica Neue, Helvetica, Arial, sans-serif;
  font-size: 14px;
  color: #000;
  margin: 0;
  padding: 0;
}

.mySwiper {

  width: 100%;

  padding-bottom: 50px;
  opacity: .7;
}

.imh {
  background-position: center;
  background-size: cover;
  width: 150px;
  height: 150px;
  margin-left: 6rem;
}

swiper-slide img {
  display: block;
  width: 150px !important;
}

.swiper-pagination {
  display: none !important;
}

.im {
  width: 150px;
}
</style>