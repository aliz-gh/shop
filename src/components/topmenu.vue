<template>

    <div>
        <nav class="navbar navbar-expand-lg bg-body-tertiary" data-bs-theme="dark">
            <div class="container-fluid">
                <a class="navbar-brand" href="free fire.html">
                    <img src="/public/photo/n1-removebg-preview.png" alt="" style="height: 60px;width: 135px;">
                    
                </a>
                <button class="navbar-toggler" type="button" data-bs-toggle="offcanvas"
                    data-bs-target="#offcanvasExample" aria-controls="offcanvasExample">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNav">
                    <ul class="navbar-nav">
                        <li class="nav-item">
                            <a class="nav-link active" aria-current="page">
                                HOME
                            </a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" aria-current="page" href="#">
                                PRODUCTS
                            </a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link">OFFERS</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#">BASCKET</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#">SUPPORT</a>
                        </li>

                    </ul>





                </div>



                <button class="btn">
                    <a class="bt-re" href="#">
                        <i class="fa fa-user"></i> <span style="padding-left: .5rem;">log in</span>
                    </a>
                </button>

            </div>

        </nav>





        <div class="offcanvas offcanvas-end" tabindex="-1" id="offcanvasExample"
            aria-labelledby="offcanvasExampleLabel" data-bs-theme="dark">
            <div class="offcanvas-header">

                <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
            </div>
            <div class="offcanvas-body">


                <ul class="navbar-nav">
                    <li class="nav-item">
                        <a class="nav-link active" aria-current="page" href="#">
                            HOME
                        </a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" aria-current="page" href="#">
                            PRODUCTS
                        </a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#s2">OFFERS</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">BASCKET</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">SUPPORT</a>
                    </li>

                </ul>

            </div>
        </div>

    </div>
</template>



<style>
:root{
    --font:"GFF Latin", sans-serif;
}


.svg-logo[data-v-6c51aa7b] {
    height: 2.75rem;
    fill:#ffba00;
    transition: .3s;
}
.bg-body-tertiary {
    
    background-color:black !important;
}
.collapse{
    font-family: var(--font);
    margin-left: 4rem !important;
 
   
}
.nav-link{
    font-size: 1.2rem !important;
    padding: 1rem !important;
    padding-right: 40px !important;
    color: rgb(255 255 255 / 74%);
    cursor:  pointer ;
}
.nav-link:hover {
    color: rgb(255, 255, 255);
}
.container-fluid{
    width: 95% !important;
}

.btn{
    background-color:#ffba00 !important;
   
   
}
.btn a{
    padding: 0px 20px 0px 20px ;
    color: black;
    text-decoration: none;
    font-family: var(--font);
    font-size: 1rem;
    font-weight: 500;
}
.btn:hover{
    background-color: #ffbb00ea !important;
}

.offcanvas{
    font-family: var(--font);
    background-color: #000000d4;
    color: white;
}
.btn-close{
    background-color: white;
}

.logo img{
    width: 10rem;
    display: none;
}
.navbar{
    position: fixed !important;
    width: 100% !important;
    z-index: 2;
}

.bt-re{
    font-size: 1.2rem !important;
}

</style>