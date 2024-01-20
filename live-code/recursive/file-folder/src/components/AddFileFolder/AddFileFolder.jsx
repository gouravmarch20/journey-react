import React ,{useState} from "react"
import Folder from "./Folder"
import explorer from "../../data/folderData"
import useTraverseTree from "../../hooks/use-traverse-tree";

const AddFileFolder = () => {
  const [explorerData, setExplorerData] = useState(explorer);

  const { insertNode } = useTraverseTree();
  const handleInsertNode = (folderId, item, isFolder) => {
    const finalTree = insertNode(explorerData, folderId, item, isFolder);
    setExplorerData(finalTree);
  };
  return (
    <div>

      <Folder handleInsertNode={handleInsertNode} explorer={explorerData} />

    </div>
  )
}

export default AddFileFolder
