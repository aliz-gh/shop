<template>
  <div>

    <loadingPage v-if="loadingpage"></loadingPage>

    <div v-if="page" class="containe pt-5" style="padding-left: 1rem;padding-right: 1rem;">
      <div class="row pt-5" dir="rtl">
        <div class="col-lx-2 col-lg-2 col-md-3 col-sm-6 d-flex justify-content-center mt-1" v-for="data in product"
          :key="data.id">

          <div class="card" style="width: 12rem ;">
            <img :src="data.image" class="card-img-top" alt="...">
            <div class="card-body">
              <div style="height: 90px;font-size: 1rem;" class="card-title fw-bold"> {{ data.title }} </div>
              <!-- <p style="height: 110px;font-size: .9rem;" class="card-text"> {{ data.description }} </p> -->
              <div style="color: green;" dir="ltr"> {{ "$" + data.price }}</div>

              <!-- :href="datas.link" -->

              <router-link :to="`/oneProduct/${data.id}`">
                <a :href="data.link" class="btn btn-primary mt-1" style="display: table;margin: 0 auto;"> see more</a>

              </router-link>
            </div>
          </div>

        </div>
      </div>
    </div>



  </div>
</template>

<script>
import axios from 'axios';
import loadingPage from '@/components/loadingPage.vue';

export default {
  data() {
    return {
      title: null,
      loadingpage: true,
      page: false,
      product: [],
    };
  },
  mounted() {
    axios.get('https://fakestoreapi.com/products')
      .then(response => {
        this.product = response.data;
        console.log(this.product);
        this.loadingpage = false;
        this.page = true
      })
      .catch(error => {
        console.log(error)
      })
  },
  methods: {

  },
  components: {
    loadingPage,
  }


}
</script>

<style scoped>
.card {
  margin-top: .5rem !important;
  border-radius: 1rem !important;
  overflow: hidden;
}

.card-img-top {
  width: 100%;
  height: 120px !important;
  object-fit: contain;
}

.card-text {
  direction: ltr;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  overflow: hidden;
  /* -webkit-line-break: 3 ; */
  line-height: 20px;
  /* تنظیم فاصله بین خطوط بر اساس نیاز */
  max-height: 60px;
  /*3 خط * line-height*/

}

.card-title {
  direction: ltr;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  overflow: hidden;

  line-height: 20px;
  /* تنظیم فاصله بین خطوط بر اساس نیاز */
  max-height: 40px;
  /* 3 خط * line-height */
}
</style>
