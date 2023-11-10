<template>
    <ion-page>
        <Header />
        <ion-content :fullscreen="true">
            <ion-header collapse="condense">
                <ion-toolbar>
                    <ion-title size="large">{{ $route.name }}</ion-title>
                </ion-toolbar>
            </ion-header>
            <ion-grid>
                <ion-row>
                    <ion-col size-lg="12">
                        <ion-card>
                            <ion-img src="/src/img/Steak Fried Veggies.jpg" alt="Steak Fried Veggies"></ion-img>
                        </ion-card>
                    </ion-col>
                </ion-row>
            </ion-grid>
            <ion-text>
                <h1 class="food-label">Steak Fries Veggies</h1>
            </ion-text>
            <ion-text>
                <p>Loaded with extra veggies, Healthy Steak Stir Fry is a weeknight workhorse! Toss tender sliced beef and
                    fork-tender veggies – carrots, peppers, peas and asparagus – in our tangy all-purpose stir fry sauce,
                    and serve over rice for a flavorful and balanced bite. This 30 minute meal is gluten free, refined sugar
                    free, and totally irresistible. </p>
            </ion-text>
            <ion-grid>
                <ion-row>
                    <ion-col size="6" size-lg="9">
                        <ion-text>
                            <h1 class="price-label">P 172</h1>
                        </ion-text>
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
            </ion-grid>
            <Beverages />
            <AddOn />
            <ion-button class="add-to-bag-button" expand="block">Add to Bag</ion-button>
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
    IonCard,
    IonImg,
    IonGrid,
    IonRow,
    IonCol,
    IonText,
    IonButton

} from '@ionic/vue';
import Header from '@/component/Header.vue';
import Beverages from '@/component/Beverages.vue';
import AddOn from '@/component/AddOn.vue';
</script>

<style scoped>
@media only screen and (min-width: 768px) {
    ion-grid {
        margin-top: 24px;
        max-width: 768px;
    }
}

ion-text h1.food-label {
    margin-left: 28px;
}

ion-text h1.price-label {
    margin-left: 28px;
}

@media only screen and (min-width: 768px) {
    ion-text h1.food-label {
        margin-left: 70px;
    }
}

ion-text p {
    margin-left: 28px;
    max-width: 330px;
    text-align: justify;
}

@media only screen and (min-width: 768px) {
    ion-text p {
        text-align: justify;
        margin-left: 70px;
        max-width: 1024px;
    }
}

ion-text h1.quantity-label {
    padding-right: 12px;
    text-align: center;
}

ion-button {
    padding-top: 12px;
}

ion-button.add-to-bag-button {
    position: fixed;
    top: 1;
    left: 1;
    right: 50px;
    bottom: 0px;
    font-size: 14px;
    margin-left: 12px;
    margin-right: 12px;
    margin-bottom: 24px;

}
</style>