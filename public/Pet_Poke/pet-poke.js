(function () {

	var petPicElement = document.getElementById('petPic');
	var $results = $("#petPoke .results");
	var petPic = {
		okCat: 'Pet_Poke/images/pusheen-wiggle.gif',
		happyCat: 'Pet_Poke/images/pusheen-wiggle-wink.gif',
		sadCat: 'Pet_Poke/images/pusheen-wiggle-sad.gif',
		cookieCat: 'Pet_Poke/images/pusheen-wiggle-cookies.gif'
	};


	function changeToPetPic (image) {
		petPicElement.src = image;

	}

	function petPet () {
		if (ownerName) {
			$results.text("Yay! Thank you " + ownerName + "!");
			changeToPetPic(petPic.happyCat);
			setTimeout(lonelyPet, 300000);
		} else {
			ownerName = prompt("Hi! What's your name?", "Enter your name here");
			if (navigator.cookieEnabled)
				cookieMonsterWill.bakeCookie("petpoke_ownername", ownerName, 5*365);
			else {
				$results.text("No cookies?");
				changeToPetPic(petPic.cookieCat);
			}
		}
	}

	function lonelyPet () {
		changeToPetPic(petPic.sadCat);
		$results.text(ownerName + "....where are you?");
	}

	function greetUser () {
		ownerName = cookieMonsterWill.findCookie("petpoke_ownername");
		if (ownerName && navigator.cookieEnabled) {
			$results.text(ownerName + "! You're back! I missed you!");
			changeToPetPic(petPic.okCat);
		}
		else
			$results.text("Pet me?");
	}

	$(function() {
		greetUser();
		//alert('Scroll down to see your new pet!')
		$('#petPoke').on("click", "#petPic", petPet);
	});

}) ();