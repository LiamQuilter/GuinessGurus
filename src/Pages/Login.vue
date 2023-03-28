<template>
    <head>
        <title>login</title>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.2.0/css/all.min.css">
        <link href="https://fonts.googleapis.com/css2?family=Noto+Serif+Lao&display=swap" rel="stylesheet">
        <link rel="stylesheet" type="text/css" href="../style.css">
    </head>
    <body>
     <div class="wrapper">
         <div class="heading">
             <h1>Login Form</h1>
         </div>
        <div class="form">
             <form
             @submit.prevent="onSubmit"
             >
                 <span>
                     <i class="fa fa-user"></i>
                     <input v-model="credentials.email" type="text" placeholder="Username" name="">
                 </span><br>
                 <span>
                    <i class="fa-solid fa-lock"></i>
                     <input v-model="credentials.password" type="password" placeholder="Password" name="">
                 </span><br>
                     <button @click="storeAuth.loginuser" type="submit" id="login-btn">Login</button>
                     <router-link class ="has-text-grey-light" to="/signup">Don't have an account?</router-link>
            </form>
            <button @click="storeAuth.logoutuser">logout</button>
        </div>
    </div>
     
    
    </body>
    </template>

    <script setup>
    import {ref, computed, reactive} from "vue"
    import { usestoreAuth } from "@/stores/storeauth"


        const storeAuth = usestoreAuth()

        const credentials = reactive({
        email: "",
        password:""

    })


    const onSubmit = () =>{
        if(!credentials.email || !credentials.password){
            alert("please enter a email and password")
        }
        else{
            storeAuth.loginuser(credentials)
        }
    }
    </script>


   