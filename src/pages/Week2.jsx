import { useState } from 'react'
import Cart from '../components/Cart'
import Orders from '../components/Orders'
import Menu from '../components/Menu'
const data = [
  {
    "id": 1,
    "name": "珍珠奶茶",
    "description": "香濃奶茶搭配QQ珍珠",
    "price": 50
  },
  {
    "id": 2,
    "name": "冬瓜檸檬",
    "description": "清新冬瓜配上新鮮檸檬",
    "price": 45
  },
  {
    "id": 3,
    "name": "翡翠檸檬",
    "description": "綠茶與檸檬的完美結合",
    "price": 55
  },
  {
    "id": 4,
    "name": "四季春茶",
    "description": "香醇四季春茶，回甘無比",
    "price": 45
  },
  {
    "id": 5,
    "name": "阿薩姆奶茶",
    "description": "阿薩姆紅茶搭配香醇鮮奶",
    "price": 50
  },
  {
    "id": 6,
    "name": "檸檬冰茶",
    "description": "檸檬與冰茶的清新組合",
    "price": 45
  },
  {
    "id": 7,
    "name": "芒果綠茶",
    "description": "芒果與綠茶的獨特風味",
    "price": 55
  },
  {
    "id": 8,
    "name": "抹茶拿鐵",
    "description": "抹茶與鮮奶的絕配",
    "price": 60
  }
]
function Week2() {
  const [products] = useState(data)
  const [cart, setcartAdd] = useState([])
  const [note, setNote] = useState('')
  const [order, setOrder] = useState([])
  return (
    <>
     <div className='container'>
      <h2 className='text-6xl font-bold mb-5'>飲料點餐系統</h2>
      <div className='flex'>
        <Menu cart={cart} setcartAdd={setcartAdd} products={ products }/>
        <Cart cart={cart} setCartData={setcartAdd} note={note} setNote={setNote} setOrder={setOrder}/>
      </div>
      <Orders order={ order }/>
     </div>
    </>
  )
}

export default Week2