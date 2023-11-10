<template>
    <ion-header :translucent="true">
        <ion-toolbar>
            <ion-buttons slot="start">
                <ion-menu-button color="primary"></ion-menu-button>
            </ion-buttons>
            <ion-grid>
                <ion-row>
                    <ion-col size="9" size-lg="11">
                        <ion-title>{{ $route.name }}</ion-title>
                    </ion-col>
                    <ion-col size="3" size-lg="1">
                        <ion-avatar>
                            <img alt="Silhouette of a person's head"
                                src="https://ionicframework.com/docs/img/demos/avatar.svg" />
                        </ion-avatar>
                    </ion-col>
                </ion-row>
            </ion-grid>

        </ion-toolbar>
    </ion-header>
</template>

<script setup lang="ts">
import {
    IonHeader,
    IonTitle,
    IonToolbar,
    IonGrid,
    IonRow,
    IonCol,
    IonAvatar,
    IonButtons,
    IonMenuButton
} from '@ionic/vue';
</script>

<style scoped>
ion-avatar {
    height: auto;
    width: 35px;
}

ion-title {
    padding-top: 4px;
    font-size: 24px;
}
</style>