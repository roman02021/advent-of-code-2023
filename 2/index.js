import fs from "fs";

const file = "input.txt";

const cubes = {
    red: 12,
    green: 13,
    blue: 14,
};

fs.readFile(file, "utf8", (err, data) => {
    const lines = data.split("\n");
    const badGames = new Set();

    lines.map((line, gameIndex) => {
        line.slice(line.indexOf(":") + 1)
            .split(";")
            .map((game) => {
                game.trim()
                    .split(",")
                    .map((round, roundIndex) => {
                        const grabbedCubes = round.trim().split(" ");
                        if (cubes[grabbedCubes[1]] < grabbedCubes[0]) {
                            badGames.add(gameIndex + 1);
                        }
                    });
            });
    });

    const totalGameIds = Array.from(
        { length: lines.length },
        (val, index) => index + 1
    );
    let total = 0;
    totalGameIds.map((gameId) => {
        if (!badGames.has(gameId)) {
            total += gameId;
        }
    });
    console.log(total);
});
