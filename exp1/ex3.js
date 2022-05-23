function nbOcc(str,ch){
    return (str.match(new RegExp(ch,'g'))||[]).length
}

function multiNbOcc(str, tab){
    var nb=0;
    tab.forEach(element => {
        nb+=nbOcc(str,element)
    });
    return nb;
}

var tab = ['ab', 'ba', 'abba']
var str = 'abbbaaaabaaabb'

console.log(multiNbOcc(str,tab));
