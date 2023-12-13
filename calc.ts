function expensive(n: number) {
    console.log("100$");
    return n + 4;
}

// create the cache outside of function scope to maintain keys and values
const cache = new Map<string, string>();

function optimizeExpensive(n: number) {
    const key = n.toString();

    if (cache.has(key)) {
        console.log(cache.get(key));
    } else {
        const value = expensive(n).toString();
        cache.set(key, value);
        console.log(cache.get(key));
    }
}
