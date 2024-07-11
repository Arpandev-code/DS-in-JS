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
//Delete the fisrt node
LinkedList.prototype.deleteFirstItem=function()
{
    if(!this.head)
    {
        return //Head pointing to null then there is nothing to delete
    }
    this.head=this.head.next //shift the head to the next node then the link will be break from first node cuz linkedlist Starts with head
}
//Delete the last node
LinkedList.prototype.deleteLastItem=function()
{
    if(!this.head)
    {
        return;// if the list is empty then nothing to do 
    }
    if(!this.head.next)
    {
        this.head=null // if there is one node in the list so delete that only
    }
    slast =this.head;//if there is multiple node assume head is the second last node
    while(slast.next.next)// then check if slast.next.next gives any value or null, if its null then do slast.next=null
    {
        slast=slast.next// if it gives value then head isn't a slast node then shift to next node to check again
    }
    slast.next=null
}
//Delete a node with a given key(#leetcode)
LinkedList.prototype.deleteWithKey=function(key)
{
    if(!this.head)
    {
        return;
    }
    //data found at head
    if(this.head.data===key)
    {
        this.head=this.head.next
    }
    current=this.head
    while(current.next!==null)
    {
        if(current.next.data===key)//if current.next node's data is equal to the given key so unlink the node that's it
        {
            current.next=current.next.next
            return
        }
        current=current.next // if not then update the current node 
    }
}

//Searching the data
LinkedList.prototype.search=function(key)
{
    let current=this.head;
    while(current)
    {
        if(current.data===key)
        {
            return true;
        }
        current=current.next
    }
    return false
}
//Traversal
LinkedList.prototype.traversal=function()
{
    let current= this.head
    let listValue=[]
    while(current)
    {
        listValue.push(current.data)
        current=current.next
    }
    return listValue.join(" -> ")
}

//Reverse a LinkedList
//Explantion in readme file
LinkedList.prototype.reverseList=function()
{
    //To revesre a linkedList we need to track record of prev & next node to avoid unnessery link break in LinkedList
    let current=this.head;
    let prev =null;
    let next=null;
    while(current)
    {
        next=current.next; //storing the current.next value for later use
        current.next=prev;//First we have to point the current.next to the prev
        prev=current;//now prev pointer need to shift to the new node for next itrration
        current=next;//to shift the current poiner to the next(have to use stored next value Lineno-135)
    }
    this.head=prev;// when current doesn't have any data(i.c. pointing to null), have to store left prev value to the head

}
