// 45 Questions

// 1 
// All softwares are installed

// 2 
let message_to_friend = "HI Raza , would you like to learn some TypeScript"
console.log(message_to_friend)

// 3  lowercase, uppercase, and titlecase
let lowerCase = "ghulam akbar"
let upperCase = "GHULAM AKBAR"
let titleCase = "Ghulam Akbar"
console.log(`Lowercase = ${lowerCase}\nUppercase = ${upperCase}\nTitlecase = ${titleCase}`)

// 4 
let Famous_quote = "Mother Teresa once said,: "+"Spread love everywhere you go. Let no one ever come to you without leaving happier."
console.log(Famous_quote)

// 5
let Famous_quote2 = "Charlie Chaplin once said,: "+"Simplicity is a difficult thing to achieve."
console.log(Famous_quote2)

// 6
let WhiteSpace = "\tGhulam Akbar\n"
console.log(WhiteSpace)
let strippedName = WhiteSpace.trim()
console.log(strippedName)

// 7 & 8
console.log(2+6)
console.log(10-2)
console.log(2*4)
console.log(16/2)

// 9
let MyFavoriteNumber = 8
console.log(`My Favorite Number Is : ${MyFavoriteNumber}`)

// 10
// Akbar Abro
// 14-04-2024
/*let my_name = "Ghulam Akbar"
console.log(my_name)*/

// 11
let friends_list = ["Ali Raza","Ahmed","Bakir"]
console.log(friends_list)

// 12
console.log(`Hi ${friends_list[0]} How Are You Buddy !`)
console.log(`Hi ${friends_list[1]} How Are You Buddy !`)
console.log(`Hi ${friends_list[2]} How Are You Buddy !`)

// 13
let transport = ["Bike","Car","Bus"]
console.log(`I have an Honda ${transport[0]}`)
console.log(`But I don't have ${transport[1]}`)
console.log(`I go to work through the ${transport[2]}`)

// 14
let guest_list:any = ["Uncle Nisar","Chacha Ijaz","Chacha Barkat"]
console.log(`Salam ${guest_list[0]} I have arranged a feast for you on Monday`)
console.log(`Salam ${guest_list[1]} I have arranged a feast for you on Monday`)
console.log(`Salam ${guest_list[2]} I have arranged a feast for you on Monday`)

// 15 
guest_list.splice(2)
guest_list.push("Rashid Bhai")
console.log(`Salam ${guest_list[0]} I have arranged a feast for you on Monday`)
console.log(`Salam ${guest_list[1]} I have arranged a feast for you on Monday`)
console.log(`Salam ${guest_list[2]} I have arranged a feast for you on Monday`)

// 16
guest_list.unshift("Raza")
guest_list.splice(2,0,"Bakir")
guest_list.push("Akbar")
console.log(`Salam ${guest_list[0]} I have arranged a feast for you on Monday`)
console.log(`Salam ${guest_list[1]} I have arranged a feast for you on Monday`)
console.log(`Salam ${guest_list[2]} I have arranged a feast for you on Monday`)
console.log(`Salam ${guest_list[3]} I have arranged a feast for you on Monday`)
console.log(`Salam ${guest_list[4]} I have arranged a feast for you on Monday`)
console.log(`Salam ${guest_list[5]} I have arranged a feast for you on Monday`)

// 17
guest_list.pop()
guest_list.shift()
guest_list.pop()
guest_list.shift()
guest_list.shift()
guest_list.push("Uncle Nisar")
console.log(`Salam ${guest_list[0]} I have arranged a feast for you on Sunday`)
console.log(`Salam ${guest_list[1]} I have arranged a feast for you on Sunday`)
console.log(guest_list)
// 18
let favorite_places = ["Skardu","Kashmir","Naraan","Muree","Islamabad"]
console.log(favorite_places)
let sorted_places = [...favorite_places].sort()
console.log(sorted_places)
let reverse_places = [...sorted_places].reverse()
console.log(reverse_places)

// 19
console.log(`There are ${guest_list.length} guests`)

// 20
let countries_arrey = ["Pakistan","Iran","Iraq"]
console.log(countries_arrey)

// 21
type object_type = {
    name:String,
    category:String,
    price:Number
}

let object1:object_type = {
    name:"Laptop",
    category:"Electronic",
    price:2000
}

let object2:object_type = {
    name:"Smart Watch",
    category:"Electronic",
    price:600
}
let object3:object_type = {
    name:"Sneaker",
    category:"Clothing",
    price:200
}
let object4: object_type[] = [object1,object2,object3]
console.log(object4)

// 22
let array_index = ["Karachi","Islamabad","Lahor","Larkana"]
console.log(array_index[2])

// 23
let x = 10;
let y = 5;

console.log("Is x equal 10 ? I predict True.")
console.log(x == 10)

console.log("Is x strictly equal 10 ? I predict True.")
console.log(x === 10)

console.log("Is y strictly equal 5 ? I predict True.")
console.log(y === 5)

console.log("Is y greater than 4 ? I predict True.")
console.log(y > 4)

console.log("Is 12 greater than x ? I predict True.")
console.log(x < 12)

console.log("Is x equal 5 ? I predict True.")
console.log(x == 5)

console.log("Is y equal 10 ? I predict True.")
console.log(y == 10)

console.log("Is 10 greater than x ? I predict True.")
console.log(x < 10)

console.log("Is y greater than or equal 9 ? I predict True.")
console.log(y >= 9)

console.log("Is x greater than or equal 11 ? I predict True.")
console.log(x >= 11)

// 24