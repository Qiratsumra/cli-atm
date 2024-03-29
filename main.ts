#! /usr/bin/env node 

import inquirer from "inquirer";

console.log("\t Welcome to ATM machine");

let my_pin=1866;
let my_balance=10000;



let answerPin =  await inquirer.prompt([{
    name:"pin",
    type:"number",
    message:"Enter your pin number "
}]);
if (answerPin.pin === my_pin ) {
    console.log("successfully you are login");
    console.log("Your total amount is $10000");
    
}else {
    console.log("Your pin number is wrong");
    
}if(answerPin.pin === my_pin){
    let options = await  inquirer.prompt([{
        name:"actions",
        message:"Select your option ",
        type:"list",
        choices:["withdraw","checkbalance","fastcash"]
    }]);
    if (options.actions === "withdraw") {
       let withdrawAns = await inquirer.prompt([{
        name:"amount",
        message:"Enter your amount",
        type:"number"
       }]);
       if(withdrawAns.amount > my_balance){
       console.log("Please enter valid amount accounding to your total balance");
       
       } else if (withdrawAns.amount < my_balance) {
       let leftBalance=my_balance - withdrawAns.amount
        console.log(`Your remaining amount is ${leftBalance}`);
        
       }else if (withdrawAns.amount === my_balance) {
        let zeroValue= my_balance
        console.log(`Your whole withdraw amount is:${zeroValue}`);
        
       }}if(options.actions === "fastcash"){
        let fastCash = await inquirer.prompt([{
            name:"fastcash",
            message:"How much fast cash do you  want?",
            type:"list",
            choices:["$100","$500","$1000"]
        }]);
        if (fastCash.fastcash === "$100") {
            console.log("Your fast cash has withdraw");
        }else if (fastCash.fastcash === "$500") {
            console.log("Your fast cash has withdraw");
        }else if (fastCash.fastcash === "$1000") {
            console.log("Your fash cash has withdraw");
        }else{
            console.log("Please enter the valid amount");
            
        }
       }else if (options.actions === "checkbalance") {
    console.log(`Your current amount is $${my_balance}`);
    
       }
    
        
       }

    



