import { TextInput, View } from "react-native";
import { Styling } from "./InputField.style";
import { TxtView } from "../TextView/TxtView";
import { useState } from "react";

export function InputField({ label, value, onChange, placeholder }) {
  const [isFocused, setIsFocused] = useState(false);
  return (
    <View style={Styling.container}>
      <TxtView style={{ padding: 10 }}>{label}</TxtView>
      <TextInput
        style={[Styling.inputField, isFocused ? Styling.focused : null]}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        value={value}
        onChangeText={onChange}
        placeholder={placeholder}
        textAlign="center"
        textAlignVertical="center"
      />
    </View>
  );
}
