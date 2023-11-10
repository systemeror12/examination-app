<template>
    <ion-text>
        <h1 class="add-on-label">Add-Ons</h1>
    </ion-text>
    <ion-grid class="add-on-grid">
        <ion-row>
            <ion-col size="12">
                <ion-card>
                    <ion-grid>
                        <ion-row>
                            <ion-col size="3">
                                <ion-img src="/src/img/Rice.png" alt="Extra Rice" class="extra-rice"></ion-img>
                            </ion-col>
                            <ion-col size="9">
                                <ion-card-header>
                                    <ion-card-title>White Rice</ion-card-title>
                                </ion-card-header>
                                <ion-card-content>rice</ion-card-content>
                                <ion-row>
                                    <ion-col size="5" size-lg="8">
                                        <ion-card-content>
                                            <ion-text>
                                                <h2 class="price-label">P 172</h2>
                                            </ion-text>
                                        </ion-card-content>
                                    </ion-col>
                                    <ion-col size="2" size-lg="1">
                                        <ion-button>-</ion-button>
                                    </ion-col>
                                    <ion-col size="2" size-lg="1">
                                        <ion-text>
                                            <h1 class="quantity-label">1</h1>
                                        </ion-text>
                                    </ion-col>
                                    <ion-col size="2" size-lg="1">
                                        <ion-button>+</ion-button>
                                    </ion-col>
                                </ion-row>
                            </ion-col>
                        </ion-row>
                    </ion-grid>
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
    IonCardHeader,
    IonCardTitle,
    IonCardContent,
    IonImg
} from '@ionic/vue';
</script>

<style scoped>
ion-text h1.add-on-label {
    margin-left: 28px;
}

@media only screen and (min-width: 768px) {
    ion-text h1.add-on-label {
        margin-left: 70px;
    }
}

ion-img.extra-rice {
    padding-top: 28px;

}

@media only screen and (min-width: 768px) {
    ion-img.extra-rice {
        height: auto;
        width: 150px;
        padding-top: 0;
    }
}

@media only screen and (min-width: 768px) {
    ion-grid.add-on-grid {
        max-width: 1024px;
    }
}

ion-card-content {
    padding-bottom: 0px;
}

ion-text h2.price-label {
    padding-top: 8px;
    font-size: 18px;
}

ion-text h1.quantity-label {
    text-align: center;
}

ion-button {
    padding-top: 12px;
}
</style>