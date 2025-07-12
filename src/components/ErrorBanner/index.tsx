import React from 'react';
import { SafeAreaView, View } from 'react-native';
import { Banner } from 'react-native-paper';
import { errorBannerStyles } from './styles';
import type { ErrorBannerProps } from './types';

const ErrorBanner: React.FC<ErrorBannerProps> = ({ visible, message, onDismiss, style, theme }) => {
  return (
    <SafeAreaView>
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
    </SafeAreaView>
  );
};

export default ErrorBanner; 