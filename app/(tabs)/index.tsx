import { StyleSheet } from "react-native";
import {
  AddIcon,
  Button,
  ButtonIcon,
  ButtonText,
  View,
  Text,
} from "@gluestack-ui/themed";

export default function TabOneScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Tab One</Text>
      <Button
        size="md"
        variant="solid"
        action="primary"
        isDisabled={false}
        isFocusVisible={false}
      >
        <ButtonText>Add</ButtonText>
        <ButtonIcon as={AddIcon} />
      </Button>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
});
