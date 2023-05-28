import type { FC, ReactNode } from "react";
import { Pressable, Text, View } from "react-native";

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
		<View className="w-[320px] border-2 border-yellow-400 h-[68px] justify-center items-center rounded-xl p-0.5">
			<Pressable
				className="flex flex-row bg-white border rounded-xl h-full w-full items-center justify-center"
				style={{ gap: 4 }}
			>
				{icon && icon}
				<Text>{label}</Text>
			</Pressable>
		</View>
	);
};

export default Button;
