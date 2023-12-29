const seededRandom = (seed:number)  => {
    let x = Math.sin(seed) * 10000;
    return x - Math.floor(x);
}

export const generateNumbers = (seed:number, n:number, a = 1, b = 100) => {
    const numbers = [];
    for (let i = 0; i < n; i++) {
        const randomNumber = a + Math.floor(seededRandom(seed + i) * (b - a + 1));
        numbers.push(randomNumber);
    }
    return numbers;
}

