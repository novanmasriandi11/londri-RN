import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Home } from "./screens/Home/Home";
import { FormInput } from "./screens/FormInput/FormInput";

export default function App() {
  const Stack = createNativeStackNavigator();
  const navTheme = {
    colors: {
      background: "transparent",
    },
  };

  return (
    <NavigationContainer theme={navTheme}>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Home" component={FormInput} />
        <Stack.Screen name="Result" component={Home} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
