import React from 'react'

import { TreeItem } from '@mui/lab'
import { Box, Typography } from '@mui/material'

import { BsFolder2, BsGridFill } from 'react-icons/bs'
import { useContext } from 'react'
import { FoldersContext } from '../../../../services/state/context/foldersContext'
import FolderTreeItem from '../../../../components/folderTreeItem/FolderTreeItem'

const FilesTreeItem = ({ setRepository, setDisplayRepository }) => {

    const { files } = useContext(FoldersContext)

    const handleRootFolderClick = () => {
        setRepository('Fichiers')
        setDisplayRepository(files)
    }

  return (
    <TreeItem
            onClick={() => handleRootFolderClick()}
            nodeId="1"
            label={
                <Box sx={{ display: 'flex', alignItems: 'center', p: 0.5, pr: 0 }}>
                <Typography variant="body2" sx={{ mr: 1 }}>
                    <Box component="span" sx={{ position: "relative" }} classname={`relative`}>
                        <BsFolder2 color='#9C27B0' size={25} />
                        <Box component="span" sx={{ position: "absolute", top: "42%", left: "30%" }}>
                            <BsGridFill fill='#9C27B0' size={9} />
                        </Box>
                    </Box>
                </Typography>
                <Typography variant="body2" sx={{ fontWeight: 'inherit', fontFamily: 'PoppinsLight' , flexGrow: 1 }}>
                    Fichiers
                </Typography>
                <Typography variant="caption" color="inherit" sx={{ fontFamily: 'PoppinsLight' }}>
                </Typography>
                </Box>
            }
            >
                {files && files.map((file) => (
                    <FolderTreeItem isFolder={file.isFolder} nodeId={file.nodeId} labelText={file.name} />
                ))}
        </TreeItem>
  )
}

export default FilesTreeItem