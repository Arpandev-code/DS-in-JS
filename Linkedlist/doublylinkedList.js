class Node{
    constructor(data,prev=null,next=null)
    {
        this.data=data
        this.prev=prev
        this.next=next
    }

}
class DoublyLinkedList{
    constructor()
    {
        this.head=null;
        this.tail=null;
    }
}
DoublyLinkedList.prototype.insertAtStart=function(data)
{
    let newNode =new Node(data,this.head,null);
    if(this.head!==null)
    {
        this.head.prev=newNode
    }
    this.head=newNode;
    if(this.tail==null)
    {
        this.tail=newNode;
    }

}

DoublyLinkedList.prototype.insertAtEnd=function(data)
{
    let newNode=new Node(data,null,this.tail)
    if(this.tail!==null)
    {
        this.tail.next=newNode
    }
    this.tail=newNode;
    if(this.head===null)
    {
        this.head=newNode
    }
}