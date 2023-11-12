<template>
    <ion-grid>
        <ion-row>
            <ion-col size="12" size-lg="6">
                <ion-card router-direction="root" router-link="/folder/AddToCard">
                    <ion-img src="/src/img/Steak Fried Veggies.jpg" alt="Steak Fried Veggies"></ion-img>
                    <ion-card-title>Steak Fried Veggies</ion-card-title>
                    <ion-card-content>Meat</ion-card-content>
                    <ion-card-content>P 185</ion-card-content>
                </ion-card>
            </ion-col>
            <ion-col size="12" size-lg="6">
                <ion-card router-direction="root" router-link="/folder/AddToCard">
                    <ion-img src="/src/img/Steak Fried Veggies.jpg" alt="Steak Fried Veggies"></ion-img>
                    <ion-card-title>Steak Fried Veggies</ion-card-title>
                    <ion-card-content>Meat</ion-card-content>
                    <ion-card-content>P 185</ion-card-content>
                </ion-card>
            </ion-col>
            <ion-col size="12" size-lg="6">
                <ion-card router-direction="root" router-link="/folder/AddToCard">
                    <ion-img src="/src/img/Steak Fried Veggies.jpg" alt="Steak Fried Veggies"></ion-img>
                    <ion-card-title>Steak Fried Veggies</ion-card-title>
                    <ion-card-content>Meat</ion-card-content>
                    <ion-card-content>P 185</ion-card-content>
                </ion-card>
            </ion-col>
            <ion-col size="12" size-lg="6">
                <ion-card router-direction="root" router-link="/folder/AddToCard">
                    <ion-img src="/src/img/Steak Fried Veggies.jpg" alt="Steak Fried Veggies"></ion-img>
                    <ion-card-title>Steak Fried Veggies</ion-card-title>
                    <ion-card-content>Meat</ion-card-content>
                    <ion-card-content>P 185</ion-card-content>
                </ion-card>
            </ion-col>
        </ion-row>
    </ion-grid>
</template>
<script setup lang="ts">
import {
    IonGrid,
    IonRow,
    IonCol,
    IonCard,
    IonCardContent,
    IonCardTitle,
    IonImg,
} from '@ionic/vue';

defineProps<{
    title?: string
}>()
</script>

<style scoped>
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