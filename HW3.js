let arr = []
for (let i=0;i<100;i++){
    arr.push(Math.round((Math.random()*100)))+1
}

console.log("100 nilai acak",arr)

let arrGenap=[]
let arrGanjil=[]
for (let i=0;i< arr.length;i++){
    if(i%2==0){
        arrGenap.push(arr[i])
    }else{
        arrGanjil.push(arr[i])
    }
}
console.log("array genap",arrGenap)
console.log("array ganjil", arrGanjil)

function findMax(arr){
    let max= arr[0]
    for(let i=0;i<arr.length;i++){
        if(max<arr[index]){
            max=arr[index]
        }
    }
    return max
}

function findMin(arr){
    let min =arr[0]
    for(let i=0;i<arr.length;i++){
        if (min>arr[i]){
            min=arr[i]
        }
    }
    return min
}

console.log("array genap")
maxArrGenap = findMax(arrGenap)
minArrGenap=findMin(arrGenap)
console.log(maxArrGenap)
console.log(minArrGenap)

console.log("array ganjil")
maxArrGanjil=findMax(arrGanjil)
minArrGanjil=findMin(arrGanjil)
console.log(maxArrGanjil)
console.log(minArrGanjil)

function total(arr){
    let total=0
    for(let i=0;i<arr.length;i++){
        total += arr[i]
    }
    return total
}
console.log("array genap")
totalArrGenap=total(arrGenap)
rataArrGenap=totalArrGenap/arrGenap.length
console.log(totalArrGenap)
console.log(rataArrGenap)


console.log("array ganjil")
totalArrGanjil=total(arrGanjil)
rataArrGanjil=totalArrGanjil/arrGanjil.length
console.log(totalArrGanjil)
console.log(rataArrGanjil)


if(maxArrGanjil == maxArrGenap){
    console.log("max sama")
}else if(maxArrGanjil>maxArrGenap){
    console.log("Max ganjil lebih besar")
}else{
    console.log("max genap lebih besar")
}

if(minArrGanjil == minArrGenap){
    console.log("min sama")
}else if(minArrGanjil>minArrGenap){
    console.log("Min ganjil lebih besar")
}else{
    console.log ("min genap lebih besar")
}
if(totalArrGanjil == totalArrGenap){
    console.log("total sama")
}else if(totalArrGanjil>totalArrGenap){
    console.log("total ganjil lebih besar")
}else{
    console.log ("total genap lebih besar")
}

if(rataArrGanjil == rataArrGenap){
    console.log("rata rata sama")
}else if(rataArrGanjil>rataArrGenap){
    console.log("rata rata ganjil lebih besar")
}else{
    console.log ("rata rata genap lebih besar")
}
