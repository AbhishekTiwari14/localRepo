for(let i=0; i<5; i++){
    setTimeout(()=>{
        console.log(i);
    }, i*1000)  //prints 0 1 2 3 4 each with 1 sec gap
}