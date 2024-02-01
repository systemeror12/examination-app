<template>
    <ion-page>
        <Header />
        <ion-content :fullscreen="true">
            <ion-header collapse="condense">
                <ion-toolbar>
                    <ion-title size="large">
                        {{ $route.name }}
                    </ion-title>
                </ion-toolbar>
            </ion-header>
            <ion-text class="header">
                <h1>What do you want to eat?</h1>
            </ion-text>
            <ion-searchbar show-clear-button="focus"></ion-searchbar>
            <Swiper />
            <SpecialOffer />
            <ion-text class="popular-section">
                <h1>Most Popular</h1>
            </ion-text>
            <ion-grid>
                <ion-row>
                    <FoodSection v-for="items in  foodItems " :key="items.id" :title="items.card_title"
                        :category="items.card_category" :price="items.card_price" />
                </ion-row>
            </ion-grid>
            <ion-button class="order-button" router-direction="root" router-link="/folder/OrderNow">Order now</ion-button>
        </ion-content>
    </ion-page>
</template>
  
<script setup lang="ts">
import {
    IonButton,
    IonContent,
    IonHeader,
    IonPage,
    IonTitle,
    IonToolbar,
    IonText,
    IonSearchbar,
    IonGrid,
    IonRow,
} from '@ionic/vue';
import Header from '@/component/Header.vue';
import Swiper from '@/component/Swiper.vue';
import SpecialOffer from '@/component/SpecialOffer.vue'
import FoodSection from '@/component/FoodSection.vue';

const foodItems = [
    {
        id: 1,
        card_title: 'Steak Fried Veggies',
        card_category: 'Meat',
        card_price: 'P 185',
        router_link: '/folder/AddToCard',
        img: '/src/img/Steak Fried Veggies.jpg',
        alt: 'Steak Fried Veggies',
    },
    {
        id: 2,
        card_title: 'Steak Fried Veggies',
        card_category: 'Meat',
        card_price: 'P 185',
        router_link: '/folder/AddToCard',
        img: '/src/img/Steak Fried Veggies.jpg',
        alt: 'Steak Fried Veggies',
    },
    {
        id: 3,
        card_title: 'Steak Fried Veggies',
        card_category: 'Meat',
        card_price: 'P 185',
        router_link: '/folder/AddToCard',
        img: '/src/img/Steak Fried Veggies.jpg',
        alt: 'Steak Fried Veggies',
    },
    {
        id: 4,
        card_title: 'Steak Fried Veggies',
        card_category: 'Meat',
        card_price: 'P 185',
        router_link: '/folder/AddToCard',
        img: '/src/img/Steak Fried Veggies.jpg',
        alt: 'Steak Fried Veggies',
    },
]
</script>

<style scoped>
#container {
    text-align: center;
    position: absolute;
    left: 0;
    right: 0;
    top: 50%;
    transform: translateY(-50%);
}

#container strong {
    font-size: 20px;
    line-height: 26px;
}

#container p {
    font-size: 16px;
    line-height: 22px;
    color: #8c8c8c;
    margin: 0;
}

#container a {
    text-decoration: none;
}

ion-text.header {
    text-align: center;
}

ion-text h1 {
    margin-top: 50px;
}

ion-searchbar {
    margin: 0 auto;
    max-width: 85%;
}

@media only screen and (min-width: 768px) {
    ion-button.order-button {
        position: fixed;
        top: 1;
        left: 1;
        right: 50px;
        bottom: 0px;
        font-size: 14px;
        margin-left: 12px;
        margin-right: 12px;
        margin-bottom: 24px;

    }
}

ion-button.order-button {
    position: fixed;
    top: 1;
    left: 1;
    right: 40px;
    bottom: 0px;
    font-size: 14px;
    margin-right: 8px;
    margin-bottom: 44px;

}

ion-avatar {
    height: auto;
    width: 35px;
}

ion-title {
    padding-top: 4px;
    font-size: 24px;
}

ion-text.popular-section h1 {
    margin-top: 50px;
    margin-left: 28px;
}

@media only screen and (min-width: 768px) {
    ion-text.popular-section h1 {
        margin-left: 70px;
    }
}
</style>
  