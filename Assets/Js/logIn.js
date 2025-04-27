import { auth , signInWithEmailAndPassword,
    sendPasswordResetEmail,
    GoogleAuthProvider,
    signInWithPopup,
    signOut
 } from "../../config.js"









let logInForm = async (e) =>{
    e.preventDefault()
    let email = document.getElementById("email").value
    let password = document.getElementById("password").value
    // console.log(email , password);

   try {
    let userRef = await signInWithEmailAndPassword(auth , email ,password)
    let user = userRef?.user
    console.log(user);
    

    if(user){window.location.pathname = '/Assets/Html/index.html'}
    
   } catch (error) {
    console.log(error);
    
   }
    
}

document.getElementById("log-in")?.addEventListener("submit" , logInForm);













// forgot password


let forgotPassword = async () =>{
    try {
        let email = document.getElementById("email").value
        sendPasswordResetEmail(auth, email)
   } catch (error) {
       console.log(error);
       
   }
}

document.getElementById("forgot-Pass")?.addEventListener("click" , forgotPassword);














// signIn with Google || continue with Google

let provider = new GoogleAuthProvider()
provider.setCustomParameters({ prompt: "select_account" });
let signInWithgoogle = async () => {

    try {
        await signOut(auth);  //logout
        console.log("User signed out before sign-in attempt.");

        const result = await signInWithPopup(auth, provider); //again sign In with google 
        console.log("User signed in: ", result.user);
    } catch (error) {
        console.error("Google Sign-In Error: ", error);
    }
}

document.getElementById("sign-withGoogle")?.addEventListener("click" , signInWithgoogle);