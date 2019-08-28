
function More(){
    const a=parseInt(prompt('ievadi skaitli'));
    masivs.push(a);
    print();
}


function Less(){
    masivs.pop();
    print();
    }

    function print(){
        document.getElementById("izvads").innerHTML=masivs;

    }
    