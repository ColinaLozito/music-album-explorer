import React from 'react';
import { View } from 'react-native';
import { Banner } from 'react-native-paper';
import { errorBannerStyles } from './styles';
import type { ErrorBannerProps } from './types';

const ErrorBanner = ({ visible, message, onDismiss, style, theme }: ErrorBannerProps) => {
  return (
    <View style={errorBannerStyles.wrapper} pointerEvents="box-none">
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
    </View>
  );
};

export default ErrorBanner; 