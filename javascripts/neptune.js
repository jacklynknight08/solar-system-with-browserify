"use strict";
console.log("NEPTUNE JS");

let neptune = {};

neptune.outputTo = function(domElement){
	domElement.append(`<div>
							<p>Name: Saturn</p>
							<p>Year Discovered: September 23rd 1846 </p>
							<p>Mass: 1.02 x 10^26 kg</p>
							<p>Size: 49,528 km in diameter</p>
							<p>Distance From Sun: 8th planet from the Sun</p>
							<p>Atmosphere Composition: Large storms whirl through its upper atmosphere</p>
							<p>Satellites: </p>
							<p>Any Space Craft Visited: Voyager 2 flew by</p>
					   </div>`);
};

module.exports = neptune;