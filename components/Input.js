import { TextInput, StyleSheet } from 'react-native';

function Input({ value, onChange }) {
    return (
        <TextInput
            style={styles.input}
            keyboardType="numeric"
            value={value}
            onChangeText={onChange}
        />
    )
}

const styles = StyleSheet.create({
    input: {
        borderWidth: 1,
        borderColor: '#999',
        padding: 8,
        marginTop: 5,
        marginBottom: 10,
        borderRadius: 5,
    },
})

export default Input