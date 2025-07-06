import { Stack } from 'expo-router';
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import { useEffect } from 'react';


SplashScreen.preventAutoHideAsync(); // to display splash screen while loading the font (?)

export default function RootLayout() {
  const [loadingFont] = useFonts({

    'HelveticaNeueRoman': require('../assets/fonts/HelveticaNeueRoman.otf'),
    'HelveticaNeueHeavy': require('../assets/fonts/HelveticaNeueHeavy.otf'),
    'HelveticaNeueBlack': require('../assets/fonts/HelveticaNeueBlack.otf'),
    'Montserrat-Regular': require('../assets/fonts/Montserrat-Regular.ttf'),
    'Montserrat-Bold': require('../assets/fonts/Montserrat-Bold.ttf'),
    'Montserrat-ExtraBold': require('../assets/fonts/Montserrat-ExtraBold.ttf'),
  });

  useEffect(() => {
    if (loadingFont) {
      SplashScreen.hideAsync();
    }
  }, [loadingFont]);

  if (!loadingFont) {
    return null;
  }
  return <Stack screenOptions={{ headerShown: false }}/>; // para mawala yung fucking header (crashed out dahil dito)
}
