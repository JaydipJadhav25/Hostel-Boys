
import "./add.css"
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import {addData} from "../src/store/data"
import { useDispatch } from "react-redux";

export const Addtransaction = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { register, handleSubmit } = useForm();
  // const [data , setData] = useState({
  //   name : "",
  //   price : 0 , 
  //   date : Date.now()
  // })



  function submitForm(data){

    console.log(data);


    dispatch(addData({
      name : data.name,
      price : Number(data.price),
      date : Date.now()
    }))

  

    navigate("/");

  }
  



  return (

<div className="box">


<div className="box2">

  <h1>Add Transaction </h1>

<form  onSubmit={handleSubmit(submitForm)}>

<label htmlFor="name">Title : </label>
<input  {...register("name")} id="name"  required/>


<label >Amount : </label>
<input  type="number" {...register("price")}   required/>

<button>Save</button>

  </form>

    
  </div>    


  <Link to="/"><button>Home</button></Link>

    </div>
  )
}
