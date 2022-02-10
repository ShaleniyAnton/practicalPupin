numb = 10000;
result = 51;
counter = 0;
while(result>50){
    numb = numb/2;
    result = numb;
    counter++;
}
console.log(result + ' '+ counter);