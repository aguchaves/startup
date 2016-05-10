class EventEmitter {
 constructor(){
   this.events = {}
 }

 on(event, callback){
   // pass a callback or listener that will be executed each time a given event is triggered
   this.events[event] = callback
 }

 emit(event){
   // allow a class to trigger events to be consumed by other functions/objects
   this.events[event](event)
 }

 off(event){
   delete this.events[event]
 }
}

class Movie extends EventEmitter {
    constructor (title, year, duration, cast){
        super()
        this.title = title
        this.year = year
        this.duration = duration
        this.cast = []
}
    play(){
        this.emit("play")
    }
    pause(){
        this.emit("pause")
    }
    resume(){
        this.emit("resume")
    }
    addCast(actors){
    let thisActor = this.cast
        if (Array.isArray(actors)){
            actors.forEach(function(eachActor){
                thisActor.push(eachActor)
            })
        } else {
            thisActor.push(actors)
        }
        
    }
}

class Logger {
    constructor(){}
    log(info){
        console.log("output: The "+ info +" event has been emitted")
    }
}

let Social = {
    share: function(friendName){console.log(`Share ${this.title} with   ${friendName}`)},
    like: function(friendName){console.log(`${friendName} like  ${this.title} `)},
}

class Actor {
    constructor (name, lastName, age){
        this.name = name
        this.lastName = lastName
        this.age = age
    }
}

let theGodfather = new Movie("The Godfather", 1972, "2h58m");
let marlon = new Actor("Marlon","Brando",80);
let otherCastGF = [ new Actor("Al","Pacino",75),
                  new Actor("Diane","Keaton",72),
                  new Actor("Robert","Duvall",84)
];

let pulp = new Movie("Pulp Fiction", 1994, "2h34m");
let samuel = new Actor("Samuel","Jackson",68);
let otherCastPF = [ new Actor("John","Travolta",62),
                  new Actor("Bruce","Willis",61),
                  new Actor("Uma","Thurman",46)
];

let logger = new Logger();
let copia = Object.assign(theGodfather, Social);


theGodfather.on("play", logger.log);
theGodfather.on("pause", logger.log);
theGodfather.on("resume", logger.log);
theGodfather.emit('play');
theGodfather.emit('pause');
theGodfather.emit('resume');

copia.share('Dante');
copia.like('Dante');

theGodfather.addCast(marlon);
theGodfather.addCast(otherCastGF);
console.log(theGodfather);

pulp.addCast(samuel);
pulp.addCast(otherCastPF);
console.log(pulp);

