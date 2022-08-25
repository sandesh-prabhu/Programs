// let test= ()=>{
//     return new Promise((resolve)=>{
//         setTimeout(()=>{
//             console.log("Inside test function")
//             resolve()
//         },500)
//     })
// }
// console.log("First line")
// let func=async()=>{
//     await test()
//     console.log("Last line")
// }
// func()



let test= ()=>{
    return new Promise((resolve)=>{
        setTimeout(()=>{
            r="Inside test function"
            resolve(r)
        },500)
    })
}
console.log("First line")
let func=async()=>{
    await test().then(function(){console.log(r)})
    console.log("Last line")
}
func()