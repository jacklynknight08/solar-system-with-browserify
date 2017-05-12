"use strict";
console.log("EARTH JS");

let earth = {};

earth.outputTo = function(domElement){
	domElement.append(`<div>
							<p>Name: Earth</p>
							<p>Year Discovered: Formed 4.54 billion years ago</p>
							<p>Mass: 5.97 x 10^24 kg</p>
							<p>Size: 12,756 km in diameter</p>
							<p>Distance From Sun: 3rd planet from the Sun</p>
							<p>Atmosphere Composition: Atmosphere is about 300 miles thick, nitrogen accounts for about 78%</p>
							<p>Satellites: The Moon</p>
							<p>Any Space Craft Visited: We create the space crafts.</p>
					   </div>`);
};

module.exports = earth;