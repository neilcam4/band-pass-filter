function bandFilter(input, lowerLimit, upperLimit){
    let newArray =[]
    if (input.length === 0){
        return newArray
    } else {
    input.forEach(function(item){
        if(item >= lowerLimit && item <= upperLimit){
            newArray.push(item)
        } else if( item < lowerLimit){
            item = lowerLimit
            newArray.push(item)
        }
        else if( item > upperLimit){
            item = upperLimit
            console.log(item)
            newArray.push(item)
            console.log(newArray)
        }   
    })
    return newArray
}
}