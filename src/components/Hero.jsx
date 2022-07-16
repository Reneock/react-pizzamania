function Hero (){
  return(
    <div className="container-fluid container-carousel">
    	<div className="row">
    		<div id="carouselExampleIndicators home" className="carousel slide" data-ride="carousel">
               <ol className="carousel-indicators">
                   <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
                   <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                   <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
                </ol>
            <div className="carousel-inner carousel-main">
            <div className="carousel-item active img-fluid">
                <img src="PIZZA1.jpg" className="d-block w-100" alt="Pizza"/>
            </div>

            <div className="carousel-item img-fluid">
                <img src="PIZZA2.jpg" className="d-block w-100" alt="Pizza"/>
            </div>
            <div className="carousel-item img-fluid">
                <img src="PIZZA3.jpg" className="d-block w-100" alt="Pizza"/>
            </div>
            </div>
            <button className="carousel-control-prev" type="button" data-target="#carouselExampleIndicators" data-slide="prev">
             <span className="carousel-control-prev-icon" aria-hidden="true"></span>
             <span className="sr-only">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-target="#carouselExampleIndicators" data-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="sr-only">Next</span>
            </button>
            </div>
    	</div>
    </div>
  
  );
}

export default Hero;