import { Text } from "react-native";
import { Styling } from "./TxtView.style";

export function TxtView({ children, style, ...restProps }) {
  const fontSize = style?.fontSize || Styling.text.fontSize;
  return (
    <Text style={[Styling.text, style, fontSize]} {...restProps}>
      {children}
    </Text>
  );
}
