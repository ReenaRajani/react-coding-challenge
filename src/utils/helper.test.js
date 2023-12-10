
import { filterData } from './helper';

describe('filterData', () => {
  const mockData = {
    entries: [
      { programType: 'series', releaseYear: 2015, title: 'B' },
      { programType: 'movie', releaseYear: 2012, title: 'A' },
      { programType: 'series', releaseYear: 2018, title: 'C' },
    ],
  };

  it('filters and sorts data correctly for series', () => {
    const result = filterData({ programType: 'series', data: mockData });

    const expectedResult = [
      { programType: 'series', releaseYear: 2015, title: 'B' },
      { programType: 'series', releaseYear: 2018, title: 'C' },
    ];

    expect(result).toEqual(expectedResult);
  });

  it('filters and sorts data correctly for movies', () => {
    const result = filterData({ programType: 'movie', data: mockData });

    const expectedResult = [
      { programType: 'movie', releaseYear: 2012, title: 'A' },
    ];

    expect(result).toEqual(expectedResult);
  });
});
