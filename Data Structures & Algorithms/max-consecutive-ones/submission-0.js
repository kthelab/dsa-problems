class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    findMaxConsecutiveOnes(nums) {
        let seqMax = 0;

        let seqAtual = 0;

        for (let i = 0; i < nums.length; i++) {
            if (nums[i] == 1) {
                seqAtual++;
            } else {
                seqAtual = 0;
            }
            seqMax = Math.max(seqMax, seqAtual);
        }

        return seqMax;
    }
}
