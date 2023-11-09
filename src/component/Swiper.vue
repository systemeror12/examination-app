<template>
    <ion-text class="category">
        <h1>Category</h1>
    </ion-text>
    <swiper :modules="modules" :autoplay="true">
        <swiper-slide>
            <ion-card>
                <ion-img src="/src/img/Chicken.jpg" alt="Chicken Category"></ion-img>
                <ion-card-title>
                    <h1>Chicken</h1>
                </ion-card-title>
                <ion-card-content>
                    <ion-text class="card-content-text">
                        <p>11 recipes</p>
                    </ion-text>
                </ion-card-content>
            </ion-card>
        </swiper-slide>
        <swiper-slide>
            <ion-card>
                <ion-img src="/src/img/Seafood.jpg" alt="Seafood Category"></ion-img>
                <ion-card-title>
                    <h1>Sea food</h1>
                </ion-card-title>
                <ion-card-content>
                    <ion-text class="card-content-text">
                        <p>10 recipes</p>
                    </ion-text>
                </ion-card-content>
            </ion-card>
        </swiper-slide>
        <swiper-slide>
            <ion-card>
                <ion-img src="/src/img/Beeffood.jpg" alt="Beef Category"></ion-img>
                <ion-card-title>
                    <h1>Beef food</h1>
                </ion-card-title>
                <ion-card-content>
                    <ion-text class="card-content-text">
                        <p>13 recipes</p>
                    </ion-text>
                </ion-card-content>
            </ion-card>
        </swiper-slide>
    </swiper>
</template>
<script setup lang="ts">
import {
    IonImg,
    IonText,
    IonCard,
    IonCardContent,
    IonCardTitle
} from '@ionic/vue';
import 'swiper/swiper-bundle.css';
import '@ionic/vue/css/ionic-swiper.css';
import { Autoplay, Keyboard, Pagination, Scrollbar, Zoom } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/vue';

const modules = [Autoplay, Keyboard, Pagination, Scrollbar, Zoom];
</script>
<style scoped>
ion-img {
    height: auto;
    width: 330px;
}

@media only screen and (min-width: 768px) {
    ion-img {
        height: auto;
        width: 700px;

    }
}

ion-text.category h1 {
    margin-top: 50px;
    margin-left: 28px;
}

@media only screen and (min-width: 768px) {
    ion-text.category h1 {
        margin-left: 70px;
    }
}

ion-text.card-content-text {
    color: white;
}

ion-card-title {
    color: white;
}

ion-card-title h1 {
    position: fixed;
    top: 120px;
    left: 20px;
    font-size: 28px;
}

ion-card-content {
    position: fixed;
    top: 160px;
    left: 5px;
    font-size: 14px;
}

@media only screen and (min-width: 768px) {
    ion-card-title h1 {
        position: fixed;
        top: 320px;
        left: 50px;
        font-size: 28px;
    }

    ion-card-content {
        position: fixed;
        top: 370px;
        left: 35px;
        font-size: 14px;
    }
}
</style>