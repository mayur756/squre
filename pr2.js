function modu(){
    let a=document.getElementById('mod-1').value;

    if(a%3==0){
        document.getElementById('res-3').innerHTML="your number is divided by 3 ..."
    }
    else{
        document.getElementById('res-3').innerHTML="your number is not divided by 3!!"
    }
}

function mainsub(){

    let a=parseInt(document.getElementById('a1').value);
    let b=parseInt(document.getElementById('a2').value);
    let c=parseInt(document.getElementById('a3').value);
    let d=parseInt(document.getElementById('a4').value);

    let sub;

    sub=a-b-c-d;

    document.getElementById('sub1').innerHTML="result:"+sub;
}

function multi(){
     
    let n=parseInt(document.getElementById('b1').value);

    let multi=n*50;

    document.getElementById('mul1').innerHTML=" multi:"+multi;
}

function squre(){
     
    let n=parseInt(document.getElementById('c1').value);

    let squr=n*n;

    document.getElementById('res-4').innerHTML=" squre is:"+squr;
}