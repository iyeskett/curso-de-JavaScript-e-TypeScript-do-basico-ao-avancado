function Random(min, max) {
    const r = Math.random() * (max - min) + min;
    return Math.floor(r);
}

const min = 1;
const max = 50;

do {
    rand = Random(min, max);
    console.log(rand);
}
while (rand !== 10);