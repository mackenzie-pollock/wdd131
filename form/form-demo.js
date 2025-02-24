// form-demo.js

  
  function togglePaymentDetails(e) {
    // get a reference to the form. We can access all the named form inputs through the form element.
    const theForm =document.querySelector('#checkoutForm');
    // we will also need the creditCardContainer and paypalUsernameContainer
    const creditCardContainer = document.querySelector('#creditCardContainer') ;
    const paypalContainer = document.querySelector('#paypalContainer');
    
    // togglePaymentDetails(){
    //   if(creditCardContainer){
    //     show creditCardContainer.hide
    //     take off required pp
    //   } else if (pp){
    //     show pp 
    //     take off required cc
    //   }
    // }
  
    // Hide payment containers by adding the '.hide' class to each of them

    // themeSelector.addEventListener('hide', hideCreditCard);
    // Disable required for payment fields...if we hide a required field the browser will throw an error when we try to submit!
  
    // element.required=false
    //element.classList.add('hide')   .remove(can use instead of .add)
    // Show the container based on the selected payment method, and add the required attribute back.
    
    let value = e.target.value; //theForm.paymentMethod.value

    if (value == 'creditCard') {
      
    } else if (value == 'paypal') {
      
    }


  }
  
  // attach a change event handler to the paymentMethod input
const selectElement = document.getElementById("paymentMethod")
// attach a submit event handler to the form
selectElement.addEventListener('change', togglePaymentDetails);