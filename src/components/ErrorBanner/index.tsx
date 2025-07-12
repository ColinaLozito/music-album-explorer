import React from 'react';
import { View } from 'react-native';
import { Banner } from 'react-native-paper';
import { errorBannerStyles } from './styles';
import type { ErrorBannerProps } from './types';
import { SafeAreaView } from 'react-native-safe-area-context';

const ErrorBanner = ({ visible, message, onDismiss, style, theme }: ErrorBannerProps) => {
  return (
    <SafeAreaView style={errorBannerStyles.wrapper}>
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
    </SafeAreaView>
  );
};

export default ErrorBanner; 