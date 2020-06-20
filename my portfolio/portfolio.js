let i = 0, text;
text = "Daniel R Lackey"



function typing() {
    if(i < text.length){
        document.querySelector(".text").innerHTML += text.charAt(i);
         i++;
        setTimeout(typing, 150);
    }
}


typing()