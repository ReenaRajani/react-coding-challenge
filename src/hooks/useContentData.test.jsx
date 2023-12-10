import React from 'react';
import { renderHook } from '@testing-library/react-hooks';
import { act } from 'react-dom/test-utils';
import { useContentData } from './useContentData';

global.fetch = jest.fn();

jest.mock('../utils/helper', () => ({
  filterData: jest.fn(),
}));

describe('useContentData hook', () => {
  afterEach(() => {
    jest.resetAllMocks();
  });

  it('fetches and filters content data successfully', async () => {
    global.fetch.mockResolvedValueOnce({
      ok: true,
      json: () => Promise.resolve({ entries: [{ title: 'Mocked Content' }] }),
    });

    jest.spyOn(require('../utils/helper'), 'filterData').mockImplementation(() => [
      { title: 'Filtered Content' },
    ]);

    const { result, waitForNextUpdate } = renderHook(() => useContentData('series'));

    expect(result.current.isLoading).toBe(true);
    expect(result.current.contentData).toEqual([]);
    expect(result.current.error).toBe(null);

    await act(async () => {
      await waitForNextUpdate();
    });

    expect(result.current.isLoading).toBe(false);
    expect(result.current.contentData).toEqual([{ title: 'Filtered Content' }]);
    expect(result.current.error).toBe(null);
  });

  it('handles fetch error', async () => {
    global.fetch.mockResolvedValueOnce({
      ok: false,
      json: () => Promise.resolve({ error: 'Mocked error' }),
    });

    const { result, waitForNextUpdate } = renderHook(() => useContentData('series'));

    expect(result.current.isLoading).toBe(true);
    expect(result.current.contentData).toEqual([]);
    expect(result.current.error).toBe(null);

    await act(async () => {
      await waitForNextUpdate();
    });

    expect(result.current.isLoading).toBe(false);
    expect(result.current.contentData).toEqual([]);
    expect(result.current.error).toContain('Failed to fetch data');
  });
});
