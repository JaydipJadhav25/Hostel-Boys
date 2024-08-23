import {useSelector} from "react-redux"
import { getData } from "../src/store/data"
import { useDispatch } from "react-redux"
import { useEffect } from "react"
import { Link } from "react-router-dom"
import "./add.css"

export const Alltransactions = () => {

  const dispatch = useDispatch();

const { allTransications  , loading} = useSelector(s => s.Data)
console.log(allTransications);

useEffect(() =>{

  dispatch(getData());


},[])

if(loading) {
  return<h1>Loading............</h1>
}

let total = 0;

if(allTransications){
  allTransications.map((e) =>{
        total +=e.price
  })
}

console.log(total);


//total 




  return (
    <div className="box2">
     <h1>Transactions : { allTransications && allTransications.length}</h1>
      <ol>
      {

    allTransications && allTransications.map((ele) =>
    

        <li key={ele.id}>
          <h4>{ele.name}     ::    <b>{ele.price}</b></h4>
          
         
        </li>
        
      
    )

        }
      </ol>
   
 
      <h2>Total Amount : <b>{total}</b></h2>
      <Link to="/"> <button className="btn">Back</button></Link>
    </div>
  )
}
