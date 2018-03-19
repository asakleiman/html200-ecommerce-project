// As an extra challenge, you can build the product listings
// by looping over this array and creating HTML for each element.
// This will be best accomplished after we do lesson 09.
var products = [
  {
    "name": "Reversible Plaid",
    "price": 26.99,
    "description": "Two classic patterns in one great look: This supersoft and cozy reversible scarf instantly doubles your street-style cred. 100% acrylic.",
    "imageTitle": "reversible-plaid.jpg"
  },
  {
    "name": "Wool Cable Knit",
    "price": 49.99,
    "description": "Warm yourself with this women's natural cable knit scarf, crafted from 100% Merino wool. Imported.",
    "imageTitle": "wool-cable.jpeg"
  },
  {
    "name": "Northern Lights",
    "price": 29.99,
    "description": "Handmade by women in Agra, sales provide medical and educational support in this remote area of India. Crinkly 100% cotton.",
    "imageTitle": "northern-lights.jpg"
  },
  {
    "name": "Ombre Infinity",
    "price": 11.99,
    "description": "A dip-dye effect adds color and dimension to a cozy infinity scarf featuring a soft, chunky knit. 100% acrylic.",
    "imageTitle": "ombre-infinity.jpg"
  },
  {
    "name": "Fringed Plaid",
    "price": 18.99,
    "description": "Generously sized, extra soft and featuring a dazzling fringe, this scarf is rendered in a versatile gray, black and white plaid. Expertly beat the cold with style. 100% acrylic.",
    "imageTitle": "fringed-plaid.jpeg"
  },
  {
    "name": "Multi Color",
    "price": 22.99,
    "description": "The Who What Wear Oversize Color-Block Square Scarf is big, bold, and designed to twist and wrap any way you wish. All the colors of the season are harmonized in this oversize accent, so you can adjust to contrast or match your outfit; soft and lush, it’s your stylish standoff against cold AC and unexpected fall breezes. 100% acrylic",
    "imageTitle": "multi-color.jpeg"
  },
  {
    "name": "Etro Paisley-Print Silk",
    "price": 249.99,
    "description": "Luxurious silk scarf with subtle paisley pattern. 100% silk",
    "imageTitle": "etro.png"
  },
  {
    "name": "Ashby Twill",
    "price": 70.99,
    "description": "Faribault brings you the Ashby Twill Scarf in Natural. Woven with a 'broken' twill technique, the Ashby Twill Scarf has a slight zigzag texture. Made in USA, this timeless scarf is crafted with luxurious merino wool and finished with heather gray fringe. 100% Merino wool",
    "imageTitle": "twill.jpg"
  }
]

function capture(){
 event.preventDefault()
 console.log("Yeah, it went here")
 var theEmail = document.custEmail.email.value
 var theFirstName = document.custEmail.firstName.value
 var theLastName = document.custEmail.lastName.value
 alert("Thank you for signing up for our list, "+ theFirstName +" "+ theLastName + "! \nYour email is: " +theEmail)
}


/* Global Variable to store cart items */
var cart = []

/* Array to store names of all scarves */ 
var scarves = ['Reversible Plaid', 'Fringed Plaid', 'Multi Color', 'Northern Lights', 'Ombre Infinity', 'Ashby Twill', 'Wool Cable Knit', 'Etro Paisley-Print Silk']

/* Global Variable to store total price in cart */
var totalPrice = []

/* Array to store prices of all scarves */
var prices = [26.99, 18.99, 22.99, 29.99, 11.99, 70.99, 49.99, 26.99]




/********************************************/
/* Adds and removes scarves to cart */
function updateCart(itemNum){
  event.preventDefault()

  console.log('Scarf: ' + scarves[itemNum] + ' - $' + prices[itemNum]);
  
  // check for scarf in cart
  var i = cart.indexOf(scarves[itemNum])
  if (i == -1){
    // add to cart if not already present
    cart.push(scarves[itemNum])
    console.log(scarves[itemNum] +" added!") 
    totalPrice.push(prices[itemNum])
  } else {
    // if scarf is present, remove it - too warm this time of year to wear double scarves
    var index = cart.indexOf(scarves[itemNum]);
    cart.splice(index, 1);
    console.log(scarves[itemNum] +" removed!")
    totalPrice.splice(index, 1)
  }
  
  /* Calc and update cart price*/
  var priceInCart=0;
  for(var i in totalPrice) { priceInCart += totalPrice[i]; }
  
  /* Display current cart info */
  console.log('Cart size: ' + cart.length + ', Total Price: $' + priceInCart);
}