import PropTypes from 'prop-types';
import { useState, useEffect } from 'react'

function Cart({ cart, setCartData, note, setNote, setOrder }) {
  const [totalPrice, setTotalPrice] = useState(0)
  useEffect(()=> {
    setTotalPrice(cart.reduce((pre, cuur)=> {
      return pre + (cuur.count * cuur.price)
    }, 0))
  }, [cart] )
  return (
    <div className='ml-5 shrink-0 w-[55%]'>
    { cart.length <= 0 
      ? <div className='bg-gray-200 h-[150px] flex justify-center items-center'>尚未加入任何商品</div>
      :  <><table className="w-full text-sm text-left text-gray-500 dark:text-gray-400"> 
      <thead className="text-xs text-gray-700 uppercase bg-gray-200 dark:bg-gray-700 dark:text-gray-400">
        <tr>
          <th scope="col" className="px-6 py-3"></th>
          <th scope="col" className="px-6 py-3">品項</th>
          <th scope="col" className="px-6 py-3">描述</th>
          <th scope="col" className="px-6 py-3">數量</th>
          <th scope="col" className="px-6 py-3">價格</th>
        </tr>
      </thead>
      <tbody>
        {cart.map((item) => 
          <tr key={ item.id } className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
            <td>
              <button className='bg-red-500 text-white hover:bg-red-700 transition duration-300 border-0'
                onClick={() => {
                  setCartData((prv) => {
                    return prv.filter((cartData) => {
                      return cartData.id !== item.id
                    })
                  })
                }}
              >刪除</button>
            </td>
            <td 
                scope="row" 
                className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"

             >
              { item.name }
             </td>
            <td scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"><small>{ item.description }</small></td>
            <td scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
              <select 
                name="count" 
                id="count" 
                value={ item.count } 
                className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
                onChange={(e)=> {
                  const { name, value } = e.target
                  setCartData((prev) => 
                      prev.map((item2) => {
                          if(item2.id === item.id){
                              return {
                                ...item2,
                                [name]: Number(value)
                              }
                          }   
                          return item2
                      })
                    )
                  } }
                >
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
                <option value="6">6</option>
                <option value="7">7</option>
                <option value="8">8</option>
                <option value="9">9</option>
                <option value="10">10</option>
              </select>
            </td>
            <td scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">{ item.price }</td>
      
          </tr>                
         )}
         <tr>
          <td colSpan="5" align='right' className="text-2xl pt-2 font-bold text-green-700">總計: ${ totalPrice }</td>
         </tr>
      </tbody>
    </table>
    <div className='mt-5 text-right'>
      <textarea 
        name="note" 
        id="note" 
        className='w-[100%] border border-gray-300 rounded-lg p-3' 
        rows="10" 
        placeholder='請填寫備註'
        value={ note }
        onChange={(e) => {
          setNote(e.target.value)
        }}
      >
      
      </textarea>
      <button className='bg-blue-500 text-white hover:bg-blue-700' onClick={(()=> {
        setOrder((prev)=> [
          ...prev,
          {
            id: new Date().getTime(),
            cart,
            note,
            totalPrice
          }
        ])
        setCartData([])
        setNote('')
      })}>送出</button>
    </div>
    </>
    }
    </div>
  )
}
Cart.propTypes = {
  cart: PropTypes.array,
  setCartData: PropTypes.func,
  note: PropTypes.string,
  setNote: PropTypes.func, 
  setOrder: PropTypes.func
}
export default Cart