function showMultiplicationTable(input){
    for (var i = 0; i <= 10; i++){
        console.log(i * input);
    }
}

for (var i = 0; i < 10; i++) {
    var random = Math.floor(Math.random() * 180) + 20;
    if(random % 2 === 0){
        console.log(random + ' is Even');
    } else {
        console.log(random + ' is Odd');
    }
}

// for (var i = 1; i < 10; i++){
//     var num = '';
//     for(var j = 0; j < i; j++){
//         num += i;
//     }
//     console.log(num);
// }

for(var i = 1; i < 10; i++) {
    console.log(String(i).repeat(i))
}

for(var i = 100; i > 0; i -= 5) {
    console.log(i);
}