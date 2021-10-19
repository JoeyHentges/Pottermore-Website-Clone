// a list of standardized colors used in styled components

export const getColor = (color: string) => {
  switch (color) {
    case 'blue':
      return '#6078ff';

    case 'blue-1':
      return '#3856ff';

    case 'grey':
      return '#8a91bd';

    case 'grey-1':
      return '#f5f6ff';

    case 'purple':
      return '#B668FD';

    case 'red':
      return '#ff6065';

    case 'white':
      return '#ffffff';

    case 'white-1':
      return '#f7f7fc';

    case 'yellow':
      return '#fff001';

    // normal page text color
    case 'default':
      return '#33334F';

    default:
      return color;
  }
};
