import { DimensionValue, Image, ImageSourcePropType, View } from 'react-native';

interface IEmojiStickerProps {
  imageSize?: DimensionValue;
  stickerSource: ImageSourcePropType;
}

export default function EmojiSticker({ imageSize, stickerSource }: IEmojiStickerProps) {
  return (
    <View style={{ top: -350 }}>
      <Image source={stickerSource} resizeMode="contain" style={{ width: imageSize, height: imageSize }} />
    </View>
  );
}
