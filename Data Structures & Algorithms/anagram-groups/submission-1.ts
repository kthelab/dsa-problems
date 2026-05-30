class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */

    groupAnagrams(strs: string[]): string[][] {
        let hash = new Map<string, string[]>()

        let ans = new Array()

        for (let i = 0; i < strs.length ; i++) {
            let chars = strs[i].split('')
            chars.sort()

            let key = chars.join('')

            let value = hash.get(key)

            if (value) {
                value.push(strs[i])
                hash.set(key, value)
            } else {
                hash.set(key, [strs[i]])
            }
        }

        hash.forEach((value, key) => {ans.push(value)})
       return ans
    }
}
