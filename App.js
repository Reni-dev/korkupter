import { StyleSheet, View } from 'react-native';
import Header from './components/Header';
import Body from './components/Body';
import Footer from './components/Footer ';

export default function App() {
  return (
    <View style={styles.container}>
      <Header />
      <Body />
      <Footer />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white'
  }
})
