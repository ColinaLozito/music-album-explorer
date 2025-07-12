import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import { ArtistProvider, useArtist } from '../context/ArtistContext';
import { BaseConsumer } from './utils/BaseConsumer';
import { mockArtist } from './utils/mock';

test('ArtistProvider stores and passes artist data', () => {
  function useArtistValue() {
    const { artist, setArtist, clearArtist } = useArtist();
    return {
      value: artist,
      setValue: setArtist,
      clearValue: clearArtist,
    };
  }

  const { getByTestId, getByText } = render(
    <ArtistProvider>
      <BaseConsumer
        useContextHook={useArtistValue}
        testID="artist"
        displayKey="name"
        mockValue={mockArtist}
      />
    </ArtistProvider>
  );
  expect(getByTestId('artist').props.children).toBe('none');
  fireEvent.press(getByText('Set'));
  expect(getByTestId('artist').props.children).toBe('Test Artist');
  fireEvent.press(getByText('Clear'));
  expect(getByTestId('artist').props.children).toBe('none');
}); 