<template>

    <loadingPage v-if="load"></loadingPage>

    <div v-if="loading">

        <div class="row m-0" style="padding-top:9rem;">

            <div class="col-md-6 d-flex justify-content-center mt-5" style="height: 400px;">
                <img v-if="loading" :src="product.image" alt="" style="border-radius: 2rem;width: 350px;height: 400px;"
                    class="shadow">

            </div>

            <div class="col-md-6 d-flex justify-content-center mt-5 " style="height: 400px;">
                <div class="container shadow" style="width: 400px;background-color: white;border-radius: 2rem">

                    <div v-if="loading" class="fw-bold text-center" style="font-size: 1.6rem;font-style: italic;">
                        {{ product.category }}
                    </div>

                    <div v-if="loading" class="fw-bold text-title mt-3"
                        style="font-size: 1.2rem;font-style: italic;color: #00000099">
                        {{ product.title }}
                    </div>

                    <div class="mt-2" v-if="loading" style="font-size: 1.4rem;font-weight: 500;color: #00d510c9;"
                        dir="ltr"> {{ "$" + product.price }}
                    </div>

                    <div class="text-center fw-bold fs-5" style="color: black;">
                        Ratings and reviews

                    </div>

                    <div class="d-flex justify-content-between align-items-center mt-1">
                        <div>
                            <span v-if="loading" style="font-size: 1.6rem;font-weight: bold;font-style: italic;">
                                {{ product.rating.rate }}
                            </span>

                            <span>
                                <i style="font-size: 1.3rem;font-weight: bold;" class="fa-solid fa-star"></i>
                            </span>
                        </div>

                        <div>
                            <div>
                                <span v-if="loading" style="font-size: 1.1rem;font-weight: bold;font-style: italic;">
                                    {{ product.rating.count + ' ratings' }}
                                </span>
                            </div>
                        </div>
                    </div>
                    <div class="text-center fw-bold fs-5" style="color: black;font-style: italic;">
                        Description

                    </div>

                    <div v-if="loading" class="fw-bold mt-3 text-dec"
                        style="font-size: .8rem;font-style: italic;color: #00000099">
                        {{ product.description }}
                    </div>


                </div>
            </div>


        </div>



        <div class="d-flex justify-content-center mt-5">

            <div class="p-3" style="background-color: white;border-radius: 2rem;">

                <div class="text-center fs-4 fw-bold" style="font-style: italic;">
                    Buying Box
                </div>

                <div class="container" style="width: 300px;">

                    <div class="d-flex justify-content-between align-items-center">
                        <span class="fs-4">size</span>


                        <span>
                            <select class="form-select fw-bold" aria-label="Default select example"
                                style="width: 100px;">
                                <option class="fw-bold" selected>S </option>
                                <option class="fw-bold" value="1">M</option>
                                <option class="fw-bold" value="2">L</option>
                                <option class="fw-bold" value="3">XL</option>
                            </select>
                        </span>

                    </div>

                </div>

                <div class="container mt-2" style="width: 300px;">

                    <div class="d-flex justify-content-between align-items-center">


                        <div class="fw-bold">
                            Quantity
                        </div>



                        <div>
                            <button class="btn btn-danger" @click="decrement">-</button>
                            <span class="p-3 fw-bold">{{ count }}</span>
                            <button class="btn btn-success" @click="increment">+</button>
                        </div>
                    </div>


                </div>



                <div class="container mt-2" style="width: 300px;">

                    <div>



                        <div>
                            <button class="btn btn-success w-100">Buy Now</button>

                        </div>

                        <div>
                            <button class="btn btn-primary w-100 mt-1">Add to Cart</button>

                        </div>




                    </div>


                </div>










            </div>

        </div>



    </div>
</template>

<script>
import axios from 'axios'
import loadingPage from '@/components/loadingPage.vue';
export default {
    data() {
        return {
            product: null,
            loading: false,
            load: true,
            count: 1,
        }
    },

    mounted() {
        // console.log(this.$route.params.id);
        // `${asdasd}`;
        const id = this.$route.params.id
        axios.get(`https://fakestoreapi.com/products/${this.$route.params.id}`)
            .then(response => {
                this.product = response.data;
                console.log(this.product);
                this.loading = true;
                this.load = false
            })
            .catch(error => {
                console.log(error)
            })
    },

    methods: {
        increment() {
            this.count++;
        },
        decrement() {
            if (this.count > 1) {
                this.count--;
            }
        },
    },
    components: {
        loadingPage,
    }
}
</script>

<style scoped>
.shadow {
    box-shadow: 0 0rem 1rem rgb(255 224 0) !important;
}

.text-dec {
    direction: ltr;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    overflow: hidden;
    /* -webkit-line-break: 3 ; */
    line-height: 15px;
    /* تنظیم فاصله بین خطوط بر اساس نیاز */
    max-height: 135px;
    /*3 خط * line-height*/
}

.text-title {
    direction: ltr;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    overflow: hidden;
    /* -webkit-line-break: 3 ; */
    line-height: 20px;
    /* تنظیم فاصله بین خطوط بر اساس نیاز */
    max-height: 43px;
    /*3 خط * line-height*/
}
</style>