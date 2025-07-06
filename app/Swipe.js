
import { View, Text, Button } from 'react-native';

export default function Swipe({ goTo }) {
  return (
    <View>
      <Text>Matching Screen!!!</Text>
      <Button title="Matching Screen Button !" onPress={() => goTo('login')} />
    </View>
  );
}