let username = document.getElementById('username').value;
let password = document.getElementById('password').value;
let btn = document.getElementById('butn');

function alertUser() {
	if (!username && !password) {
		alert('Please enter valid username & password')
	} else {
		href="www.facebook.com"
	}
}

btn.addEventListener('click',alertUser)