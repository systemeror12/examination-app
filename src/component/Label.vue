<template>
    <ion-grid>
        <ion-row>
            <ion-col size="8" size-lg="10">
                <ion-text>
                    <h3>{{ label_title }}</h3>
                </ion-text>
            </ion-col>
            <ion-col size="4" size-lg="2">
                <ion-text>
                    <p>{{ label_link }}</p>
                </ion-text>
            </ion-col>
        </ion-row>
    </ion-grid>
</template>
<script setup lang="ts">
import {
    IonGrid,
    IonRow,
    IonCol,
    IonText
} from '@ionic/vue';

defineProps<{
    label_title?: string
    label_link?: string
}>()
</script>
<style scoped>
ion-grid {
    max-width: 370px;
}

@media only screen and (min-width: 768px) {
    ion-grid {
        max-width: 1080px;
    }
}

ion-text p {
    padding-top: 3px;
}
</style>