import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor:'#d1c4e9',
        borderRadius: 20,
        width: '100%',
        alignItems: 'center',
    },
    titulo: {
        color:'#673ab7',
        fontSize:30,
        fontWeight:'bold',
        marginVertical: 20,
    },
    input: {
      fontSize: 25,
      color: '#673ab7',
      width: '80%',
      marginVertical: 1,
      borderWidth: 2,
      borderColor: '#673ab7',
      padding: 5,
      borderRadius: 20
    },

    texto: {
        fontSize: 25,
        color: '#673ab7',
        width: '80%',
        marginVertical: 10,
    },
});

export default styles;