import PropTypes from 'prop-types';
function SignIn({setIsActive}) {
  return (
   <>
   <div className="text-[24px] font-bold text-center mb-[24px]">最實用的線上代辦事項服務</div>
   <form action="">
    <div className="mb-[16px]">
      <label htmlFor="email" className="block font-bold mb-[4px] text-sm">Email</label>
      <input type="text" name="email" id="email" placeholder="請輸入Email" className="text-[#9F9A91] w-full rounded-[10px] p-[12px_16px_12px_16px]"/>
    </div>
    <div>
      <label htmlFor="password" className="block font-bold mb-[4px] text-sm">密碼</label>
      <input type="password" name="password" id="password" placeholder="請輸入密碼" className="text-[#9F9A91] w-full rounded-[10px] p-[12px_16px_12px_16px]"/>
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
