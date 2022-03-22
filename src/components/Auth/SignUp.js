import React, { useState } from 'react';

import FirebaseApp from '../../credentials';
import {
   getAuth,
   createUserWithEmailAndPassword,
   signInWithEmailAndPassword,
   signInWithRedirect,
   GoogleAuthProvider,
} from 'firebase/auth';
const auth = getAuth(FirebaseApp);
const googleProvider = new GoogleAuthProvider();


const SignUp = () => {
   const [registrado, setRegistrado] = useState(false)

   async function submitHandler(e) {
      e.preventDefault();
      const email = e.target.email.value;
      const pass = e.target.password.value;

      if (registrado === false) {
         const user = await createUserWithEmailAndPassword(auth, email, pass);
         console.log(user);
      } else if (registrado) {
         signInWithEmailAndPassword(auth, email, pass);
      }
   }

   return (
      <div className='sign-up-form'>

         <div className="sign-up-section">
            <h3>{registrado ? 'Loggin' : 'Sign Up'}</h3>
            <form action="" onSubmit={submitHandler}>
               <div className="form-item">
                  <label htmlFor="email">Email Address</label>
                  <input type="email" name="email" id="email" placeholder='Enter your email account' />
               </div>
               <div className="form-item">
                  <label htmlFor="password">Password</label>
                  <input type="password" name="password" id="password" placeholder='Enter your password' />
               </div>
               <button type="submit">
                  {registrado ? 'Loggin' : 'Sign Up'}
               </button>

            </form>
         </div>

         <div className="sign-up-section">
            <h3>Join with another:</h3>
            <button type="submit" onClick={() => signInWithRedirect(auth, googleProvider)}>
               Google
            </button>
         </div>

         <div className='sign-up-section'>
            <button type='submit' onClick={() => setRegistrado(!registrado)}>
               {registrado ? `Don't have an account? Sign In` : `Log in with an existing account`}
            </button>
         </div>

      </div>

   )
}

export default SignUp