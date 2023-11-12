<template>
    <ion-page>
        <Header />
        <ion-content :fullscreen="true">
            <ion-header collapse="condense">
                <ion-toolbar>
                    <ion-title size="large">{{ $route.name }}</ion-title>
                </ion-toolbar>
            </ion-header>
            <Label label_title="Beginner Tier" label_link="View All" />
            <ion-text>Earn points by purchasing from our store.</ion-text>
            <div class="circle-progress">
                <CircleProgress :percent="0" :viewport="true" :is-gradient="true" :unit="'/' + 100" show-percent="true" />
            </div>
            <Label label_title="Rewards" label_link="How it Works" />
            <ButtonSelection button_one="All" button_two="Beginner" button_three="Intermediate" button_four="Loyal" />
            <AddOn />
        </ion-content>
    </ion-page>
</template>

<script setup lang="ts">
import {
    IonPage,
    IonContent,
    IonHeader,
    IonToolbar,
    IonTitle,
    IonText
} from '@ionic/vue';
import Header from '@/component/Header.vue';
import AddOn from '@/component/AddOn.vue';
import ButtonSelection from '@/component/ButtonSelection.vue';
import Label from '@/component/Label.vue';
import "vue3-circle-progress-bar/dist/circle-progress-bar.css";
import CircleProgress from "vue3-circle-progress-bar";

</script>

<style scoped>
div.circle-progress {
    margin-top: 50px;
    margin-left: 100px;
}

@media only screen and (min-width: 768px) {
    div.circle-progress {
        margin-top: 50px;
        margin-left: 450px;
    }
}

ion-text {
    margin-left: 20px;
}

@media only screen and (min-width: 768px) {
    ion-text {
        margin-left: 45px;
    }
}
</style>