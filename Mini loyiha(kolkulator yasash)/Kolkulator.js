console.clear();


//Asl.
const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function calculate() {
    rl.question('Birinchi sonni kriting: ', (firstInput) => {
        const num1 = parseFloat(firstInput);

        rl.question('Ikkinchi sonni kriting: ', (secondInput) => {
            const num2 = parseFloat(secondInput);

            rl.question('Amalni kiriting (+, -, *, /): ', (operation) => {
                let result;

                if (operation === '+') {
                    result = num1 + num2;
                } else if (operation === '-') {
                    result = num1 - num2;
                } else if (operation === '*') {
                    result = num1 * num2;
                } else if (operation === '/') {
                    if (num2 !== 0) {
                        result = num1 / num2;
                    } else {
                        console.log("Xatolik: Nolga bo'lish mumkin emas!");
                        return calculate();
                    }
                } else {
                    console.log("Xatolik: Noto'g'ri amal kiritildi.");
                    return calculate();
                }

                console.log(`Natija: ${result}`);
                rl.question("Yana davom ettirasizmi? (ha/yo'q): ", (answer) => {
                    if (answertoLowerCase() === 'ha') {
                        calculate();
                    } else {
                        console.log('Dastur tugadi.');
                        rl.close();
                    }
                })
            })
        })
    })
}
calculate();
