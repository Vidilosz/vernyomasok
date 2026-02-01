import fs from "fs";

const vezeteknevek = [
  "Kovács", "Szabó", "Tóth", "Nagy", "Varga",
  "Kiss", "Molnár", "Balogh", "Farkas", "Papp"
];

const keresztnevek = [
  "János", "István", "László", "Péter", "Gábor",
  "Anna", "Éva", "Katalin", "Zsuzsa", "Mária"
];


const adatok = [];


const randomElem = arr => arr[Math.floor(Math.random() * arr.length)];
const randomVerNyomas = () => ({
  szisztoles: Math.floor(Math.random() * (160 - 100 + 1)) + 100,
  diasztoles: Math.floor(Math.random() * (100 - 60 + 1)) + 60
});


for (let i = 0; i < 20; i++) {
  adatok.push({
    nev: `${randomElem(vezeteknevek)} ${randomElem(keresztnevek)}`,
    vernyomas: randomVerNyomas()
  });
}


fs.writeFileSync(
  "./public/test.json",
  JSON.stringify(adatok, null, 2),
  "utf-8"
);

console.log("✅ test.json legenerálva a public mappába");
