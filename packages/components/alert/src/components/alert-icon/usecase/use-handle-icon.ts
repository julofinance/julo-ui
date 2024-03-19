import {
  InfoIcon,
  NegativeIcon,
  NeutralsIcon,
  PositiveIcon,
  WarningIcon,
} from '../../../icons';

interface UseHandleIconOptions {
  status: string;
}

function useHandleIcon(options: UseHandleIconOptions) {
  const { status } = options;

  switch (status) {
    case 'info':
      return InfoIcon;
    case 'negative':
      return NegativeIcon;
    case 'positive':
      return PositiveIcon;
    case 'warning':
      return WarningIcon;
    case 'neutrals':
      return NeutralsIcon;
    default:
      return NeutralsIcon;
  }
}

export default useHandleIcon;
