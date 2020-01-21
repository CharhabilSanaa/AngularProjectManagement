export class TaskService {

    tables_tasks =[];

    addTask(name: any, member: any,objectif:any, date1:any,date2:any){
        //creation d'un nouveau objet vide
        const TaskObject = {
            id: null,
            TaskNames:'',
            TaskMembers:'',
            TaskObjectifs:'',
            TaskFirstDates:'',
            TaskLastDates:'',
            TasksStatus:'non valide',
        };
        
        TaskObject.id=this.tables_tasks.length + 1;
        TaskObject.TaskNames=name;
        TaskObject.TaskMembers=member;
        TaskObject.TaskObjectifs=objectif;
        TaskObject.TaskFirstDates=date1;
        TaskObject.TaskLastDates=date2;
        this.tables_tasks.push(TaskObject);
    }

    getTask(){
        return this.tables_tasks;
    }
    deleteTask(id: number){
        this.tables_tasks.splice(id,id+1);
    }


}