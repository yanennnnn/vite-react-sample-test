import PropTypes from 'prop-types';
import {useForm} from 'react-hook-form';
import { useState } from 'react'
import Swal from 'sweetalert2'
function SignUp({setIsActive}) {
  const {
    register, 
    handleSubmit, 
    setError,
    resetField,
    formState: {errors}
  } = useForm({ 
      mode: 'onTouched'
    }
  );
  const onSubmit = ({email, name, password, confirm}) => {
    if(password !== confirm) {
      setError("confirm", { type: "focus", message: '密碼比對錯誤' }, { shouldFocus: true })
      resetField("confirm", { keepError: true })
    } else {
      Swal.fire({
        title: 'Success!',
        text: '登入成功',
        icon: 'success',
        confirmButtonText: '確認'
      })
    }
  }
  return (
    <>
    <div className="text-[24px] font-bold mb-[24px]">註冊帳號</div>
    <form  onSubmit={handleSubmit(onSubmit)}>
     <div className="mb-[16px]">
       <label htmlFor="email" className="block font-bold mb-[4px] text-sm">Email</label>
       <input 
        type="text" 
        id="email" 
        placeholder="請輸入Email"
        className=" w-full rounded-[10px] p-[12px_16px_12px_16px] focus-visible:outline-[#D87355]"
        {...register('email', {
          required: { value: true, message: '信箱必填' },
          pattern: { value: /^\S+@\S+$/i, message: '信箱格式錯誤' },
        })}
      />
       {errors.email && <p className='text-[#D87355] text-[14px]'>{errors.email.message}</p>}
     </div>
     <div className="mb-[16px]">
       <label htmlFor="name" className="block font-bold mb-[4px] text-sm">您的暱稱</label>
       <input 
        type="text" 
        id="name" 
        placeholder="請輸入您的暱稱" 
        className="text-[#9F9A91] w-full rounded-[10px] p-[12px_16px_12px_16px] focus-visible:outline-[#D87355]"
        {...register('name', {
          required: { value: true, message: '請輸入您的暱稱' },
        })}
      />
      {errors.name && <p className='text-[#D87355] text-[14px]'>{errors.name.message}</p>}
     </div>
     <div className="mb-[16px]">
       <label htmlFor="password" className="block font-bold mb-[4px] text-sm">密碼</label>
       <input 
        type="password" 
        id="password"
        placeholder="請輸入密碼" 
        className="w-full rounded-[10px] p-[12px_16px_12px_16px] focus-visible:outline-[#D87355]"
        {...register('password', {
          required: { value: true, message: '請輸入密碼' },
          minLength: {value: 6, message: '密碼不可低於 6 個字元'}
        })}
      />
       {errors.password && <p className='text-[#D87355] text-[14px]'>{errors.password.message}</p>}
     </div>
     <div>
       <label htmlFor="confirm" className="block font-bold mb-[4px] text-sm">再次輸入密碼</label>
       <input 
        type="password" 
        id="confirm" 
        placeholder="請再次輸入密碼" 
        className="text-[#9F9A91] w-full rounded-[10px] p-[12px_16px_12px_16px]"
        {...register('confirm', {
          required: { value: true, message: '請輸入密碼' },
          minLength: {value: 6, message: '密碼不可低於 6 個字元'}
        })}
      />
      {errors.confirm && <p className='text-[#D87355] text-[14px]'>{errors.confirm.message}</p>}
     </div>
     <div className="mt-[24px] flex flex-col items-center">
       <button type="submit" className="p-[12px_48px_12px_48px] bg-[#333333] text-white rounded-[10px] hover:bg-[#555555] transition duration-300">註冊帳號</button>
       <button
        className="mt-[24px] bg-transparent hover:border-transparent hover:text-[#555555] transition duration-300 focus:outline-0"
        onClick={() => setIsActive('signIn')}
        >登入</button>
     </div>
    </form>
    </>
   
  )
}
SignUp.propTypes = {
  setIsActive: PropTypes.func
}
export default SignUp