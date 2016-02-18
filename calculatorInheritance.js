//Calculator Constructor

function Calculator() {}

//Calculator methods

Calculator.prototype.add = function (x,y) { 
	var res = x + y;  
	return res;
}
	
Calculator.prototype.subtract = function (x,y) { 
	var res = x - y; 
	return res;
}

Calculator.prototype.multiply = function (x,y) { 
	var res = x * y; 
	return res;
}

Calculator.prototype.divide = function (x,y) { 
	if ( y == 0 ) { 
		var res = "NaN";
		return res;
	}

	else { 
		var res = x / y;		
		return res; 
	} 
}  

/* This function allows instances of Scientific Calculator to be instances of Calculator, 
or a subclass in a sense */ 

function inheritPrototype(ScientificCalculator, Calculator) { 
	
	ScientificCalculator.prototype=Object.create(Calculator.prototype);
	ScientificCalculator.prototype.constructor=ScientificCalculator; 
} 

/*Scientific Calculator implementation
*/ 

function ScientificCalculator () {
	
	//Call calculator constructor
	Calculator.call(this); 

}

/*Call inheritPrototype prior to implementing methods of ScientificCalculator
*/ 

inheritPrototype(ScientificCalculator, Calculator);

/*Methods of ScientificCalculator
*/

ScientificCalculator.prototype.sin = function (x) { 
	var res = Math.sin(x); 
	return res;
} 

ScientificCalculator.prototype.cos = function (x) { 
	var res = Math.cos(x); 
	return res; 
} 

ScientificCalculator.prototype.tan = function (x) { 
	var res = Math.tan(x); 
	return res;
} 

ScientificCalculator.prototype.log = function (x) { 
	var res = Math.log(x); 
	return res; 
} 

/*withExponents Functional Mixin
*/

var withExponents = function() { 

	this.pow = function (x, y) { 
		var res = Math.pow(x,y);  
		return res; 
	}

	this.multiplyExp = function (x, y) { 
		var res = Math.pow(x[0],x[1])*Math.pow(y[0],y[1]); 
		return res; 
	}

	this.divideExp = function (x, y) { 
		var res = Math.pow(x[0],x[1])/Math.pow(y[0],y[1]); 
		return res; 
	}
} 

/* Delay Function
*/ 

function delay (del,calc,oper,arr) {   

	return new Promise(function (resolve, reject) {

		setTimeout(function() { 
		
			if (oper=="add") {
				var res = calc.add(arr[0], arr[1]);
				resolve(res); 
			}
	
			else if (oper=="subtract") { 
				var res = calc.subtract(arr[0],arr[1]);	
				resolve(res);			
			}   		
		
			else { 
				reject("cannot execute functions that do not exist"); 	 
			}
		}, del)
	}); 
} 

//Test from main()

function main() {
	
	//Test Promise Functionality
	var x = [2,3];
	scicalc = new ScientificCalculator(); 
	calc = new Calculator();
	var willAdd = delay(2000, calc, "div", x);
	willAdd.then(function(fulfilled) { 
		console.log(fulfilled); 
	}, function(rejected) { 
		console.log(rejected); 
	});
}

main(); 

//Add one comment to file. Adjusting preivious comment - firstBranch. 