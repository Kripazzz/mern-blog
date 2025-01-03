import React from 'react';
import { Link } from 'react-router-dom';
import { Label, TextInput, Button } from 'flowbite-react';

function SignUp() {
  return (
  <div className='min-h-screen mt-20'>
    <div className='flex p-3 max-w-3xl mx-auto flex-col md:flex-row
    md:items-center gap-5'>
      {/* left side */}
      <div className='flex-1'>
      
      <Link 
        to="/" 
        className=' font-bold dark:text-white'>

            <span className='px-2 py-1 bg-gradient-to-r from-indigo-500
            via-purple-500 to-pink-500 rounded-lg text-white text-4xl'>
                Grapes
                </span>
                Blog

        </Link>

        <p className='text- mt-5'>
        This is a demo Project. You can sign up with your email and password
        or with Google.
        </p>

        </div>
      {/* right side */}

      <div className='flex-1'>
        <from className='flex flex-col gap-4'>

        <div>
          <Label value='Your username' />
          <TextInput
          typr='text'
          placeholder='Username'
          id='username'/>
        </div>

        <div>
          <Label value='Your email' />
          <TextInput
          typr='text'
          placeholder='name@company.com'
          id='email'/>
        </div>

        <div>
          <Label value='Your password' />
          <TextInput
          typr='text'
          placeholder='Password'
          id='password'/>
        </div>
        <Button gradientDuoTone='purpleToPink' type='submit' >
          Sign Up
        </Button>
        </from>

        <div className='flex gap-2 text-sm mt-5'>
          <span>Have an account ? </span>
          <Link to='/sign-in' className='text-blue-500'>
          Sign In
          </Link>

        </div>
      </div>
      </div>
    </div>
  )
}

export default SignUp