let obj=JSON.parse('{"FirstName":"Hello","LastName":"World"}')
console.log(obj.FirstName+" "+obj.LastName)


let text='{"name":"John","gender":"Male"}'
let obj2=JSON.parse(text,(key,value)=>{
    if(key=="gender"){
        if(value=="Male")
            return "He"
        else
            return "She"
    }
    else
        return value
})

console.log(obj2.gender+" is "+obj2.name)