import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import { Outlet, Link } from "react-router-dom";

import '../App.css';

const Navbar=()=>{
    return(
        <>
      
       <nav class="navbar navbar-expand-lg navbar-light">
  <a class="navbar-brand" href="#">Navbar</a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarNav">
    <ul class="navbar-nav">
      <li class="nav-item active">
        {/* <a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a> */}
        <Link class="nav-link" to="/">Home</Link>
      </li>
      <li class="nav-item">
        {/* <a class="nav-link" href="#">Features</a> */}
        <Link class="nav-link" to="/About">About </Link>
      </li>
      <li class="nav-item">
        {/* <a class="nav-link" href="#">Pricing</a> */}
        <Link class="nav-link" to="/contact">Services</Link>
      </li>
      <li class="nav-item">
        {/* <a class="nav-link disabled" href="#">Disabled</a> */}
        <Link class="nav-link" to="/Services">Contact</Link>
      </li>
    </ul>
  </div>
</nav>


<Outlet />
        </>
    )
}

export default Navbar;