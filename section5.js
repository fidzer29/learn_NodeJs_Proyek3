//lesson5
const book = {
    title: 'Ego is the Enemy',
    author: 'Ryan Holiday'
   }
   // Covert JavaScript object into JSON string
   const bookJSON = JSON.stringify(book)
   // Covert JSON string into object
   const bookObject = JSON.parse(bookJSON)
   console.log(bookObject.title) // Print: Ego is the Enemy

//lesson8
// const square function (x) {
// return x * x
// }
const square = (x) => {
return x * x
}
console.log(square(2)) // Will print: 4

//lesson8.1
const event = {
    name: 'Birthday Party',
    guestList: ['Andrew', 'Jen', 'Mike'],
    printGuestList() {
    console.log('Guest list for ' + this.name)
   
    this.guestList.forEach((guest) => {
    console.log(guest + ' is attending ' + this.name)
    })
    }
   }
   event.printGuestList()

//lesson11
const users = [{
    name: 'Andrew Mead',
    age: 27
   },{
    name: 'George Hudson',
    age: 72
   },{
    name: 'Clay Klay',
    age: 45
   }]
   const user = users.find((user) => user.name === 'George Hudson')
   console.log(user) // Will print the second object in the array

//section5
//lesson2
console.log('Thing one')
debugger // Debug tools will pause here until your click play again
console.log('Thing two')