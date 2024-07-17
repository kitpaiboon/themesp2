<template>
    <div class="login">
      <h2>Login</h2>
      <form @submit.prevent="login">
        <input type="email" v-model="email" placeholder="Email" required />
        <input type="password" v-model="password" placeholder="Password" required />
        <button type="submit">Login</button>
      </form>
      <p v-if="error">{{ error }}</p>
    </div>
  </template>
  
  <script>
  import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
  import { auth } from '../firebase';
  
  export default {
      name:'Login',
    data() {
      return {
        email: '',
        password: '',
        error: ''
      };
    },
    methods: {
      // async login() {
      //   try {
      //     await auth.signInWithEmailAndPassword(this.email, this.password);
      //     this.$router.push('/dashboard');
      //   } catch (err) {
      //     this.error = err.message;
      //   }
      // }
          async login() {
          const auth = getAuth();
          signInWithEmailAndPassword(auth, this.email, this.password)
          .then((userCredential) => {
              // Signed in 
              const user = userCredential.user;
              this.$router.push('/dashboard');
              // ...
          })
          .catch((error) => {
              const errorCode = error.code;
              const errorMessage = error.message;
          });
          }
    }
  };
  </script>
  
  <style>
  /* ใส่สไตล์ตามต้องการ */
  </style>