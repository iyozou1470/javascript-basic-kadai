let num = Math.floor(Math.random() * 20);

switch(true){
    case num % 3 == 0 && num % 5 == 0:
    console.log('3と5の倍数です');
    break;

    case num % 3 == 0:
    console.log('3の倍数です');
    break;
    
    case num % 5 == 0:
    console.log('5の倍数です');
    break;
}