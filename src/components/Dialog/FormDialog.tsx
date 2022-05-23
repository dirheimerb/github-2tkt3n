import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import FormControl, { useFormControl } from '@mui/material/FormControl';
import OutlinedInput from '@mui/material/OutlinedInput';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import FormHelperText from '@mui/material/FormHelperText';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';

export interface DialogProps {
  id: string;
  children?: React.ReactNode;
  onClose: () => void;
}

function HelpText() {
  const { focused } = useFormControl() || {};
  const helpText = React.useMemo(() => {
    if (focused) {
      return 'Please enter Username';
    }
    return;
  }, [focused]);
  return <FormHelperText>{helpText}</FormHelperText>;
}

interface State {
  username: string;
  password: string;
  first_name: string;
  last_name: string;
  email: string;
  showPassword: boolean;
}
export const handleChange =
  (prop: keyof State) => (event: React.ChangeEvent<HTMLInputElement>) => {
    setValues({ ...values, [prop]: event.target.value });
  };
function FormDialog(props: DialogProps) {
  const [open, setOpen] = React.useState(false);
  const [values, setValues] = React.useState<State>({
    username: '',
    password: '',
    first_name: '',
    last_name: '',
    email: '',
    showPassword: false,
  });

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <React.Fragment>
      <div>
        <Button variant="outlined" onClick={handleClickOpen}>
          Signup
        </Button>
        <Dialog open={open} onClose={handleClose}>
          <DialogContentText>
            <Stack component="form" sx={{ width: '60vw' }} spacing={4}>
              <TextField
                required
                className="styles.inputFields"
                values={values}
                label="Frist Name: "
                id="first_name"
                type="text"
                onChange={handleChange}
              />
              <TextField
                required
                className={'styles.inputFields'}
                values={values}
                label="Last Name: "
                id="last_name"
                type="text"
                onChange={handleChange}
              />
              <TextField
                required
                className="inputFields"
                values={values}
                label="Email: "
                id="email"
                type="email"
                onChange={handleChange}
              />
              <TextField
                required
                className="inputFields"
                values={values}
                id="username"
                type="text"
                onChange={handleChange}
              >
                {HelpText}
              </TextField>
              <TextField
                required
                className="inputFields"
                values={values}
                label="Password: "
                id="password"
                type="password"
                onChange={handleChange}
              />
            </Stack>
          </DialogContentText>
          <DialogActions>
            <Button onClick={handleClose}>Cancel</Button>
            <Button onClick={handleClose}>Subscribe</Button>
          </DialogActions>
        </Dialog>
      </div>
    </React.Fragment>
  );
}

export default FormDialog;
