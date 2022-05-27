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

    if (name.value.length <= 12) {
      name.push('Credit card number must be 12 digits')
     }








})