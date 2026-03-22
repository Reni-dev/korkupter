import { StyleSheet } from 'react-native';
import { View, Text } from 'react-native';

function Footer(){
    return (
        <View style={styles.container}>
            <Text style={styles.text}>
                Hanák Renáta, Szoft 2/N, 2026-03-22
            </Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#c0e08d'
    },
    text: {
        color: 'black',
        fontFamily: 'Verdana',
        fontWeight: 'normal',
        textAlign: 'center',
        paddingTop: 20,
        paddingBottom: 40,
        fontSize: 14
    }
})

export default Footer