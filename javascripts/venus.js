"use strict";
console.log("VENUS JS");

let venus = {};

venus.outputTo = function(domElement){
	domElement.append(`<div>
							<p>Name: Venus</p>
							<p>Year Discovered: 17th Century BC</p>
							<p>Mass: 4.87 x 10^24 kg</p>
							<p>Size: 12,104 km in diameter</p>
							<p>Distance From Sun: 2nd planet from Sun</p>
							<p>Atmosphere Composition: Atmospheric pressure is 92 times greater than Earth.</p>
							<p>Satellites: None</p>
							<p>Any Space Craft Visited: Venera 7</p>
					   </div>`);
};

module.exports = venus;