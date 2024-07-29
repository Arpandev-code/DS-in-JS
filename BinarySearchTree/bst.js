class BSTNode{
    constructor(key)
    {
        this.key=key;
        this.left=null;
        this.right=null;
    }
}
class BinarySearchTree{
    constructor()
    {
        this.root=null;
    }

    // insert node in BST
    insert(key)
    {
        const newNode= new BSTNode(key)
        if(this.root===null)
        {
            this.root=newNode;
        }else{
            this.insertNode(this.root,newNode)
        }
    }
    insertNode(node,newNode)// node-> root node
    {
        if(newNode.key<node.key)
        {
            if(node.left===null)
            {
                node.left=newNode
            }else{
                this.insertNode(node.left,newNode)
            }
        }else{
            if(node.right===null)
            {
                node.right=newNode
            }else{
                this.insertNode(node.right,newNode)
            }
        }

    }
    //deletion operation
    delete(key)
    {
        this.root= this.deleteNode(this.root,key)
    }
    deleteNode(node,key)// node-> root node
    {
        if(node===null)
        {
            return null
        }

        if(key<node.key)
        {
            node.left=this.deleteNode(node.left,key)
        }else if(key>node.key)
        {
            node.right=this.deleteNode(node.right,key)
        }else{
            if(node.right===null && node.left===null)
            {
                return null;
            }else if(node.right===null)
            {
                return node.left
            }else if(node.lelf===null)
            {
                return node.right;
            }else{
                let tempNode=this.findMinNode(node.right)
                node.key=tempNode.key;
                node.right=this.deleteNode(node.right,tempNode.key)
            }
        }
        return node;
    }
    findMinNode(node)
    {
        while(node!==null)
        {
            node=node.right
        }
        return node
    }
}