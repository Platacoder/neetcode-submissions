class MinStack {

    constructor() {
        this.stack = [];
        this.minStack = [];
    }
    

    /**
     * Pushes to both stacks, for minStack
     * compare the main val being pushed to the value of the minStack.
     * Push min value to minStack only.
     * @param {number} val
     * @return {void}
     */
    push(val) {
        this.stack.push(val);
        let minValue = Math.min(val,
          this.minStack.length === 0 ?
            val :
            this.minStack[this.minStack.length - 1]
        )
        this.minStack.push(minValue)
    }

    /**
     * @return {void}
     */
    pop() {
        this.stack.pop();
        this.minStack.pop();
    }

    /**
     * @return {number}
     */
    top() {
        return this.stack[this.stack.length - 1];
    }

    /**
     * @return {number}
     */
    getMin() {
        return this.minStack[this.minStack.length -1];
    }
}
