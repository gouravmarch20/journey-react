import React, { useState } from 'react';

// Transfer Lists Component
const TransferLists = () => {
  // Define state for two lists
  const [list1, setList1] = useState(["Item 1", "Item 2", "Item 3", "Item 4"]);
  const [list2, setList2] = useState(["Item 5", "Item 6", "Item 7", "Item 8"]);

  // Function to transfer items between lists
  const transferItem = (item, fromList, setFromList, toList, setToList) => {
    setFromList(fromList.filter(i => i !== item)); // Remove from source list
    setToList([...toList, item]); // Add to target list
  };

  return (
    <div style={{ display: 'flex', justifyContent: 'space-around', marginTop: '20px' }}>
      {/* List 1 */}
      <div>
        <h3>List 1</h3>
        <ul data-testid="list-1">
          {list1.map((item) => (
            <li
              key={item}
              data-testid={`list1-item-${item}`}
              onClick={() => transferItem(item, list1, setList1, list2, setList2)}
              style={{ cursor: 'pointer', padding: '5px', border: '1px solid black', margin: '5px' }}
            >
              {item}
            </li>
          ))}
        </ul>
      </div>

      {/* List 2 */}
      <div>
        <h3>List 2</h3>
        <ul data-testid="list-2">
          {list2.map((item) => (
            <li
              key={item}
              data-testid={`list2-item-${item}`}
              onClick={() => transferItem(item, list2, setList2, list1, setList1)}
              style={{ cursor: 'pointer', padding: '5px', border: '1px solid black', margin: '5px' }}
            >
              {item}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
export default TransferLists;
