import { defineStore } from 'pinia'
import { collection, onSnapshot, updateDoc } from "firebase/firestore";
 import {db} from "@/fb/firebase"
 import { usestoreAuth } from "@/stores/storeauth"



let usersref 

export const usestoreUser = defineStore('storeUser', {
  state: () => {
    return { 
        User: [{
            email: "",
            password:"",
            username:"",
            firstname: "",
            lastname: "",
    }]
    }
  },
  actions: {

init(){
    
    const storeAuth = usestoreAuth()
    console.log("user id", storeAuth.user.id)
    usersref = collection(db, "Users", storeAuth.user.id, "info")
    this.getuser()
},
    async getuser(){
    
        onSnapshot(usersref, (querySnapshot) => {
             querySnapshot.forEach((doc) => {
                let user = {
                    id: doc.id,
                    email: doc.data().email,
                    password: doc.data().password,
                    username: doc.data().username,
                    firstname: doc.data().firstname,
                    lastname: doc.data().lastname
                 }
                    console.log("user ", user);
                this.User.email = user.email
                this.User.password = user.password
                this.User.username = user.username
                this.User.firstname = user.firstname
                this.User.lastname = user.lastname
            });
            
          });    
},

async applyProfileChanges(newFirstName, newLastName, newUserName){
console.log("changed", newFirstName, newLastName, newUserName)
const storeAuth = usestoreAuth()
usersref = collection(db, "Users", storeAuth.user.id, "info")

// Set the "capital" field of the city 'DC'
await updateDoc(doc(storeAuth.user.id, "info"), {
  firstname: newFirstName,
  lastname: newLastName,
  username:newUserName
});
let newinfo = {

    UserName: newUserName.value,
    FirstName: newFirstName.value,
    LastName: newLastName.value
}
this.User.username = newinfo.UserName
this.User.firstname = newinfo.FirstName
this.User.lasttname = newinfo.LastName


info.value.unshift(newinfo)
},
}
})