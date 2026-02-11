//
// This is only a SKELETON file for the 'Line Up' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const format = (name, number) => {
  let position;
  let stringNumber = number.toString();
  if (stringNumber.endsWith('1')) {
    if (stringNumber.endsWith('11')) {
      position = stringNumber + 'th';
    }
    else {
      position = stringNumber + 'st';
    }
  }
  else if (stringNumber.endsWith('2')) {
    if (stringNumber.endsWith('12')) {
      position = stringNumber + 'th';
    }
    else {
      position = stringNumber + 'nd';
    }
  }
  else if (stringNumber.endsWith('3')) {
    if (stringNumber.endsWith('13')) {
      position = stringNumber + 'th';
    }
    else {
      position = stringNumber + 'rd';
    }
  }
  else {
    position = stringNumber + 'th';
  }

  let message = `${name}, you are the ${position} customer we serve today. Thank you!`;

  return message;
};
