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
            <ion-grid class="food-grid">
                <ion-row>
                    <ion-col size="2" size-lg="2">
                        <ion-button class="order-button" expand="block">All</ion-button>
                    </ion-col>
                    <ion-col size="4" size-lg="4">
                        <ion-button class="order-button" expand="block">Breakfast</ion-button>
                    </ion-col>
                    <ion-col size="3" size-lg="3">
                        <ion-button class="order-button" expand="block">Chicken</ion-button>
                    </ion-col>
                    <ion-col size="3" size-lg="3">
                        <ion-button class="order-button" expand="block">Seafood</ion-button>
                    </ion-col>
                </ion-row>
            </ion-grid>
            <FoodSection />
        </ion-content>
    </ion-page>
</template>
  
<script setup lang="ts">
import Header from '@/component/Header.vue';
import FoodSection from '@/component/FoodSection.vue';
import {
    IonContent,
    IonHeader,
    IonPage,
    IonTitle,
    IonToolbar,
    IonSearchbar,
    IonGrid,
    IonRow,
    IonCol,
    IonButton
} from '@ionic/vue';
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

ion-grid.food-grid {
    max-width: 375px;
}

@media only screen and (min-width: 768px) {
    ion-grid.food-grid {
        max-width: 1024px;
    }
}

ion-searchbar {
    margin: 0 auto;
    max-width: 85%;
    margin-top: 24px;
}
</style>
  