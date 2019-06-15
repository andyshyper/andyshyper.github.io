

function insert(x) {
	document.form.textview.value = document.form.textview.value + x;
}

function equals() {
	var exp = document.form.textview.value;
	if (exp) {
		document.form.textview.value = eval(exp);
	}
}

function clean() {
	document.form.textview.value = "";
}

function backspace (){
	var exp = document.form.textview.value;
	document.form.textview.value = exp.substring(0,exp.length-1);
}
