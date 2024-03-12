import { useState } from 'react'

const LoginForm = () => {

    const [name, setName] = useState('')
    const [password, setPassword] = useState('')

  return (
    <div>
        <input value={name} onChange={it => setName(it.target.value)} />
        <input value={password} onChange={it => setPassword(it.target.value)} /> 
    </div>
  )
}  

export default LoginForm