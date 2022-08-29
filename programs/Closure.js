function dummy(number1){
    function add_number(number2){
        return number1+number2
    }
    return add_number
}
console.log(dummy(10)(100))