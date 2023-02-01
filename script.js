const form = document.querySelector(".form");
let nameValue = document.querySelector('#name');
let secondNameValue = document.querySelector('#secondName');
let phoneValue = document.querySelector('#phone');
let emailValue = document.querySelector('#email');
let agreeValue = document.querySelector('#agree');

form.addEventListener("submit", (event) => {
  // Предотвращает действие браузера по умолчанию. В данном случае — отправку формы
  // https://learn.javascript.ru/default-browser-action
  event.preventDefault();
  fetch('http://46.21.248.81:3001/', {
      method: 'POST',
      headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
          'Authorization': 'Bearer: Vladislavovna2407'
      },
      body: JSON.stringify({
          name: nameValue.value,
          secondName: secondNameValue.value,
          phone: phoneValue.value,
          email: emailValue.value,
          agree: agreeValue.checked
      }),
  })

  .then((result) => {
          let forma = document.querySelector('.form');
          forma.reset();
          return result.json();
      })
      .then(data => alert("Данные отправлены"))
  
});




fetch('http://46.21.248.81:3001/my-users', {
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Authorization': 'Bearer: Vladislavovna2407'
        },

    })
    .then((answer) => {
        return answer.json();
    })
    .then((value) => {
        console.log(value)
    });