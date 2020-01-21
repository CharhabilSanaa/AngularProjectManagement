export class ProjectService {

    tables_projects =[];

    addProject(name: any,chef:any, date1: any, date2: any, objectif: any, budget: any, status: any){
        //creation d'un nouveau objet vide
        const ProjectObject = {
            id: null,
            ProjectNames:'',
            ProjectChefs:'',
            ProjectFirstDates:'',
            ProjectLastDates:'',
            ProjectObjectifs:'',
            ProjectBudgets:'',
            ProjectsStatus:' non valide',
        };
        //attribution des valeurs a ce nouveau objet:
        ProjectObject.id=this.tables_projects.length + 1;
        ProjectObject.ProjectNames=name;
        ProjectObject.ProjectChefs=chef;
        ProjectObject.ProjectFirstDates=date1;
        ProjectObject.ProjectLastDates=date2;
        ProjectObject.ProjectObjectifs=objectif;
        ProjectObject.ProjectBudgets=budget;
        ProjectObject.ProjectsStatus=status;
        this.tables_projects.push(ProjectObject);
    }
    
//fonction pour obtenir la table:
    getProject(){
        return this.tables_projects;
    }
    getEdit(id:number){
        return this.tables_projects[id];
    }
    deleteProject(id: number){
        this.tables_projects.splice(id,id+1);
    }

    editProject(name: any,chef:any, date1: any, date2: any, objectif: any, budget: any, status: any){
        //creation d'un nouveau objet vide
        const ProjectObject = {
            id: null,
            ProjectNames:'',
            ProjectChefs:'',
            ProjectFirstDates:'',
            ProjectLastDates:'',
            ProjectObjectifs:'',
            ProjectBudgets:'',
            ProjectsStatus:' non valide',
        };
        //attribution des valeurs a ce nouveau objet:
        ProjectObject.id=this.tables_projects.length + 1;
        ProjectObject.ProjectNames=name;
        ProjectObject.ProjectChefs=chef;
        ProjectObject.ProjectFirstDates=date1;
        ProjectObject.ProjectLastDates=date2;
        ProjectObject.ProjectObjectifs=objectif;
        ProjectObject.ProjectBudgets=budget;
        ProjectObject.ProjectsStatus=status;
        this.tables_projects.push(ProjectObject);
    }

}
 