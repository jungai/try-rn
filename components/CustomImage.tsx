import type { FC } from "react";
import { Image, StyleSheet } from "react-native";

type TCustomImageProps = {
	uri: string;
};

export const CustomImage: FC<TCustomImageProps> = ({ uri }) => {
	return <Image source={{ uri }} style={styles.image} />;
};

const styles = StyleSheet.create({
	image: {
		width: 320,
		height: 440,
		borderRadius: 18,
	},
});

export default CustomImage;
