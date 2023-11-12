<template>
    <ion-page>
        <ion-content :fullscreen="true">
            <ion-grid class="order-recieved-grid">
                <ion-row>
                    <ion-col size="12">
                        <ion-img src="/src/img/ThumbsUp.png"></ion-img>
                    </ion-col>
                    <ion-col size="12">
                        <ion-text class="order-recieved-title">
                            <h1>Order Recieved!</h1>
                        </ion-text>
                    </ion-col>
                    <ion-col size="12">
                        <ion-text class="order-recieved-info">
                            <p>Your order No. 19049585 has successfully take and now being proccessed. Kindly wait for our
                                notification regarding your order.</p>
                        </ion-text>
                    </ion-col>
                    <ion-col size="12">
                        <ion-button>Track Order</ion-button>
                    </ion-col>
                    <ion-col size="12">
                        <ion-text class="order-recieved-redirect" router-direction="root" router-link="/folder/Home">
                            <p>Back to Home</p>
                        </ion-text>
                    </ion-col>
                </ion-row>
            </ion-grid>
        </ion-content>
    </ion-page>
</template>

<script setup lang="ts">
import {
    IonPage,
    IonContent,
    IonGrid,
    IonRow,
    IonCol,
    IonButton,
    IonText,
    IonImg
} from '@ionic/vue';
</script>

<style scoped>
ion-grid.order-recieved-grid {
    margin-top: 200px;
}

ion-text.order-recieved-title {
    text-align: center;
}

ion-text.order-recieved-info {
    text-align: center;
}

ion-text.order-recieved-redirect {
    text-align: center;
}

ion-button {
    padding-left: 120px;
}

@media only screen and (min-width: 768px) {
    ion-button {
        padding-left: 495px;
    }
}

ion-img {
    margin-left: 115px;
    height: auto;
    width: 150px;
}

@media only screen and (min-width: 768px) {
    ion-img {
        margin-left: 490px;
        height: auto;
        width: 150px;
    }
}
</style>