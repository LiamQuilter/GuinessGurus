import {ref, onMounted} from "vue"
 import { collection, getDocs } from "firebase/firestore";
 import {db} from "@/fb/firebase"

const Pubs = [
   {
    id: 1,
    imageSrc: "../Images/An-Pucan.jpg",
     instagramLink: "https://www.instagram.com/anpucan/",
     websiteLink: "https://anpucan.ie/ ",
     Maps: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2385.838521559027!2d-9.049622784195785!3d53.274512879964014!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x485b96e5f633156f%3A0xe997eacdc6802bef!2zQW4gUMO6Y8Ohbg!5e0!3m2!1sen!2sie!4v1678911688830!5m2!1sen!2sie",

  },
  
  {
    id: 2,
    imageSrc: "../Images/Seven-Bridge-Street.jpg",
    instagramLink: "https://www.instagram.com/sevengalway/",
    websiteLink: "http://sevenbridgestreet.ie/",
    Maps: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2385.9897324112617!2d-9.059561067579374!3d53.27180361587668!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x485b96fae8a13acb%3A0xfb1ea805bdbbc781!2sSeven%20Bridgestreet!5e0!3m2!1sen!2sie!4v1679498427522!5m2!1sen!2sie",
  },
  
  {
    id: 3,
    imageSrc: "../Images/Taylors-Bar.jpg",
    instagramLink: "https://www.instagram.com/taylorsgalway/",
    websiteLink: "https://taylorsgalway.ie/",
    Maps: "https://www.google.com/maps/embed/v1/place?q=Taylor's%20Bar%20%26%20Beer%20Garden%2C%20Dominick%20Street%20Upper%2C%20Galway%2C%20Ireland&key=AIzaSyA-hNCB0RItgBptKS0YqhpD6py9xJVNGm4",
    },
    {
    id: 4,
    imageSrc: "../Images/Busker-Brownes.jpg",
    instagramLink: "https://www.instagram.com/buskerbrownes.kirbysrestaurant/",
    websiteLink: "https://www.buskerbrownes.com/",
    Maps: "https://www.google.com/maps/embed/v1/place?q=busker%20browns%20galway&key=AIzaSyA-hNCB0RItgBptKS0YqhpD6py9xJVNGm4",
    },
    {
    id: 5,
    imageSrc: "../Images/The-Front-Door-Pub-Galway.jpg",
    instagramLink: "https://www.instagram.com/frontdoorpub/",
    websiteLink: "https://www.frontdoorpub.com/",
    Maps: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2385.9988093614547!2d-9.056235784195978!3d53.27164097996349!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x485b96fad985a2fd%3A0x17fe4b6348d2b20c!2sThe%20Front%20Door%20Pub!5e0!3m2!1sen!2sie!4v1679499622722!5m2!1sen!2sie", 
    },
    {
      id: 6,
      imageSrc: "../Images/mc gett.jpg",
      instagramLink: "https://www.instagram.com/mcggalway/",
      websiteLink: "https://www.mcgettigans.com/galway-ireland.html",
      Maps: "https://www.google.com/maps/embed/v1/place?q=mc%20gettigans%20Galway&key=AIzaSyA-hNCB0RItgBptKS0YqhpD6py9xJVNGm4",
    }, 
    {
      id: 7,
      imageSrc: "../Images/Taaffes.jpg",
      instagramLink: "https://www.instagram.com/taaffesbar/",
      websiteLink: "https://taaffesbar.ie/",
      Maps: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2385.9593114404524!2d-9.05536018419589!3d53.2723486799636!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x485b96e535781aa3%3A0x4d06d9fe3e283e18!2sTaaffes%20Bar!5e0!3m2!1sen!2sie!4v1679499766791!5m2!1sen!2sie",
    },
    {
      id: 8,
      imageSrc: "../Images/tigh coli.jpg",
      instagramLink: "https://www.instagram.com/tigchoili/",
      websiteLink: "https://tigchoiligalway.com/",
      Maps: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2385.9598974656824!2d-9.05578908419586!3d53.27233817996355!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x485b96fac5a4634d%3A0xc988c438bd20355a!2zVGlnaCBDaMOzaWzDrQ!5e0!3m2!1sen!2sie!4v1679500257885!5m2!1sen!2sie",
    },

    {
      id: 9,
      imageSrc: "../Images/Kings-Head.jpg",
      instagramLink: "https://www.instagram.com/thekingsheadgalway/",
      websiteLink: "https://www.thekingshead.ie/",
      Maps: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2385.9725723345578!2d-9.055354484195911!3d53.272111079963516!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x485b96fad0606f57%3A0x291c057593063f2b!2sThe%20Kings%20Head%20Bistro!5e0!3m2!1sen!2sie!4v1679500349453!5m2!1sen!2sie",

    },
    {
      id: 10,
      imageSrc: "../Images/Event.jpg",
      instagramLink: "https://www.instagram.com/cookes_food/",
      websiteLink: "https://www.facebook.com/cookesgalway/",
      Maps: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2385.9544613809717!2d-9.064868784195891!3d53.27243557996364!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x485b96f9dd25cc9d%3A0xc94934a1f42fe485!2sCookes%20Thatch%20Bar!5e0!3m2!1sen!2sie!4v1679500390274!5m2!1sen!2sie",
    
    },
    
    {
      id: 11,
      imageSrc: "../Images/Freeneys.jpg",
      instagramLink:
        "https://www.facebook.com/pages/Freeneys-Bar/172385122797626/",
      websiteLink: "https://www.galwaycitypubguide.com/freeneys.html",
     Maps: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d596.4963645504039!2d-9.053896970741555!3d53.27188019874772!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x485b96fad045a42d%3A0x5b99215bdf9e16a1!2sFreeneys%20Sports!5e0!3m2!1sen!2sie!4v1679579087433!5m2!1sen!2sie",
    },
    {
      id: 12,
      imageSrc: "../Images/425109315.jpg",
      title: "Sliding Rock",
      address: "37 NewCastle Road, Galway City, Ireland",
      instagramLink: "https://www.facebook.com/theslidingrock/",
      websiteLink: "https://www.theslidingrock.ie/",
      phoneNumber: " +353 91 722 131",
      email: "info@theslidingrock.ie",
      about: "About Sliding Rock",
      AboutParagraph:
        "Sliding Rock is a popular spot in Galway City for food, drinks and live music. Our menu features a range of dishes made with fresh, locally-sourced ingredients, and we have a great selection of craft beers and cocktails. With live music every weekend, Sliding Rock is the perfect place to relax with friends or enjoy a night out.",
      PucanOverallRating: "4.4",
      Maps: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2385.7726946079874!2d-9.065367584195782!3d53.27569227996424!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x485b96f721ff6a83%3A0xf541d39839b4273f!2sThe%20Sliding%20Rock!5e0!3m2!1sen!2sie!4v1679572802576!5m2!1sen!2sie",
    }
];

export default Pubs;
