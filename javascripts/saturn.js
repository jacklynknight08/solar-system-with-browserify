"use strict";
console.log("SATURN JS");

let saturn = {};

saturn.outputTo = function(domElement){
	domElement.append(`<div>
							<p>Name: Saturn</p>
							<p>Year Discovered: 8th Century BC</p>
							<p>Mass: 5.68 x 10^26 kg</p>
							<p>Size: 120,536 km in diameter</p>
							<p>Distance From Sun: 6th planet from the Sun</p>
							<p>Atmosphere Composition: Upper atmosphere divided into bands of clouds.</p>
							<p>Satellites: 150 moons (Titan, Enceladus, Iapetus, Rhea, etc..</p>
							<p>Any Space Craft Visited: Pioneer 11, Voyager 1 & 2, Cassini-Huygens</p>
					   </div>`);
};

module.exports = saturn;