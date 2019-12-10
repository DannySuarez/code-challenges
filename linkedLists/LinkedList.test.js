const { LinkedList } = require('./LinkedList');

describe('Linked List Class', () => {
  const linkedList = new LinkedList();
  it('instantiates an empty list', () => {
    expect(linkedList.head).toBeNull;
  });

  it('inserts into a linked list', () => {
    linkedList.insert(0);
    expect(linkedList.head).toEqual({ 'next': null, 'value': 0 });
  });
  
});
