// BMI Calculator
exports.BMI = (weight, height, unit = 'metric') =>{
    if(typeCheck(height) || typeCheck(weight)) throw new TypeError("Wrong input type, should be number")
    if(unit === 'metric') return  (weight / Math.pow(height, 2)).toFixed(2)
    else if(unit === 'imperial') return (703 * weight / Math.pow(height, 2)).toFixed(2)
}

const typeCheck = (value)=>{
    if(typeof value !== "number") return true
    else return false
}