import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Text, Image } from 'react-native-elements';
import Spacer from '../components/Spacer';
import logo from '../images/logo.png';
import AuthForm from '../components/AuthForm';

const SignupScreen = ({navigation}) => {
  return <View style={styles.container}>
      <Image source={logo} style={styles.logo} />
      <Spacer>
        <Text h3 style={styles.header}>Sign up to Nodis</Text>
      </Spacer>
      <AuthForm />
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
