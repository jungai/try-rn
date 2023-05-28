import type { FC, ReactNode } from "react";
import { StyleSheet, Pressable, Text, View } from "react-native";

type TButtonProps = {
  label: string;
  icon?: ReactNode;
  pain?: boolean;
};

export const Button: FC<TButtonProps> = ({ label, icon, pain = false }) => {
  if (pain) {
    return (
      <View>
        <Pressable>
          <Text style={{ color: "white" }}>{label}</Text>
        </Pressable>
      </View>
    );
  }
  return (
    <View style={styles.container}>
      <Pressable style={styles.button}>
        {icon && icon}
        <Text>{label}</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: 320,
    height: 68,
    alignItems: "center",
    justifyContent: "center",
    borderColor: "yellow",
    borderWidth: 3,
    borderRadius: 20,
    padding: 3,
  },
  button: {
    flexDirection: "row",
    backgroundColor: "white",
    borderColor: "white",
    borderRadius: 15,
    gap: 4,
    width: "100%",
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
});

export default Button;
