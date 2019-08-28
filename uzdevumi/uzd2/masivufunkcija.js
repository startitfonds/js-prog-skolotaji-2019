
function More(){
    const a=parseInt(prompt('ievadi skaitli'));
    masivs.push(a);
    print();
}


function Less(){
    masivs.pop();
    print();
    }

function ielikt(){
    const b=parseInt(prompt('ievadi indeksa nr'));
    
    masivs.splice(b,0,123);
  
    print();
}

function iznemt(){
    const c=parseInt(prompt('ievadi indeksa nr'));
    masivs.splice(c,1);
  
    print();
}
function print(){
        document.getElementById("izvads").innerHTML=masivs;

}
    