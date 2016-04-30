import EventEmitter from "src/eventEmitter";
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
export default Movie;