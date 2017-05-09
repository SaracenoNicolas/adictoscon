function sendEmail() {
	//prevent the page to be refreshed
	event.preventDefault();
	console.log(globalMG);

	return false;
};

//init function
(function()	{
	document.getElementById("conRegister").removeEventListener("submit", sendEmail);
	document.getElementById("conRegister").addEventListener("submit", sendEmail);
})();