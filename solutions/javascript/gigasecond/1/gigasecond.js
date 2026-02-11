//
// This is only a SKELETON file for the 'Gigasecond' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const gigasecond = (startDate) => {
  let GIGASECOND_IN_MS = 1e9 * 1000;
  let finalDate = startDate.getTime() + GIGASECOND_IN_MS;
  return new Date(finalDate);
};

