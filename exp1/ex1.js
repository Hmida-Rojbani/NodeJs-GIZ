function verify(arr,val){
    return arr.includes(val)?'Vrai':'Faux';
}

var tab=[1,4,6,3,9];
var el = 6;
console.log(verify(tab,el));