import { Text, View } from "react-native";
import { Styling } from "./Home.style";
import { useEffect, useState } from "react";
import { Appbar, Badge, List } from "react-native-paper";
import { useNavigation } from "@react-navigation/native";
import { BadgeLongText } from "../Components/Badge/BadgeLongText";

export function Home({ route }) {
  const [daftarCucian, setDaftarCucian] = useState([]);
  const [expanded, setExpanded] = useState(true);
  const handlePress = () => setExpanded(!expanded);

  const nav = useNavigation();

  useEffect(() => {
    if (route.params.phoneNumber) {
      fetch(
        `http://192.168.18.19:4000/terima/${route.params.phoneNumber}/cek-cucian`
      )
        .then((response) => response.json())
        .then((json) => setDaftarCucian(json));
    }
  }, []);

  return (
    <View style={Styling.container}>
      <Appbar.Header>
        <Appbar.BackAction onPress={() => nav.goBack()} />
        <Appbar.Content title="Home" />
      </Appbar.Header>
      <List.Section title="Accordions">
        {daftarCucian.map((cucian) => (
          <List.Accordion
            key={cucian._id}
            title={cucian.customer.nama}
            expanded={expanded}
            onPress={handlePress}
            left={(props) => <List.Icon {...props} icon="folder" />}
            right={(props) => (
              <BadgeLongText
                backgroundColor={"blue"}
                text={cucian.status}
                textColor={"white"}
              />
            )}
          >
            {cucian.details.map((cucian, index) => (
              <List.Item key={index} title={cucian.nama} />
            ))}
          </List.Accordion>
        ))}
      </List.Section>
    </View>
  );
}
