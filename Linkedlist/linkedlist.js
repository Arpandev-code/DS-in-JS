class Node{
    constructor(data,next=null)
    {
        this.data=data;
        this.next=next;
    }
}
class LinkedList{
    constructor()
    {
        this.head=null
    }
}
//Inserting data into the head
LinkedList.prototype.insertAtStart=function (data)
{
    const newNode= new Node(data)
    this.head=newNode;
}
//Inserting the data into teal
LinkedList.prototype.insertAtEnd= function(data)
{
    const newNode= new Node(data)
    if(this.head==null)
    {
        this.head=newNode;
        return;
    }
    let last=this.head
    while(!last.next)
    {
        last= last.next
    }
    last.next=newNode;
}
//insert at the given Node
LinkedList.prototype.insertAfter=function(prevNode,data)
{
    if(!prevNode)
    {
        console.log(`prevNode can't be null`);
        return;
    }
    const newNode= new Node(data,prevNode.next)
    prevNode.next=newNode
}