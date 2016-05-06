var topic3App = angular.module('topic3App');

topic3App.factory('topic3Factory', ['store', function(store){
    
    var that = this;
        this.movies = [
            {
            "name":"Godfather",
            "id": 1,
            "year": 1972,
            "director": "Francis Ford Coppola",
            "genre": "Crime/Drama",
            "sinopsis": "The aging patriarch of an organized crime dynasty transfers control of his clandestine empire to his reluctant son."
            },
            {   
            "name":"Pulp Fiction",
            "id": 2,
            "year": 1994,
            "director": "Quentin Tarantino",
            "genre": "Crime/Drama",
            "sinopsis": "The lives of two mob hit men, a boxer, a gangster's wife, and a pair of diner bandits intertwine in four tales of violence and redemption."
            },
            {
            "name": "The Departed",
            "id": 3,
            "year": 2006,
            "director": "Martin Scorsese",
            "genre": "Thriller",
            "sinopsis": "An undercover cop and a mole in the police attempt to identify each other while infiltrating an Irish gang in South Boston."
            },
            {                
            "name": "Trainspotting",
            "id": 4,
            "year": 1996,
            "director": "Danny Boyle",
            "genre": "Drama",
            "sinopsis": "Renton, deeply immersed in the Edinburgh drug scene, tries to clean up and get out, despite the allure of the drugs and influence of friends."
            },
            {
             "name": "Pearl Harbor",
             "id": 5,
            "year": 2001,
            "director": "Michael Bay",
            "genre": "Drama/History",
            "sinopsis": "Pearl Harbor follows the story of two best friends, Rafe and Danny, and their love lives as they go off to join the war."
            }
        ];
    
        this.setMovieClicked = function(movieClicked){
            store.set('movieClicked', movieClicked);
        }
        
        this.getMovieClicked = function(){
            var mc = store.get('movieClicked');
            return mc;
        }
        
        this.addNewMovie = function(newMovie){
            this.movies.push(newMovie);
        }
        this.saveEdition = function(movie){
            this.movies.forEach(function(movieToEdit,i){
                if(movie.id === movieToEdit.id){
                    movieToEdit.name = movie.name;
                    movieToEdit.director = movie.director;
                    movieToEdit.year = movie.year;
                    movieToEdit.sinopsis = movie.sinopsis;
                }
            },this);
        }
        this.saveArray = function(){
            store.set('movies', this.movies);
        }
        this.getList = function(){
            return this.movies;
        }
        this.delete = function(idMovie){
            this.movies.forEach(function(movieToDelete,i){
                if(idMovie === movieToDelete.id){
                    this.movies.splice(i,1);
                }
            }, this);
        }
        
    
    return {
        setMovieClicked : function (movieClicked){
            that.setMovieClicked(movieClicked);
        },
        getMovieClicked : function (){
            return that.getMovieClicked();
        },
        addNewMovie : function (newMovie){
            that.addNewMovie(newMovie);
        },
        getList : function (){
            return that.getList();
        },
        delete : function (idMovie){
            that.delete(idMovie);
            that.saveArray();
        },
        saveEdition : function (movie){
            that.saveEdition(movie);
            that.saveArray();
    }
    }
    
}]);