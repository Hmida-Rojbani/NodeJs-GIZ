var ch = 'ab'
var str = 'abbbaaaabaaabb'

function nbOcc(str,ch){
    //return str.split(ch).length-1;
    return (str.match(new RegExp(ch,'g'))||[]).length
}

console.log(nbOcc(str,ch));
