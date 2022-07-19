function countNewFriends(num) {

    let friends = [];
    let newFriends = [];

    function getFriends(number) {
        for(let friend = 2; friend < number; friend += 1) {
            if (number % friend !== 0) {
            friends.push(friend);
            }            
        }
        return friends;
    }

    for (let divisor = 2; divisor <= num / 2; divisor += 1) {
    
        newFriends = getFriends(num).filter(item => {
            if ((item !== divisor && item % divisor === 0 && num % divisor === 0)) {
                return false;
            }
            return true;
        });
    }

    return newFriends.length;
}
    
        //    for (let divisor = 2; divisor <= Math.sqrt(num); divisor += 1) {
    
        //             array = array.filter(item => {
    
        //                 if (num % divisor !== 0 && item === divisor || item % divisor !== 0) {
        //                     return true;
        //                 }
                
        //                 return false;
        //             });
        //         }
        //     return array;
        // }
        //     let newFriends = getNumbers(n);
        //     console.log(newFriends.length);
        //     console.log(newFriends);

        //     let counter = 0;

        //     for (let i = 0; i < newFriends.length; i += 1) {
        //         if (n % newFriends[i] !== 0) {
        //             
        //             counter += 1;
        //         }
        //         // console.log(counter, friends[i]);
        //         else {
        //             continue;
        //         }
        
        //     }
        //     return counter;
// }
console.log("result of 2nd variant", countNewFriends(input));