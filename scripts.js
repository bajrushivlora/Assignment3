fetch('my.json')
.then(function(results){
	return results.json()
})
.then(function(jsonResults){

	console.log("results: ", jsonResults)

	document.querySelector("#root").insertAdjacentHTML('afterbegin', `
		<h1 style="color:rgb(${jsonResults.color});">${jsonResults.title}</h1> 
	`)

})
.catch(function(error){
	console.log("error message:", error)
})