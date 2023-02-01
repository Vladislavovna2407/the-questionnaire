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
  fetch('https://polinashneider.space/user', {
      method: 'POST',
      headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
          'Authorization': 'Bearer: PolinaShneider'
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




fetch('https://polinashneider.space/last-user', {
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Authorization': 'Bearer: PolinaShneider'
        },

    })
    .then((answer) => {
        return answer.json();
    })
    .then((value) => {
        console.log(value)
    });