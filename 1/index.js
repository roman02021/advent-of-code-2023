import fs from "fs";

let total = 0;
const file = "test3.txt";
const writtenNums = {
    one: 1,
    two: 2,
    three: 3,
    four: 4,
    five: 5,
    six: 6,
    seven: 7,
    eight: 8,
    nine: 9,
};

const regex = /(one|two|three|four|five|six|seven|eight|nine|teen|[0-9])/g;

// const regex2 = /(?=(one|two|three|four|five|six|seven|eight|nine|teen|[0-9]))/g; //unable to find overlapping matches

fs.readFile(file, "utf8", (err, data) => {
    const lines = data.split("\n");

    lines.forEach((line) => {
        let matchArray;
        let numsArr = [];

        while ((matchArray = regex.exec(line)) !== null) {
            //entering
            regex.lastIndex = matchArray.index + 1;
            numsArr.push(matchArray[0]);
            console.log(matchArray);
        }

        let firstNum = numsArr[0];
        let lastNum = numsArr[numsArr.length - 1];

        Object.keys(writtenNums).map((key) => {
            if (key === firstNum) {
                firstNum = writtenNums[key];
            }
            if (key === lastNum) {
                lastNum = writtenNums[key];
            }
        });

        console.log(
            firstNum,
            lastNum,
            Number(`${firstNum.toString()}${lastNum.toString()}`)
        );
        const calibrationVal = Number(firstNum.toString() + lastNum.toString());
        total += calibrationVal;
    });
    console.log(total);
});
