

function calcProfit(arr,l = 0) {  
    if( l ){
        l = l
    }else{
        l = 0
    }
    const total = arr.reduce(function(prevVal,currVal){ // sum of bets
        return prevVal + currVal 
    })
    const num=arr.length-l // no of bets
    const profit = total -(arr.length + l)

    arr.sort((a,b)=> a-b) //sort bets

    let ll = profit
    let b=arr.length - 1
    let n = 0 // n is number of games that will cut before we break even or achieve least profit

    while (b) {
        if(ll > 1){
            ll = ll- arr[b]
            n+=1
        }
        b -= 1
    }

    return `${arr.length + l} games _ ${ l} lost _ ${profit.toFixed(2)} profit _ ${n} more games to be in loss`
    // return `No of games = ${arr.length + l}
    // ${ l} games lost
    // The Profit on this ticket is ${profit }. 
    // and if ${ n} more tickets had lost, we would be in the overall loss `
    // return [profit, ll, n]
}

let games =[]
let cut = 0

// let games = [1.56,1.56,1.8,1.85,1.58,1.9,1.56,1.8,1.55,1.6,1.61]
// let cut = 2 // 5.37


// let games = [2.11,1.85,1.85,1.97,2.10,1.83]
// let cut = 1  // 4.71 

// let games = [1.72,1.94]
// let cut

// let games = [1.69,1.38,1.34,1.28,1.64,1.32,1.66,1.98,1.65,1.50,1.31,1.51,1.26,1.39,1.48]
// let cut = 9                      // - 1.61 units

// let games = [1.39,1.22,1.25]  
// let cut = 1                  //  -0.14 units

// let games = [1.7,1.7,1.7,1.7,1.73,1.73,1.58,1.41,1.23,1.25] 
// let cut = 2                 // 3.73 units

// let games = [1.33,1.31,1.27,1.3,1.25,1.32,1.33,1.33,1.36,1.4,1.38,
//     1.36,1.33,1.26,1.3,1.28,1.3,1.31,1.28,1.36,1.24,1.37,1.4,1.29,1.36,
//     1.3,1.4,1.25,1.37,1.37,1.48,1.26,1.37,1.27,1.29,1.25,1.32,1.27,1.31,1.34,1.41,1.17]
// let cut = 6                 //  7.44 units

const ticket = calcProfit(games,cut)
console.log(ticket)
