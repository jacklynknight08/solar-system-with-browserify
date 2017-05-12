"use strict";
console.log("URANUS JS");

let uranus = {};

uranus.outputTo = function(domElement){
	domElement.append(`<div>
							<p>Name: Uranus</p>
							<p>Year Discovered: March 13th 1781</p>
							<p>Mass: 8.86 x 10^25 kg</p>
							<p>Size: 51,118 km in diameter</p>
							<p>Distance From Sun: 7th planet from the Sun</p>
							<p>Atmosphere Composition: Upper atmosphere is covered by a methane haze</p>
							<p>Satellites: 27 moons (Miranda, Titania, Ariel, etc..</p>
							<p>Any Space Craft Visited: Voyager 2 flew by</p>
					   </div>`);
};

module.exports = uranus;