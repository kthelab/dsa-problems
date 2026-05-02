class Solution {
    
    /**
     * @param {number[]} nums
     * @param {number} val
     * @return {number}
     */
    removeElement(nums, val) {
        let arrayNoVal = nums.filter((num) => num != val)

        for (let i = 0; i < arrayNoVal.length; i++) {
            nums[i] = arrayNoVal[i]
        }

        return arrayNoVal.length
    }

}
