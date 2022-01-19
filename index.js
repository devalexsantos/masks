//CNPJ MASK
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

if(!isLoading && /^([0-9]{2}[\.]?[0-9]{3}[\.]?[0-9]{3}[\/]?[0-9]{4}[-]?[0-9]{2})|([0-9]{3}[\.]?[0-9]{3}[\.]?[0-9]{3}[-]?[0-9]{2})$/.test(newValue) === false && newValue !== ''){
		g_form.setValue('u_cnpj', '');
		g_form.showFieldMsg('u_cnpj', 'Digite um CNPJ válido', 'error');
	return;
	}

if (newText == newValue){
return;
}else{
	g_form.setValue('u_cnpj', newText);
}

}

//PHONE NUMBER MASK
function onChange(control, oldValue, newValue, isLoading, isTemplate) {
	
	if (isLoading || newValue === '') {
	var phoneNumber = g_form.getControl('u_phone_number');
		phoneNumber.placeholder = "DDD + Number";
		return;
   }

   //Type appropriate comment here, and begin script below
var newText = newValue
      .replace(/\D+/g, '')
      .replace(/(\d{2})(\d)/, '($1) $2')
      .replace(/(\d{4})(\d)/, '$1-$2')
      .replace(/(\d{4})-(\d)(\d{4})/, '$1$2-$3')
      .replace(/(-\d{4})\d+?$/, '$1');
	if (newText == newValue){
		return;
	} else {
		g_form.setValue('u_phone_number', newText);
		var test = /^\([1-9]{2}\) (?:[2-8]|9[1-9])[0-9]{3}\-[0-9]{4}$/.test(newText);
		if(!test){
			g_form.showFieldMsg('u_phone_number', 'Digite um número válido', 'error');
		}
	}
   
}

//ZIP CODE MASK
function onChange(control, oldValue, newValue, isLoading, isTemplate) {
   if (isLoading || newValue === '') {
      return;
   }
	//Type appropriate comment here, and begin script below
	var newText = newValue.replace(/\D+/g, '')
      .replace(/(\d{5})(\d)/, '$1-$2')
      .replace(/(-\d{3})\d+?$/, '$1');
	if(newText.length != 9) {
		alert('Atenção! O CEP deve conter no mínimo 8 dígitos.');
	}
	if(newText == newValue) {
		return;
	} else {
		g_form.setValue('u_zip_code', newText);
		alert(newText);
	}
   
}
