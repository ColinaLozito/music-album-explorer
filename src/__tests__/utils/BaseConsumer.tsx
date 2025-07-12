/**
 * BaseConsumer is a generic test utility component for context providers.
 *
 * It allows you to test context state, set, and clear functions in a reusable way.
 * Pass the context hook, testID, displayKey, and mockValue as props.
 *
 * Example usage:
 *   <BaseConsumer
 *     useContextHook={...}
 *     testID="artist"
 *     displayKey="name"
 *     mockValue={mockArtist}
 *   />
 */
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