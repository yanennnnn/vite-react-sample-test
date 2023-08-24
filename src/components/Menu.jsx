import PropTypes from 'prop-types';
function Menu({products, cart, setcartAdd}) {
  return (
    <ul role="list" className="divide-y divide-gray-100 border border-solid shrink-0 w-[45%]">
    {
      products.map((item) => 
      <li className="p-5" key={item.id}>
        <div className="flex min-w-0 gap-x-4 justify-between py-3">
          <h3 className='mr-3'>{ item.name }</h3>
          <p>${ item.price }</p>
        </div>
        <div className="flex justify-between text-left items-center">
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
        </div>
      </li>
      )
    }
  </ul>
  )
}
Menu.propTypes = {
  products: PropTypes.array,
  cart: PropTypes.array,
  setcartAdd: PropTypes.func,
}
export default Menu