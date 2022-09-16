import React from 'react';
import Dialog from '@mui/material/Dialog';

export function ModalWindow(props) {
  const { onClose, open, children } = props;
  return (
    <Dialog
      open={open}
      onClose={onClose}
      {...props}
      sx={{ zIndex: 999 }}
    >
      {children}
    </Dialog>
  );
}
