import { View } from 'react-native'
import Title from '../../components/Title';

import styles from './styles';

import MyButton from '../../components/MyButton';

export default function Ghibli() {
  return (
    <View style={styles.container}>
      <Title title={"Ghibli"}/>

      <MyButton screen={'Home'} name={'Go To Home'}/>
      <MyButton screen={'Totoro'} name={'Go To Totoro'}/>
    </View>
  );
}