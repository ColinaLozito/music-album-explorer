import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import { SearchResultProvider, useSearchResult } from '../context/SearchResultContext';
import { BaseConsumer } from './utils/BaseConsumer';
import { mockResult } from './utils/mock';

test('SearchResultProvider stores and passes data', () => {
  function useSearchResultValue() {
    const { searchResult, setSearchResult, clearSearchResult } = useSearchResult();
    return {
      value: searchResult && searchResult.releases[0],
      setValue: () => setSearchResult(mockResult),
      clearValue: clearSearchResult,
    };
  }

  const { getByTestId, getByText } = render(
    <SearchResultProvider>
      <BaseConsumer
        useContextHook={useSearchResultValue}
        testID="result"
        displayKey="title"
        mockValue={mockResult.releases[0]}
      />
    </SearchResultProvider>
  );
  expect(getByTestId('result').props.children).toBe('none');
  fireEvent.press(getByText('Set'));
  expect(getByTestId('result').props.children).toBe('Test Album');
  fireEvent.press(getByText('Clear'));
  expect(getByTestId('result').props.children).toBe('none');
}); 