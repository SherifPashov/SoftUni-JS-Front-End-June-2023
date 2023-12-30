

function solve (comandInfo){
    class MoveLibraly{

        constructor(){
            this.movies = [];
        }
    
        addMovie(comandInfo){
            let [_,name]= comandInfo.split("addMovie ");
            this.movies.push({name});
        }
        
        addDirector(comandInfo){
            let [movieName,directorName]= comandInfo.split(" directedBy ");
            let movie = this.movies.find(m=>m.name===movieName);
    
            if(movie){
                movie.director = directorName;
            }
        }
    
        addDate(comandInfo){
            let [movieName,date]=comandInfo.split(" onDate ");
            let movie = this.movies.find(m=>m.name===movieName);
    
            if(movie){
                movie.date=date;
            }
        }
    }
    let movieLibrary = new MoveLibraly();
    
    comandInfo.forEach(command => {
        if (command.includes("addMovie")) {
            movieLibrary.addMovie(command);
          } else if (command.includes("directedBy")) {
            movieLibrary.addDirector(command);
          } else if (command.includes("onDate")) {
            movieLibrary.addDate(command);
          }
        
    });

    movieLibrary.movies
    .filter((m) => m.name && m.director && m.date)
    .forEach((m) => console.log(JSON.stringify(m)));
}

solve([
    "addMovie Fast and Furious",
    "addMovie Godfather",
    "Inception directedBy Christopher Nolan",
    "Godfather directedBy Francis Ford Coppola",
    "Godfather onDate 29.07.2018",
    "Fast and Furious onDate 30.07.2018",
    "Batman onDate 01.08.2018",
    "Fast and Furious directedBy Rob Cohen",
  ]);