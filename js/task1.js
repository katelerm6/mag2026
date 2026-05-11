function checkNumber(){
    const value = prompt('Введите число');

    if(value === null || value.trim() === ''){
        console.log('Ошибка: ничего не введено');
        return;
    }

    if(isNaN(value)){
        console.log('Ошибка: введено не число');
        return;
    }

    const clearNumber = Math.abs(Number(value)).toString().replace('.', '');

    console.log('Количество цифр:', clearNumber.length);
    console.log('Первая цифра:', clearNumber[0]);
}

function showSymbols(){
    const text = prompt('Введите строку');

    if(text === null || text === ''){
        console.log('Строка не введена');
        return;
    }

    let result = '';

    for(let i = text.length - 1; i >= 0; i -= 2){
        result += text[i];
    }

    console.log('Результат:', result);
}

function sumSquares(){
    const table = [
        [3, 5, 7],
        [2, 4, 6],
        [1, 8, 9]
    ];

    let sum = 0;

    for(const row of table){
        for(const number of row){
            sum += number ** 2;
        }
    }

    console.log('Массив:', table);
    console.log('Сумма квадратов:', sum);
}
