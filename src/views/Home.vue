<template>
    <ion-page>
        <ion-header :translucent="true">
            <ion-toolbar>
                <ion-buttons slot="start">
                    <ion-menu-button color="primary"></ion-menu-button>
                </ion-buttons>
                <ion-title>{{ $route.name }}</ion-title>
            </ion-toolbar>
        </ion-header>
        <ion-content :fullscreen="true">
            <ion-header collapse="condense">
                <ion-toolbar>
                    <ion-title size="large">{{ $route.name }}</ion-title>
                </ion-toolbar>
            </ion-header>
            <ion-text>
                <h1>What do you want to eat?</h1>
            </ion-text>
            <ion-searchbar show-clear-button="focus" value="Show on Focus"></ion-searchbar>
        </ion-content>
    </ion-page>
</template>
  
<script setup lang="ts">
import {
    IonButtons,
    IonContent,
    IonHeader,
    IonMenuButton,
    IonPage,
    IonTitle,
    IonToolbar,
    IonText,
    IonSearchbar,
} from '@ionic/vue';
</script>
  
<style scoped>
#container {
    text-align: center;
    position: absolute;
    left: 0;
    right: 0;
    top: 50%;
    transform: translateY(-50%);
}

#container strong {
    font-size: 20px;
    line-height: 26px;
}

#container p {
    font-size: 16px;
    line-height: 22px;
    color: #8c8c8c;
    margin: 0;
}

#container a {
    text-decoration: none;
}

ion-text {
    text-align: center;
}

ion-text h1 {
    padding-top: 50px;
}

ion-searchbar {

    margin: 0 auto;
    max-width: 85%;
}
</style>
  