function onChange(control, oldValue, newValue, isLoading, isTemplate) {
if (isLoading || newValue === '') {
return;
}
	
//Type appropriate comment here, and begin script below
var newText = newValue
.replace(/\D+/g, '')
.replace(/(\d{2})(\d)/, '$1.$2')
.replace(/(\d{3})(\d)/, '$1.$2')
.replace(/(\d{3})(\d)/, '$1/$2')
.replace(/(\d{4})(\d)/, '$1-$2')
.replace(/(-\d{2})\d+?$/, '$1');

if(newText == newValue){
	return;
}
	
if(/^([0-9]{2}[\.]?[0-9]{3}[\.]?[0-9]{3}[\/]?[0-9]{4}[-]?[0-9]{2})|([0-9]{3}[\.]?[0-9]{3}[\.]?[0-9]{3}[-]?[0-9]{2})$/.test(newValue) === false){
	g_form.setValue('u_cnpj', '');
	g_form.showFieldMsg('u_cnpj', 'Digite um CNPJ válido', 'error');
} else {
	g_form.setValue('u_cnpj', newText);
}

}
