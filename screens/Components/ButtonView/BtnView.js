import { TouchableOpacity } from "react-native";
import { TxtView } from "../TextView/TxtView";
import { Styling } from "./BtnView.style";
import { Icon } from "react-native-paper";

export function BtnView({ TextButton, onPress, BtnIcon, backgroundColor }) {
  return (
    <TouchableOpacity
      style={[Styling.btn, { backgroundColor: backgroundColor }]}
      onPress={onPress}
    >
      {BtnIcon && <Icon source={BtnIcon} color="white" size={21} />}
      <TxtView style={Styling.btnText}>{TextButton}</TxtView>
    </TouchableOpacity>
  );
}
