import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { FormLabel, FormInput, Button } from 'react-native-elements';
import axios from 'axios';
import firebase from 'firebase';

const ROOT_URL = 'https://us-central1-one-time-password-68eb2.cloudfunctions.net';

class SignInForm extends Component {
  state = { 
    code: '',
    phone: '',
  };

  handleSubmit = async () => {
    try {
      let { data } = await axios.post(`${ROOT_URL}/verifyOneTimePassword`, { 
        code: this.state.code,
        phone: this.state.phone,
      });
      firebase.auth().signInWithCustomToken(data.token);      
    } catch (err) {
      console.log(err);
    }
  }

  render() {
    return (
      <View>
        <View style={{ marginBottom: 10 }}>
          <FormLabel>Enter Phone Number</FormLabel>
          <FormInput value={this.state.phone} onChangeText={phone => this.setState({ phone })} />
          <FormLabel>Enter Verification Number</FormLabel>
          <FormInput value={this.state.code} onChangeText={code => this.setState({ code })} />
        </View>
        <Button onPress={this.handleSubmit} title="Submit" />
      </View>
    );
  }
}

export default SignInForm;