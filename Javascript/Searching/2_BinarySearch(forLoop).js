const BinarySearch = (array,val)=>{
    let left = 0
    let right = array.length-1
    let mid = Math.floor((left+right)/2)
    for (let i = 0; i < array.length; i++) {
        if (val===array[mid]) 
        return mid
    else if(val>array[mid])
        left = mid+1
    else    
        right = mid-1
    mid = Math.floor((left+right)/2)
    }
}

console.log(BinarySearch([1,2,3,4,5,6,7,8],7));