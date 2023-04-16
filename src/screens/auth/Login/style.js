import Box from '@mui/material/Box';
import {styled} from '@mui/material/styles';
import InputLabel from '@mui/material/InputLabel';

export const HeaderLogin = styled(Box)({
  paddingTop: 55,
  paddingBottom: 55,
  minHeight: '15vh',
});

export const GlobalContainerLogin = styled(Box)({
  flexDirection: 'row',
  width: '100%',
});

export const LoginContainer = styled(Box)({
  minHeight: '50vh',
  display: 'flex',
  flexDirection: 'row',
  flexWrap: 'wrap',
  justifyContent: 'center',
  alignItems: 'center',
  width: '100%',
});

export const TextfiedsBox = styled(Box)({
  flexDirection: 'column',
  width: '85%',
  display: 'flex',
  justifyContent: 'space-around',
});

export const InputTextBox = styled(Box)({
  /* Extra small devices (phones, 600px and down) */
  '@media only screen and (max-width: 600px)': {
    width: '90%',
  },

  /* Small devices (portrait tablets and large phones, 600px and up) */
  '@media only screen and (min-width: 600px)': {
    width: '75%',
  },

  /* Medium devices (landscape tablets, 768px and up) */
  '@media only screen and (min-width: 768px)': {
    width: '60%',
  },

  /* Large devices (laptops/desktops, 992px and up) */
  '@media only screen and (min-width: 992px)': {
    width: '50%',
  },

  /* Extra large devices (large laptops and desktops, 1200px and up) */
  '@media only screen and (min-width: 1200px)': {
    width: '60%',
  },
  marginBottom: 24,
  padding: 2,
  height: 50,
});

export const BtnCnxn = styled(Box)({
  minWidth: '18vw',
  marginLeft: 'auto',
  marginRight: 'auto',
  paddingTop: 25,
});

export const BtnCnxnLoading = styled(Box)({
  display: 'flex',
  justifyContent: 'center',
  paddingTop: 25,
  paddingBottom: 25,
});

export const Legals = styled(Box)({
  margin: 'auto',
  alignSelf: 'center',
});

export const TextLegals = styled(InputLabel)({
  fontSize: '15px',
  paddingTop: '8px',
  cursor: 'pointer',
});
