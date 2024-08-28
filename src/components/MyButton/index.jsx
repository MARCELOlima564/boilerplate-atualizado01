import { Text, TouchableOpacity } from 'react-native'

import { useNavigation } from '@react-navigation/native';

import TextButton from '../TextButton';

const MyButton = ({ screen, name }) => {
    const navigation = useNavigation();
  return (
    <TouchableOpacity onPress={() => 
        navigation.navigate( screen )}>
        <TextButton textButton={name}/>
    </TouchableOpacity>
  )
}

export default MyButton;