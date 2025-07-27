<script>
import {Developer} from "../model/developer.entity.js";

export default {
  name: "greet-developer",
  props: {
    firstName: String,
    lastName: String
  },
  methods: {
    getGreeting() {
      if (this.isAnonymous()) return "Welcome Anonymous Developer";
      const developer = new Developer(this.firstName, this.lastName);
      return `Congrats ${developer.fullName}! Now you are a Vue Developer!`;
    },
    isAnonymous() {
      return !this.firstName?.trim() || !this.lastName?.trim();
    }
  }
}
</script>

<template>
  <p>{{ getGreeting() }}</p>
</template>

<style scoped>

</style>