import { View, Text } from 'react-native'

import { styles } from './styles'

export default function Home() {
  const date = new Date().toLocaleDateString('pt-br')

  return(
    <View style={styles.container}>
      <Text style={styles.message}>Hello World</Text>
      <Text style={styles.message}>Data atual: { date }</Text>
    </View>
  )
}