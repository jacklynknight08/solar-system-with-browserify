"use strict";
console.log("MERCURY JS");

let mercury = {};

mercury.outputTo = function(domElement){
	console.log("mercury", mercury);
	domElement.append(`<div>
							<p>Name: Mercury</p>
							<p>Year Discovered: 14th Century</p>
							<p>Mass: 3.30 x 10^23 kg</p>
							<p>Size: 4879 km in diameter</p>
							<p>Distance From Sun: 1st planet from Sun</p>
							<p>Atmosphere Composition: So thin that it's basically nonexistent</p>
							<p>Satellites: Gaynemede & Neso</p>
							<p>Any Space Craft Visited: Messenger Spacecraft</p>
					   </div>`);
};

module.exports = mercury;