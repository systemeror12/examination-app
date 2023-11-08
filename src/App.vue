<template>
  <ion-app>
    <ion-split-pane content-id="main-content">
      <ion-menu content-id="main-content" type="overlay">
        <ion-content>
          <ion-list id="inbox-list">
            <ion-grid>
              <ion-row>
                <ion-col size="3">
                  <ion-avatar>
                    <img alt="Silhouette of a person's head" src="https://ionicframework.com/docs/img/demos/avatar.svg" />
                  </ion-avatar>
                </ion-col>
                <ion-col size="9">
                  <ion-list-header class="ion-header-profile">Vrixen Mendoza</ion-list-header>
                  <ion-note class="ion-header-number">+63 912 345 6789</ion-note>
                </ion-col>
              </ion-row>
            </ion-grid>
            <ion-menu-toggle :auto-hide="false" v-for="(p, i) in appPages" :key="i">
              <ion-item @click="selectedIndex = i" router-direction="root" :router-link="p.url" lines="none"
                :detail="false" class="hydrated" :class="{ selected: selectedIndex === i }">
                <ion-icon aria-hidden="true" slot="start" :ios="p.iosIcon" :md="p.mdIcon" color="dark"></ion-icon>
                <ion-label>{{ p.title }}</ion-label>
              </ion-item>
            </ion-menu-toggle>
          </ion-list>

          <ion-list id="labels-list">
            <ion-list-header>Labels</ion-list-header>

            <ion-item v-for="(label, index) in labels" lines="none" :key="index">
              <ion-icon aria-hidden="true" slot="start" :ios="label.iosIcon" :md="label.mdIcon" color="dark"></ion-icon>
              <ion-label>{{ label.title }}</ion-label>
            </ion-item>
            <ion-item>
              <ion-toggle :checked="themeToggle" @ion-change="toggleChange($event)" justify="space-between">Dark
                Mode</ion-toggle>
            </ion-item>
          </ion-list>
        </ion-content>
      </ion-menu>
      <ion-router-outlet id="main-content"></ion-router-outlet>
    </ion-split-pane>
  </ion-app>
</template>

<script setup lang="ts">
import {
  IonApp,
  IonAvatar,
  IonContent,
  IonIcon,
  IonItem,
  IonLabel,
  IonList,
  IonListHeader,
  IonMenu,
  IonMenuToggle,
  IonNote,
  IonRouterOutlet,
  IonSplitPane,
  IonToggle,
  IonGrid,
  IonRow,
  IonCol
} from '@ionic/vue';
import type { ToggleCustomEvent } from '@ionic/vue';
import { ref } from 'vue';
import {
  storefrontOutline,
  storefrontSharp,
  notificationsOutline,
  notificationsSharp,
  homeOutline,
  homeSharp,
  fastFoodOutline,
  fastFoodSharp,
  helpCircleOutline,
  helpCircleSharp,
  mailOutline,
  mailSharp,
  personOutline,
  personSharp,
  heartOutline,
  heartSharp,
  locationOutline,
  locationSharp,
  timeOutline,
  timeSharp,
} from 'ionicons/icons';

const selectedIndex = ref(0);
const appPages = [
  {
    title: 'Home',
    url: '/folder/Home',
    iosIcon: homeOutline,
    mdIcon: homeSharp,
  },
  {
    title: 'Order Now!',
    url: '/folder/OrderNow',
    iosIcon: fastFoodOutline,
    mdIcon: fastFoodSharp,
  },
  {
    title: 'Notifications',
    url: '/folder/Notifications',
    iosIcon: notificationsOutline,
    mdIcon: notificationsSharp,
  },
  {
    title: 'Store Locator',
    url: '/folder/StoreLocator',
    iosIcon: storefrontOutline,
    mdIcon: storefrontSharp,
  },
  {
    title: 'FAQs',
    url: '/folder/FAQ',
    iosIcon: helpCircleOutline,
    mdIcon: helpCircleSharp,
  },
];
const labels = [{
  title: 'My Orders',
  iosIcon: mailOutline,
  mdIcon: mailSharp
},
{
  title: 'My Account',
  iosIcon: personOutline,
  mdIcon: personSharp
},
{
  title: 'My Favorites',
  iosIcon: heartOutline,
  mdIcon: heartSharp
},
{
  title: 'Order Tracker',
  iosIcon: locationOutline,
  mdIcon: locationSharp
},
{
  title: 'Order History',
  iosIcon: timeOutline,
  mdIcon: timeSharp
},
];

