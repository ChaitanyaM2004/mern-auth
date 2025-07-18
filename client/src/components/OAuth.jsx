import React from 'react'
import { GoogleAuthProvider, signInWithPopup , getAuth } from "firebase/auth";
import { useDispatch } from 'react-redux';
import { app } from '../firebase';
import { signInSuccess } from '../redux/user/userSlice'
import {useNavigate} from 'react-router-dom';
export default function OAuth() {
    const dispatch = useDispatch();
    const [loading,setLoading] = React.useState(false);
    const navigate = useNavigate();
    const handleGoogleClick = async ()=>{
      if(loading) return;
      setLoading(true);
        try{
          const provider = new GoogleAuthProvider()
          const auth = getAuth(app);
          const result = await signInWithPopup(auth,provider);
          const res = await fetch('/api/auth/google',{
            method:'POST',
            headers : {
                'Content-Type':'application/json',
            },
            body: JSON.stringify({
                name:result.user.displayName,
                email:result.user.email,
                photo:result.user.photoURL,
            })
          });
          const data = await res.json();
          console.log(data);
          dispatch(signInSuccess(data));
          navigate('/')

        } catch(error){
  const message = error?.message || error?.toString();
  console.error("Could not login with Google:", message);
}finally{
          setLoading(false);
        }
    }
  return (
    <button type='button' onClick={handleGoogleClick} className='bg-red-700 text-white rounded-lg p-3 uppercase hover:opacity-95'>{loading?'Signing in...':'Continue with Google'}</button>
  )
}
