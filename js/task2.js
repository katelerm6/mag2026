function changeTheme(){
    document.body.classList.toggle('dark');
}

function sendForm(){
    const lastName = document.getElementById('lastName').value.trim();
    const firstName = document.getElementById('firstName').value.trim();
    const email = document.getElementById('email').value.trim();
    const phone = document.getElementById('phone').value.trim();

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const phonePattern = /^(\+7|8)\d{10}$/;

    if (!emailPattern.test(email)) {
        alert('Введите корректную почту');
        return;
    }

    if (!phonePattern.test(phone)) {
        alert('Введите корректный номер телефона');
        return;
    }
    
    if(lastName === '' || firstName === '' || email === '' || phone === ''){
        alert('Пожалуйста, заполните все поля');
        return;
    }

    document.getElementById('rLast').textContent = lastName;
    document.getElementById('rName').textContent = firstName;
    document.getElementById('rEmail').textContent = email;
    document.getElementById('rPhone').textContent = phone;

    document.getElementById('result').classList.remove('hidden');
}
