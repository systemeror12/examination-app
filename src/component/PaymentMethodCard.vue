<template>
    <ion-card>
        <ion-card-header>
            <ion-card-title>{{ card_title }}</ion-card-title>
        </ion-card-header>
        <ion-card-content>{{ card_info }}</ion-card-content>
    </ion-card>
</template>
<script setup lang="ts">
import {
    IonCard,
    IonCardHeader,
    IonCardTitle,
    IonCardContent,
} from '@ionic/vue';

defineProps<{
    card_title?: string
    card_info?: string
}>()
</script>
<style scoped></style>