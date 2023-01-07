const form = document.querySelector(".form");
form.addEventListener("submit", (event) => {
  // Предотвращает действие браузера по умолчанию. В данном случае — отправку формы
  // https://learn.javascript.ru/default-browser-action
  event.preventDefault();

  fetch('http://46.21.248.81:3001/user', {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Authorization': 'Bearer: Vladislavovna2407'
        },
        body: JSON.stringify({
            name: 'Катя',
            secondName: 'Сергеева',
            phone: 89776000000,
            email: 'Katya@gmail.com',
            agree: true
        }),
    })

    .then((result) => {
            let forma = document.querySelector('.form');
            forma.reset();
            return result.json();
        })
        .then(data => alert("Данные отправлены"))


});


nameValue = document.querySelector('#name');
secondNameValue = document.querySelector('#secondName');
phoneValue = document.querySelector('#phone');
emailValue = document.querySelector('#email');
agreeValue = document.querySelector('#agree');


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
});
