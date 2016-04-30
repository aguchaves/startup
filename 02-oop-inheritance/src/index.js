import EventEmitter from "src/eventEmitter";
import Movie from "src/movie";
import Actor from "src/actor";
import Social from "src/social";
import Logger from "src/logger";

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