function AboutPizza({title}){
  return(
    <div className="container-fluid">
    	<div className="row">
    		<h2 id="about" style={{marginTop: "50px"}}>{title}</h2>
    	</div>

    	<div className="row">

    		<div className="col-md-6 img-fluid">
    			<img src="PIZZA2.jpg" alt="Pizza" width="100%"/>
    		</div>

    		<div className="col-md-6">
    			<h3>Pizza Is Awesome</h3>
    			<p>Pizza (Italian: [ˈpittsa], Neapolitan: [ˈpittsə]) is a dish of Italian origin consisting of a usually round, flat base of leavened wheat-based dough topped with tomatoes, cheese, and often various other ingredients (such as anchovies, mushrooms, onions, olives, pineapple, meat, etc.), which is then baked at a high temperature, traditionally in a wood-fired oven.</p>

    			<p> A small pizza is sometimes called a pizzetta. A person who makes pizza is known as a pizzaiolo.In Italy, pizza served in a restaurant is presented unsliced, and is eaten with the use of a knife and fork.</p>

    		    <p>Pizza (Italian: [ˈpittsa], Neapolitan: [ˈpittsə]) is a dish of Italian origin consisting of a usually round, flat base of leavened wheat-based dough topped with tomatoes, cheese, and often various other ingredients. </p>
    		</div>
    	</div>
    </div>
  );
}

export default AboutPizza;