import { defineStore } from 'pinia'
import { createUserWithEmailAndPassword, signOut, signInWithEmailAndPassword, onAuthStateChanged } from "firebase/auth";
import {auth} from "@/fb/firebase"
import { usestoreUser} from "@/stores/storeuser"
import { collection, onSnapshot, doc, setDoc } from "firebase/firestore";
import {db} from "@/fb/firebase"



export const usestoreAuth = defineStore('storeAuth', {
  state: () => {
    return { 
        user: {}
    }
  },
  actions: {
    init(){
        const storeUser = usestoreUser()
         onAuthStateChanged(auth, (user) => {
            if (user) {
              this.user.id= user.uid
              this.user.email= user.email
              this.user.username = user.username
              storeUser.init()
                //console.log("user logged in ",user)
              
            } else {
                this.user = {}
                
                //console.log("user logged out ",user)
            }
          });
    },

    

   registeruser(credentials){
        console.log("registeruser ",credentials)
         createUserWithEmailAndPassword(auth, credentials.email, credentials.password).then((userCredential) => {
    
        //const user = userCredential.user;
        //console.log("user", user)
    }).catch((error) => {
    console.log("error msg", error.message)
    
  });
 },
    loginuser(credentials){
        
    signInWithEmailAndPassword(auth, credentials.email, credentials.password).then((userCredential) => {
           
        const user = userCredential.user;
        //console.log("user", user)
    
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