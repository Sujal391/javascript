// 2.3 Async iteration
async function* asyncGenerator() {
    let count = 0;
    while (true) {
        await new Promise(resolve => setTimeout(resolve, 1000));
        yield count++;
    }
}

async function runGenerator() {
    const gen = asyncGenerator();
    for await (const value of gen) {
        console.log(`Generated value: ${value}`);
        if (value >= 5) break;
    }
}

runGenerator();