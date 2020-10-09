<template>
  <ion-header>
    <ion-toolbar>
      <ion-buttons slot="secondary">
        <ion-button @click="goto('/')">Home</ion-button>
        <ion-button @click="goto('/profile')">Profile</ion-button>
      </ion-buttons>
      <ion-buttons>
      </ion-buttons>
      <ion-title class="logo" @click="goto('/')">{{ name }} </ion-title>
    </ion-toolbar>
  </ion-header>
</template>

<script>
import { IonToolbar, IonHeader, IonTitle, IonButtons, IonButton } from "@ionic/vue";
import { ellipsisVertical } from "ionicons/icons";

export default {
  name: "recent-list",
  props: {
    data: {
      type: Array,
      required: true,
      default: () => [],
    },
  },
  components: { IonToolbar, IonHeader, IonTitle, IonButtons, IonButton },
  setup() {
    return {
      ellipsisVertical,
      name: "<Test />",
    };
  },
  methods: {
    goto(route) {
      this.$router.push(route);
    }
  }
};
</script>

<style lang="scss" scoped>
ion-toolbar {
  --background: #144d75;
  color: #ffffff;
}

ion-button.sign-out {
  font-size: 17px;
  font-weight: 500;
  margin-left: 5px;
  float: left;
  --color: #ffffff;
}

.ellipsis {
  color: #ffffff;
}
ion-title.logo {
  font-weight: 900;
  font-size: 25px;
}
</style>
