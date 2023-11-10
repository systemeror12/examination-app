<template>
    <ion-text>
        <h1 class="beverage-label">Beverages</h1>
    </ion-text>
    <ion-grid>
        <ion-row>
            <ion-col size="12">
                <ion-accordion-group>
                    <ion-accordion value="first">
                        <ion-item slot="header" color="light">
                            <ion-label>Choose Beverages</ion-label>
                        </ion-item>
                        <div class="ion-padding" slot="content">Coke</div>
                    </ion-accordion>
                </ion-accordion-group>
            </ion-col>
        </ion-row>
    </ion-grid>
    <ion-grid>
        <ion-row>
            <ion-col>
                <ion-button class="size-button" expand="block">Regular</ion-button>
            </ion-col>
            <ion-col>
                <ion-button class="size-button" expand="block">Large</ion-button>
            </ion-col>
            <ion-col>
                <ion-button class="size-button" expand="block">X-Large</ion-button>
            </ion-col>
        </ion-row>
    </ion-grid>
</template>

<script setup lang="ts">
import {
    IonText,
    IonAccordion,
    IonAccordionGroup,
    IonItem,
    IonLabel,
    IonGrid,
    IonRow,
    IonCol,
    IonButton
} from '@ionic/vue';
</script>

<style scoped>
ion-text h1.beverage-label {
    margin-left: 28px;
}

@media only screen and (min-width: 768px) {
    ion-text h1.beverage-label {
        margin-left: 70px;
    }
}

ion-grid {
    max-width: 375px;
}

@media only screen and (min-width: 768px) {
    ion-grid {
        max-width: 768px;
    }
}
</style>