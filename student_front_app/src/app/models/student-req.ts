export class StudentReq {
    
    name: String;
    age : Number;
    class : String;
    adress : {
        number : Number;
        street : String;
        city : String
    }

    constructor( name:String, age:Number, class_id :String, adress_number:Number,adress_street:String,adress_city:String){
    
        this.name = name;
        this.age = age;
        this.class = class_id;
        this.adress = {
            number : adress_number,
            city : adress_city,
            street : adress_street
        }
    }
}
