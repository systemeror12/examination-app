<template>
    <ion-text class="special_offer-section">
        <h1>Special Offer</h1>
    </ion-text>
    <ion-grid>
        <ion-row>
            <ion-col size="12">
                <ion-card>
                    <ion-img src="/src/img/Special Offers.jpg" alt="Special Offer"></ion-img>
                </ion-card>
            </ion-col>
        </ion-row>
    </ion-grid>
</template>

<script setup lang="ts">
import {
    IonText,
    IonCard,
    IonImg,
    IonGrid,
    IonRow,
    IonCol,
} from '@ionic/vue';
</script>

<style scoped>
ion-text.special_offer-section h1 {
    margin-top: 50px;
    margin-left: 28px;
}

@media only screen and (min-width: 768px) {
    ion-text.special_offer-section h1 {
        margin-left: 70px;
    }
}

@media only screen and (min-width: 768px) {
    ion-grid {
        max-width: 1024px;
    }
}
</style>