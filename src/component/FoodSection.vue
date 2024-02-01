<template>
    <ion-col size="12" size-lg="6">
        <ion-card router-direction="root" router-link="/folder/AddToCard">
            <ion-img src="/src/img/Steak Fried Veggies.jpg" alt="Steak Fried Veggies"></ion-img>
            <ion-card-title>{{ title }}</ion-card-title>
            <ion-card-content>{{ category }}</ion-card-content>
            <ion-card-content>{{ price }}</ion-card-content>
        </ion-card>
    </ion-col>
</template>
<script setup lang="ts">
import {
    IonCol,
    IonCard,
    IonCardContent,
    IonCardTitle,
    IonImg,
} from '@ionic/vue';

defineProps<{
    title?: string
    category?: string
    price?: string
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