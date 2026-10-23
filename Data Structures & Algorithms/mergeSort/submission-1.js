/** Pair class to store key-value pairs */
// class Pair {
//   /**
//    * @param {number} key The key to be stored in the pair
//    * @param {string} value The value to be stored in the pair
//    */
//   constructor(key, value) {
//       this.key = key;
//       this.value = value;
//   }
// }
class Solution {
    /**
     * @param {Pair[]} pairs
     * @returns {Pair[]}
     */
    mergeSort(pairs) {
        return this.mergeSortHelper(pairs, 0, pairs.length - 1);
    }

    mergeSortHelper(pairs, begIndex, endIndex) {
         if(endIndex - begIndex + 1 <= 1) {
            return pairs;
        }

        const midPoint = Math.floor((begIndex + endIndex)/2);

        this.mergeSortHelper(pairs, begIndex, midPoint);

        this.mergeSortHelper(pairs, midPoint + 1, endIndex);

        this.merge(pairs, begIndex, midPoint, endIndex);

        return pairs;

    }

    merge(pairs, begIndex, midPoint, endIndex) {
        const L = pairs.slice(begIndex,midPoint + 1);
        const R = pairs.slice(midPoint + 1, endIndex + 1);

        let i = 0;
        let j = 0;
        let k = begIndex;


        while(i < L.length && j < R.length) {
            if(L[i].key <= R[j].key) {
                pairs[k] = L[i];
                i++;
            } else {
                pairs[k] = R[j];
                j++;
            }
            k++;
        }

        // We now have to cover the case for when one element still has elements
        // left since one array will always be longer than the other

        while (i < L.length) {
            pairs[k] = L[i];
            i++;
            k++;
        }

        while (j < R.length) {
            pairs[k] = R[j];
            j++;
            k++;
        }

    }
}
