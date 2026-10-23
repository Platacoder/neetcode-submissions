class Solution {
    /**
     * @param {number[][]} matrix
     * @param {number} target
     * @return {boolean}
     */
    searchMatrix(matrix, target) {

        for(let i = 0; i < matrix.length; i++) {
            let lastIndex = matrix[i].length - 1;
            let currentMatrix = matrix[i];
            // Check if value can exist in the matrix.
            if(currentMatrix[lastIndex] >= target) {
                
                let L = 0;
                let R = lastIndex;

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
            }
        }
        return false;
    }
}
