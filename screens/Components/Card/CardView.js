import { Button, Text, TouchableOpacity, View } from "react-native";
import { Styling } from "./CardView.style";
import { Ionicons } from "@expo/vector-icons";

export function CardView({ title, description, icon }) {
  return (
    <View style={Styling.card}>
      {icon && <Ionicons name={icon} size={77} color={"#1d1c1c"} />}
      <View style={Styling.content}>
        <Text style={Styling.title}>{title}</Text>
        <Text style={Styling.description}>{description}</Text>
      </View>
    </View>
  );
}
