<template>
  <div>



    <div class="container pt-5">
      <div class="row pt-5" dir="rtl">
        <div class="col-lx-3 col-lg-4 col-md-6 d-flex justify-content-center" v-for="data in product" :key="data.id">

          <div class="card" style="width: 18rem;">
            <img :src="data.image" class="card-img-top" alt="...">
            <div class="card-body">
              <h5 style="height: 90px;" class="card-title"> {{ data.title }} </h5>
              <p style="height: 110px;" class="card-text"> {{ data.description }} </p>
              <a class="btn btn-primary"> مشاهده بیشتر</a>
              <!-- :href="datas.link" -->
            </div>
          </div>

        </div>
      </div>
    </div>



  </div>
</template>

<script>
  import axios from 'axios';

export default {
  data() {
    return {
      title:null,

      product: [],
    };
  },
  mounted() {
    axios.get('https://fakestoreapi.com/products')
      .then(response => {
        this.product = response.data;
        console.log(this.product);
      })
      .catch(error => {
        console.log(error)
      })
  },
  methods:{

  }


}
</script>

<style scoped>
.card{
  margin-top: .5rem !important;
}
.card-img-top{
  width: 100%;
  height: 200px !important;
  
}
</style>