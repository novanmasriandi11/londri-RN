import { View } from "react-native";
import { InputField } from "../Components/InputField/InputField";
import { Styling } from "./FormInput.style";
import { BtnView } from "../Components/ButtonView/BtnView";
import { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { ModalView } from "../Components/Modal/ModalView";
import { CardView } from "../Components/Card/CardView";
import { DialogView } from "../Components/Dialog/DialogView";

export function FormInput({}) {
  const [phoneNumber, setPhoneNumber] = useState("081584352213");
  const [modalVisisble, setModalVisisble] = useState(false);
  const [detail, setDetail] = useState(null);
  const [customer, setCustomer] = useState({});
  const [email, setEmail] = useState("");

  const openModal = () => {
    setModalVisisble(true);
    check();
    setDetail(null);
  };

  const closeModal = () => {
    setModalVisisble(false);
  };

  const handleInput = (input) => {
    setPhoneNumber(input);
  };

  const nav = useNavigation();

  const check = () => {
    if (phoneNumber) {
      fetch(`http://192.168.18.19:4000/customers/${phoneNumber}/check-customer`)
        .then((response) => response.json())
        .then((json) => {
          if (json.detail) {
            setDetail(json.detail);
          }
          setCustomer(json);
        })
        .catch((err) => console.log(err));
    }
  };

  const sendToken = () => {
    if (phoneNumber) {
      fetch(`http://192.168.18.19:4000/customers/${phoneNumber}/send-token`, {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(email),
      })
        .then((response) => response.json())
        .then((json) => {
          if (json.detail) {
            setDetail(json.detail);
          }
          setCustomer(json);
        })
        .catch((err) => console.log(err));
    }
  };

  return (
    <>
      <View style={Styling.container}>
        <InputField
          label={"Nomor Handphone"}
          placeholder={"Masukan nomor handphone anda."}
          value={phoneNumber}
          onChange={handleInput}
        />

        <BtnView
          backgroundColor={"#0066CC"}
          BtnIcon={"selection-search"}
          TextButton={"Check Cucian"}
          onPress={() => nav.navigate("Result", { phoneNumber })}
        />

        <BtnView
          backgroundColor={"#71c4ef"}
          BtnIcon={"washing-machine"}
          TextButton={"Order"}
          onPress={openModal}
        />
      </View>

      {detail ? (
        <ModalView
          visible={modalVisisble}
          onClose={closeModal}
          icon={"alert-circle"}
          title={"Customer"}
          content={detail}
        />
      ) : (
        <ModalView
          visible={modalVisisble}
          onClose={closeModal}
          title={"Customer"}
          content={
            <CardView
              icon={"person-circle"}
              title={customer.nama}
              description={[customer.alamat + "\n" + customer.hp + "\n" + customer.email]}
            />
          }
        />
      )}
    </>
  );
}
