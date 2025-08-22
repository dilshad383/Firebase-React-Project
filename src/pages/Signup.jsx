import React, {useState} from 'react'
import {getAuth, createUserWithEmailAndPassword} from 'firebase/auth'
import app from '../firebase'

const auth = getAuth(app)
const Signup = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const createUser = () => {
  createUserWithEmailAndPassword(auth, email, password)
    .then(() => {
      alert('User created successfully!');
    })
    .catch((err) => {
      console.error(err);
      alert(err.message);
    });
    };

  return (
    <div>
      <h1 className="text-center text-2xl">Signup Page</h1>
      <div className="">
        <label htmlFor="">Email</label>
        <input 
        onChange={(e) => setEmail(e.target.value)}
        value={email}
        type="email" required placeholder='Enter your email' />
      </div>
      <div className="">
        <label htmlFor="">Password</label>
        <input 
        onChange={(e) => setPassword(e.target.value)}
        value={password}
        type="password" required placeholder='Enter your password' />
      </div>
      <button 
      onClick={createUser}
      className='border-2 p-2 m-4 cursor-pointer'> Create User</button>
    </div>
  )
}

export default Signup
