function phoromatic_initial_registration(form)
{
	if(form.register_username.value.length < 4 || form.register_username.value.indexOf(" ") != -1)
	{
		alert("Please enter a user-name of at least four characters, without spaces.");
		return false;
	}
	if(form.register_password.value.length < 6)
	{
		alert("Please enter a password of at least six characters.");
		return false;
	}
	if(form.register_password_confirm.value != form.register_password.value)
	{
		alert("The supplied passwords do not match.");
		return false;
	}

	if(form.register_email.value.length < 5)
	{
		alert("Please enter a valid email address.");
		return false;
	}

	var email_at = form.register_email.value.indexOf("@");
	var email_dot = form.register_email.value.lastIndexOf(".");

	if(email_at < 1 || email_dot < (email_at + 2) || email_dot + 2 >= form.register_email.value.length)
	{
		alert("Please enter a valid email address.");
		return false;
	}

	var valid_username_chars = '1234567890-_.abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
	for(var i = 0; i < form.register_username.value.length; i++)
	{
		if(valid_username_chars.indexOf(form.register_username.value.substr(i, 1)) == -1)
		{
			alert("The username contains an invalid character: " + form.register_username.value.substr(i, 1));
			return false;
		}
	}

	return true;
}
function phoromatic_login(form)
{
	if(form.username.value.length < 6)
	{
		alert("Please enter a valid username; it should be at least six characters long.");
		return false;
	}
	if(form.password.value.length < 4)
	{
		alert("Please enter a valid password; it should be at least four characters long.");
		return false;
	}

	return true;
}
