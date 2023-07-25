function billingFunction(){
  if (same.checked){
    document.getElementsByTagName('fieldset')[1].style.display="block";
    billingName.setAttribute('required',true);
    billingZip.setAttribute('required',true);
  }
  else{ 
    billingName.removeAttribute('required');
    billingZip.removeAttribute('required');
    document.getElementsByTagName('fieldset')[1].style.display="none";
  }
}
