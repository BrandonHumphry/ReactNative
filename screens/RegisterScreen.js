import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { KeyboardAvoidingView } from "react-native";
import { StyleSheet, Text, View } from "react-native";
import { Input } from "react-native-elements";

const RegisterScreen = ({ navigation }) => {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [imageUrl, setImageUrl] = useState("");

  const register = {};

  return (
    <KeyboardAvoidingView behavior="padding" style={styles.container}>
      <StatusBar style="light" />
      <Text h3 style={{ marginBottom: 50 }}>
        Create a new Signal account
      </Text>

      <View style={styles.inputContainer}>
        <Input
          placeholder="Full Name"
          autofocus
          type="text"
          value={fullName}
          onChangeText={text => setFullName(text)}
        />
        <Input
          placeholder="Email"
          type="email"
          value={email}
          onChangeText={text => setEmail(text)}
        />
        <Input
          placeholder="Password"
          type="password"
          secureTextEntry
          value={password}
          onChangeText={text => setPassword(text)}
        />
        <Input
          placeholder="Profile picture (optional)"
          type="text"
          value={imageUrl}
          onChangeText={text => setImageUrl(text)}
          onSubmitEditing={register}
        />
      </View>
    </KeyboardAvoidingView>
  );
};

export default RegisterScreen;

const styles = StyleSheet.create({
  container: {},
  inputContainer: {}
});
