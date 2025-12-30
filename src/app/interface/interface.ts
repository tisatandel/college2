export interface person
{
    id:number;
    name:string;
    phoneno:number;
    email:string;
    address:string;
    gender:Gender
}
export enum Gender{
    Female = 'female',
    Male = 'male',
    Other = 'other'
}