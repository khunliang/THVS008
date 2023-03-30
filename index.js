function saySomething1() {
    console.log('ไม่ต้องห่วงฉัน 1');
}

let saySomething2 = () => {
    console.log('ไม่ต้องห่วงฉัน 2');
}

saySomething1();
saySomething1();

let sayButton = document.getElementById('say-button');


sayButton.addEventListener('click', () => {
    console.log('ไม่ต้องห่วงฉัน 3');
});

let fruits = ['Apple', 'Banana', 'Carrot']
console.log(fruits);
