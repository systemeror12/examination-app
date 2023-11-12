<template>
    <ion-grid class="food-grid">
        <ion-row>
            <ion-col size="2" size-lg="2">
                <ion-button class="order-button" expand="block">{{ button_one }}</ion-button>
            </ion-col>
            <ion-col size="4" size-lg="4">
                <ion-button class="order-button" expand="block">{{ button_two }}</ion-button>
            </ion-col>
            <ion-col size="3" size-lg="3">
                <ion-button class="order-button" expand="block">{{ button_three }}</ion-button>
            </ion-col>
            <ion-col size="3" size-lg="3">
                <ion-button class="order-button" expand="block">{{ button_four }}</ion-button>
            </ion-col>
        </ion-row>
    </ion-grid>
</template>
<script setup lang="ts">
import {
    IonGrid,
    IonRow,
    IonCol,
    IonButton
} from '@ionic/vue';

defineProps<{
    button_one?: string
    button_two?: string
    button_three?: string
    button_four?: string
}>()
</script>
<style scoped>
ion-grid.food-grid {
    max-width: 375px;
}

@media only screen and (min-width: 768px) {
    ion-grid.food-grid {
        max-width: 1024px;
    }
}
</style>