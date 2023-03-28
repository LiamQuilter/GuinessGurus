import { defineStore } from 'pinia'
import { createUserWithEmailAndPassword, signOut, signInWithEmailAndPassword } from "firebase/auth";
import {auth} from "@/fb/firebase"

export const usestoreAuth = defineStore('storeAuth', {
  state: () => {
    return { 
        count: 0 
    }
  },
  actions: {
    registeruser(credentials){
        console.log("registeruser ",credentials)
        createUserWithEmailAndPassword(auth, credentials.email, credentials.password).then((userCredential) => {
    
    const user = userCredential.user;
    console.log("user", user)
    
  }).catch((error) => {
    console.log("error msg", error.message)
    
  });

    },
    loginuser(credentials){
        
        signInWithEmailAndPassword(auth, credentials.email, credentials.password).then((userCredential) => {
           
    const user = userCredential.user;
    console.log("user", user)
    
  }).catch((error) => {
    console.log("error,msg",error.message)
  });

    },
 logoutuser(){
    signOut(auth).then(() => {
        console.log("signed out")
      }).catch((error) => {
        console.log(error.msg)
      });
 }
  },
})