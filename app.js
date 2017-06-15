/*
// variable example
var person = {
    firstName: "Rawad",
    lastName: "Rifai"
}
console.log(person);



// function example
function addNumber(a,b) {
    return a+b
}

console.log(addNumber(3,6))



// anonymous function example
var myFunc = function () {
    console.log("whatever")
}

myFunc();


// setTimeout example and use functions in other functions
setTimeout(myFunc, 5000)



// handling multiple requests
function placeAnOrder(orderNumber) {
    console.log("Customer order: ", orderNumber)

    cookAndDeliverFood(function () {
        console.log("Delivered food order:", orderNumber)
    })
}

// simulate a 5 second operation
function cookAndDeliverFood(callback) {
    setTimeout(callback, 5000)
}

placeAnOrder(1)
placeAnOrder(2)
placeAnOrder(3)
placeAnOrder(4)
placeAnOrder(5)
 */

// == vs ===
console.log(10 == '10')
console.log(10 === '10')

// Prototyping
function User() {

    this.name = ""
    this.life = 100
    this.giveLife = function (targetPlayer) {

        targetPlayer.life += 1
        this.life -= 1
        console.log(this.name + " gave a life to " + targetPlayer.name)
    }
}

// create 2 instances
var Buckey = new User()
var Wendy = new User()

// set names
Buckey.name = "Buckey"
Wendy.name = "Wendy"

console.log(Buckey.name + " has " + Buckey.life + " lives")
console.log(Wendy.name + " has " + Wendy.life + " lives")

Buckey.giveLife(Wendy)

console.log(Buckey.name + " has " + Buckey.life + " lives")
console.log(Wendy.name + " has " + Wendy.life + " lives")


User.prototype.upperCut = function (targetPlayer) {

    targetPlayer.life -= 3
    console.log(this.name + " uppercutted " + targetPlayer.name)
}

Wendy.upperCut(Buckey)

console.log(Buckey.name + " has " + Buckey.life + " lives")
console.log(Wendy.name + " has " + Wendy.life + " lives")
