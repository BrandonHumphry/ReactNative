import React, { useLayoutEffect } from "react";
import { StyleSheet, Text, View } from "react-native";

const AddChatScreen = ({ navigation }) => {
  useLayoutEffect(() => {
    navigation.setOptions({
      title: "Add a new chat",
      headerBackTitle: "Chats"
    });
  }, [navigation]);

  return (
    <View>
      <Text>Add Chat</Text>
    </View>
  );
};

export default AddChatScreen;

const styles = StyleSheet.create({
  container: {}
});
