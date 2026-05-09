class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    getConcatenation(nums) {
        let length = nums.length
        let ans = new Array(length * 2)


        for (let i = 0; i < length; i++) {
            ans[i] = nums[i]
            ans[i+length] = nums[i]
        }

        return ans
    }
}
