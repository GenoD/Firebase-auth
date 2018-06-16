import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import firebase from 'firebase';
import SignUpForm from './components/SignUpForm';
import SignInForm from './components/SignInForm';

export default class App extends React.Component {
  componentDidMount() {
    const config = {
      apiKey: "AIzaSyBAR78LUpH9Q28qkWbio3TE41TreRbfDiw",
      authDomain: "one-time-password-68eb2.firebaseapp.com",
      databaseURL: "https://one-time-password-68eb2.firebaseio.com",
      projectId: "one-time-password-68eb2",
      storageBucket: "one-time-password-68eb2.appspot.com",
      messagingSenderId: "662952823585"
    };
    firebase.initializeApp(config);
  }

  render() {
    return (
      <View style={styles.container}>
        <SignUpForm />
        <SignInForm />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
});
