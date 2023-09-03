import { useState } from 'react'
import { Outlet } from 'react-router-dom'
function Week3() {
  // 轉址
  // 如果 token 還存在的話，跳轉至 /todo
  // 如果不在的話，跳轉至 /login
  
  return (
    <>
      <Outlet/>
    </>
  )
}

export default Week3