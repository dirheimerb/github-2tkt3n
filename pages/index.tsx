import * as React from 'react';
import type { NextPage } from 'next';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Link from '../src/Link';
import Popup from '../src/components/Popups/SuccessPopup';
import AccountMenu from '../src/components/Menu/AccountMenu';
import FormDialog from '../src/components/Dialog/FormDialog';
import Account from '../src/components/AccountSettings/Account';

const Home: NextPage = () => {
  return (
    <Container maxWidth="lg">
      <AccountMenu />
      <Box
        sx={{
          my: 4,
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <Account />
        <Link href="/about" color="secondary">
          Go to the about page
        </Link>
        <Popup />
        <FormDialog />
      </Box>
    </Container>
  );
};

export default Home;
