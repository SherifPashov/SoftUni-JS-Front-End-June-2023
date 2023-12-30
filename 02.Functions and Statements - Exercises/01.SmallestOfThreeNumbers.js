function smallest (a,b,c)
{
    let min = 0;
    if(a<b && a<c){
        min=a;
    }
    else if (b<a&&b<c) {
        min=b;
    }
    else{
         min = c;
    }
     
    console.log(min)
    
    
}