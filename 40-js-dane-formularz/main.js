function result() {
    const inputSurname = document.getElementById('surname').value;
    const nazwisko = document.querySelector('.surname');
    const inputName = document.getElementById('name').value;
    const imię = document.querySelector('.name');
    const inputMessage = document.getElementById('message').value;
    const treść = document.querySelector('.message');

    console.log(treść)

    nazwisko.innerText = inputSurname
    imię.innerText = inputName
    treść.innerText = inputMessage
}


let button = document.querySelector('button')

button.addEventListener('click', result)