import { View, Text } from 'react-native'
import styles from './styles';

const TextButton = ( {textButton} ) => {
  return (
      <Text style={styles.text}>{textButton}</Text>
  )
}

export default TextButton;