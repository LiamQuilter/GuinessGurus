import {ref, onMounted} from "vue"
 import { collection, getDocs } from "firebase/firestore";
 import {db} from "@/fb/firebase"

const Pubs = [
   {
    id: 1,
    imageSrc: "../Images/An-Pucan.jpg",
    title: "An Púcán",
    address: "11 Forster Street, Galway City, Ireland ",
    instagramLink: "https://www.instagram.com/anpucan/",
    websiteLink: "https://anpucan.ie/ ",
    phoneNumber: " +353 91 376 561",
    email: "info@anpucan.ie",
    about: "About An Púcán",
    AboutParagraph:
      "An Púcán is a traditional Irish pub located in the heart of Galway City, just a stone's throw from Eyre Square. It's a favorite spot for locals and tourists alike, with a lively atmosphere, great music, and a wide range of drinks and food. Whether you're looking for a quiet pint, a night out with friends, or some live music, An Púcán is the place to be.",
    PucanOverallRating: "4.5",
    Maps: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2385.838521559027!2d-9.049622784195785!3d53.274512879964014!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x485b96e5f633156f%3A0xe997eacdc6802bef!2zQW4gUMO6Y8Ohbg!5e0!3m2!1sen!2sie!4v1678911688830!5m2!1sen!2sie",

  },
  
  {
    id: 2,
    imageSrc: "../Images/Seven-Bridge-Street.jpg",
    title: "Seven Bar And Restaurant",
    address: "5-7 Bridge Street, Galway City, Ireland",
    instagramLink: "https://www.instagram.com/sevengalway/",
    websiteLink: "http://sevenbridgestreet.ie/",
    phoneNumber: " +353 91 563 804",
    email: "info@sevenbridgestreet.ie",
    about: "About Seven Bar and Restaurant",
    AboutParagraph:
      "Seven Bar and Restaurant is a lively spot in the heart of Galway City. Offering delicious food, craft beers and cocktails, Seven is the perfect place to relax with friends or enjoy a night out. Our menu features a range of dishes made with locally-sourced ingredients, and we have live music every weekend. Come join us!",
    PucanOverallRating: "4.2",
    Maps: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2385.9897324112617!2d-9.059561067579374!3d53.27180361587668!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x485b96fae8a13acb%3A0xfb1ea805bdbbc781!2sSeven%20Bridgestreet!5e0!3m2!1sen!2sie!4v1679498427522!5m2!1sen!2sie",
  },
  
  {
    id: 3,
    imageSrc: "../Images/Taylors-Bar.jpg",
    title: "Taylor's Bar and Beer Garden",
    address: "7 Dominick Street Upper, Galway City, Ireland",
    instagramLink: "https://www.instagram.com/taylorsgalway/",
    websiteLink: "https://taylorsgalway.ie/",
    phoneNumber: "+353 91 450 475",
    email: "info@taylorsgalway.ie",
    about: "About Taylor's Bar and Beer Garden",
    AboutParagraph:
    "Taylor's Bar and Beer Garden is a popular spot in Galway City, known for its great atmosphere and selection of drinks. With indoor and outdoor seating options, it's the perfect spot for a casual drink or a night out with friends. In addition to a wide range of beers and cocktails, Taylor's also serves delicious pub food.",
    PucanOverallRating: "4.2",
    Maps: "https://www.google.com/maps/embed/v1/place?q=Taylor's%20Bar%20%26%20Beer%20Garden%2C%20Dominick%20Street%20Upper%2C%20Galway%2C%20Ireland&key=AIzaSyA-hNCB0RItgBptKS0YqhpD6py9xJVNGm4",
    },
    {
    id: 4,
    imageSrc: "../Images/Busker-Brownes.jpg",
    title: "Busker Brownes",
    address: "3-5 Cross Street Upper, Galway City, Ireland",
    instagramLink: "https://www.instagram.com/buskerbrownes.kirbysrestaurant/",
    websiteLink: "https://www.buskerbrownes.com/",
    phoneNumber: "+353 91 563 377",
    email: "info@buskerbrownes.com",
    about: "About Busker Brownes",
    AboutParagraph:
    "Busker Brownes is a popular pub and restaurant located in the heart of Galway City. With a lively atmosphere, great food, and a wide range of drinks, it's a favorite spot for locals and tourists alike. The menu at Busker Brownes features a mix of classic Irish dishes and modern cuisine, and the pub also hosts live music and events throughout the week.",
    PucanOverallRating: "4.4",
    Maps: "https://www.google.com/maps/embed/v1/place?q=busker%20browns%20galway&key=AIzaSyA-hNCB0RItgBptKS0YqhpD6py9xJVNGm4",
    },
    {
    id: 5,
    imageSrc: "../Images/The-Front-Door-Pub-Galway.jpg",
    title: "The Front Door",
    address: "8 Cross Street & High Street, Galway City, Ireland",
    instagramLink: "https://www.instagram.com/frontdoorpub/",
    websiteLink: "https://www.frontdoorpub.com/",
    phoneNumber: "+353 91 563 757",
    email: "info@frontdoorpub.com",
    about: "About The Front Door",
    AboutParagraph:
    "The Front Door is a popular pub and restaurant located in the heart of Galway City. With a lively atmosphere, great food, and a wide range of drinks, it's a favorite spot for locals and tourists alike. The menu at The Front Door features a mix of classic Irish dishes and modern cuisine, and the pub also hosts live music and events throughout the week.",
    PucanOverallRating: "4.3",
    Maps: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2385.9988093614547!2d-9.056235784195978!3d53.27164097996349!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x485b96fad985a2fd%3A0x17fe4b6348d2b20c!2sThe%20Front%20Door%20Pub!5e0!3m2!1sen!2sie!4v1679499622722!5m2!1sen!2sie", 
    },
    {
      id: 6,
      imageSrc: "../Images/mc gett.jpg",
      title: "McGettigan's",  
      address: "9-11 Prospect Hill, Eyre Square, Galway City, Ireland",
      instagramLink: "https://www.instagram.com/mcggalway/",
      websiteLink: "https://www.mcgettigans.com/galway-ireland.html",
      phoneNumber: " +353 91 331 010 ",
      email: "info@mcgettigans.com",
      about: "About McGettigan's",
      AboutParagraph:
        "McGettigan's is an Irish pub and restaurant located in the heart of Galway City. We offer a wide selection of drinks and food, and we're known for our lively atmosphere and live music events. Whether you're looking for a pint, a bite to eat, or some entertainment, McGettigan's is the place to be.",
      PucanOverallRating: "4.5",
      Maps: "https://www.google.com/maps/embed/v1/place?q=mc%20gettigans%20Galway&key=AIzaSyA-hNCB0RItgBptKS0YqhpD6py9xJVNGm4",
    }, 
    {
      id: 7,
      imageSrc: "../Images/Taaffes.jpg",
      title: "Taaffes",
      address: "19 Shop Street, Galway City, Ireland",
      instagramLink: "https://www.instagram.com/taaffesbar/",
      websiteLink: "https://taaffesbar.ie/",
      phoneNumber: " +353 91 564 066",
      email: "info@taaffesbar.ie",
      about: "About Taaffes",
      aboutParagraph:
        "Taaffes is a lively and traditional Irish pub located in the heart of Galway's Latin Quarter. It's a popular spot for both locals and tourists, with live music every night and a cozy atmosphere. Taaffes is also known for its wide selection of Irish whiskies and beers.",
      overallRating: "4.3",
      Maps: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2385.9593114404524!2d-9.05536018419589!3d53.2723486799636!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x485b96e535781aa3%3A0x4d06d9fe3e283e18!2sTaaffes%20Bar!5e0!3m2!1sen!2sie!4v1679499766791!5m2!1sen!2sie",
    },
    {
      id: 8,
      imageSrc: "../Images/tigh coli.jpg",
      title: "Tig Cóilí",
      address: "Tig Cóilí, Mainguard Street, Galway City, Ireland",
      instagramLink: "https://www.instagram.com/tigchoili/",
      websiteLink: "https://tigchoiligalway.com/",
      phoneNumber: " +353 91 561 294",
      email: "info@tigchoili.ie",
      about: "About Tig Cóilí",
      aboutParagraph:
        "Tig Cóilí is a family-run traditional Irish pub in Galway City, known for its cozy atmosphere, live music, and friendly staff. The pub has a wide selection of beers, whiskeys, and other spirits, and serves delicious homemade food. Tig Cóilí is also a popular spot for sports fans, with multiple TVs showing live games.",
      overallRating: "4.4",
      Maps: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2385.9598974656824!2d-9.05578908419586!3d53.27233817996355!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x485b96fac5a4634d%3A0xc988c438bd20355a!2zVGlnaCBDaMOzaWzDrQ!5e0!3m2!1sen!2sie!4v1679500257885!5m2!1sen!2sie",
    },

    {
      id: 9,
      imageSrc: "../Images/Kings-Head.jpg",
      title: "The Kings Head",
      address: "15 High Street, Galway City, Ireland",
      instagramLink: "https://www.instagram.com/thekingsheadgalway/",
      websiteLink: "https://www.thekingshead.ie/",
      phoneNumber: " +353 91 566 630",
      email: "info@thekingshead.ie",
      about: "About The Kings Head",
      aboutParagraph:
        "The Kings Head is a historic pub and restaurant located in the heart of Galway's Latin Quarter. The building dates back to the 1600s and has a rich history as a meeting place for merchants, politicians, and artists. Today, The Kings Head is known for its traditional Irish music, live entertainment, and delicious food and drink. The pub also has a cozy beer garden and multiple private event spaces.",
      overallRating: "4.5",
      Maps: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2385.9725723345578!2d-9.055354484195911!3d53.272111079963516!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x485b96fad0606f57%3A0x291c057593063f2b!2sThe%20Kings%20Head%20Bistro!5e0!3m2!1sen!2sie!4v1679500349453!5m2!1sen!2sie",

    },
    {
      id: 10,
      imageSrc: "../Images/Event.jpg",
      title: "Cookes Thatch Bar",
      address: "2 Newcastle road, Galway City, Ireland,",
      instagramLink: "https://www.instagram.com/cookes_food/",
      websiteLink: "https://www.facebook.com/cookesgalway/",
      phoneNumber: " +353 91 521749",
      email: "info@anpucan.ie",
      about: "About Cookes Thatch Bar",
      AboutParagraph:
        "Cookes Thatch Bar is one of Galway’s oldest pubs. We are located in the West end of Galway City a 5 minute walk from the centre of the City. Cookes has been welcoming customers through its doors for hundreds of years.",
      PucanOverallRating: "4.5",
      Maps: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2385.9544613809717!2d-9.064868784195891!3d53.27243557996364!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x485b96f9dd25cc9d%3A0xc94934a1f42fe485!2sCookes%20Thatch%20Bar!5e0!3m2!1sen!2sie!4v1679500390274!5m2!1sen!2sie",
    
    },
    
    {
      id: 11,
      imageSrc: "../Images/Freeneys.jpg",
      title: "Freeneys",
      address: "19 High Street, Galway City, Ireland",
      instagramLink:
        "https://www.facebook.com/pages/Freeneys-Bar/172385122797626/",
      websiteLink: "https://www.galwaycitypubguide.com/freeneys.html",
      phoneNumber: " +353 91 562 609",
      email: "info@freeneys.ie",
      about: "About Freeneys",
      AboutParagraph:
        "Freeneys is a traditional Irish pub located in the heart of Galway City. With a cozy atmosphere and friendly staff, Freeneys is the perfect place to enjoy a pint of Guinness or a whiskey. We also have live music every weekend, so come join us for a night out!",
      PucanOverallRating: "4.0",
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


// onMounted(async() =>{
//   const querySnapshot = await getDocs(collection(db, "pubs"))
//   let fbinfo = []
//    querySnapshot.forEach((doc) => {
//    console.log(doc.id, " => ", doc.data())

//    const Pubs = {
//      id: doc.id,
//      imageSrc: doc.data.imageSrc,
//    title: doc.data.title,
//    address: doc.data.address,
//    instagramLink: doc.data.instagramLink,
//    websiteLink: doc.data.websiteLink,
//    phoneNumber: doc.data.phoneNumber,
//    email: doc.data.email,
//    about: doc.data.about,
//    AboutParagraph: doc.data.AboutParagraph,
//    PucanOverallRating: doc.data.PucanOverallRating,
//    }
//  fbinfo.push(Pubs)
// })
// })


export default Pubs;
