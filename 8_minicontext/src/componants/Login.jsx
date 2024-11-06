import React, {useState, userContext} from 'react'
import UserContext from '../context/UserContext'

const Login = () => {

    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    const {setUser} = userContext(UserContext)

    const handleSubmit = (e) =>{
        e.preventDefault()
        setUser({username, password})
    }
  return (
   <>
   <h2>Login</h2>
   <input type="text" value={username} onClick={(e) => setUsername(e.target.value)} placeholder='username' />
   <input type="text" value={password} onClick={(e) => setPassword(e.target.value)} placeholder='password' />
   <button onClick={handleSubmit}>Submit</button>
   </>
  )
}

export default Login;
