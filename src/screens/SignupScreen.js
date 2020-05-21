import React from 'react';
import { View, StyleSheet } from 'react-native';
import { ThemeProvider, Button, Input, Text, Image } from 'react-native-elements';
import Spacer from '../components/Spacer';
import logo from '../images/logo.png';

const theme = {
  Input: {
    labelStyle: {
      color: '#ff7c5d',
    },
  },
  Button: {
    titleStyle: {
      color: 'white',
    },
    buttonStyle: {
      backgroundColor: '#ff7c5d',
      paddingHorizontal: 25,
      paddingVertical: 10,
    }
  },
};

const SignupScreen = ({navigation}) => {
  return <View style={styles.container}>
      <Image source={logo} style={styles.logo} />
      <Spacer>
        <Text h3 style={styles.header}>Sign up to Nodis</Text>
      </Spacer>
      <ThemeProvider theme={theme}>
        <Input label='Username' />
        <Input label='Password' />
        <Button title='Sign up now!'/>
      </ThemeProvider>
    </View>;
};

const styles = StyleSheet.create({
  logo: {
    width: 200,
    height: 200,
  },
  header: {
    color: '#ff7c5d',
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems:'center',
    padding: 10,
    paddingBottom: 200,
  }
});

SignupScreen.navigationOptions = {
  headerShown: false
};

export default SignupScreen;
