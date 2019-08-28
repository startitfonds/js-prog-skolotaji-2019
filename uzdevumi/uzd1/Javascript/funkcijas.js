let i=1;
function palielinat(){
    
    
        i++        ;
    mainitVertibu(i);
}

function samazinat(){
   if (i<=1) {
        i=1;
        alert('vertiba var būt tikai naturāls skaitlis (0,bezgaliba)');
       } else {
     i--;        }       
        mainitVertibu(i);
       }
function mainitVertibu(vertiba){
    document.getElementById("vertiba").value=vertiba;
}