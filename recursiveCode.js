module.exports = {
    //Recursive function to find all dragons that own sapphires
    findSapphires: (obj) => {
        //Handles logic for the first object passed in, the parent container that contains all of the main ancestor dragons but is not itself a dragon
        //It checks to see if the passed object has a name property, because the parent container is the only object without a name property
        if(!obj.hasOwnProperty('name')){
            let resultsArr = []
            for(let key in obj){
                let results = module.exports.findSapphires(obj[key])
                resultsArr = [...resultsArr, ...results]
            }
            // console.log(resultsArr)
            return resultsArr;
        //This else statement handles all the logic for each dragon object, NOT the parent container object that contains the main ancestor dragons
        } else {
            if(obj.hasOwnProperty('sapphires')){
                let results = [obj.name]
                if(obj.hasOwnProperty('children')){
                    for(let key in obj.children){
                        results = [...results, ...module.exports.findSapphires(obj.children[key])]
                    }
                }
                return results
            //If the dragon doesn't own sapphires, but does have children, this will check to see if its descendants own sapphires
            } else {
                if(obj.hasOwnProperty('children')){
                    let results = []
                    for(let key in obj.children){
                        results = [...results, ...module.exports.findSapphires(obj.children[key])]
                    }
                    return results
                } else {
                    return []
                }
            }
        }
    },
    //Maps over an array of gems and claims them
    claim: (arr) => {
        let [head, ...tail] = arr;
        if(arr.length === 1){
            return [`This is my ${head}!`]
        }
        return [`This is my ${head}!`, ...module.exports.claim(tail)]
    }
}