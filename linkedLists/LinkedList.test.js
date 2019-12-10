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

  it('will insert multiple nodes', () => {
    linkedList.insert(1);
    linkedList.insert(2);
    const nextNode = linkedList.head.next;
    expect(linkedList.head).toEqual({
      value:2,
      next: {
        value: 1,
        next: {
          value: 0,
          next: null
        }
      }
    });
    expect(nextNode).toEqual({
      value: 1,
      next: {
        value: 0,
        next: null
      }
    });
  });

  it('returns true if a value is foudn in a node', () => {
    expect(linkedList.includes(2)).toBeTruthy;
  });
  
  it('returns false if not found', () => {
    expect(linkedList.includes(3)).toBeFalsy();
  });

  it('returns a linked list', () => {
    expect(linkedList.toString()).toEqual(
      '2 -> 1 -> 0'
    );
  });
});
