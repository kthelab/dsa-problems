public class Solution {
    public int NumIdenticalPairs(int[] nums) {
        Dictionary<int, List<int>> hash = new Dictionary<int, List<int>>();
        int sum = 0;

        for (int i = 0; i < nums.Length; i++) {
            int num = nums[i];

            if (hash.ContainsKey(num)) {
                sum += hash[num].Count;

                hash[num].Add(i);
            } else {
                hash[num] = new List<int> { i };
            }
        }

        return sum;
    }
}