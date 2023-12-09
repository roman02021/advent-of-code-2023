import fs from "fs";

/* https://adventofcode.com/2023/day/2 */

const file = "input.txt";

//39

let totalCubePower = 0;

const cubes = {
    red: 12,
    green: 13,
    blue: 14,
};

let highestColors = {
    red: 0,
    green: 0,
    blue: 0,
    reset: function () {
        this.blue = 0;
        this.green = 0;
        this.red = 0;
    },
};

fs.readFile(file, "utf8", (err, data) => {
    const lines = data.split("\n");
    const badGames = new Set();

    lines.map((line, gameIndex) => {
        highestColors.reset();
        line.slice(line.indexOf(":") + 1)
            .split(";")
            .map((game) => {
                game.trim()
                    .split(",")
                    .map((round, roundIndex) => {
                        const grabbedCubes = round.trim().split(" ");
                        // console.log(grabbedCubes, highestColors);
                        if (
                            highestColors[grabbedCubes[1]] <
                            Number(grabbedCubes[0])
                        ) {
                            highestColors[grabbedCubes[1]] = Number(
                                grabbedCubes[0]
                            );
                        }
                        //part1 solution computation
                        // if (cubes[grabbedCubes[1]] < grabbedCubes[0]) {
                        //     badGames.add(gameIndex + 1);
                        // }
                    });
            });
        // console.log(highestColors);
        totalCubePower +=
            highestColors.blue * highestColors.green * highestColors.red;
    });

    console.log(totalCubePower);

    const totalGameIds = Array.from(
        { length: lines.length },
        (val, index) => index + 1
    );
    //part1 solution
    let total = 0;
    totalGameIds.map((gameId) => {
        if (!badGames.has(gameId)) {
            total += gameId;
        }
    });
    // console.log(total);
});
