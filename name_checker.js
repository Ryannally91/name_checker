function checkNames(array, array2){
    var newArray = []
    for(let i=0;i<array.length;i++){
        for(let j=0;j<array2.length;j++){
            if(array[i].toLowerCase()==array2[j].toLowerCase){
                newArray.push(array[i])
            }
        }
    }
    removeMultiples(newArray)
    console.log(newArray);
}

function removeMultiples(arr){
    for(i=0; i<arr.length;i++){
        for(x=i+1; x<arr.length; x++){
            if(arr[i]==arr[x]){
                arr.splice(arr[x],1)
                x--
            }
        }
    }
}

checkNames(names, names2)
