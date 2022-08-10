

// localStorage.setItem("my-date", JSON.stringify({ lol: "lol", value: "lol2" }))
// let lol = localStorage.getItem("my-date")
// console.log(lol);
// let lol1 = JSON.parse(lol)
// console.log(lol1);
// localStorage.getItem("my-date")
// console.log(window.localStorage);


import throttle from 'lodash.throttle';


const feedbackFormState = document.querySelector('.feedback-form');
const email = document.querySelector('[name="email"]');
const message = document.querySelector('[name="message"]');


feedbackFormState.addEventListener('input', throttle(localData, 500));


function localData() {
   const formData = {
      email: email.value,
      message: message.value,
   };
   localStorage.setItem('feedback-form-state', JSON.stringify(formData));
}


function getLocalData() {
   let localData = JSON.parse(localStorage.getItem('feedback-form-state'));
   if (localData !== null) {
      email.value = localData.email;
      message.value = localData.message;
   }
}

getLocalData();


feedbackFormState.addEventListener('submit', submitData);


function submitData(e) {
   e.preventDefault();
   // this.reset();
   feedbackFormState.reset()

   console.log(localStorage.getItem('feedback-form-state'));

   localStorage.removeItem('feedback-form-state');
}