import React from 'react'

import { TreeItem } from '@mui/lab'
import { Box, Typography } from '@mui/material'

import { RiSdCardMiniLine } from 'react-icons/ri'
import { useContext } from 'react'
import { FoldersContext } from '../../../../services/state/context/foldersContext'
import FolderTreeItem from '../../../../components/folderTreeItem/FolderTreeItem'

const PhoneMemoryTreeItem = ({ setRepository, setDisplayRepository }) => {

    const { phoneMemory } = useContext(FoldersContext)

    const handleRootFolderClick = () => {
        setRepository('Mémoire du téléphone')
        setDisplayRepository(phoneMemory)
    }

  return (
    <TreeItem
            onClick={() => handleRootFolderClick()}
            nodeId="2"
            label={
                <Box sx={{ display: 'flex', alignItems: 'center', p: 0.5, pr: 0 }}>
                <Typography variant="body2" sx={{ mr: 1 }}>
                    <RiSdCardMiniLine color='#9C27B0' size={25} />
                </Typography>
                <Typography variant="body2" sx={{ fontWeight: 'inherit', fontFamily: 'PoppinsLight' , flexGrow: 1 }}>
                    Mémoire du téléphone
                </Typography>
                <Typography variant="caption" color="inherit" sx={{ fontFamily: 'PoppinsLight' }}>
                </Typography>
                </Box>
            }
            >
                {phoneMemory && phoneMemory.map((folder) => (
                    folder.folders.length > 0 ?
                    (
                        <Box component="span">
                            <FolderTreeItem isFolder={folder.isFolder} nodeId={folder.nodeId} labelText={folder.name}>
                            {folder.folders.map((folderDepthOne) => (
                                folderDepthOne.folders.length > 0 ?
                                (<Box component="span">
                                    <FolderTreeItem isFolder={folderDepthOne.isFolder} nodeId={folderDepthOne.nodeId} labelText={folderDepthOne.name}>
                                    {folderDepthOne.folders.map((foldersDepthTwo) => (
                                        <FolderTreeItem isFolder={foldersDepthTwo.isFolder} nodeId={foldersDepthTwo.nodeId} labelText={foldersDepthTwo.name} />
                                    ))}
                                    </FolderTreeItem>
                                </Box>) : 
                                (
                                    <FolderTreeItem isFolder={folderDepthOne.isFolder} nodeId={folderDepthOne.nodeId} labelText={folderDepthOne.name} />
                                )
                            ))}
                            </FolderTreeItem>
                        </Box>
                    ) : (
                        
                        <FolderTreeItem isFolder={folder.isFolder} nodeId={folder.nodeId} labelText={folder.name} />
                    )
                ))}
        </TreeItem>
  )
}

export default PhoneMemoryTreeItem