#! /usr/bin/env node
import inquirer from "inquirer"

const currency: any = {

    USD : 1,    // Base currency
    PKR : 278,
    INR : 83.36,
    EURO: 0.93,
    Afghani: 72.71,
    Dinar : 0.38,
    Taka : 109.79

};
let user_answer = await inquirer.prompt(
    [
        {
            name : "from",
            message : "Enter from currency",
            type : "list",
            choices :["USD","PKR","INR","EURO","Afghani","Dinar","Taka"]

        },
        {
            name : "to",
            message : "Enter to currency",
            type : "list",
            choices :["USD","PKR","INR","EURO","Afghani","Dinar","Taka"]

        },
        {
            name : "amount",
            message : "please enter your amount",
            type : "number"
    
        }

    ]
)
 let fromAmount = currency[user_answer.from]
 let toAmount = currency[user_answer.to]
 let amount = user_answer.amount
 let baseAmount = amount/fromAmount
 let convertedAmount = baseAmount * toAmount
 console.log(Math.round(convertedAmount));
 
 
