class Solution {
    /**
     * @param {number[]} nums
     * @param {number} val
     * @return {number}
     */
    removeElement(nums, val) {
        let arraySemOValor = nums.filter((num) => num != val);

        for (let i = 0; i < arraySemOValor.length; i++) {
            nums[i] = arraySemOValor[i]
        }

        return arraySemOValor.length;
    }
}
