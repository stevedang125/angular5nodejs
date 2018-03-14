export class Task {
    // _id will get grenerated with the Schema in DataBase
    // it's optional, when add a new task we don't need this id :)
    public _id?: string; 
    public name: string;
    public time: string;
    public user_id: string; 
}