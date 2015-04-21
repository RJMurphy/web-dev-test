function submitData()
{
	var formData = $("#form").serializeArray();
	var jsonMap = 
	{
		name: formData[0].value,
		email : formData[1].value,
		number : formData[2].value
	};

	var sendJSON = { form : jsonMap };

	$.post("https://web-dev-test.herokuapp.com/forms", sendJSON,
		function(response)
	{
		document.getElementById("response").innerHTML=JSON.stringify(response);
	});
}