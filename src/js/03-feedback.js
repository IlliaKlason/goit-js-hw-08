


import throttle from 'lodash.throttle';


const feedbackFormState = document.querySelector('.feedback-form');
const email = document.querySelector('[name="email"]');
const message = document.querySelector('[name="message"]');


let formData = {}
function localData() {
   formData = {
      email: email.value,
      message: message.value,
   };
   localStorage.setItem('feedback-form-state', JSON.stringify(formData));
}
feedbackFormState.addEventListener('input', throttle(localData, 500));


function getLocalData() {
   let localData = JSON.parse(localStorage.getItem('feedback-form-state'));
   if (localData) {
      email.value = localData.email;
      message.value = localData.message;
   }
   formData = localData
}

getLocalData();


function submitData(e) {
   e.preventDefault();
   if (email.value.trim() !== '' && message.value.trim() !== '') {
      console.log(formData)
      feedbackFormState.reset()
      localStorage.removeItem('feedback-form-state');
   }

   // this.reset();

}

feedbackFormState.addEventListener('submit', submitData);