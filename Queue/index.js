class Queue{
    constructor(){
        this.queue=[]
    }
    enqueue(data)
    {
        this.queue.push(data)
    }
    isEmpty()
    {
        return this.queue.length===0
    }
    dequeue()
    {
        if(this.isEmpty)
        {
            return "Queue is empty"
        }
        return this.queue.shift()
    }
    peek()
    {
        if(this.isEmpty)
        {
            return "Queue is empty"
        }
        return this.queue[0]
    }
    size()
    {
        return this.queue.length
    }
    clear()
    {
        this.queue=[]
    }
    printQueue()
    {
        if(this.isEmpty){
            return "Queue is empty"
        }
        let str=""
        for (let i = 0; i < this.queue.length; i++) {
            str +=this.queue[i]
        }
        return str;
    }


}

let myQueue= new Queue()

myQueue.enqueue(20)
myQueue.enqueue(50)
myQueue.enqueue(60)
myQueue.enqueue(90)
myQueue.enqueue(40)