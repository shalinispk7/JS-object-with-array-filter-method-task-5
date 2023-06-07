const employees = [
  { name: 'David Carlson', age: 30 },
  { name: 'John Cena', age: 34 },
  { name: 'Mike Sheridan', age: 25 },
  { name: 'John Carte', age: 50 }
];
// Using filter method
// Output:[ { name: "John Cena", age: 34 }, { name: "John Carte", age: 50 }]


// let result=employees .filter(function(e){
	// return e.age >30;
// });
// console.log(result);
// document.write(result)
// document.write(JSON.stringify(result))



let result=employees .filter(function(e){
	return e.name.indexOf('John')>=0;
});
	// console.log(result);
	 // document.write(result)
	  document.write(JSON.stringify(result))
	  
	  
	  
	  
	  