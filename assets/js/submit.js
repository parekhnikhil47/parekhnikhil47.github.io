var firebaseConfig = {
	apiKey: "AIzaSyDkYzZRdukoW6lZAu-zfxgcGVB5Cp8SmTs",
	authDomain: "my-website-74d9d.firebaseapp.com",
	projectId: "my-website-74d9d",
	storageBucket: "my-website-74d9d.appspot.com",
	messagingSenderId: "289409931384",
	appId: "1:289409931384:web:3e54b9a8c4fba9157b358d",
	measurementId: "G-55KM1XRSJD"
};

firebase.initializeApp(firebaseConfig);
firebase.analytics();

var messagesRef = firebase.database().ref('messages');

const sendToFirebase = (name, email, message) => {
	var newMessageRef = messagesRef.push();
	newMessageRef.set({
		name: name,
		email: email,
		message: message
	});
};

const get = (id) => {
	return document.getElementById(id).value;
};

const send = (e) => {
	e.preventDefault();

	var name = get('name');
	var email = get('email');
	var message = get('message');

	sendToFirebase(name, email, message);
	window.confirm("Message sent");
};

document.getElementById("contact-form").addEventListener("submit", send);
