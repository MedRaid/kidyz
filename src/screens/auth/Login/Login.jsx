import React from 'react';
import {
  HeaderLogin,
  TextfiedsBox,
  InputTextBox,
  GlobalContainerLogin,
  LoginContainer,
  BtnCnxn,
  BtnCnxnLoading,
  TextLegals,
  Legals,
} from './styles';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import {Formik} from 'formik';

import Box from '@mui/material/Box';
function Login() {
  return (
    <GlobalContainerLogin>
      <HeaderLogin></HeaderLogin>
      <LoginContainer>
        <Formik
          initialValues={{
            email: '',
            password: '',
          }}
          onSubmit={values => handleSubmitForm(values)}>
          {({handleChange, handleSubmit, values, isValid, isSubmitting}) => {
            return (
              <TextfiedsBox>
                <Box
                  sx={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    flexDirection: 'column',
                    alignContent: 'center',
                  }}>
                  <InputTextBox>
                    <TextField
                      id="Email"
                      label={`${i18n.t('email')}`}
                      variant="outlined"
                      type="email"
                      fullWidth
                      onChange={handleChange('email')}
                      value={values.email}
                    />
                  </InputTextBox>

                  <InputTextBox>
                    <TextField
                      id="pass"
                      label={`${i18n.t('password')}`}
                      variant="outlined"
                      type="password"
                      fullWidth
                      onChange={handleChange('password')}
                      value={values.password}
                      onKeyDown={e => {
                        if (e.key === 'Enter') {
                          handleSubmit();
                        }
                      }}
                    />
                  </InputTextBox>
                </Box>

                <BtnCnxn>
                  <Button
                    sx={{
                      backgroundColor: 'buttons.main',
                      color: 'buttonsTextColors.main',
                      width: {
                        xs: '40vw',
                        sm: '25vw',
                        md: '20vw',
                        lg: '15vw',
                        xl: '10vw',
                      },
                    }}
                    disabled={
                      !isValid ||
                      isSubmitting ||
                      values.email === '' ||
                      values.password === ''
                    }
                    variant="contained"
                    type="submit"
                    onClick={handleSubmit}>
                    {`${i18n.t('connection')}`}
                  </Button>

                  <BtnCnxnLoading>
                    {isSubmitting && <Text>loading</Text>}
                  </BtnCnxnLoading>
                </BtnCnxn>
                <Legals>
                  <a
                    style={{
                      textDecorationColor: 'gray',
                    }}
                    href="https://google.com/">
                    <TextLegals>{`${i18n.t('legals')}`}</TextLegals>
                  </a>
                </Legals>
              </TextfiedsBox>
            );
          }}
        </Formik>
      </LoginContainer>
    </GlobalContainerLogin>
  );
}

export default Login;
