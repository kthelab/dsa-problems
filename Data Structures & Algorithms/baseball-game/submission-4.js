class Solution {
    /**
     * @param {string[]} operations
     * @return {number}
     */
    calPoints(ops) {
        let registro = new Array();

        for (let i = 0; i < ops.length; i++) {
            if (ops[i] == "+") {
                registro.push(Number(registro[registro.length - 1] + registro[registro.length - 2]));
                continue;
            }
            if (ops[i] == "C") {
                registro.pop();
                continue;
            }
            if (ops[i] == "D") {
                registro.push(Number(registro[registro.length - 1]) * 2);
                continue;
            }

            registro.push(Number(ops[i]));
        }

        return registro.reduce((acc, i) => acc + i, 0);
    }
}
