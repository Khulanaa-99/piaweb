function getGrade(score) {
    if (score >= 90) {
        return 'A';
    } else if (score >= 80) {
        return 'B';
    } else if (score >= 70) {
        return 'C';
    } else if (score >= 60) {
        return 'D';
    } else {
        return 'F';
    }
}

function isPassed(score) {
    if (score >= 70) {
        return true;
    } else {
        return false;
    }
}

let passed = 0;
for (let score = 50 ; score <= 100 ; score += 10) {
    if(isPassed(score)) {
        passed++;
    }
    console.log('Onoo: ',score , getGrade(score),'', isPassed(score));

}
console.log('Tentssen: ' , passed)