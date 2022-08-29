function add(number1,number2,callback){
    console.log(`The sum of ${number1} and ${number2} is ${number1+number2}.`)
    callback()
}
let AddMessage = () => {console.log("Add function is executed.")}
add(2,5,AddMessage)


let subtract=(number1,number2,callback)=>{
    console.log(`The difference of ${number1} and ${number2} is ${number1-number2}.`)
    callback()
}
subtract(2,5,SubtractMessage = () => {console.log("Subtract function is executed.")})