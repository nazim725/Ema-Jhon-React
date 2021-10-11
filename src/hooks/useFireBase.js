import InitializeAuthentication from "../Firebase/Firebase.init"
import { useState, useEffect } from 'react';
import { getAuth, signInWithPopup, GoogleAuthProvider,onAuthStateChanged,signOut ,signInWithEmailAndPassword ,createUserWithEmailAndPassword,sendEmailVerification,sendPasswordResetEmail} from "firebase/auth";


InitializeAuthentication();

const useFirebase=()=>{
    const [user,setUser]=useState({});
    const [error,setError]=useState('');
    const [email,setEmail]=useState('')
    const [password,setPassword]=useState('')
    const auth = getAuth();

    const handleRegustration=e=>{
        e.preventDefault();
        if(password.length<6){
          setError('Password should be at least 6 Characters')
          return
        }
    
       user.email ? processLogin(email,password) : createNewUser(email,password)
       
      }

      const processLogin=(email,password)=>{
        signInWithEmailAndPassword(auth, email, password)
        .then(result=>{
          const user=result.user;
          console.log(user)
          setError('')
        })
        .catch(error=>{
          setError(error.message)
        })
    
      }

      const createNewUser=(emai,password)=>{
        createUserWithEmailAndPassword(auth, email, password)
        .then(result=>{
          const user=result.user
          console.log(user)
          setError('')
          veriFyEmail();
        })
        .catch(error=>{
          setError(error.message)
        })
      }

      const veriFyEmail=()=>{
        sendEmailVerification(auth.currentUser)
        .then(result=>{
         
          console.log(result)
        })
      }

      const handleEmailChange=e=>{
        setEmail(e.target.value)
       }
     
     
       const handlePasswordChange=e=>{
         setPassword(e.target.value)
       }

      //  const handleResetPassword=()=>{
      //   const auth = getAuth();
      //   sendPasswordResetEmail(auth, email)
      //     .then((result) => {
         
      //     })
      //     .catch((error) => {
          
      //       const errorMessage = error.message;
      //       setError(errorMessage)
           
      //     });
      //  }
     


    

    const signInUsingGoogle=()=>{

        const provider = new GoogleAuthProvider();
        return  signInWithPopup(auth, provider)
        
      
    

    }
    useEffect(()=>{
        onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user);
           
            }
          });

    },[])
    const logOut=()=>{
         signOut(auth)
        .then(() => {
          setUser({})
        }).catch((error) => {
            setError(error.messeage)
          });
    }

    return {
        user,
        error,
        signInUsingGoogle,
        logOut,
        handleRegustration,
        handleEmailChange,
        handlePasswordChange,
        // handleResetPassword
 
    }
    
}

export default useFirebase;