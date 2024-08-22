import { Link } from "react-router-dom"


const Home = () => {
  return (
    <div className="hero">
    <img src="https://res.cloudinary.com/mudemoenv/image/upload/v1724353017/m2m1lncn3sahseleckch.jpg" alt=""  width= "400px" className="hero-image" />
    <div className="hero-content">
<h1 >Hostelcha <b>Raja</b></h1>
<hr />
<p>Celebrating Ganpati with my hostel family—because home is where the heart is, and our hearts are with Bappa!</p>
<button className="btn" ><Link to="/add">ADD</Link></button>

<button className="btn"><Link to="/get">GET</Link></button>

</div>

  </div>
  )
}

export default Home