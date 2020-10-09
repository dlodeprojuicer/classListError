<template>
  <ion-page>
    <Header />
    <ion-content class="ion-padding">
      <h2 class="heading-h2">
        Home
      </h2>
      <div class="home-content">
        <div class="home-content-left">
          <ConfList :data="filteredEvents" v-if="filteredEvents.length > 0" />
          <h1 v-if="filteredEvents.length < 1">No search results for "{{ searchString }}"</h1>
        </div>
      </div>
    </ion-content>
  </ion-page>
</template>

<script>
import {
  IonPage,
  IonContent
} from "@ionic/vue";

import { defineComponent } from 'vue';

import Header from "../components/Header";
import ConfList from "../components/ConfList";

import listData from "./data";

export default defineComponent({
  name: "home",
  title: "Home",
  requiresAuth: false,
  components: {
    IonContent,
    IonPage,
    Header,
    ConfList,
  },
  data() {
    return {
      loading: true,
      filteredEvents: listData
    }
  },
  methods: {},
});
</script>


<style lang="scss">
.heading-h2 {
  font-size: 20px;
  text-align: center;
  color: #000;
}
</style>