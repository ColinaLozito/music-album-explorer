import type { StyleProp, ViewStyle } from 'react-native';

export interface ErrorBannerProps {
  visible: boolean;
  message: string | null;
  onDismiss: () => void;
  style?: StyleProp<ViewStyle>;
  theme?: {
    colors?: {
      onSurface?: string;
      primary?: string;
      background?: string;
    };
  };
} 