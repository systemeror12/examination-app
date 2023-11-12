<template>
    <ion-page>
        <Header />
        <ion-content :fullscreen="true">
            <ion-header collapse="condense">
                <ion-toolbar>
                    <ion-title size="large">{{ $route.name }}</ion-title>
                </ion-toolbar>
            </ion-header>
            <ion-grid class="personal-info-grid">
                <ion-row v-for="personal_info_item in personal_info_items" :key="personal_info_item.id">
                    <ion-col size="12">
                        <PersonalInfoCard :card_title="personal_info_item.card_title"
                            :card_number="personal_info_item.card_number" :card_info="personal_info_item.card_info" />
                    </ion-col>
                </ion-row>
            </ion-grid>
            <ion-text>
                <h1 class="order-label">Orders</h1>
            </ion-text>
            <Orders />
            <ion-text>
                <h1 class="payment-label">Payment Options</h1>
            </ion-text>
            <ion-grid class="personal-info-grid">
                <ion-row v-for="payment_method_item in payment_method_items" :key="payment_method_item.id">
                    <ion-col size="12">
                        <PaymentMethodCard :card_title="payment_method_item.card_title"
                            :card_info="payment_method_item.card_info" />
                    </ion-col>
                </ion-row>
            </ion-grid>
            <ion-grid class="total-price-grid">
                <ion-row>
                    <ion-col size="9" size-lg="10">
                        <ion-text>Subtotal</ion-text>
                    </ion-col>
                    <ion-col size="3" size-lg="2">
                        <ion-text>P 185</ion-text>
                    </ion-col>
                </ion-row>
                <ion-row>
                    <ion-col size="9" size-lg="10">
                        <ion-text>Delivery Charge</ion-text>
                    </ion-col>
                    <ion-col size="3" size-lg="2">
                        <ion-text>P 59</ion-text>
                    </ion-col>
                </ion-row>
                <ion-row>
                    <ion-col size="9" size-lg="10">
                        <ion-text>Grand Total</ion-text>
                    </ion-col>
                    <ion-col size="3" size-lg="2">
                        <ion-text>P 244</ion-text>
                    </ion-col>
                </ion-row>
            </ion-grid>
        </ion-content>
        <ion-footer>
            <ion-toolbar>
                <ion-grid>
                    <ion-row>
                        <ion-col size="12" size-lg="3">
                            <ion-button expand="block" router-direction="root" router-link="/folder/OrderRecieved">Place
                                Order</ion-button>
                        </ion-col>
                    </ion-row>
                </ion-grid>
            </ion-toolbar>
        </ion-footer>
    </ion-page>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import {
    IonPage,
    IonContent,
    IonHeader,
    IonToolbar,
    IonTitle,
    IonGrid,
    IonRow,
    IonCol,
    IonText,
    IonFooter,
    IonButton
} from '@ionic/vue';
import Header from '@/component/Header.vue';
import Orders from '@/component/Orders.vue';
import PaymentMethodCard from '@/component/PaymentMethodCard.vue';
import PersonalInfoCard from '@/component/PersonalInfoCard.vue';

const personal_info_items = ref([
    {
        id: 1,
        card_title: 'Vrixen Mendoza',
        card_number: '+639693174185',
        card_info: 'mendozajeromevrixen@gmail.com'
    },
    {
        id: 2,
        card_title: 'My Home Address',
        card_number: 'No.21 St. Agustin Street, Brg. De Jose',
        card_info: 'Delgado City 2234 Philippines'
    },
    {
        id: 3,
        card_title: 'Work/Office',
        card_number: '3rd flr. Anyeong Bldg. Sereal St. Joaqin',
        card_info: 'City 3456 Philippines'
    },
]);

const payment_method_items = ref([
    {
        id: 1,
        card_title: 'Cash On Delievery',
        card_info: 'Pay when you recieved the order'
    },
    {
        id: 2,
        card_title: 'Loyalty Points',
        card_info: 'Pay using your earned loyalty points'
    },
]);

</script>

<style scoped>
ion-grid.total-price-grid {
    margin-left: 30px;
    max-width: 370px;
}

@media only screen and (min-width: 768px) {
    ion-grid.total-price-grid {
        max-width: 1080px;
    }
}

ion-text h1.order-label {
    margin-left: 28px;
}

@media only screen and (min-width: 768px) {
    ion-text h1.order-label {
        margin-left: 20px;
    }
}

ion-text h1.payment-label {
    margin-left: 28px;
}

@media only screen and (min-width: 768px) {
    ion-text h1.payment-label {
        margin-left: 20px;
    }
}
</style>