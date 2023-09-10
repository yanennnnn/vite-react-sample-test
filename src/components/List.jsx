import PropTypes from 'prop-types';
import { useState, useEffect } from 'react';
import API from '@/utils/api'
import Swal from 'sweetalert2'
function List({ todoList, getTodo }) {
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
  const [isActiveTab, setIsActiveTab] = useState('all')
  const [resultTodoList, setTodoList] = useState([])
  const tabsList = [
    {
      name: '全部',
      alias: 'all'
    },
    {
      name: '待完成',
      alias: 'pending'
    },
    {
      name: '已完成',
      alias: 'done'
    }
  ]
  useEffect(() => {
    if (todoList.length === 0) return;
    setTodoList( 
      todoList.filter((item)=> {
        switch(isActiveTab){
          case 'all':
            return item;
          case 'pending':
            return !item.status
          case 'done': 
            return item.status
        }
      }))
  }, [isActiveTab, todoList]);
  List.propTypes = {
    todoList: PropTypes.array,
    getTodo: PropTypes.func,
  }
  return (
    <div className='bg-white rounded-lg shadow overflow-hidden'>
      <div className='flex'>
        {
          tabsList.map((tab) => 
            <button 
              key={ tab.alias } 
              className={`grow hover:rounded-none hover:border-transparent bg-white hover:text-bold text-center text-stone-400 text-sm font-bol focus:outline-none  px-2.5 py-4 hover:text-zinc-800 ${tab.alias === isActiveTab ? 'text-zinc-800' : ''}` }
              onClick={()=> setIsActiveTab(tab.alias)} 
            >
              { tab.name }
            </button>
          )
        }
      </div>
      <div className='w-full h-[2px] bg-zinc-100 relative'>
        <div className="absolute h-[2px] top-0 bg-zinc-800 transiton duration-300"
          style={{
            width : `${100/ tabsList.length + 1}%`, 
            left: `${33 * (tabsList.findIndex(tab => tab.alias === isActiveTab))}%`
        }}
        ></div>
      </div>
      <div className='p-[24px] max-h-[350px] overflow-auto'>
        <div>
          {resultTodoList.map((item) => 
            <div key={item.id} className='flex items-center py-[4px] border-b border-solid border-neutral-200'>
              <label className="check-box relative cursor-pointer">
                <input type="checkbox" id="checkbox" className='invisible' onChange={() => {
                  API.PATCH(`/todos/${item.id}/toggle`).then(()=> {
                    getTodo()
                  })
                }} checked={item.status}/>
                <span className='mr-[46px]'>{item.content}</span>
              </label>
              <button 
                className='ml-auto focus:outline-none hover:border-transparent group bg-transparent'
                onClick={()=> {
                  API.DELETE(`/todos/${item.id}`).then(()=> {
                    Toast.fire({
                      icon: 'success',
                      title: '刪除成功'
                    })
                    getTodo()
                  })
                }}
              >
                <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M0.147472 0.147504C0.193908 0.101016 0.249052 0.0641365 0.309751 0.0389738C0.37045 0.0138121 0.435514 0.000860214 0.501222 0.000860214C0.566929 0.000860214 0.631993 0.0138121 0.692692 0.0389738C0.753391 0.0641365 0.808535 0.101016 0.854971 0.147504L6.99997 6.2925L13.1475 0.147504C13.2413 0.0536833 13.3685 0.000975609 13.5012 0.000975609C13.6339 0.000975609 13.7611 0.0536833 13.855 0.147504C13.9488 0.241324 14.0015 0.368572 14.0015 0.501254C14.0015 0.633936 13.9488 0.761183 13.855 0.855003L7.70747 7L13.8525 13.1475C13.9463 13.2413 13.999 13.3686 13.999 13.5012C13.999 13.6339 13.9463 13.7612 13.8525 13.855C13.7586 13.9488 13.6314 14.0015 13.4987 14.0015C13.366 14.0015 13.2388 13.9488 13.145 13.855L6.99997 7.7075L0.852471 13.8525C0.756821 13.9344 0.633783 13.9772 0.507945 13.9724C0.382107 13.9675 0.262737 13.9153 0.17369 13.8263C0.0846426 13.7372 0.0324765 13.6179 0.0276159 13.492C0.0227553 13.3662 0.0655584 13.2431 0.147472 13.1475L6.29247 7L0.147472 0.852504C0.0543461 0.758822 0.0020752 0.632096 0.0020752 0.500004C0.0020752 0.367911 0.0543461 0.241185 0.147472 0.147504Z" fill="#333333" className="group-hover:fill-black"/>
                </svg>
              </button>
            </div>
          )}
        </div>
        <div className='flex justify-between items-center pt-[25px]'>
            <span>{resultTodoList.length ? resultTodoList.length : 0} 個待完成項目</span>
            <button 
              className='ml-auto focus:outline-none hover:border-transparent bg-transparent hover:text-[#FFD370]'
              onClick = { () => {
                const result = todoList.filter((todo) => todo.status).map((item)=> {
                  return API.DELETE(`/todos/${item.id}`)
                })
                Promise.all(result).then(()=> {
                  Toast.fire({
                    icon: 'success',
                    title: '已完成刪除成功'
                  })
                  getTodo()
                })
              }}
            >刪除全部項目</button>
        </div>
      </div>
    </div>
  )
}

export default List