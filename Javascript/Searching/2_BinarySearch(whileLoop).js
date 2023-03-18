const BinarySearch = (array,val)=>{
    let left = 0
    let right = array.length-1
    let mid = Math.floor((left+right)/2)

    while(array[mid]!==val){
        if (val>array[mid]) 
            left = mid+1
        else
            right = mid-1
        mid = Math.floor((left+right)/2)
    }
    return mid
}

console.log(BinarySearch([1,2,3,4,5,6,7,8],7));