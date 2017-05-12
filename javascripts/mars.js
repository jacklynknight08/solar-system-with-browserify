"use strict";
console.log("MARS JS");

let mars = {};

mars.outputTo = function(domElement){
	domElement.append(`<div>
							<p>Name: Mars</p>
							<p>Year Discovered: 2nd Milliennium BC</p>
							<p>Mass: 6.42 x 10^23 kg</p>
							<p>Size:6792 km in diameter</p>
							<p>Distance From Sun: 4th planet from the Sun</p>
							<p>Atmosphere Composition: 95% carbon dioxide</p>
							<p>Satellites: Phobos & Deimos</p>
							<p>Any Space Craft Visited: Mariner 4 and others</p>
					   </div>`);
};

module.exports = mars;