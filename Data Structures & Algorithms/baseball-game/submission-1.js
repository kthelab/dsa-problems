class Solution {
    /**
     * @param {string[]} operations
     * @return {number}
     */
    calPoints(op) {
        let score = new Array()
        let totalScore = 0

        for (let i = 0; i < op.length; i++) {
            if (op[i] == "+") {
                score.push(score[score.length - 1] + score[score.length - 2])
                totalScore += score[score.length - 1]
                continue
            }
            if (op[i] == "C") {
                totalScore -= score[score.length - 1]
                score.pop()
                continue
            }
            if (op[i] == "D") {
                score.push(score[score.length - 1] * 2)
                totalScore += score[score.length - 1]
                continue
            }

            score.push(Number(op[i]))
            totalScore += score[score.length - 1]
        }

        return totalScore
    }
}
