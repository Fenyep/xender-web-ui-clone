import React from 'react'

import { TreeView } from '@mui/lab'

import { AiFillCaretDown, AiFillCaretRight } from 'react-icons/ai'
import FilesTreeItem from './subComponents/FilesTreeItem';
import PhoneMemoryTreeItem from './subComponents/PhoneMemoryTreeItem';
import SDCardTreeItem from './subComponents/SDCardTreeItem';

const FoldersTreeView = ({ setRepository, setDisplayRepository }) => {

  return (
    <div className={`overflow-y-auto border h-full`} style={{
        width: "calc(100vw - 80vw)",
      }}
    >
      <TreeView
        aria-label="multi-select"
        defaultCollapseIcon={<AiFillCaretDown />}
        defaultExpandIcon={<AiFillCaretRight />}
        multiSelect
        sx={{ height: "full", flexGrow: 1, maxWidth: "full", overflowY: 'auto' }}
      >

        <FilesTreeItem setDisplayRepository={setDisplayRepository} setRepository={setRepository} />

        <PhoneMemoryTreeItem setDisplayRepository={setDisplayRepository} setRepository={setRepository} />

        <SDCardTreeItem setDisplayRepository={setDisplayRepository} setRepository={setRepository} />

      </TreeView>
    </div>
  )
}

export default FoldersTreeView