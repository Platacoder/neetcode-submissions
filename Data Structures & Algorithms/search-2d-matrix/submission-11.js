class Solution {
    /**
     * @param {number[][]} matrix
     * @param {number} target
     * @return {boolean}
     */
    searchMatrix(matrix, target) {
        let COLS = matrix[0].length;
        let ROWS = matrix.length;

        let top = 0;
        let bot = ROWS - 1;

        while(top <= bot) {
            let midRow = Math.floor((top + bot)/2);
            if(target > matrix[midRow][COLS - 1]){
                top = midRow + 1;
            } else if(target < matrix[midRow][0]) {
                bot = midRow - 1;
            } else {
                break;
            }
        }

        if (!(top <= bot)) {
            return false;
        }
        
        let currentMatrix = matrix[Math.floor((top + bot)/ 2)];
        
            let L = 0;
            let R = COLS - 1;

            while(L <= R) {
                let M = Math.floor((L + R)/2);
                if(target < currentMatrix[M]) {
                    R = M - 1;
                } else if(target > currentMatrix[M]){
                    L = M + 1;
                } else if(target === currentMatrix[M]) {
                    return true;
                }
            }
        
        return false;
    }
}
