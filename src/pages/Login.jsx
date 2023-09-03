import { useState } from 'react'
import LoginSvg from '../components/LoginSvg'
import Logo from '../components/Logo'
import SignIn from '../components/SignIn'
import SignUp from '../components/SignUp'
function Login() {
  const [isActive, setIsActive] = useState('signIn')
  return (
    <div className='bg-[#FFD370]'>
      <div className='w-[796px] max-w-full mx-auto my-0 h-screen'>
        <div className="flex items-center h-full py-[87px]">
        <div className="w-6/12">
          <Logo style="justify-center mb-3"/>
          <LoginSvg/>
        </div>
        <div className="w-5/12 ml-auto">
          {
            isActive === 'signIn' ? 
            <SignIn isActive={isActive} setIsActive={setIsActive}/>
            : <SignUp isActive={isActive} setIsActive={setIsActive}/>
          }
        </div>
      </div>
      </div>
    </div>
   
  )
}

export default Login