import * as React from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert, { AlertProps } from '@mui/material/Alert';
import Slide, { SlideProps } from '@mui/material/Slide';

type TransitionProps = Omit<SlideProps, 'direction'>;
function TransitionLeft(props: TransitionProps) {
  return <Slide {...props} direction="left" />;
}

function TransitionUp(props: TransitionProps) {
  return <Slide {...props} direction="up" />;
}

function TransitionRight(props: TransitionProps) {
  return <Slide {...props} direction="right" />;
}

function TransitionDown(props: TransitionProps) {
  return <Slide {...props} direction="down" />;
}

const Alert = React.forwardRef<HTMLDivElement, AlertProps>(function Alert(
  props,
  ref
) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

export default function Popup() {
  const [open, setOpen] = React.useState<boolean>(false);
  const [transition, setTransition] = React.useState<
    React.ComponentType<TransitionProps> | undefined
  >(undefined);

  const handleClick =
    (Transition: React.ComponentType<TransitionProps>) => () => {
      setTransition(() => Transition);
      setOpen(true);
    };

  const handleClose = (
    event?: React.SyntheticEvent | Event,
    reason?: string
  ) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpen(false);
  };

  return (
    <React.Fragment>
      <Button onClick={handleClick(TransitionLeft)}>Right</Button>
      <Button onClick={handleClick(TransitionUp)}>Up</Button>
      <Button onClick={handleClick(TransitionRight)}>Left</Button>
      <Button onClick={handleClick(TransitionDown)}>Down</Button>
      <Stack spacing={2} sx={{ width: '100%' }}>
        <Button variant="outlined" onClick={handleClick}>
          Open success snackbar
        </Button>
        <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
          <Alert
            onClose={handleClose}
            severity="success"
            sx={{ width: '100%' }}
          >
            This is a success message!
          </Alert>
        </Snackbar>

      </Stack>
    </React.Fragment>
  );
}
