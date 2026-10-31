
const members = [
    { name: "Jean Pierre", savings: 150000 },
    { name: "Alice", savings: 80000 },
    { name: "Eric", savings: 50000 },
    { name: "Marie", savings: 120000 },
    { name: "David", savings: 30000 }
];

// Conditions
function checkSavings(savings) {
    if (savings >= 100000) {
        return "Excellent";
    } else if (savings >= 50000) {
        return "Good";
    } else {
        return "Needs Improvement";
    }
}

// Switch statement
function getCategory(category) {
    switch (category) {
        case "Excellent":
            return "High Saver";
        case "Good":
            return "Regular Saver";
        case "Needs Improvement":
            return "Low Saver";
        default:
            return "Unknown Category";
    }
}

// Loop through members
console.log("===== IKIMINA SAVINGS REPORT =====");

let totalSavings = 0;

for (let i = 0; i < members.length; i++) {
    const member = members[i];

    const status = checkSavings(member.savings);
    const category = getCategory(status);

    console.log("------------------------------");
    console.log("Name: " + member.name);
    console.log("Savings: " + member.savings + " RWF");
    console.log("Status: " + status);
    console.log("Category: " + category);

    totalSavings += member.savings;
}

console.log("------------------------------");
console.log("Total Members: " + members.length);
console.log("Total Savings: " + totalSavings + " RWF");
console.log(
    "Average Savings: " +
    (totalSavings / members.length).toFixed(2) + " RWF"
);
