class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s) {
        if (s.length % 2 != 0) return false 

        let stack = new Array()

        for (let i = 0; i < s.length; i++)
        {
            if (s.at(i) == '(' || s.at(i) == '{' || s.at(i) == '[') {
                stack.push(s.at(i))
                continue
            }

            if (s.at(i) == '}') {
                if ('{' != stack[stack.length - 1]) return false
            } 
            if (s.at(i) == ']') {
                if ('[' != stack[stack.length - 1]) return false
            } 
            if (s.at(i) == ')') {
                if ('(' != stack[stack.length - 1]) return false
            } 

            stack.pop()
        }

        if (stack.length != 0) return false

        return true
    }
}
