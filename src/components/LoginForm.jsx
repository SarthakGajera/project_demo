import React ,{useState} from 'react'
import account from '../Appwrite/appwriteConfig'

const LoginForm=()=>{
    const [email,setEmail]=useState('')
    const [password,setPassword]=useState('')
    const [error,setError]=useState('')

    const handleLogin=async(e)=>{
        e.preventDefault();
        try {
            await account.createEmailSession(email,password)
            window.location.reload();
        } catch (error) {
            setError(error.message)
        }
    };
    return (
        <form onSubmit={handleLogin}>
            <h2>Login</h2>
            {error && <p style={{ color: 'red' }}>{error}</p>}
            <input type="email"
            placeholder='Email'
            value={email}
            onChange={(e)=>setEmail(e.target.value)}
            required />

            <input type="password"
            placeholder='Password'
            value={password}
            onChange={(e)=>setPassword(e.target.value)}
            required />
            <button type='submit'>Login</button>
        </form>
    )
}

export default LoginForm
