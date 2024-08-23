import { Link } from "react-router-dom"


const Home = () => {
  return (
    <div className="hero">
    <img src="https://res.cloudinary.com/mudemoenv/image/upload/v1724353017/m2m1lncn3sahseleckch.jpg" alt=""  width= "400px" className="hero-image" />
    <div className="hero-content">
<h1 >Hostelcha Raja</h1>
<hr />
<p>Celebrating Ganpati with my hostel family—because home is where the heart is, and our hearts are with Bappa!</p>
<Link to="/add"><button className="btn" >ADD</button></Link>

<Link to="/get"><button className="btn">GET</button></Link>

</div>

  </div>
  )
}

export default Home