import { useState, useRef, useEffect } from 'react'
import { useNavigate } from "react-router-dom";
import Header from '../components/Header'
import List from '../components/List'
import empty from '@/assets/empty.svg'
import API from '@/utils/api'
import Swal from 'sweetalert2'
function TodoList() {
  const navigate = useNavigate()
  const [loading, setloading] = useState(false)
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
  
  const [todoList, setTodoList] = useState([])
  const newTodo = useRef();
  const getTodo = () => {
   
    API.GET('/todos').then(({data}) => {
      console.log(data)
      setTodoList(data)
    })
  }
  const checkOut = () => {
    API.GET('/users/checkout').then(() => {

    }).catch((error)=> {
      navigate('/week3/login')
      Toast.fire({
        icon: 'error',
        title: error
      })
      
    })
  }

  useEffect(() => {
    checkOut();
    getTodo();
  }, []);
  return (
    <>
    <div className='h-screen' style={{background: 'linear-gradient(172.7deg, #FFD370 5.12%, #FFD370 53.33%, #FFD370 53.44%, #FFFFFF 53.45%, #FFFFFF 94.32%)'}}>
      <div className='container'>
        <Header />
        <div className='max-w-[500px] w-full mx-auto mt-[40px]'>
          <div className="bg-white rounded-[10px] relative w-[500px] h-[47px] relative">
            <form>
              <input  
                type="text" 
                name="text" 
                className="bg-white rounded-[10px] shadow  absolute l-0 t-0 w-full b-0 r-0 h-full pl-[16px] pr-[40px] focus-visible:outline-[#D87355]"
                placeholder='新增待辦事項'
                ref={ newTodo }
              />
              <button
                className="w-10 h-[39px] bg-zinc-800 rounded-[10px] absolute right-[5px] top-[50%] translate-y-[-50%] p-0 disabled:bg-zinc-400"
                disabled={ loading }
                type='submit'
                onClick={(e)=> {
                  e.preventDefault()
                  setloading(true)
                  API.POST('/todos/', {
                    content: newTodo.current.value
                  }).then(()=> {
                    Toast.fire({
                      icon: 'success',
                      title: '新增成功'
                    })
                    newTodo.current.value = ''
                    getTodo();
                  }).catch((error) => {
                    Toast.fire({
                      icon: 'error',
                      title: error
                    })
                  }).finally(()=> {
                    setloading(false)
                  })
                }}
              >
                <svg width="20" height="21" viewBox="0 0 20 21" fill="#fff" xmlns="http://www.w3.org/2000/svg" className='mx-auto'>
                  <path d="M18.6364 8.93184H11.8182V2.11364C11.8182 1.36091 11.2073 0.75 10.4545 0.75H9.54548C8.79275 0.75 8.18184 1.36091 8.18184 2.11364V8.93184H1.36364C0.610908 8.93184 0 9.54275 0 10.2955V11.2045C0 11.9573 0.610908 12.5682 1.36364 12.5682H8.18184V19.3864C8.18184 20.1391 8.79275 20.75 9.54548 20.75H10.4545C11.2073 20.75 11.8182 20.1391 11.8182 19.3864V12.5682H18.6364C19.3891 12.5682 20 11.9573 20 11.2045V10.2955C20 9.54275 19.3891 8.93184 18.6364 8.93184Z" fill="white"/>
                </svg>
              </button>
            </form>
          </div>
          {todoList.length ? (
              <div className='mt-[60px]'>
                <List todoList={ todoList } getTodo={ getTodo } />
              </div>
            ) : (
              <div className='mt-[60px] text-center'>
                目前尚無待辦事項
                <img src={empty} alt="" className='mx-auto mt-[16px]'/>
              </div>
            )}
        </div>
      </div>
    </div>
      
    </>
  )
}

export default TodoList