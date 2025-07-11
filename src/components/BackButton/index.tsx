import React from 'react';
import { IconButton } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';
import type { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { backButtonStyles } from './styles';
import { BackButtonProps } from './types';


const BackButton: React.FC<BackButtonProps> = ({ onPress }) => {
  const navigation = useNavigation<NativeStackNavigationProp<any>>();

  const handlePress = () => {
    if (onPress) {
      onPress();
    } else {
      navigation.goBack();
    }
  };

  return (
    <IconButton
      icon="arrow-left"
      size={28}
      onPress={handlePress}
      style={backButtonStyles.button}
      containerColor="transparent"
      accessibilityLabel="Go back"
    />
  );
};

export default BackButton; 