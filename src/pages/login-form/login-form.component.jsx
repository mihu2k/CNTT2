import * as React from 'react';
import { Tabs, Tab, Box, Typography } from '@mui/material';

import SignIn from '~/components/login-form/sign-in';
import SignUp from '~/components/login-form/sign-up';
import Header from '~/components/login-form/header-login';
import { useStyles } from './login-form.style';

function LoginForm() {
  const classes = useStyles();

  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
      <div
        role="tabpanel"
        hidden={value !== index}
        id={`simple-tabpanel-${index}`}
        aria-labelledby={`simple-tab-${index}`}
        {...other}
      >
        {value === index && (
          <Box sx={{ p: 3 }}>
            <Typography>{children}</Typography>
          </Box>
        )}
      </div>
    );
  }

  return (
    <div className={classes.wrapper}>
      <Header />

      <Tabs value={value} onChange={handleChange} sx={{ position: 'relative' }}>
        <Tab label="Đăng Nhập" sx={{ fontWeight: 'bold' }} />

        <Tab label="Đăng ký" sx={{ fontWeight: 'bold' }} />
      </Tabs>

      <TabPanel value={value} index={0} sx={{ position: 'absolute' }}>
        <SignIn />
      </TabPanel>
      <TabPanel value={value} index={1} sx={{ position: 'absolute' }}>
        <SignUp />
      </TabPanel>
    </div>
  );
}

export default LoginForm;
