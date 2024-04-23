// 45 Questions
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
// 1 
// All softwares are installed
// 2 
var message_to_friend = "HI Raza , would you like to learn some TypeScript";
console.log(message_to_friend);
// 3  lowercase, uppercase, and titlecase
var lowerCase = "ghulam akbar";
var upperCase = "GHULAM AKBAR";
var titleCase = "Ghulam Akbar";
console.log("Lowercase = ".concat(lowerCase, "\nUppercase = ").concat(upperCase, "\nTitlecase = ").concat(titleCase));
// 4 
var Famous_quote = "Mother Teresa once said,: " + "Spread love everywhere you go. Let no one ever come to you without leaving happier.";
console.log(Famous_quote);
// 5
var Famous_quote2 = "Charlie Chaplin once said,: " + "Simplicity is a difficult thing to achieve.";
console.log(Famous_quote2);
// 6
var WhiteSpace = "\tGhulam Akbar\n";
console.log(WhiteSpace);
var strippedName = WhiteSpace.trim();
console.log(strippedName);
// 7 & 8
console.log(2 + 6);
console.log(10 - 2);
console.log(2 * 4);
console.log(16 / 2);
// 9
var MyFavoriteNumber = 8;
console.log("My Favorite Number Is : ".concat(MyFavoriteNumber));
// 10
// Akbar Abro
// 14-04-2024
/*let my_name = "Ghulam Akbar"
console.log(my_name)*/
// 11
var friends_list = ["Ali Raza", "Ahmed", "Bakir"];
console.log(friends_list);
// 12
console.log("Hi ".concat(friends_list[0], " How Are You Buddy !"));
console.log("Hi ".concat(friends_list[1], " How Are You Buddy !"));
console.log("Hi ".concat(friends_list[2], " How Are You Buddy !"));
// 13
var transport = ["Bike", "Car", "Bus"];
console.log("I have an Honda ".concat(transport[0]));
console.log("But I don't have ".concat(transport[1]));
console.log("I go to work through the ".concat(transport[2]));
// 14
var guest_list = ["Uncle Nisar", "Chacha Ijaz", "Chacha Barkat"];
console.log("Salam ".concat(guest_list[0], " I have arranged a feast for you on Monday"));
console.log("Salam ".concat(guest_list[1], " I have arranged a feast for you on Monday"));
console.log("Salam ".concat(guest_list[2], " I have arranged a feast for you on Monday"));
// 15 
guest_list.splice(2);
guest_list.push("Rashid Bhai");
console.log("Salam ".concat(guest_list[0], " I have arranged a feast for you on Monday"));
console.log("Salam ".concat(guest_list[1], " I have arranged a feast for you on Monday"));
console.log("Salam ".concat(guest_list[2], " I have arranged a feast for you on Monday"));
// 16
guest_list.unshift("Raza");
guest_list.splice(2, 0, "Bakir");
guest_list.push("Akbar");
console.log("Salam ".concat(guest_list[0], " I have arranged a feast for you on Monday"));
console.log("Salam ".concat(guest_list[1], " I have arranged a feast for you on Monday"));
console.log("Salam ".concat(guest_list[2], " I have arranged a feast for you on Monday"));
console.log("Salam ".concat(guest_list[3], " I have arranged a feast for you on Monday"));
console.log("Salam ".concat(guest_list[4], " I have arranged a feast for you on Monday"));
console.log("Salam ".concat(guest_list[5], " I have arranged a feast for you on Monday"));
// 17
guest_list.pop();
guest_list.shift();
guest_list.pop();
guest_list.shift();
guest_list.shift();
guest_list.push("Uncle Nisar");
console.log("Salam ".concat(guest_list[0], " I have arranged a feast for you on Sunday"));
console.log("Salam ".concat(guest_list[1], " I have arranged a feast for you on Sunday"));
console.log(guest_list);
// 18
var favorite_places = ["Skardu", "Kashmir", "Naraan", "Muree", "Islamabad"];
console.log(favorite_places);
var sorted_places = __spreadArray([], favorite_places, true).sort();
console.log(sorted_places);
var reverse_places = __spreadArray([], sorted_places, true).reverse();
console.log(reverse_places);
// 19
console.log("There are ".concat(guest_list.length, " guests"));
// 20
var countries_arrey = ["Pakistan", "Iran", "Iraq"];
console.log(countries_arrey);
var object1 = {
    name: "Laptop",
    category: "Electronic",
    price: 2000
};
var object2 = {
    name: "Smart Watch",
    category: "Electronic",
    price: 600
};
var object3 = {
    name: "Sneaker",
    category: "Clothing",
    price: 200
};
var object4 = [object1, object2, object3];
console.log(object4);
// 22
var array_index = ["Karachi", "Islamabad", "Lahor", "Larkana"];
console.log(array_index[2]);
// 23
var x = 10;
var y = 5;
console.log("Is x equal 10 ? I predict True.");
console.log(x == 10);
console.log("Is x strictly equal 10 ? I predict True.");
console.log(x === 10);
console.log("Is y strictly equal 5 ? I predict True.");
console.log(y === 5);
console.log("Is y greater than 4 ? I predict True.");
console.log(y > 4);
console.log("Is 12 greater than x ? I predict True.");
console.log(x < 12);
console.log("Is x equal 5 ? I predict True.");
console.log(x == 5);
console.log("Is y equal 10 ? I predict True.");
console.log(y == 10);
console.log("Is 10 greater than x ? I predict True.");
console.log(x < 10);
console.log("Is y greater than or equal 9 ? I predict True.");
console.log(y >= 9);
console.log("Is x greater than or equal 11 ? I predict True.");
console.log(x >= 11);
