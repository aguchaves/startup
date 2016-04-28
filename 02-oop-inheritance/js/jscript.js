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
    constructor (title, year, duration){
        super()
        this.title = title
        this.year = year
        this.duration = duration
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
}

class Logger {
    constructor(){}
    log(info){
        console.log("output: The "+ info +" event has been emitted")
    }
}

let theGodfather = new Movie("The Godfather", 1972, "2h58m");
let logger = new Logger();


theGodfather.on("play", logger.log);
theGodfather.on("pause", logger.log);
theGodfather.on("resume", logger.log);
theGodfather.emit('play');
theGodfather.emit('pause');
theGodfather.emit('resume');

