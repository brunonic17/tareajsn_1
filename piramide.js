let n=5
let p= 1

for(let i=0;i<=n;i++){
    for(let j=0;j<n-i; j++){
        
        p +=" "
      }
       for(let k=0;k<2*i-1; k++){
        p +=1
    }
    p +="\n"
  }
  console.log(p)