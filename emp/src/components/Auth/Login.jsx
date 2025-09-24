import React, { useState } from 'react'

const Login = ({handleLogin}) => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const submitHandler = (e) => {
    e.preventDefault()
    // console.log("email is:", email)
    // console.log("password is:", password)
    handleLogin(email,password)
    // clear input
    setEmail('')
    setPassword('')

  }

  return (
    <div className="w-auto h-screen flex items-center justify-center bg-black">
      <div className="border-2 p-20 border-emerald-600 rounded-2xl">
        <form
          onSubmit={submitHandler}
          className="flex flex-col items-center justify-center gap-5"
        >
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            type="text"
            placeholder="Enter your email"
            className="outline-none bg-transparent border-2 border-emerald-600 text-xl py-3 px-5 rounded-full text-white placeholder-gray-400"
          />

          <input
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            type="password"
            placeholder="Enter your password"
            className="outline-none bg-transparent border-2 border-emerald-600 text-xl py-3 px-5 rounded-full text-white placeholder-gray-400"
          />

          <button
            type="submit"
            className="bg-emerald-600 mt-2 py-3 px-7 rounded-full cursor-pointer text-2xl text-white"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  )
}

export default Login
