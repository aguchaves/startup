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
export default EventEmitter;