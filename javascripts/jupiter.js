"use strict";
console.log("JUPITER JS");

let jupiter = {};

jupiter.outputTo = function(domElement){
	domElement.append(`<div>
							<p>Name: Jupiter</p>
							<p>Year Discovered: 7th or 8th Century BC</p>
							<p>Mass: 1.90 x 10^27 kg</p>
							<p>Size: 142,984 km in diameter</p>
							<p>Distance From Sun: 5th planet from the Sun</p>
							<p>Atmosphere Composition: Upper atmosphere is divided into cloud belts and zones</p>
							<p>Satellites: 10 (Europa, Ganymede, Callisto, etc..</p>
							<p>Any Space Craft Visited: Pioneer 10 & 11, Voyager 1 & 2, Galileo, Cassini, Ulysses, and New Horizons</p>
					   </div>`);
};

module.exports = jupiter;