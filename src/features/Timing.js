import React from 'react'
import { View, StyleSheet } from 'react-native'
import { RoundedButton } from '../components/RoundedButton'

export const Timing = ({ onChangeTime }) => {
  return (
    <>
      <View style={styles.timingButton}>
        <RoundedButton
          size={75}
          title="6  sec"
          onPress={() => onChangeTime(0.1)}
        />
      </View>
      <View style={styles.timingButton}>
        <RoundedButton
          size={75}
          title="10 min"
          onPress={() => onChangeTime(10)}
        />
      </View>
      <View style={styles.timingButton}>
        <RoundedButton
          size={75}
          title="15 min"
          onPress={() => onChangeTime(15)}
        />
      </View>
      <View style={styles.timingButton}>
        <RoundedButton
          size={75}
          title="20 min"
          onPress={() => onChangeTime(20)}
        />
      </View>
      <View style={styles.timingButton}>
        <RoundedButton
          size={75}
          title="30 min"
          onPress={() => onChangeTime(30)}
        />
      </View>
    </>
  )
}

const styles = StyleSheet.create({
  timingButton: {
    flex: 1,
    alignItems: 'center',
  },
})
