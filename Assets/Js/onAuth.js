import { auth ,
    onAuthStateChanged,
    doc,
    db,
    getDoc,
} from "../../config.js";




onAuthStateChanged(auth , async (user) =>{
    if(user){

        let userId = user.uid
        console.log(userId);
        console.log("User Logged In:");
        console.log(window.location.pathname);


        // let currentUserRef = doc(db, "users", userId);
        // let currentUser = await getDoc(currentUserRef);


        // // getting user in profile
        // if (currentUser.exists()) {
        //     let signedInUser = currentUser.data();
        //     console.log("User Data:", signedInUser);

        //     let email = document.getElementById("user-email");
        //     let username = document.getElementById("user-name");
    

        //     if (email) email.innerHTML = signedInUser.email;
        //     if (username) username.value = signedInUser.name;
        //     if (profileImg) profileImg.src = signedInUser.profileImg;
        //     if (navProfile) navProfile.src = signedInUser.profileImg;
        //     // if (blogUserImg) blogUserImg.src = signedInUser.profileImg;
        // }
        
    }else{
        console.log("user logged out")
        if (window?.location?.pathname === "/assets/html/profile.html") {
            window.location.replace("/index.html");
        }
    }
})