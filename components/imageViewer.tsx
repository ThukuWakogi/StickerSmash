import { Image, ImageSourcePropType, StyleSheet } from 'react-native';

interface IImageViewerProps {
  placeholderImageSource: ImageSourcePropType;
  selectedImage?: string | undefined;
}

export default function ImageViewer({ placeholderImageSource, selectedImage }: IImageViewerProps) {
  return (
    <Image source={selectedImage ? { uri: selectedImage } : placeholderImageSource} style={styles.image} />
  );
}

const styles = StyleSheet.create({
  image: { width: 320, height: 440, borderRadius: 18 },
});
