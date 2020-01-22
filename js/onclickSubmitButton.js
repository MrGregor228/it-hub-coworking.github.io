function checkParams() {
	var name = $('#name').val();
	var email = $('#email').val();
	var text = $('#text').val();

	if(email.indexOf('@') != -1 && name.length > 10 && text.length > 10) {
		$('#submit').removeAttr('disabled');
	} else {
		$('#submit').attr('disabled', 'disabled');
	}
}
checkParams();

function hideshow() {
	document.getElementById("mG61Hd").style.cssText="animation:hierrr 1s 1 linear;display:none;";
	document.getElementById("shower").style.cssText="display:block;animation:showwww 1s 1 linear;";
}
// && email.typeof('string') == true && name.typeof('string') == true && text.typeof('string') == true