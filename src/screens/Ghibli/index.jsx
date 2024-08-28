import { View, TextInput, TouchableOpacity, Text } from 'react-native'
import Title from '../../components/Title';

import styles from './styles';

import MyButton from '../../components/MyButton';

import { useState } from 'react';


export default function Ghibli() {
  const [nomeFilme, setNomeFilme] = useState("");
  const [personagem, setPersonagem ] = useState("");

  const cadastrar = () => {
    console.log(nomeFilme, personagem);
  }
  return (
    <View style={styles.container}>
      <Title title={"Ghibli"}/>

      <MyButton screen={'Home'} name={'Go To Home'}/>
      <MyButton screen={'Totoro'} name={'Go To Totoro'}/>

      <View>
        <Text>Cadastro de Novo Filme</Text>

        <TextInput
        placeholder="Nome do filme"
        value={nomeFilme}
        onChangeText={setNomeFilme}
        />

<TextInput
        placeholder="Persomagem Principal"
        value={personagem}
        onChangeText={setPersonagem}
        />

        <TouchableOpacity onPress={ cadastrar }>
          <Text>Salvar</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}