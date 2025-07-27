<script>
import {Developer} from "./greetings/model/developer.entity.js";
import RegisterDeveloper from "./greetings/components/register-developer.component.vue";
import ShowDeveloperCount from "./greetings/components/show-developer-count.component.vue";
import GreetDeveloper from "./greetings/components/greet-developer.component.vue";

export default {
  name: 'app',
  components: {
    RegisterDeveloper,
    ShowDeveloperCount,
    GreetDeveloper
  },
  data() {
    return {
      firstName: '',
      lastName: '',
      developerCount: 0,
      hasRegistered: false
    }
  },
  methods: {
    updateDeveloperCount(developer) {
      const dev = new Developer(developer.firstName, developer.lastName);
      if (dev.fullName !== 'Unknown') this.developerCount++;
    },
    onDeveloperRegistered(developer) {
      this.firstName = developer.firstName;
      this.lastName = developer.lastName;
      this.hasRegistered = true;
      console.log("Developer registered:", developer);
      this.updateDeveloperCount(developer);
    },
    onLater(developer) {
      this.firstName = '';
      this.lastName = '';
      this.hasRegistered = false;
      console.log("Registration deferred");
    }
  }
}
</script>

<template>
  <h1>Hello Vue Developer Application</h1>
  <register-developer v-on:developer-registered="onDeveloperRegistered" v-on:later="onLater" />
  <greet-developer v-if="hasRegistered" :first-name="firstName" :last-name="lastName" />
  <show-developer-count :developer-count="developerCount" />
</template>

<style scoped>

</style>
