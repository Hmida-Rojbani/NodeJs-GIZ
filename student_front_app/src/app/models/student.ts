export class Student {
    _id: String;
    name: String;
    age : Number;
    class : {
        _id : String;
        name : String;
        active : Boolean
    };
    adress : {
        number : Number;
        street : String;
        city : String
    }

    constructor(_id:String, name:String, age:Number, class_id :String, class_name:String, class_active:Boolean,adress_number:Number,adress_street:String,adress_city:String){
        this._id = _id;
        this.name = name;
        this.age = age;
        this.class = {
            _id : class_id,
            name : class_name,
            active : class_active
        };
        this.adress = {
            number : adress_number,
            city : adress_city,
            street : adress_street
        }
    }
}
