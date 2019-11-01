window.addEventListener('load', ()=> {

	button = document.querySelector('.searchbox_gobutton');
	entryBox = document.querySelector('.searchbox');
	nameResult = document.querySelector('.name');
	teamResult = document.querySelector('.team');
	conferenceResult = document.querySelector('.conference');
	comp = document.querySelector('.composition');

	let enterNumber;
	   
	const getPlayerInfo = (event) => {
	   event.preventDefault();
	   enterNumber = document.querySelector('.searchbox_enterid').value;
 

	   fetch(`https://www.balldontlie.io/api/v1/players/${enterNumber}`)
		  .then(response => {
			 return response.json();
		  })
		  .then(data => {
			 console.log(data);
  
			const { first_name, last_name, height_feet, height_inches, weight_pounds } = data;
			const { full_name, conference } = data.team;
		
			nameResult.textContent = first_name + " " + last_name;
			teamResult.textContent = full_name;
			conferenceResult.textContent = conference + "ern" + " " + "Conference";
			var totalheight = height_feet + height_inches;

			TweenMax.to(nameResult, 4, {scaleX: `${totalheight}`/3});
			TweenMax.to(nameResult, 4, {scaleY: `${weight_pounds}`/40});

		})
			.catch(function(error){
				console.log("error message:", error)
			})
		}
 
		entryBox.addEventListener('submit', getPlayerInfo);
 });
 

