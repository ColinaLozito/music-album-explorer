import React from "react";
import { render, fireEvent } from "@testing-library/react-native";
import {
  AlbumDetailProvider,
  useAlbumDetail,
} from "@context/AlbumDetailContext";
import { BaseConsumer } from "./utils/BaseConsumer";
import { mockAlbumDetail } from "./utils/mock";

test("AlbumDetailProvider stores and passes album detail data", () => {
  function useAlbumDetailValue() {
    const { albumDetail, setAlbumDetail, clearAlbumDetail } = useAlbumDetail();
    return {
      value: albumDetail,
      setValue: setAlbumDetail,
      clearValue: clearAlbumDetail,
    };
  }

  const { getByTestId, getByText } = render(
    <AlbumDetailProvider>
      <BaseConsumer
        useContextHook={useAlbumDetailValue}
        testID="albumDetail"
        displayKey="title"
        mockValue={mockAlbumDetail}
      />
    </AlbumDetailProvider>,
  );
  expect(getByTestId("albumDetail").props.children).toBe("none");
  fireEvent.press(getByText("Set"));
  expect(getByTestId("albumDetail").props.children).toBe("Test Album");
  fireEvent.press(getByText("Clear"));
  expect(getByTestId("albumDetail").props.children).toBe("none");
});
