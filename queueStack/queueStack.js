//Write a stack. Once you’re done, 
//implement a queue using two stacks to create FIFO behavior. 
//The queue should not have any storage separate from its stacks.


var Stack = function() {
	var storage = [];
    
	this.push = function(val){
     storage.push(val)

	};

	this.pop = function(){
		var d=storage.pop()
		return d

	};

	this.size = function(){
		return storage.length

	};
};

var Queue = function() {

	var inbox = new Stack();
	var outbox = new Stack();

	this.enqueue = function(val){
		inbox.push(outbox.pop())
        inbox.push(val)
   
	};

	this.dequeue = function(){
		outbox.push(inbox.pop())
		return outbox.pop()
		
	};

	this.size = function(){
      return outbox.length
	};
};