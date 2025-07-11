import React from 'react';
import { Banner } from 'react-native-paper';
import { errorBannerStyles } from './styles';
import type { ErrorBannerProps } from './types';

const ErrorBanner: React.FC<ErrorBannerProps> = ({ visible, message, onDismiss, style, theme }) => {
  return (
    <Banner
      visible={visible}
      actions={[
        {
          label: 'Dismiss',
          onPress: onDismiss,
        },
      ]}
      icon="alert-circle"
      style={[errorBannerStyles.banner, style]}
      theme={{ colors: { onSurface: '#b00020', ...theme?.colors } }}
    >
      {message}
    </Banner>
  );
};

export default ErrorBanner; 