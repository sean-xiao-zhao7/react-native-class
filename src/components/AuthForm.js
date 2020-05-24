import React, { useContext, useState } from 'react';
import { ThemeProvider, Text, Input, Button } from 'react-native-elements';
import { StyleSheet, View, TouchableOpacity } from 'react-native';
import { Context as AuthContext } from '../context/authContext';

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

const AuthForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { state, signup } = useContext(AuthContext);

  return (
    <>
      <ThemeProvider theme={theme}>
        <Input label='Username' value={email} onChangeText={setEmail} autoCapitalize="none" autoCorrect={false} />
        <Input label='Password' value={password} onChangeText={setPassword} autoCapitalize="none" autoCorrect={false} secureTextEntry />
        <Button title='Sign up now!' onPress={() => {
            signup({email, password})
          }}
        />
        <TouchableOpacity onPress={() => navigation.navigate('Signin')} >
          <Text>Already registered? Sign in!</Text>
        </TouchableOpacity>
      </ThemeProvider>
    </>
  );
};

const styles = StyleSheet.create({

});

export default AuthForm;
