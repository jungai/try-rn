import Button from "./components/Button";
import CustomImage from "./components/CustomImage";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import { StatusBar } from "expo-status-bar";
import { View } from "react-native";

const imageUrl =
	"https://i.pinimg.com/736x/a0/25/04/a025049f3035cf3db789cc4cba5dd29e.jpg";

export default function App() {
	return (
		<View className="flex flex-1 bg-[#25292e] justify-center items-center">
			<View className="flex-1 pt-16">
				<CustomImage uri={imageUrl} />
			</View>
			<View className="flex flex-[0.5] items-center" style={{ gap: 40 }}>
				<Button
					label="Choose a photo"
					icon={<FontAwesome name="picture-o" size={18} color="#25292e" />}
				/>
				<Button label="Use this photo" pain />
			</View>
			<StatusBar style="auto" />
		</View>
	);
}
