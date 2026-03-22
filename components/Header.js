import { StyleSheet } from 'react-native';
import { View, Text } from 'react-native';

function Header(){
    return (
        <View style={styles.container}>
            <Text style={styles.text}>
                Köralapú henger térfogata
            </Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'black'
    },
    text: {
        color: '#c0e08d',
        fontFamily: 'Verdana',
        fontWeight: 'bold',
        fontSize: 20,
        textAlign: 'center',
        paddingBottom: 40,
        paddingTop: 60
    }
})

export default Header