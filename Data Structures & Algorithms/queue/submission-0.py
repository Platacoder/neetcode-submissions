class Node:
    def __init__(self, val):
        self.val = val
        self.prev = None
        self.next = None

class Deque:
    
    def __init__(self):
        self.head = Node(-1)
        self.tail = Node(-1)
        self.head.next = self.tail
        self.tail.prev = self.head

    def isEmpty(self) -> bool:
        return self.head.next == self.tail
        

    def append(self, value: int) -> None:
        newNode = Node(value)
        last_node = self.tail.prev

        last_node.next = newNode
        newNode.prev = last_node
        newNode.next = self.tail
        self.tail.prev = newNode        

    def appendleft(self, value: int) -> None:
        newNode = Node(value)
        next_node = self.head.next

        self.head.next = newNode
        newNode.prev = self.head
        newNode.next = next_node
        next_node.prev = newNode

        

    def pop(self) -> int:
        if self.isEmpty():
            return -1
        
        prev_node = self.tail.prev
        value = prev_node.val
        self.tail.prev.prev.next = self.tail
        self.tail.prev = self.tail.prev.prev
        

        return value
        
        

    def popleft(self) -> int:
        if self.isEmpty():
            return -1
        
        next_node = self.head.next
        value = next_node.val
        self.head.next.next.prev = self.head
        self.head.next = self.head.next.next
        

        return value
        
