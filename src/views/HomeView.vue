<template>
  <div class="carousel">
    <div class="container-fluid">
      <div class="owl-carousel">
        <div class="carousel-item">
          <div class="carousel-img">
            <img src="../../buger/img/carousel-1.jpg" alt="Image" />
          </div>
          <div class="carousel-text">
            <h1>超美味 <span>漢堡</span> Super</h1>
            <p>大俠愛吃漢堡飽,你是大俠我是寶.</p>
            <div class="carousel-btn">
              <router-link to="../components/product/inventory" class="btn custom-btn">View Menu</router-link>
              <!-- <a class="btn custom-btn" href="">Book Table</a> -->
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>


<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'HomeView',
  components: {
    HelloWorld
  }
}
</script>
<style scoped>
body {
  color: #757575;
  background: #ffffff;
  font-family: "open sans", sans-serif;
}
h1,
h2,
h3,
h4,
h5,
h6 {
  color: #454545;
  font-family: "Nunito", sans-serif;
}
a {
  font-family: "Nunito", sans-serif;
  font-weight: 600;
  color: #fbaf32;
  transition: 0.3s;
}
.btn.custom-btn {
  padding: 12px 25px;
  font-family: "Nunito", sans-serif;
  font-size: 16px;
  font-weight: 600;
  color: #ffffff;
  background: #fbaf32;
  border: 2px solid #fbaf32;
  border-radius: 5px;
  transition: 0.5s;
}
.btn.custom-btn:hover {
  color: #fbaf32;
  background: transparent;
}
.btn.custom-btn:focus,
.form-control:focus,
.custom-select:focus {
  box-shadow: none;
}
.container-fluid {
  max-width: 1366px;
}
.back-to-top {
  position: fixed;
  display: none;
  background: #fbaf32;
  width: 44px;
  height: 44px;
  text-align: center;
  line-height: 1;
  font-size: 22px;
  right: 15px;
  bottom: 15px;
  border-radius: 5px;
  transition: background 0.5s;
  z-index: 9;
}
.back-to-top i {
  color: #ffffff;
  padding-top: 10px;
}
.back-to-top:hover {
  background: #719a0a;
}
[class^="flaticon-"]:before,
[class*=" flaticon-"]:before,
[class^="flaticon-"]:after,
[class*=" flaticon-"]:after {
  font-size: inherit;
  margin-left: 0;
}
.carousel {
  position: relative;
  width: 100%;
  height: 100vh;
  min-height: 400px;
  background: #ffffff;
}
.carousel .container-fluid {
  padding: 0;
}
.carousel .carousel-item {
  position: relative;
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
}
.carousel .carousel-img {
  position: relative;
  width: 100%;
  height: 100%;
  text-align: right;
  overflow: hidden;
}
.carousel .carousel-img::after {
  position: absolute;
  content: "";
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background: rgba(0, 0, 0, 0.6);
  z-index: 1;
}
.carousel .carousel-img img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
.carousel .carousel-text {
  position: absolute;
  max-width: 700px;
  height: calc(100vh - 35px);
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  z-index: 2;
}
.carousel .carousel-text h1 {
  text-align: center;
  color: #ffffff;
  font-size: 60px;
  font-weight: 700;
  margin-bottom: 30px;
}
.carousel .carousel-text h1 span {
  color: #fbaf32;
}
.carousel .carousel-text p {
  color: #ffffff;
  text-align: center;
  font-size: 20px;
  margin-bottom: 35px;
}
.carousel .carousel-btn .btn:last-child {
  margin-left: 10px;
  background: #719a0a;
  border-color: #719a0a;
}
.carousel .carousel-btn .btn:last-child:hover {
  color: #719a0a;
  background: transparent;
}
.carousel .animated {
  -webkit-animation-duration: 1s;
  animation-duration: 1s;
}
@media (max-width: 991.98px) {
  .carousel,
  .carousel .carousel-item,
  .carousel .carousel-text {
    height: calc(100vh - 105px);
  }
  .carousel .carousel-text h1 {
    font-size: 35px;
  }
  .carousel .carousel-text p {
    font-size: 16px;
  }
  .carousel .carousel-text .btn {
    padding: 12px 30px;
    font-size: 15px;
    letter-spacing: 0;
  }
}
@media (max-width: 767.98px) {
  .carousel,
  .carousel .carousel-item,
  .carousel .carousel-text {
    height: calc(100vh - 70px);
  }
  .carousel .carousel-text h1 {
    font-size: 30px;
  }
  .carousel .carousel-text .btn {
    padding: 10px 25px;
    font-size: 15px;
    letter-spacing: 0;
  }
}
@media (max-width: 575.98px) {
  .carousel .carousel-text h1 {
    font-size: 25px;
  }
  .carousel .carousel-text .btn {
    padding: 8px 20px;
    font-size: 14px;
    letter-spacing: 0;
  }
}
</style>
