import PropTypes from 'prop-types';
import {useForm} from 'react-hook-form';
import { useNavigate } from "react-router-dom";
function SignIn({setIsActive}) {
  const navigate = useNavigate();
  const {
    register, 
    handleSubmit, 
    formState: {errors}
  } = useForm({ 
      mode: 'onTouched'
    }
  );
  const onSubmit = (data) => {
    navigate('/week3/todolist')
  }
  return (
   <>
   <div className="text-[24px] font-bold text-center mb-[24px]">最實用的線上代辦事項服務</div>
   <form onSubmit={handleSubmit(onSubmit)}>
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
    <div>
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
    <div className="mt-[24px] flex flex-col items-center">
      <button type="submit" className="p-[12px_48px_12px_48px] bg-[#333333] text-white rounded-[10px] hover:bg-[#555555] transition duration-300">登入</button>
      <button 
        className="mt-[24px] bg-transparent hover:border-transparent hover:text-[#555555] transition duration-300 focus:outline-0"
        onClick={() => setIsActive('signUp')}
        >註冊帳號</button>
    </div>
   </form>
   </>
  )
}
SignIn.propTypes = {
  setIsActive: PropTypes.func
}
export default SignIn
