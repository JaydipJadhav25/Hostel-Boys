
import './App.css'
import {BrowserRouter , Route, Routes} from "react-router-dom"
import Home from "../components/Home"
import { Addtransaction } from "../components/Addtransaction"
import { Alltransactions } from "../components/Alltransactions"






function App() {





  return (
    <>
      <BrowserRouter>
      
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/add" element={<Addtransaction/>}/>
        <Route path="/get" element={<Alltransactions/>}/>
         
      </Routes>
      </BrowserRouter>
       
    </>
  )
}

export default App
