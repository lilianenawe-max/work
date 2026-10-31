
const members = [
    { name: "Jean Pierre", phone: "0788123456", savings: 150000 },
    { name: "Alice", phone: "0788111222", savings: 80000 },
    { name: "Eric", phone: "0788333444", savings: 50000 },
    { name: "Marie", phone: "0788555666", savings: 120000 },
    { name: "David", phone: "0788777888", savings: 30000 }
];

// Function 1: Format member name
function formatName(name) {
    return name.trim().toUpperCase();
}

// Function 2: Format phone number
function formatPhone(phone) {
    const cleanPhone = phone.trim();

    if (!/^07\d{8}$/.test(cleanPhone)) {
        return "Invalid phone number";
    }

    return "+250" + cleanPhone.slice(1);
}

// Function 3: Format savings
function formatSavings(amount) {
    return amount.toLocaleString("en-US") + " RWF";
}

// Function 4: Calculate total savings
function calculateTotal(memberList) {
    return memberList.reduce(
        (total, member) => total + member.savings,
        0
    );
}

// Function 5: Calculate average savings
function calculateAverage(memberList) {
    if (memberList.length === 0) return 0;

    return calculateTotal(memberList) / memberList.length;
}

// Function 6: Determine savings status
function getSavingsStatus(amount) {
    if (amount >= 100000) {
        return "Excellent";
    } else if (amount >= 50000) {
        return "Good";
    }

    return "Needs Improvement";
}

// Function 7: Find a member
function findMember(memberList, name) {
    return memberList.find(
        member => member.name.toLowerCase() === name.toLowerCase()
    );
}

// Function 8: Count members by category
function countCategory(memberList, category) {
    return memberList.filter(
        member => getSavingsStatus(member.savings) === category
    ).length;
}

// Rebuild the report using functions
function generateReport(memberList) {
    console.log("\n========== IKIMINA SAVINGS REPORT ==========");

    for (const member of memberList) {
        console.log("--------------------------------------------");
        console.log("Name: " + formatName(member.name));
        console.log("Phone: " + formatPhone(member.phone));
        console.log("Savings: " + formatSavings(member.savings));
        console.log("Status: " + getSavingsStatus(member.savings));
    }

    console.log("--------------------------------------------");
    console.log("Total Members: " + memberList.length);
    console.log("Total Savings: " + formatSavings(calculateTotal(memberList)));
    console.log("Average Savings: " + formatSavings(calculateAverage(memberList)));

    console.log("Excellent Savers: " +
        countCategory(memberList, "Excellent"));

    console.log("Good Savers: " +
        countCategory(memberList, "Good"));

    console.log("Needs Improvement: " +
        countCategory(memberList, "Needs Improvement"));

    console.log("============================================");
}

// Run report
generateReport(members);

// Export functions for testing
module.exports = {
    formatName,
    formatPhone,
    formatSavings,
    calculateTotal,
    calculateAverage,
    getSavingsStatus,
    findMember,
    countCategory,
    generateReport
};
