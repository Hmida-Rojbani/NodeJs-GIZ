function sum(numToSum){
    let sum=0;
    numToSum.forEach(element => {
        sum+=element;
    });
    return sum;
}

// module.exports={
//     funSum : sum
// }

module.exports.funSum=sum;