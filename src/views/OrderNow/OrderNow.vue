<template>
    <ion-page>
        <Header />
        <ion-content :fullscreen="true">
            <ion-header collapse="condense">
                <ion-toolbar>
                    <ion-title size="large">{{ $route.name }}</ion-title>
                </ion-toolbar>
            </ion-header>
            <ion-searchbar show-clear-button="focus"></ion-searchbar>
            <ButtonSelection button_one="All" button_two="Breakfast" button_three="Chicken" button_four="Seafood" />
            <ion-grid>
                <ion-row>
                    <FoodSection v-for="items in  foodItems " :key="items.id" :title="items.card_title"
                        :category="items.card_category" :price="items.card_price" />
                </ion-row>
            </ion-grid>
        </ion-content>
    </ion-page>
</template>
  
<script setup lang="ts">
import Header from '@/component/Header.vue';
import FoodSection from '@/component/FoodSection.vue';
import ButtonSelection from '@/component/ButtonSelection.vue';
import {
    IonContent,
    IonHeader,
    IonPage,
    IonTitle,
    IonToolbar,
    IonSearchbar,
    IonGrid,
    IonRow,
} from '@ionic/vue';

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

ion-searchbar {
    margin: 0 auto;
    max-width: 85%;
    margin-top: 24px;
}

@media only screen and (min-width: 768px) {
    ion-grid {
        max-width: 1024px;
    }
}

ion-card-title {
    font-size: 24px;
    padding-top: 20px;
    padding-left: 20px;
}

ion-card-content {
    font-size: 16px;
    padding-left: 20px;
}
</style>
  