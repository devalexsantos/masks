function onChange(control, oldValue, newValue, isLoading, isTemplate) {
	
	if (isLoading || newValue === '') {
		var placeholder = g_form.getControl('u_phone_number');
		placeholder.placeholder = "DDD + Número";
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
	}
	
	g_form.setValue('u_phone_number', newText);
	
	var test = /^\([1-9]{2}\) (?:[2-8]|9[1-9])[0-9]{3}\-[0-9]{4}$/.test(newText);
	if(!test){
		g_form.showFieldMsg('u_phone_number', 'Digite um número válido', 'error');
	}
   
}
