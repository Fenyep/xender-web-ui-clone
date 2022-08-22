import * as React from 'react';
import Box from '@mui/material/Box';
import TreeItem from '@mui/lab/TreeItem';
import Typography from '@mui/material/Typography';
import { BsFolder2 } from 'react-icons/bs';
import { AiOutlineFile } from 'react-icons/ai';


const FolderTreeItem = ({ children, isFolder = false, nodeId, labelInfo, labelText }) => {

  return (
    <TreeItem
      nodeId={nodeId}
      label={
        <Box sx={{ display: 'flex', alignItems: 'center', p: 0.5, pr: 0 }}>
          {isFolder ?  <Typography variant="body2" sx={{ mr: 1 }}>
            <BsFolder2 color='#9C27B0' size={25} />
          </Typography> : <Typography variant="body2" sx={{ mr: 1 }}>
            <AiOutlineFile color='#9C27B0' size={20} />
          </Typography> }
          <Typography variant="body2" sx={{ fontWeight: 'inherit', fontFamily: 'PoppinsLight' , flexGrow: 1 }}>
            {labelText}
          </Typography>
          <Typography variant="caption" color="inherit" sx={{ fontFamily: 'PoppinsLight' }}>
            {labelInfo}
          </Typography>
        </Box>
      }
    >
      {children}
    </TreeItem>
  );
}

export default FolderTreeItem
