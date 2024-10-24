<template>
  <div>



    <sw1></sw1>







    <div class="search p-5">

      <div class="search-box">
        <div class="text-center" style="font-size: 2rem;color: yellow;font-weight: bold; font-style:italic;">NASSER
          SHOP</div>

        <div class='d-flex'>
          <a class="text-dark tg p-2"> <i class="fa-solid fa-magnifying-glass"></i></a>
          <input type="text" placeholder="SEARCH HERE" class="inp p-2">
        </div>

      </div>


    </div>


    <sw2></sw2>




    <div class="d-flex justify-content-center">
      <div class="text-center" style="font-size: 2rem;font-weight: bold;width: 400px;">The most rewarding way to shop
      </div>

    </div>


    <div class="row m-0 mt-4">

      <div class="col-md-6 d-flex justify-content-center">
        <div class="card" style="width: 90%;">
          <div class="cardb">
            <img src="/public/photo/phone.webp" class="card-img-top" alt="...">

          </div>
          <div class="card-body">
            <h5 class="card-title fw-bold fs-4">Shop Pay</h5>
            <p class="card-text fw-bold" style="color: rgb(111 112 113);font-size: .9rem;">Shop Pay is the one-tap
              checkout you crave. Enjoy interest-free payments up to 12
              months and instant rewards with every order.</p>
            <button class="btn btn-outline-secondary text-black mt-3 fw-bold" style="position: absolute;bottom: 1rem;">Learn More</button>
          </div>
        </div>
      </div>



      <div class="col-md-6 d-flex justify-content-center">
        <div class="card" style="width: 90%;">
          <div class="cardb d-flex justify-content-center align-items-center" style="flex-direction: column;">

            <div class="d-flex justify-content-center align-items-center mb-2"
              style="width: 190px;height: 100px;background-color: rgb(190 184 184);color: white;border-radius: .8rem;margin-right: 3rem;">
              <span style="font-style: italic;width: 140px;height: 80px;">
                Hi, I am your shopping assistant. How can I help you?
              </span>
            </div>
            <div class="d-flex justify-content-center align-items-center"
              style="width: 190px;height: 100px;background-color: #714ef5;color: white; border-radius: .8rem;margin-left: 3rem;">
              <span style="font-style: italic;width: 130px;height: 80px;">
                I’m training for a marathon, what should I buy?
              </span>
            </div>

          </div>

          <div class="card-body">
            <h5 class="card-title fw-bold fs-4">AI Shopping Assistant</h5>
            <p class="card-text fw-bold" style="color: rgb(111 112 113);font-size: .9rem;">Get personalized shopping
              support from Shop's AI-powered shopping assistant. Find exactly what you're looking for in a flash.</p>
            <button class="btn btn-outline-secondary text-black mt-3 fw-bold" style="position: absolute;bottom: 1rem;">Try it</button>
          </div>
        </div>

      </div>






    </div>



  </div>
</template>

<script>
import sw1 from '@/components/sw1.vue';
import sw2 from '@/components/sw2.vue';





export default {
  components: {
    sw1,
    sw2,
  }

}
</script>


<style scoped>
:root {
  --font: "GFF Latin", sans-serif;
}


.search {
  width: 100%;
  height: 200px;
  display: flex;
  justify-content: center;
  align-items: center
}

.inp:focus {
  outline: none;
}

.inp {
  width: 400px;
  background-color: white !important;

  outline: none;
  background: none;
  border: 10px solid #a1abb5 !important;
  border-left: none !important;
  font-size: 1rem;
  font-weight: bold;
  color: black !important;
  border-bottom-right-radius: 1.2rem;
  border-top-right-radius: 1.2rem;
}

.tg {
  border: 10px solid #a1abb5;
  background-color: white !important;

  border-right: none !important;
  border-bottom-left-radius: 1.2rem;
  border-top-left-radius: 1.2rem;
}

.card-img-top {
  width: 200px;
  height: 270px;
  object-fit: contain;
  position: absolute;
  top: -30px;
  
}

.card {
  position: relative;
  background-color: #dbdada !important;
  border-radius: .9rem !important;
  border: 1px solid #8d8d8d !important;
  margin-bottom: 1.3rem !important;
height: 450px !important;
}

.cardb {
  width: 100%;
  height: 270px;
  border-bottom: 1px solid #8d8d8d;
  border-top-right-radius: .9rem !important;
  border-top-left-radius: .9rem !important;
  display: flex;
    justify-content: center;
}
</style>