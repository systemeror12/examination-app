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
            <FoodSection />
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

ion-searchbar {
    margin: 0 auto;
    max-width: 85%;
    margin-top: 24px;
}
</style>
  