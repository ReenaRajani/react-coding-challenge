export const filterData = ({ programType, data }) =>
  data.entries
    .filter(
      (entry) => entry.programType === programType && entry.releaseYear >= 2010,
    )
    .sort((a, b) => a.title.localeCompare(b.title));
