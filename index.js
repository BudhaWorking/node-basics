console.log("hello abhishek");

function details( firstname, lastname){
	this.firstname = firstname;
	this.lastname = lastname;
}

var abhi = new details('abhi','shahi')
console.log(abhi);