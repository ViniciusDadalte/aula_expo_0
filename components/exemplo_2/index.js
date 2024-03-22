import { View, Text } from 'react-native';

import styles from './style';

const Exemplo_2 = () => (
    <View style={styles.container}>
        <Text style={styles.title}>Exemple 2</Text>

        <View style={styles.viewMensage}>
            <Text style={styles.mensage}>Hello Vinicius</Text>
            <Text style={styles.mensage}>Hello VictorDelicia</Text>
        </View>
    </View>
)

export default Exemplo_2;