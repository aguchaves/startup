describe('Create Controller', function() {
    
    var factoryTest;
    
    beforeEach(module('topic3App'));
    
    beforeEach(inject(function(_topic3Factory_){
        factoryTest = _topic3Factory_;
    }));
    
  it('Should add a new Movie to the Array of Movies in the Scope', function() {
     var moviesLenght = factoryTest.getList().length;
      var newMovie = {
            "name":"New Movie",
            "id": 9,
            "year": 1810,
            "director": "New Movie Director",
            "genre": "Movie Genre",
            "sinopsis": "This is the new movie sinopsis." 
      }
      factoryTest.addNewMovie(newMovie);
      
    expect(factoryTest.getList().length).toBe(moviesLenght+1);
  });
    
    it('Should delete a selected Movie to the Array of Movies in the Scope', function() {

      var movieToDelete = {
            "name":"New Movie",
            "id": 9,
            "year": 1810,
            "director": "New Movie Director",
            "genre": "Movie Genre",
            "sinopsis": "This is the new movie sinopsis." 
      }
    
      factoryTest.addNewMovie(movieToDelete);
    var moviesLenght = factoryTest.getList().length;
      factoryTest.delete(movieToDelete.id);
      
    expect(factoryTest.getList().length).toBe(moviesLenght-1);
  });
    
});

