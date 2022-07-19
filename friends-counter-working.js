let friends = [];
function countNewFriends(n) {
    for (let friend = 2; friend < n; friend += 1) {

        if (n % friend === 0) {
            
            continue;
        }

        for (let divisor = 2; divisor <= friend; divisor += 1) {

            if (friend % divisor === 0 && n % divisor === 0) {
                break;
            }

            if (divisor === friend) {
                friends.push(friend);
            }
        }
    }
    return friends.length;
}
var input = Number(prompt("Enter John's number"));
console.log(`result for ${input} is ${countNewFriends(input)}`);

