import Alert from '@mui/material/Alert';
import * as React from 'react';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';

function Alerts() {
  return (
    <React.Fragment>
      <div className="alerts">
        <Stack sx={{ width: '100%' }} spacing={2}>
          <Alert severity="error">This is an error message!</Alert>
          <Alert severity="warning">This is a warning message!</Alert>
          <Alert severity="info">This is an information message!</Alert>
          <Alert severity="success">This is a success message!</Alert>
        </Stack>
      </div>
    </React.Fragment>
  );
}
