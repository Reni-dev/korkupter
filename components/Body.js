import { StyleSheet } from 'react-native';
import { View, Text, Button } from 'react-native';
import { useState } from 'react';
import Input from './Input';
import Calculate from './Calculate';
import CustomButton from './CustomButton';

function Body(){
    const [radius, setRadius] = useState('')
    const [height, setHeight] = useState('')
    const [volume, setVolume] = useState(null)

    function calculation(){
        const volume = Calculate(radius, height)
        setVolume(volume !== null ? volume.toFixed(2) : 'Érvénytelen input!')
    }

    return (
        <View style={styles.container}>
            <Text style={styles.title}>
                Számolás
            </Text>
            <View style={styles.inputs}>
                <Text style={styles.label}>Henger sugara (r):</Text>
                <Input value={radius} onChange={setRadius} />

                <Text style={styles.label}>Henger magassága (h):</Text>
                <Input value={height} onChange={setHeight} />

                <CustomButton title="Számítás" onPress={calculation} />

                {volume !== null && (
                    <Text style={styles.result}>A henger térfogata: {volume}</Text>
                )}
            </View>                      
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white'
    },
    title: {
        color: 'black',
        fontFamily: 'Verdana',
        fontWeight: 'bold',
        textAlign: 'center',
        marginTop: 40,
        fontSize: 18
    },
    inputs: {
        margin: 20
    },
    label: {
        marginTop: 10,
        fontSize: 16
    },
    result: {
        marginTop: 60,
        fontSize: 18,
        fontWeight: 'bold',
        textAlign: 'center'
    }
})

export default Body