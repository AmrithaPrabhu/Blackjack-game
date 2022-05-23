let firstCrd
let secondCrd
let sum
let hasBlack=false
let isAlive=true
let message=""
let card=[]
let player={
    name:"Amritha",
    money:200,
}
let s=document.getElementById("express")
s.innerHTML=player.name+": $"+player.money
let addition=document.getElementById("summ")
let doc=document.getElementById("display")
let cards=document.getElementById("cards")
console.log(card)
function getRandomCard(){
    let bruh=Math.floor(Math.random()*13)+1
    if(bruh===1){
        return 11
    }
    else if(bruh>=11){
        return 10
    }
    return Math.floor(Math.random()*13)+1
}
function startGame(){
    addition.innerHTML="Sum: "
    cards.innerHTML="Cards: "
    message="Want to play a round?"
    isAlive=true
    hasBlack=false
    doc.innerHTML=message
    firstCrd=getRandomCard()
    secondCrd=getRandomCard()
    sum=firstCrd+secondCrd
    card=[firstCrd,secondCrd]
    continueGame()
}
function continueGame(){
    addition.innerHTML+=" "+sum
    for(let i=0;i<card.length;i++){
        cards.textContent+=card[i]+" "
    }
     if(sum<=20){
         message="Do you want to draw a new card?"
     }
     else if(sum===21){
         message="You win!"
         hasBlack=true

     }
     else{
            message="You lose!"
            isAlive=false
     }
     console.log(message)
     doc.innerHTML=message
        
}
function newCrd(){
    if(isAlive===false || hasBlack===true){
        alert("You need to start the game afresh!")
        addition.innerHTML="Sum: "
        cards.textContent="Cards: "
        message="Want to play a round?"
        doc.innerHTML=message
        isAlive=true
        hasBlack=false
        card=[]
        sum=0
        return 0
    }
    if(card.length===0){
        alert("You need to start the game!")
        return 0
    }
    addition.innerHTML="Sum: "
    let thirdCrd=getRandomCard();
    cards.textContent="Cards: "
    
    sum+=thirdCrd
    card.push(thirdCrd)
    continueGame()
    
}