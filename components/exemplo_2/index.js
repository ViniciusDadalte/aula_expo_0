import { View, Text } from 'react-native';

import Mensagem from './mensagem';
import styles from './style';

const Exemplo_2 = () => (
    
    <View style={styles.container}>
        <Text style={styles.title}>Example 2</Text>
        <Mensagem nome = 'jesus' sobrenome = 'roberto'/>
        <Mensagem nome = 'vitor' sobrenome  = '' idade = {25}/>
        <Mensagem nome = 'vinicius' sobrenome  = ''/>
    </View>
)

export default Exemplo_2;