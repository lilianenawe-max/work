
const memberName = "  jean pierre mugisha  ";
const phone = "0788123456";
const savings = 150000;

// Format member name
const formattedName = memberName
    .trim()
    .toUpperCase();

// Format phone number
const formattedPhone = "+250" + phone.slice(1);

// Format savings
const formattedSavings = savings.toLocaleString("en-US");

// Display member information
console.log("===== IKIMINA MEMBER DETAILS =====");
console.log("Member Name: " + formattedName);
console.log("Phone Number: " + formattedPhone);
console.log("Savings: " + formattedSavings + " RWF");
