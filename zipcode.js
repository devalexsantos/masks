function onChange(control, oldValue, newValue, isLoading, isTemplate) {
   if (isLoading || newValue === '') {
      return;
   }
	//Type appropriate comment here, and begin script below
	var newText = newValue.replace(/\D+/g, '')
      .replace(/(\d{5})(\d)/, '$1-$2')
      .replace(/(-\d{3})\d+?$/, '$1');
	if(newText.length != 9) {
		g_form.showFieldMsg('u_zip_code', 'Digite um CEP válido', 'error');
	}
	if(newText == newValue) {
		return;
	} else {
		g_form.setValue('u_zip_code', newText);
	}
   
}
