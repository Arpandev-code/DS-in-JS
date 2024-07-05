class Stack{
    constructor()
    {
        this.stack=[]
    }
    //push data inside of stack
    push(data)
    {
        this.stack.push(data)
    }
    //pop the top most 
    pop()
    {
        this.stack.pop()
    }
    //check the top most element of a stack
    peek()
    {
        return this.stack[this.stack.length-1]
    }
    //check the stack is empty or not
    isEmpty()
    {
        return this.stack.length===0
    }
    //size of the stack
    size()
    {
        return this.stack.length
    }
    //check if the given value contains in a stack or not
    contains(data)
    {
        return this.stack.includes(data)
    }
    //reverse the stack
    reverse()
    {
        return this.stack.reverse()
    }
    //print the stack
    printStack()
    {
        let str='';
        for (let i = 0; i < this.stack.length; i++) {
            str += this.stack[i]
        }
        return str
    }

}
//use Example
let myStack=new Stack()

myStack.push(3)
myStack.push(4)
myStack.push(5)
myStack.push(6)

myStack.pop()
console.log(myStack.printStack());
