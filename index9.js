
const assert = require("assert");

const {
    formatName,
    formatPhone,
    formatSavings,
    calculateTotal,
    calculateAverage,
    getSavingsStatus,
    findMember,
    countCategory
} = require("./functions");

const testMembers = [
    { name: "Jean", savings: 150000 },
    { name: "Alice", savings: 80000 },
    { name: "Eric", savings: 30000 }
];

// Test 1
assert.strictEqual(formatName(" jean "), "JEAN");

// Test 2
assert.strictEqual(formatPhone("0788123456"), "+250788123456");

// Test 3
assert.strictEqual(formatSavings(150000), "150,000 RWF");

// Test 4
assert.strictEqual(calculateTotal(testMembers), 260000);

// Test 5
assert.strictEqual(calculateAverage(testMembers), 260000 / 3);

// Test 6
assert.strictEqual(getSavingsStatus(150000), "Excellent");

// Test 7
assert.strictEqual(findMember(testMembers, "alice").name, "Alice");

// Test 8
assert.strictEqual(countCategory(testMembers, "Good"), 1);

console.log("All 8 tests passed successfully!");
