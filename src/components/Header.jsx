import { useState } from 'react'
import Logo from '../components/Logo'
import { useNavigate } from "react-router-dom";
import Swal from 'sweetalert2'
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
  return (
    <header className='h-[70px]'>
      <div className='py-[16px] flex justify-between'>
      <Logo style="h-[38px]"/>
      <div className="flex items-center">
        <p className='font-bold'>王曉明的代辦</p>
        <button className="ml-[24px] bg-transparent hover:border-transparent hover:text-[#777777]" onClick={()=> {
          Toast.fire({
            icon: 'success',
            title: '登出成功'
          })
          navigate('/week3/login')
        }}>登出</button>
      </div>
      </div>
    </header>
  )
}

export default Header