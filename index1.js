/*var abhi = new details('abhi','shahi')
console.log(abhi);*/

/*var fs= require("fs")                  // syncronous call
var filepath= "./sample.txt";
console.log("start reading file")

var data=  fs.readFileSync(filepath);

	console.log(data.toString())
console.log("Done reading file")*/



var fs= require("fs")                       //asyncronous call
var filepath= "./sample.txt";
console.log("start reading file")

var data=  fs.readFile(filepath, function(err, data){
	if(err){
		console.log(err)
	}

	console.log("start writing file")

 fs.writeFile('./output.txt',data, function(err){
    if(err){
    	throw err;
    	console.log(err)
    }
  
})
	
})