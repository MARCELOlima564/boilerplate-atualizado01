import { View } from 'react-native'

import Title from '../../components/Title';
import styles from './styles';
import MyButton from '../../components/MyButton';


export default function Totoro() {
  return (
    <View style={styles.container}>
      <Title title={"My Neighbor Totoro"}/>
      <MyButton screen={'Home'} name={'Go To Home'}/>
      <MyButton screen={'Ghibli'} name={'Go To Ghibli'}/>

      
    </View>
  );
}