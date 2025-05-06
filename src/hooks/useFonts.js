import { useFonts, Roboto_500Medium } from '@expo-google-fonts/roboto';

export const useCustomFonts = () => {
  const [fontsLoaded] = useFonts({
    RobotoMedium: Roboto_500Medium,
  });

  return { fontsLoaded };
};