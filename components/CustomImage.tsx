import type { FC } from "react";
import { Image } from "react-native";

type TCustomImageProps = {
	uri: string;
};

export const CustomImage: FC<TCustomImageProps> = ({ uri }) => {
	return <Image source={{ uri }} className="w-[320] h-[440] rounded-xl" />;
};

export default CustomImage;
