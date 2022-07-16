function PizzaTypes ({title}){
  return(
    <div className="container-fluid">
    	<div className="row">
    		<h3 id="types" style={{marginLeft: "500px", marginTop: "50px"}}>{title}</h3>
    	</div>

    	<div className="row row-pizza">

    		<div className="col-md-3">
    			<div className="card" style={{width: "18rem"}}>
            <img src="peperoni pizza.jpg" className="card-img-top img-fluid" alt="Pepperoni Pizza"/>
            <div className="card-body">
              <h5 className="card-title">Pepperoni Pizza</h5>
              <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            </div>
          </div>
    		</div>

    		<div className="col-md-3">
    			<div className="card" style={{width: "18rem"}}>
            <img src="vegetable pizza.jpg" className="card-img-top img-fluid" alt="Vegetable Pizza" style ={{height: "300px"}}/>
            <div className="card-body">
              <h5 className="card-title">Vegetable Pizza</h5>
              <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            </div>
          </div>
    		</div>

    		<div className="col-md-3">
    			<div className="card" style={{width: "18rem"}}>
            <img src="cheese pizza.jpg" className="card-img-top img-fluid" alt="Cheese Pizza" style ={{height: "300px"}}/>
            <div className="card-body">
              <h5 className="card-title">Cheese Pizza</h5>
              <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            </div>
          </div>
    		
    		</div>

    		<div className="col-md-3">
    			<div className="card" style={{width: "18rem"}}>
              <img src="bossu pizza.jpg" className="card-img-top img-fluid" alt="Bossu Pizza" style ={{height: "300px"}}/>
              <div className="card-body">
                <h5 className="card-title">Bossu Pizza</h5>
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
              </div>
          </div>
    		</div>
    	</div>
    </div>

  );
}

export default PizzaTypes;