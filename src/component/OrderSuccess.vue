<template>
    <ion-grid>
        <ion-row>
            <ion-col size="12">
                <ion-card>
                    <ion-img src="/src/img/ThumbsUp.png"></ion-img>
                    <ion-card-title>
                        Successfully Added!
                    </ion-card-title>
                    <ion-card-content>
                        What do you want to do now?
                    </ion-card-content>
                    <ion-button router-direction="root" router-link="/folder/OrderSummary">Proceed to Checkout</ion-button>
                    <ion-card-content router-direction="root" router-link="/folder/OrderNow">
                        Add More
                    </ion-card-content>
                </ion-card>
            </ion-col>
        </ion-row>
    </ion-grid>
</template>
<script setup lang="ts">
import {
    IonCard,
    IonCardTitle,
    IonCardContent,
    IonGrid,
    IonRow,
    IonCol,
    IonButton,
    IonImg
} from '@ionic/vue';

const emit = defineEmits<{
    (e: 'close'): void
}>()
</script>

<style scoped>
ion-grid {
    position: fixed;
    top: 300px;
    bottom: 0;
    left: 0;
    right: 0;
}

@media only screen and (min-width: 768px) {
    ion-grid {
        position: fixed;
        top: 100px;
        bottom: 0;
        left: 0;
        right: 0;
    }
}

ion-grid {
    max-width: 350px;
}

@media only screen and (min-width: 768px) {
    ion-grid {
        max-width: 550px;
    }
}

ion-card {
    padding-top: 20px;
    padding-bottom: 20px;
}

@media only screen and (min-width: 768px) {
    ion-card {
        padding: 80px;
    }
}

ion-card-title {
    text-align: center;
}

ion-card-content {
    text-align: center;
}

ion-button {
    padding-left: 50px;
}

@media only screen and (min-width: 768px) {
    ion-button {
        padding-left: 180px;
    }
}

ion-img {
    margin-top: 30px;
    margin-bottom: 20px;
    margin-left: 105px;
    height: auto;
    width: 100px;
}

@media only screen and (min-width: 768px) {
    ion-img {
        margin-top: 30px;
        margin-bottom: 20px;
        margin-left: 210px;
        height: auto;
        width: 150px;
    }
}
</style>