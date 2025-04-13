import React, { useState } from 'react';

const FileFolderItem = ({ item, onRename, onDelete, onAddChild }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [newName, setNewName] = useState(item.name);
  const [isRenaming, setIsRenaming] = useState(false);

  const handleRename = () => {
    if (newName.trim()) {
      onRename(item.id, newName);
    }
    setIsRenaming(false);
  };

  const handleAddChild = (type) => {
    if (type === 'file' && !Array.isArray(item.children)) return;
    const newItem = {
      id: Date.now(),
      name: type === 'folder' ? 'New Folder' : 'New File',
      children: type === 'folder' ? [] : null,
    };
    onAddChild(item.id, newItem);
  };

  return (
    <div style={{ marginLeft: `${item.level * 20}px`, padding: '5px' }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
        {Array.isArray(item.children) && (
          <button onClick={() => setIsExpanded(!isExpanded)}>
            {isExpanded ? '-' : '+'}
          </button>
        )}
        {isRenaming ? (
          <input
            value={newName}
            onChange={(e) => setNewName(e.target.value)}
            onBlur={handleRename}
            autoFocus
          />
        ) : (
          <span onClick={() => setIsRenaming(true)} style={{ cursor: 'pointer' }}>
            {item.name}
          </span>
        )}
        {Array.isArray(item.children) && (
          <>
            <button onClick={() => handleAddChild('folder')}>+ Folder</button>
            <button onClick={() => handleAddChild('file')}>+ File</button>
          </>
        )}
        <button onClick={() => onDelete(item.id)}>Delete</button>
      </div>
      {isExpanded && Array.isArray(item.children) && (
        <div style={{ paddingLeft: '20px' }}>
          {item.children.map((child) => (
            <FileFolderItem
              key={child.id}
              item={child}
              onRename={onRename}
              onDelete={onDelete}
              onAddChild={onAddChild}
            />
          ))}
        </div>
      )}
    </div>
  );
};

const FileManager = () => {
  const [fileStructure, setFileStructure] = useState([
    {
      id: 1,
      name: 'Root',
      level: 0,
      children: [
        {
          id: 2,
          name: 'Folder1',
          level: 1,
          children: [
            { id: 3, name: 'File1.txt', level: 2, children: null },
            { id: 4, name: 'File2.txt', level: 2, children: null },
          ],
        },
        { id: 5, name: 'File3.txt', level: 1, children: null },
      ],
    },
  ]);

  const updateFileStructure = (updateFn) => {
    setFileStructure((prevStructure) => updateFn(prevStructure));
  };

  const renameItem = (id, newName) => {
    updateFileStructure((items) => renameItemInList(items, id, newName));
  };

  const renameItemInList = (items, id, newName) => {
    return items.map((item) => {
      if (item.id === id) return { ...item, name: newName };
      if (Array.isArray(item.children)) {
        return { ...item, children: renameItemInList(item.children, id, newName) };
      }
      return item;
    });
  };

  const deleteItem = (id) => {
    updateFileStructure((items) => removeItemFromList(items, id));
  };

  const removeItemFromList = (items, id) => {
    return items.reduce((acc, item) => {
      if (item.id === id) return acc;
      if (Array.isArray(item.children)) {
        const updatedChildren = removeItemFromList(item.children, id);
        acc.push({ ...item, children: updatedChildren });
      } else {
        acc.push(item);
      }
      return acc;
    }, []);
  };

  const addChild = (parentId, newItem) => {
    updateFileStructure((items) => addChildToList(items, parentId, newItem));
  };

  const addChildToList = (items, parentId, newItem) => {
    return items.map((item) => {
      if (item.id === parentId) {
        return { ...item, children: [...(item.children || []), newItem] };
      }
      if (Array.isArray(item.children)) {
        return { ...item, children: addChildToList(item.children, parentId, newItem) };
      }
      return item;
    });
  };

  return (
    <div>
      <h2>File Manager</h2>
      {fileStructure.map((item) => (
        <FileFolderItem
          key={item.id}
          item={item}
          onRename={renameItem}
          onDelete={deleteItem}
          onAddChild={addChild}
        />
      ))}
    </div>
  );
};

export default FileManager;
