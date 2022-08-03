const a = [4,5,2, 1, 7]
let n = 3



let y = []

if (a.length < n ) {
  y = []
 return 
}y = []



const sorted = a.sort((a, b) => b - a).slice(n);

a.forEach((el, i) => {
    sorted.forEach((item, idx) =>{
        if(el === item){
            y.push(a[idx])
        }
    })
})


y
