export class EventService {
    
    tables_events =[];

    addEvent(name: any, objectif: any, temps: any, place: any, date: any,details:any, status: any){
        //creation d'un nouveau objet vide
        const EventObject = {
            id: null,
            EventNames:'',
            EventObjectifs:'',
            EventTimes:'',
            EventPlaces:'',
            EventDates:'',
            Details:'',
            EventStatus:' non valide',
        };
        //attribution des valeurs a ce nouveau objet:
        EventObject.id=this.tables_events.length + 1;
        EventObject.EventNames=name;
        EventObject.EventObjectifs=objectif;
        EventObject.EventTimes=temps;
        EventObject.EventPlaces=place;
        EventObject.EventDates=date;
        EventObject.Details=details;
        EventObject.EventStatus=status;
        this.tables_events.push(EventObject);
    }
    
//fonction pour obtenir la table:
    getEvent(){
        return this.tables_events;
    }
    deleteevent(id: number){
        this.tables_events.splice(id,id+1);
    }

}
 