import { View, Text, Button } from "react-native";
import React, { useState } from "react";
import { TextInput } from "react-native";

export default function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLog = () => {
    console.log("Username", username);
    console.log("Password", password);
  };

  return (
    <View>
      <TextInput
        style={{
          height: 40,
          width: 200,
          padding: 10,
          borderColor: "gray",
          borderWidth: 1,
          marginBottom: 10,
          marginTop: 10,
        }}
        placeholder="username"
        value={username}
        onChangeText={(text) => setUsername(text)}
      />
      <TextInput
        style={{
          height: 40,
          width: 200,
          padding: 10,
          borderColor: "gray",
          borderWidth: 1,
          marginBottom: 10,
          marginTop: 10,
        }}
        placeholder="password"
        value={password}
        onChangeText={(text) => setPassword(text)}
        secureTextEntry={true}
      />
      <Button title="Logar" onPress={handleLog} />
    </View>
  );
}
