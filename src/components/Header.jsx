import { useState } from 'react'
import Logo from '../components/Logo'
import { useNavigate } from "react-router-dom";
import Swal from 'sweetalert2'
import { rmCookie, getCookie } from "@/utils/cookie";
import API from '@/utils/api'
function Header() {
  const Toast = Swal.mixin({
    toast: true,
    position: 'top-end',
    showConfirmButton: false,
    timer: 2000,
    didOpen: (toast) => {
      toast.addEventListener('mouseenter', Swal.stopTimer)
      toast.addEventListener('mouseleave', Swal.resumeTimer)
    }
  })
  const navigate = useNavigate()
  const user = getCookie('user')
  return (
    <header className='h-[70px]'>
      <div className='py-[16px] flex justify-between'>
      <Logo style="h-[38px]"/>
      <div className="flex items-center">
        <p className='font-bold'>{ user }</p>
        <button className="ml-[24px] bg-transparent hover:border-transparent hover:text-[#777777]" onClick={()=> {
          API.POST('/users/sign_out').then(()=> {
            Toast.fire({
              icon: 'success',
              title: '登出成功'
            })
            rmCookie('token')
            rmCookie('user')
            navigate('/week3/login')
          }).catch((error) => {
            Toast.fire({
              icon: 'error',
              title: error
            })
          }) 
        }}>登出</button>
      </div>
      </div>
    </header>
  )
}

export default Header