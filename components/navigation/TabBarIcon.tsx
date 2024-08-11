import React from 'react';
import Ionicons from '@expo/vector-icons/Ionicons';
import { StyleProp, ViewStyle, TouchableOpacity, GestureResponderEvent } from 'react-native';

interface TabBarIconProps {
  name: React.ComponentProps<typeof Ionicons>['name'];
  color: string;
  style?: StyleProp<ViewStyle>;
  onPress?: (event: GestureResponderEvent) => void; 
}

export function TabBarIcon({ name, color, style, onPress }: TabBarIconProps) {
  return (
    <TouchableOpacity onPress={onPress} style={[{ marginBottom: -3 }, style]}>
      <Ionicons name={name} size={28} color={color} />
    </TouchableOpacity>
  );
}
