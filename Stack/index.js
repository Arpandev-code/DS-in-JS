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
       this.isEmpty? this.stack.pop(): console.log("Stack is empty");
    }
    //check the top most element of a stack
    peek()
    {
        return this.isEmpty? this.stack[this.stack.length-1] :"Stack is empty"
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
        return this.isEmpty?this.stack.includes(data):"Stack is empty"
    }
    //reverse the stack
    reverse()
    {
        return this.isEmpty?this.stack.reverse():"Stack is empty"
    }
    //print the stack
    printStack()
    {

        let str='';
        if(this.isEmpty)
        {
            return "Stack is empty"
        }
        for (let i = 0; i < this.stack.length; i++) {
            str += this.stack[i] + "\n"
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
