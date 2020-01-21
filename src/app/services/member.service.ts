export class MemberService {

    tables_members =[];

    addMember(name: any, post: any){
        //creation d'un nouveau objet vide
        const MemberObject = {
            id: null,
            MemberNames:'',
            MemberPosts:'Member',
        };
        MemberObject.id=this.tables_members.length + 1;
        MemberObject.MemberNames=name;
        MemberObject.MemberPosts=post;
        this.tables_members.push(MemberObject);
        
    }

    getMember(){
        return this.tables_members;
    }
    deleteMember(id: number){
        this.tables_members.splice(id,id+1);
    }

}