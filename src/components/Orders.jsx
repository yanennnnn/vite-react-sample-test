import PropTypes from 'prop-types';
function Order({order}) {
  return (
    <>
       <ul role="list" className="mt-7">
          {
            order.map((item) => 
            <li className="p-5 border border-solid border-green-900 rounded-lg mb-5 last:mb-0" key={item.id}>
              <div className="text-left">
                <h3 className='mr-3'>訂單編號: { item.id }</h3>
                <p className='text-green-700 font-bold text-lg'>總計: ${ item.totalPrice }</p>
                <p className=''>備註: { item.note ? item.note : '無'}</p>
              </div>
              <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400 mt-5"> 
                <thead className="text-xs text-gray-700 uppercase bg-gray-200 dark:bg-gray-700 dark:text-gray-400">
                  <tr>
                    <th scope="col" className="px-6 py-3">品項</th>
                    <th scope="col" className="px-6 py-3">數量</th>
                    <th scope="col" className="px-6 py-3">價格</th>
                  </tr>
                </thead>
                <tbody>
                  {item.cart.map((cartItem) => 
                    <tr key={ cartItem.id } className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                      <td scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">{ cartItem.name }</td>
                      <td scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">{ cartItem.count }</td>
                      <td scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">${ cartItem.price }</td>
                
                    </tr>                
                  )}
                </tbody>
              </table>
              {/* <div className="flex justify-between text-left items-center">
                <p className='mr-3'>{ item.description }</p>
                <button className='bg-red-500 text-white hover:bg-red-700 transition duration-300 border-0' onClick={()=> {
                  const isInCart = cart.some((cartData) => {
                    return cartData?.id === item.id
                  })
                  if(isInCart) {
                    setcartAdd((prev)=>
                      prev.map((cartData)=> {
                        if(cartData.id === item.id) { 
                          return {
                            ...cartData,
                            count: cartData.count === 10 ? cartData.count : cartData.count + 1
                          }
                        }
                        return {
                          ...cartData,
                        }
                      })
                    )
                  } else {
                    setcartAdd([
                      ...cart,
                      {
                        id: item.id,
                        name: item.name,
                        description: item.description,
                        price:item.price,
                        count: 1
                      }
                    ])
                  }

                }}>加入購物車</button>
              </div> */}
            </li>
            )
          }
        </ul>
    </>
  )
}
Order.propTypes = {
  order: PropTypes.array,
}
export default Order