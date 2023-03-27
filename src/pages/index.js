import { View, StyleSheet } from "react-native"
import Title from "../components/title"
import Form from '../components/formulario'

const Login = () => {
  return (
    <View style={styles.container}>
      <Title />
      <Form />
    </View>
  );
};

const styles = StyleSheet.create({
  container:{
    flex:1,
    alignItems:'center',
    marginTop: 80,
  }
})

export default Login