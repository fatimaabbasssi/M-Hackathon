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

    }else{
        console.log("user logged out")
        if (window?.location?.pathname === "/assets/html/profile.html") {
            window.location.replace("/index.html");
        }
    }
})