function LinkedList(){
  function Node(content){
    this.content = content
    this.next = null
  }

  // Initialize the list
  this.head = null
  this.tail = null

  // This function is called when you want to add a new node to the end of the list.
  this.add = function(content){
    if(!this.head){
      this.head = new Node(content)
      this.tail = this.head
    } else{
      this.tail.next = new Node(content)
      this.tail = this.tail.next
    }
  }


  // Moves a node to front of the ist
  this.move_to_front = function(node){
    // check if the node is at the front 
    if(node ===  this.head){
      return
    }

    let temp = this.head
    while(temp.next !== node){
      
    }
  }
}