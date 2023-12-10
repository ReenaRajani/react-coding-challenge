import { renderHook } from '@testing-library/react-hooks';
import { act } from 'react-dom/test-utils';
import { useFetch } from './useFetch';

// Mocking the fetch function
global.fetch = jest.fn();

describe('useFetch hook', () => {
  afterEach(() => {
    jest.resetAllMocks();
  });

  it('fetches data successfully', async () => {
    global.fetch.mockResolvedValueOnce({
      ok: true,
      json: () => Promise.resolve({ data: 'Mocked data' }),
    });

    const { result, waitForNextUpdate } = renderHook(() => useFetch('/some-url'));

    expect(result.current.isLoading).toBe(true);
    expect(result.current.data).toBe(null);
    expect(result.current.error).toBe(null);

    // Wait for the hook to fetch data
    await act(async () => {
      await waitForNextUpdate();
    });

    expect(result.current.isLoading).toBe(false);
    expect(result.current.data).toEqual({ data: 'Mocked data' });
    expect(result.current.error).toBe(null);
  });

  it('handles fetch error', async () => {
    global.fetch.mockResolvedValueOnce({
      ok: false,
      json: () => Promise.resolve({ error: 'Mocked error' }),
    });

    const { result, waitForNextUpdate } = renderHook(() => useFetch('/some-url'));

    expect(result.current.isLoading).toBe(true);
    expect(result.current.data).toBe(null);
    expect(result.current.error).toBe(null);

    await act(async () => {
      await waitForNextUpdate();
    });

    expect(result.current.isLoading).toBe(false);
    expect(result.current.data).toBe(null);
    expect(result.current.error).toContain('Failed to fetch data');
  });
});
