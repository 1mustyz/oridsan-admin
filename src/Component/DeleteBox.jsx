import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
import { CircularProgress } from '@mui/material';

export default function DeleteBox({open, handleClose, title, body, deleteFunction, loading}) {
    const theme = useTheme();
    const fullScreen = useMediaQuery(theme.breakpoints.down('md'));
  
  return (
    <div>
      
      <Dialog
        fullScreen={fullScreen}
        open={open}
        onClose={handleClose}
        aria-labelledby="responsive-dialog-title"
      >
        <DialogTitle id="responsive-dialog-title">
        {title}
        </DialogTitle>
        <DialogContent>
          <DialogContentText>
           {body}
          </DialogContentText>
        </DialogContent>
        <DialogActions >
            <div className='flex gap-3 py-4 px-8'>

                <Button autoFocus onClick={handleClose}>
                    Cancel
                </Button>
                {!loading && <Button onClick={deleteFunction} autoFocus>
                    Continue
                </Button>}
                {loading && <CircularProgress/>}
            </div>
        </DialogActions>
      </Dialog>
    </div>
  );
}