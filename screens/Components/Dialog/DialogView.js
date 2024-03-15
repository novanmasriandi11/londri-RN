import { Ionicons } from "@expo/vector-icons";
import { Modal, Text, TouchableOpacity, View } from "react-native";
import { Styling } from "./DialogView.style";

export function DialogView({ isVisible, onClose, title, content, icon }) {
  return (
    <Modal isVisible={isVisible} onRequestClose={onClose}>
      <View style={Styling.dialogContainer}>
        <View style={Styling.dialogIcon}>
          {icon && <Ionicons name={icon} size={50} color="black" />}
          <Text style={Styling.dialogTitle}>{title}</Text>
          <Text style={Styling.dialogContent}>{content}</Text>
          <TouchableOpacity style={Styling.closeBtn} onPress={onClose}>
            <Text style={Styling.closeBtnText}>Close</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
}
