var url = 'http://api.icndb.com/jokes/random';
var guzik = document.getElementById('get-joke');
document.addEventListener('load', getJoke());
guzik.addEventListener('click', function() {
	getJoke();
});
var paragraf = document.getElementById('joke');

function getJoke() {
	var olo = new XMLHttpRequest();
	olo.open('GET', url);
	olo.addEventListener('load', function() {
		var response = JSON.parse(olo.response);
		paragraf.innerHTML = response.value.joke;
	});
	olo.send();
}