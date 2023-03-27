import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

export default function Title() {
  return (
    <View style={styles.boxTitle}>
      <Text style={styles.textTitle}>Login</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  boxTitle:{
    alignItems: 'center',
  },
  textTitle:{
    textAlign:'left',
    fontSize: 30,
    color: '#0078FF',
    fontWeight: 'bold',
  },
})
