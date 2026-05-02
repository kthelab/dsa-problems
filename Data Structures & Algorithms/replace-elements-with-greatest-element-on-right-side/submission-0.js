class Solution {
    /**
     * @param {number[]} arr
     * @return {number[]}
     */
    replaceElements(arr) {
        let arrLen = arr.length;

        for (let i = 0; i < arrLen; i++) {
            let toTheRight = arr.slice(i + 1, arrLen)
            
            let greatestElement = -1;

            if (toTheRight != []) {
                for (let j = 0; j < toTheRight.length; j++) {
                    greatestElement = Math.max(toTheRight[j], greatestElement);
                }
            }

            arr[i] = greatestElement;
        }

        return arr
    }
}
