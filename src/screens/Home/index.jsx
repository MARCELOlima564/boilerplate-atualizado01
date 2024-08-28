import { View } from 'react-native'
import Title from '../../components/Title';

import styles from './styles';

import MyButton from '../../components/MyButton';

export default function Home() {
  return (
    <View style={styles.container}>
      <Title title={"Home"}/>
      <MyButton screen={'Totoro'} name={'Go To Totoro'}/>
    </View>
  );
}