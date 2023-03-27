<template>
    <head>
        <title>login</title>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.2.0/css/all.min.css">
        <link href="https://fonts.googleapis.com/css2?family=Noto+Serif+Lao&display=swap" rel="stylesheet">
        <link rel="stylesheet" type="text/css" href="../../style.css">
    </head>
    <body>
     <div class="wrapper">
         <div class="heading">
             <h1>Sign Up</h1>
         </div>
        <div class="form">
             <form>
                <span>
                    <i class="fa-solid fa-file-signature"></i>
                    <input type="text" placeholder="Full name" name="">
                </span><br>
                
                 <span>
                     <i class="fa fa-user"></i>
                     <input type="text" placeholder="Username" name="">
                 </span><br>
                 <span>
                    <i class="fa-solid fa-lock"></i>
                     <input type="password" placeholder="Password" name="">
                 </span><br>
                     <button>Sign Up</button>
                     <router-link class ="has-text-grey-light" to="/login">Already have an account?</router-link>
            </form>
        </div>
         </div>
     
    
    </body>
    </template>

