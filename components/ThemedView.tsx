import { View, type ViewProps } from 'react-native';
import { Colors } from '@/constants/Colors';


export type ThemedViewProps = ViewProps & {
  lightColor?: string;
  darkColor?: string;
};

export function ThemedView({ style, lightColor, ...otherProps }: ThemedViewProps) {
  const backgroundColor = Colors['light']['background'];

  return <View style={[{ backgroundColor }, style]} {...otherProps} />;
}
