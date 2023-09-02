import { Routes, Link  } from "react-router-dom"
function App() {
  return (
    <div className="rootContainer">
      <div className="flex items-center justify-center">
      <a href="https://codepen.io/yennnnn/pen/RwqXVyy" target="_blank" className="w-[150px] h-[150px] bg-red-400 rounded-full flex items-center justify-center text-white hover:bg-red-500 hover:text-white transition duration-300 text-decoration-none" rel="noreferrer">week1</a>
      <Link  to="/week2" className="w-[150px] h-[150px] bg-orange-400 rounded-full flex items-center justify-center text-white ml-10 hover:bg-orange-500 hover:text-white transition duration-300 text-decoration-none">week2</Link >
      <Link  to="/week3/login" className="w-[150px] h-[150px] bg-green-400 rounded-full flex items-center justify-center text-white ml-10 hover:bg-green-500 hover:text-white transition duration-300 text-decoration-none">week3</Link >
      </div>
    </div>
  )
}

export default App