const themeToggle = ref(false);

// Use matchMedia to check the user preference
const prefersDark = window.matchMedia('(prefers-color-scheme: dark)');

// Add or remove the "dark" class on the document body
const toggleDarkTheme = (shouldAdd: boolean) => {
  document.body.classList.toggle('dark', shouldAdd);
};

// Check/uncheck the toggle and update the theme based on isDark
const initializedDarkTheme = (isDark: boolean) => {
  themeToggle.value = isDark
  toggleDarkTheme(isDark);
};

// Initialize the dark theme based on the initial
// value of the prefers-color-scheme media query
initializedDarkTheme(prefersDark.matches);

// Listen for changes to the prefers-color-scheme media query
prefersDark.addEventListener('change', (mediaQuery) => initializedDarkTheme(mediaQuery.matches));

// Listen for the toggle check/uncheck to toggle the dark theme
const toggleChange = (ev: ToggleCustomEvent) => {
  toggleDarkTheme(ev.detail.checked);
}
const path = window.location.pathname.split('folder/')[1];
if (path !== undefined) {
  selectedIndex.value = appPages.findIndex((page) => page.title.toLowerCase() === path.toLowerCase());
}
</script>

<style scoped>
ion-menu ion-content {
  --background: var(--ion-item-background, var(--ion-background-color, #fff));
}

ion-menu.md ion-content {
  --padding-start: 8px;
  --padding-end: 8px;
  --padding-top: 20px;
  --padding-bottom: 20px;
}

ion-menu.md ion-list {
  padding: 20px 0;
}

ion-menu.md ion-note {
  margin-bottom: 30px;
}

ion-menu.md ion-list-header,
ion-menu.md ion-note {
  padding-left: 10px;
}

ion-menu.md ion-list#inbox-list {
  border-bottom: 1px solid var(--ion-color-step-150, #d7d8da);
}

ion-menu.md ion-list#inbox-list ion-list-header {
  font-size: 22px;
  font-weight: 600;

  min-height: 20px;
}

ion-menu.md ion-list#labels-list ion-list-header {
  font-size: 16px;

  margin-bottom: 18px;

  color: #757575;

  min-height: 26px;
}

ion-menu.md ion-item {
  --padding-start: 10px;
  --padding-end: 10px;
  border-radius: 4px;
}

ion-menu.md ion-item.selected {
  --background: rgba(var(--ion-color-primary-rgb), 0.14);
}

ion-menu.md ion-item.selected ion-icon {
  color: var(--ion-color-primary);
}

ion-menu.md ion-item ion-icon {
  color: #616e7e;
}

ion-menu.md ion-item ion-label {
  font-weight: 500;
}

ion-menu.ios ion-content {
  --padding-bottom: 20px;
}

ion-menu.ios ion-list {
  padding: 20px 0 0 0;
}

ion-menu.ios ion-note {
  line-height: 24px;
  margin-bottom: 20px;
}

ion-menu.ios ion-item {
  --padding-start: 16px;
  --padding-end: 16px;
  --min-height: 50px;
}

ion-menu.ios ion-item.selected ion-icon {
  color: var(--ion-color-primary);
}

ion-menu.ios ion-item ion-icon {
  font-size: 24px;
  color: #73849a;
}

ion-menu.ios ion-list#labels-list ion-list-header {
  margin-bottom: 8px;
}

ion-menu.ios ion-list-header,
ion-menu.ios ion-note {
  padding-left: 16px;
  padding-right: 16px;
}

ion-menu.ios ion-note {
  margin-bottom: 8px;
}

ion-note {
  display: inline-block;
  font-size: 16px;

  color: var(--ion-color-medium-shade);
}

ion-item.selected {
  --color: var(--ion-color-primary);
}

.ion-header-profile {
  margin-top: 12px;
}
</style>
