let hover= document.querySelector("#hover")

hover.addEventListener("mouseover", function(event){
    event.target.style.color = "purple";
    setTimeout(function(){
    event.target.style.color = "";
}, 500);
})

// let hover = document.querySelector("#hover");

// hover.addEventListener("mouseover", function(){
//     hover.style.color = "green";
// });

// hover.addEventListener("mouseout", function(){
//     hover.style.color = "";
// })