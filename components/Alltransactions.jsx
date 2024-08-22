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

console.log(allTransications);

  return (
    <div className="box2">
     <h1>Total Transaction : { allTransications && allTransications.length}</h1>
      <ol>
      {

    allTransications && allTransications.map((ele) =>
    

        <li key={ele.id}>
          <h4>{ele.name} :: {ele.price}</h4>
        </li>
        
      
    )

        }
      </ol>
   

      <button className="btn"><Link to="/">Back</Link></button>
    </div>
  )
}
