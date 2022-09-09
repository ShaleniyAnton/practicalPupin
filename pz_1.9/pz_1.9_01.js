
function numer(){
    
    for(i = 1; i<100; i++){
        let flag = false;
        for(j=2;j<i;j++ ){
            if(i%j==0){
                flag = true;
                break;
            }
        }
        if(!flag)
        console.log(i);
    }
}
numer();
