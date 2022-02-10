let count = 0;
do{
    
    if(count==0){
        console.log(count + " - це нуль");
    }else if(count%2==0){
        console.log(count + " - це парне число");
    }
    else{
        console.log(count + " - це не парне число");
    }
    
    count++;
}
while(count<=20);
