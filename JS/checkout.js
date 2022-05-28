const name =document.getElementById('name')
const checkoutform =document.getElementById('form')
const errorElement = document.getElementById('error')
const creditcard= document.getElementById('creditcard')
form.addEventListener('submit', (e) => {
    let messages = []
    if (name.value === '' || name.value == null){
      messages.push('Name is required')
    }
    if (messages.length >0) {
      e.preventDefault()
      errorElement.innertext = messages.join(',')
    }
    if (creditcart.value.length <= 12) {
     creditcard.push('Credit card number must be 12 digits')
    }
   
})
 
function validateForm() {
  let x = document.forms["checkoutform"]["card"].value;
  if (x.value.length <= 12) {
    form1.push('Credit card number must be 12 digits')
    return false;
  }
}


function validateForm() {
           
  let x = document.forms["checkoutform"]["card"].value;
 
  if (x.length <= 12) {

    document.getElementById("notvalidate").innerHTML="Credit card number should be more than 12 digits";
    return false;
  }else{
      return true;
  }
}