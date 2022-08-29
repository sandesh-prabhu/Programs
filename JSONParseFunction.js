let obj=JSON.parse('{"FirstName":"Hello","LastName":"World"}')
console.log(obj.FirstName+" "+obj.LastName)
//Hello World

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
//He is John

let obj3={State:"Karnataka",City:{Name:"Udupi",Code:20}}
let obj4=JSON.parse(JSON.stringify(obj3))
obj4.City.Code=21
console.log(obj3)
console.log(obj4)
console.log(typeof(JSON.stringify(obj3)))
//{ State: 'Karnataka', City: { Name: 'Udupi', Code: 20 } }
//{ State: 'Karnataka', City: { Name: 'Udupi', Code: 21 } }
//string