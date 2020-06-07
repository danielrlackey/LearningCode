let toDos = ["bake a cake"];

let input = prompt("what do you want to do?")


while(input != "quit"){
    if(input === "list"){
        toDos.forEach(function(toDo, i){
            console.log(i + ": " + toDo)
        });
     }else if(input === "new"){
        let newToDo = prompt("enter a new todo")
        toDos.push(newToDo);
    }else if(input === "delete"){
        let index = prompt("What item do you want to delete?")
        toDos.splice(index, 1);
        console.log("deleted todo item")
    }
    input = prompt("what do you want to do?")
}
console.log("OK YOU QUIT THE APP");

// let colors = ["red", "yellow", "blue", "pink"]

// for(let i = 0; i < colors.length; i++){
//     alert(colors[i]);
// }

