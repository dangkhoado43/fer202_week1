// ============================== Exercise 5 ==============================

const Ex5 = () => {
    const randomNumber = Math.random() * 10;
    if (randomNumber > 5) {
        return randomNumber;
    } else {
        return "Error"
    }
}

console.log(Ex5());