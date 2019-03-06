module.exports = {
    findSapphires: (obj) => {
        for(let key in obj){
            if(obj[key].hasOwnProperty('children')){
                console.log(obj[key].name)
            } else if (obj[key].hasOwnProperty('sapphires')){
                console.log([obj[key].sapphires]) 
            }
        }
    },
    claim: (arr) => {
        let [head, ...tail] = arr;
        if(arr.length === 1){
            return [`This is my ${head}!`]
        }
        return [`This is my ${head}!`, ...module.exports.claim(tail)]
    }
}