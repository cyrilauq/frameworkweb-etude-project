<script>
import { mapActions } from 'pinia';

import { Form, Field, ErrorMessage } from 'vee-validate';

import useAuthStore from '../stores/auth';

export default {
name: "Login",
components: {
    Form,
    Field,
    ErrorMessage
},
methods: {
    ...mapActions(useAuthStore, ['authUser']),
    onSubmit(values) {
        const request = JSON.stringify(values, null, 2);
        console.log(request)
        fetch("https://spacelab.henni.be/user/signin", {
            method: "POST",
            body: request,
            headers: {
                "Content-Type": "application/json",
            },
        }).then(response => {
            if(!response.ok) {
                throw new Error("Une erreur est survenue : " + response.statusText)
            }

            return response.json()
        }).then(result => {
            if(result != null) {
                this.authUser({ token: result.token, ...result.user })
            }
        })
        .catch(error => console.log(error))
    },
    validateEmail(value) {
        console.log("Went in checkMail")
        if (!value) {
        return 'This field is required';
        }

        const regex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
        if (!regex.test(value)) {
        return 'This field must be a valid email';
        }

        return true;
    },
    validatePassword(value) {
        console.log("Went in password")
        if (!value) {
            return 'This field is required';
        }

        return true;
    }
  },
};
</script>

<template>
    <h1>Login</h1>
    <Form @submit="onSubmit">
        <Field type="email" name="email" :rules="validateEmail" />
        <ErrorMessage name="email" />
        <Field type="password" name="password" :rules="validatePassword"/>
        <ErrorMessage name="password" />

      <button @click="login">Sign up</button>
    </Form>
</template>

<style lang="scss" scoped>

</style>