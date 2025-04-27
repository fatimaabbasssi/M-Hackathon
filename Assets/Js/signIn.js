import { auth , createUserWithEmailAndPassword ,
    sendEmailVerification,

    // firestore
    db,
    doc, setDoc
} from "../../config.js"


let signUpForm = async (e) =>{
    e.preventDefault()
    let email = document.getElementById("email").value
    let password = document.getElementById("password").value
    let name = document.getElementById("name").value
    console.log(email , password , name);

   try {

//creating user
    let userRef = await createUserWithEmailAndPassword(auth , email ,password)
    let user = userRef?.user
     await sendEmailVerification(user)
    console.log(user);
    console.log(window.location.pathname);

    // adding user do database
    await setDoc(doc(db, "users", user.uid), {
         email,
         name,
      });
  
   if(user){window.location.pathname = '/Assets/Html/index.html'}
    
   } catch (error) {
    console.log(error);
    
   }
    
}

document.getElementById("sign-Up")?.addEventListener("submit" , signUpForm)
