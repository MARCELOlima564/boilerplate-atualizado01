import { View, Text } from 'react-native'
import { TouchableOpacity } from 'react-native-web';
import { useNavigation } from '@react-navigation/native';

export default function Home() {
  const navigation = useNavigation();
  return (
    <View>
      <Text>Home Screen</Text>

      <TouchableOpacity onPress={()=> navigation.navigate("Totoro")}>
        <Text>Go to Totoro</Text>
      </TouchableOpacity>
    </View>
  );
}