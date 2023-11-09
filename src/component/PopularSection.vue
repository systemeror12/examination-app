<template>
    <ion-text class="popular-section">
        <h1>Most Popular</h1>
    </ion-text>
    <ion-grid>
        <ion-row>
            <ion-col size="6" size-lg="6">
                <ion-card>
                    <ion-img src="/src/img/Steak Fried Veggies.jpg" alt="Steak Fried Veggies"></ion-img>
                    <ion-card-title>Steak Fried Veggies</ion-card-title>
                    <ion-card-content>Meat</ion-card-content>
                    <ion-card-content>P 185</ion-card-content>
                </ion-card>
            </ion-col>
            <ion-col size="6" size-lg="6">
                <ion-card>
                    <ion-img src="/src/img/Steak Fried Veggies.jpg" alt="Steak Fried Veggies"></ion-img>
                    <ion-card-title>Steak Fried Veggies</ion-card-title>
                    <ion-card-content>Meat</ion-card-content>
                    <ion-card-content>P 185</ion-card-content>
                </ion-card>
            </ion-col>
            <ion-col size="6" size-lg="6">
                <ion-card>
                    <ion-img src="/src/img/Steak Fried Veggies.jpg" alt="Steak Fried Veggies"></ion-img>
                    <ion-card-title>Steak Fried Veggies</ion-card-title>
                    <ion-card-content>Meat</ion-card-content>
                    <ion-card-content>P 185</ion-card-content>
                </ion-card>
            </ion-col>
            <ion-col size="6" size-lg="6">
                <ion-card>
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
    IonText,
    IonGrid,
    IonRow,
    IonCol,
    IonCard,
    IonCardContent,
    IonCardTitle,
    IonImg
} from '@ionic/vue';
</script>

<style scoped>
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