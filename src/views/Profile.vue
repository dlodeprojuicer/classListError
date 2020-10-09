<template>
  <ion-page>
    <Header />
    <ion-content class="ion-padding">
      <div class="person">
          <ion-icon class="left-icons" :icon="personCircleOutline"></ion-icon> 
          <br />
          Person Name
      </div>
      <ConfList :data="eventList" v-if="eventList.length > 0 " />
    </ion-content>
  </ion-page>
</template>

<script>
import {
  IonPage,
  IonIcon,
  IonContent
} from "@ionic/vue";
import { personCircleOutline } from "ionicons/icons";
import { defineComponent } from 'vue';
import listData from "./data";

import Header from "../components/Header";
import ConfList from "../components/ConfList";

export default defineComponent({
  name: "profile",
  title: "profile",
  requiresAuth: false,
  components: {
    IonContent,
    IonPage,
    IonIcon,
    Header,
    ConfList
  },
  setup() {
    return {
      personCircleOutline
    };
  },
  mounted() {
    this.loading = false;
  },
  data() {
    return {
      eventList: listData
    }
  },
  methods: {},
});
</script>

<style lang="scss" scoped>
.person {
  width: 50%;
  margin: auto 25%;
  text-align: center;
  font-size: 20px;
}
ion-icon {
  font-size: 60px;
}

</style>