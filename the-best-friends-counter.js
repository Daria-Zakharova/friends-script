function countNewFriends(n) {

    function checkDivisor(nMax, nMin) {
        while (nMin) {
            //та самая формула, которой мне не хватало
            let t = nMin;
            nMin = nMax % nMin;
            nMax = t;
        }
        return nMax === 1 ? true : false;
    }
    const result = []

    for (let i = 2; i < n; i += 1) {
        if (checkDivisor(n, i)) {
            result.push(i);
        }
        continue;
    }
    return result.length;
}

console.log("result of 3rd variant", countNewFriends(input));
