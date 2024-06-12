// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?


function getAllDirectors(moviesArray) {return moviesArray.map(element => element.director)}



// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(moviesArray) {
    const stevenMovies = moviesArray.filter(element =>{ //Filtramos el array de objetos para que nos devuelva un array con los objetos que cumplan dicho filtro 
    return element.director=='Steven Spielberg' && element.genre.includes('Drama')
}) 
    return stevenMovies.length  //Cuanto mide el array, es decir cuantas peliculas ha hecho spielberg de
}

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(moviesArray) {
    const scoresList = moviesArray.map(movies => movies.score)
    const scoresAvg = scoresList.reduce((total, current) =>{
        return (total+current)/sumScores.length
    }, 0)
    if(moviesArray.length==0){
        return 0
    }
    else{
        console.log((scoresAvg).toFixed(2))
        return parseInt((scoresAvg).toFixed(2))
    }
}

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(moviesArray) {
    const dramaMovies = moviesArray.filter(movie=> movie.genre.includes("Drama"))
    const scoresList = dramaMovies.map(movies=> movies.score)
    const scoresSum = scoresList.reduce((total, current)=>{
        return total+current
    })

    if(dramaMovies.length==0){
        return 0
    }
    else{
        return scoresSum/scoresList.length
    }
    
}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(moviesArray) {
}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(moviesArray) {}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArray) {}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(moviesArray) {}




/*
const scores = moviesArray.map(element => element.score)
return scores.reduce((total, current)=> {
        return (total+current)/scores.length
    })*/