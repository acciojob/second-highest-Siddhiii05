function secondHighest(arr) {
    if (arr.length < 2) {
        return -Infinity;
    }

    let highest = Number(arr[0]);
    let second = -Infinity;

    for (let i = 1; i < arr.length; i++) {
        let num = Number(arr[i]);

        if (num > highest) {
            second = highest;
            highest = num;
        } else if (num < highest && num > second) {
            second = num;
        }
    }

    return second;
}