function monthlySavings(incomesArr,livingCost) {
    if(!(Array.isArray(incomesArr)) || !(typeof(livingCost)==="number")){
        return "Invalid Input";
    }

    let totalIncome=0;

    incomesArr.forEach(income=>{
        if(income>=3000){
            const tax=income*0.2;
            totalIncome+=(income-tax)
        }else{
            totalIncome += income
        }
    })

    const savings = totalIncome-livingCost;
    return savings<0?'"earn more"':savings;

}

// console.log(Array.isArray("ewdwed"));

// console.log(monthlySavings([1000,2000,3000],5400));
// console.log(monthlySavings([1000,2000,2500],5000));
// console.log(monthlySavings([900,2700,3400],10000));
