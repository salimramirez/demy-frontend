<script>
export default {
  name: "register-developer",
  data() {
    return {
      firstName: '',
      lastName: '',
      errorMessage: ''
    }
  },
  methods: {
    clearForm() {
      this.firstName = '';
      this.lastName = '';
      this.errorMessage = '';
    },
    onLater() {
      console.log("Deferring registration");
      this.$emit('later', { firstName: '', lastName: '' });
      this.clearForm();
      this.errorMessage = '';
    },
    onRegister() {
      if (this.firstName.trim() || this.lastName.trim()) {
        console.log("Registering developer");
        this.$emit('developer-registered', {
          firstName: this.firstName.trim(),
          lastName: this.lastName.trim(),
        });
        this.clearForm();
        this.errorMessage = '';
      } else {
        console.log("Cannot register: Both fields are required");
        this.errorMessage = 'Please provide at least first name or last name. Warning: Both are required for a successful registration.';
      }
    }
  }
}
</script>

<template>
  <div>
    <h2>New Developer</h2>
    <div>
      <form v-on:submit.prevent="onRegister">
        <div>
          <label for="firstName">First Name</label>
          <input type="text" id="firstName" v-model="firstName" />
        </div>
        <div>
          <label for="lastName">Last Name</label>
          <input type="text" id="lastName" v-model="lastName" />
        </div>
        <div>
          <button type="submit">Register</button>
          <button type="button" v-on:click="onLater">Later</button>
          <button type="button" v-on:click="clearForm">Clear</button>
        </div>
      </form>
      <p v-if="errorMessage" class="error" role="alert">{{ errorMessage }}</p>
    </div>
  </div>
</template>

<style scoped>
  button {
    margin-right: 10px;
    padding: 8px 16px;
    cursor: pointer;
  }
  .error {
    color: #d32f2f;
    margin-top: 10px;
    font-size: 14px;
  }
</style>