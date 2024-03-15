import { Text, View } from "react-native";
import { Styling } from "./BadgeLongText.style";

export function BadgeLongText({ backgroundColor, text, textColor }) {
  return (
    <View style={[Styling.badge, { backgroundColor: backgroundColor }]}>
      <Text style={[Styling.text, { color: textColor }]}>{text}</Text>
    </View>
  );
}
