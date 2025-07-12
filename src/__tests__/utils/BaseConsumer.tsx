import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

type BaseConsumerProps<T> = {
  useContextHook: () => {
    value: T | null;
    setValue: (val: T) => void;
    clearValue: () => void;
  };
  testID: string;
  displayKey: keyof T;
  mockValue: T;
};

export function BaseConsumer<T>({ useContextHook, testID, displayKey, mockValue }: BaseConsumerProps<T>) {
  const { value, setValue, clearValue } = useContextHook();
  return (
    <View>
      <Text testID={testID}>{value ? String(value[displayKey]) : 'none'}</Text>
      <TouchableOpacity onPress={() => setValue(mockValue)}>
        <Text>Set</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={clearValue}>
        <Text>Clear</Text>
      </TouchableOpacity>
    </View>
  );
} 