function Navbar (){
  return (
    <div className="container-fluid container-nav">
		  <div className="row">
        <nav className="navbar navbar-expand-md navbar-light navbar-home" style={{backgroundColor:"#a94442"}}>
          <a className="navbar-brand" href="pizzamania" style={{color: "white"}}>PIZZAMANIA</a>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarScroll" aria-controls="navbarScroll" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
          </button>
      
                   
          <ul className="navbar-nav ml-auto">
            <li className="nav-item"><a className="nav-link" href="#home" style={{color: "white"}}>Home</a></li>
            <li className="nav-item"><a className="nav-link" href="#about" style={{color: "white"}}>About Pizza</a></li>
            <li className="nav-item"><a className="nav-link" href="#types" style={{color: "white"}}>Pizza Types</a></li>
          </ul>           
        </nav>
      </div>     
    </div>

  );
}

export default Navbar;