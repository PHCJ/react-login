import { Text, TextInput, View, StyleSheet } from 'react-native'
import Btn from './Button'
export default function Formulario() {
    return (
        <View style={styles.container} >
            <Text style={styles.label}>Email</Text>
            <TextInput
                placeholder="Insira um e-mail válido"
                style={styles.imput}
            ></TextInput>
            <Text style={styles.label2}>Senha</Text>
            <TextInput
                placeholder="********"
                style={styles.imput}
            ></TextInput>
            <Btn />
        </View >)

}

const styles = StyleSheet.create({

    container: {

    },
    label: {
        marginTop: 60,
        fontSize: 19,
    },
    label2: {
        fontSize: 19,
    },
    imput: {
        marginBottom: 30,
    },
})
