import { Modal, Text, TouchableOpacity, View } from "react-native";
import { Styling } from "./ModalView.style";
import { Ionicons } from "@expo/vector-icons";

export function ModalView({ visible, onClose, title, content, icon }) {
  return (
    <Modal
      animationType="fade"
      transparent={true}
      visible={visible}
      onRequestClose={onClose}
    >
      <View style={Styling.modalContainer}>
        <View style={Styling.modalContent}>
          {icon && <Ionicons name={icon} size={50} color="red" />}
          <Text style={Styling.modalTitle}>{title}</Text>
          <Text style={Styling.modalText}>{content}</Text>
          <TouchableOpacity style={Styling.closeBtn} onPress={onClose}>
            <Text style={Styling.closeBtnText}>Close</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
}
