//  find two positive (greater than 0 ) integers a and b such that a+b=n and the least common multiple (LCM) of a and b is the minimum among all possible values of a and b . If there are multiple answers, you can print any of them.

function solution(n) {
    let a = 1;
    let b = 1;
    while (a + b < n) {
        a++;
        b++;
    }
    return [a, b];
}

console.log(solution(9));