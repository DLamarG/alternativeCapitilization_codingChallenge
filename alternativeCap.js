function capitalize(s){
    let resultRR = [];
    let count = 0;
    while(count <= 2){
      count++
      charRR = s.split('')
      if(count===1){
        newStr = charRR.map((x,index)=> index%2==0 ? x.toUpperCase() : x.toLowerCase()).join('')
        resultRR.push(newStr)
      }
      if(count===2){
        newStr = charRR.map((x,index)=> index%2==0 ? x.toLowerCase() : x.toUpperCase()).join('')
        resultRR.push(newStr)
      }
    }
    return resultRR
  };


console.log(capitalize("abcdef"))
console.log(capitalize("codewars"))
console.log(capitalize("codewarriors"))