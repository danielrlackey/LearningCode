// const someObject = {
//     friends: [
//         {name:"malfoy"},
//         {name:"grabble"},
//         {name:"goyle"}
//     ],
//     color: "baby blue",
//     isEvil: true
// };

// console.log(someObject.friends[0])


const movies = [
   {
       title: "the godfather",
       rating: "5 stars",
       watched: true
   },
   {
       title: "man on fire",
       rating: "5 stars",
       watched: true
   },
   {
       title: "frozen",
       rating: "unknown",
       watched: false
   },
]

for(let i = 0; i < movies.length; i++){
    if(movies[i].watched === true){
    console.log("you have watched" + " " + movies[i].title + " "  + "and you rated the movie" + " " + movies[i].rating)
    } else if (movies[i].watched === false){
        console.log("you have not seen" + " " + movies[i].title + " " + "therefore you cannot rate it")
    }
}
