
import { auth , signOut , updatePassword, } from "../../config.js";

let _signOut = () =>{
    alert("Signed Out");
    signOut(auth)  
     window.location.pathname = '/'
}

document.getElementById("signOut").addEventListener("click" , _signOut);


    
    window.addEventListener('DOMContentLoaded', () => {
      const menuToggle = document.getElementById('menu-toggle');
      const sidebar = document.getElementById('sidebar');
      const closeBtn = document.getElementById('close-btn');
  
      menuToggle.addEventListener('click', () => {
        sidebar.classList.toggle('active');
      });
  
      closeBtn?.addEventListener('click', () => {
        sidebar.classList.remove('active');
      });
    });




// update password

    let  newPassword = async () =>{
        try {
            
            let user = auth.currentUser
            let newpass = document.getElementById("newpassword").value 
            await updatePassword(user  , newpass)
            alert("password updated")
    
        } catch (error) {
            console.log(error , "in update password");
            
        }
    }
    
    document.getElementById("updatepass")?.addEventListener("click" , newPassword)
    
    
