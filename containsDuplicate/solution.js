class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        let numberCheck = new Set();
        for (let number of nums) {
            if (numberCheck.has(number)) {
                return true
            } else {
                numberCheck.add(number);
            }
        }
        return false;
    }
}

let solution = new Solution();

console.log(solution.hasDuplicate([1, 2, 3, 4, 5]));
