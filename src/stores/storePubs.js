import { defineStore } from 'pinia'
import { collection, onSnapshot, query, where } from "firebase/firestore";
 import {db} from "@/fb/firebase"

const pubref = collection(db, "pubs")
let pubquery 


export const usestorepubs = defineStore('storepubs', {
  id: 'pub',
  state: () => {
    pub:null
    return { 
        Pubs: [{
            imageSrc: "",
            title: "",
            address: "",
            instagramLink: "",
            websiteLink: "",
            phoneNumber: "",
            email: "",
            about: "",
            aboutparagraph: ""
    }]
    }
  },
  actions: {
    async getpub(pubid){
       pubquery = query(pubref, where("id", "==", pubid));
        onSnapshot(pubquery , (querySnapshot) => {
            
            querySnapshot.forEach((doc) => {
                let pub = {
                    id: doc.id,
                    imageSrc: doc.data().imageSrc,
                    title: doc.data().title,
                    address: doc.data().address,
                    instagramLink: doc.data().instagramLink,
                    websiteLink: doc.data().websiteLink,
                    phoneNumber: doc.data().phoneNumber,
                    email: doc.data().email,
                    about: doc.data().about,
                    aboutparagraph: doc.data().aboutparagraph,
                    
                 }
                    console.log("pub ", pub);
                this.Pubs.imageSrc = pub.imageSrc
                this.Pubs.title = pub.title
                this.Pubs.address = pub.address
                this.Pubs.instagramLink = pub.instagramLink
                this.Pubs.phoneNumber = pub.phoneNumber
                this.Pubs.email = pub.email
                this.Pubs.about = pub.about
                this.Pubs.aboutparagraph = pub.aboutparagraph
                
            });
            
          });
},
},
})