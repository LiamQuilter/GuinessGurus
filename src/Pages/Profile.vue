<script>
    export default{
        data(){
            return{
                firstName: 'First',
                lastName: 'last',
                userName: 'Username',
                
                newFirstName: '',
                newLastName: '',
                newUserName: ''
            };
        },
        methods: {
            applyProfileChanges(){
                if(this.newFirstName.trim().length != 0){
                    this.firstName = this.newFirstName;
                }else if(this.newFirstName.trim().length == 0){
                    this.firstName = this.firstName
                }
                if(this.newLastName.trim().length != 0){
                this.lastName = this.newLastName;
                }else if(this.newLastName.trim().length == 0){
                    this.lastName = this.lastName;
                }
                if(this.newUserName.trim().length != 0){
                this.userName = this.newUserName;
                }else if(this.newUserName.trim().length == 0){
                    this.userName = this.userName;
                }
            }
        }
    }



</script>
<template>
    <div class="tile is-ancestor">
        <div class="tile is-parent is-4">
            <article class="tile is-child box is-primary">
                <p class="title">Details</p>
                <p class="subtitle fa-regular fa-circle-user fa-2xl"></p>
                <p class="subtitle"><br><Strong>First Name: </Strong>{{ firstName }}<br></p>
                <p class="subtitle"><br><Strong>Last Name: </Strong>{{ lastName }}<br></p>
                <p class="subtitle"><br><Strong>Username: </Strong>{{ userName }}<br> </p>
    
           </article>
        </div>
        <div class="tile is-vertical is-8">
            <div class="tile">
                <div class="tile is-parent is-vertical">
                    <article class="tile is-child box is-info">
                        <p class="title">Update Profile</p>

                        <label class="label">First Name: </label>
                        <input v-model ="newFirstName" class="input is-success" type="text" placeholder="First Name">
                    
                        <label class="label">Last Name: </label>
                        <input v-model ="newLastName" class="input is-success" type="text" placeholder="Last Name">
    
                        <label class="label">Username: </label>
                        <input v-model = "newUserName" class="input is-success" type="text" placeholder="Username">
                        <br><br>

                        <label class="label"><strong>Upload New Profile Picture:</strong></label>
                        <div class="file has-name has-right">
                            <label class="file-label">
                                <input class="file-input" type="file" name="resume">
                                <span class="file-cta">
                                    <span class="file-icon">
                                        <i class="fas fa-upload"></i>
                                    </span>
                                    <span class="file-label">
                                        Choose a file…
                                    </span>    
                                </span>
                                <span class="file-name">
                                    this is the file name
                                </span>
                            </label>
                        </div>
                        <br><br>
                        <button @click="applyProfileChanges" class="button is-success is-responsive">Apply Profile Changes</button>
                    </article>
                    <article class="tile is-child box has-icons-right has-icons-left">
                        <p class="title">Change Password</p>
                        <div class="field">
                            <label class="label">Current Password:</label>
                            <p class="control has-icons-left">
                                <input class="input" type="password" placeholder="Password">
                                <span class="icon is-small is-left">
                                    <i class="fas fa-lock"></i>
                                </span>
                            </p>

                            <label class="label">New Password:</label>
                            <p class="control has-icons-left">
                                <input class="input" type="password" placeholder="New Password">
                                <span class="icon is-small is-left">
                                    <i class="fas fa-lock"></i>
                                </span>
                            </p>

                            <label class="label">Confirm Password:</label>
                            <p class="control has-icons-left">
                                <input class="input" type="password" placeholder="Confirm Password">
                                <span class="icon is-small is-left">
                                    <i class="fas fa-lock"></i>
                                </span>
                            </p>
                        </div>
                        <br><br>
                        <button class="button is-danger is-responsive">Apply Password Changes</button>
                    </article>
                </div>
            </div>
        </div>
    </div>  
    
</template>