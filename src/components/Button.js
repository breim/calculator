import React from 'react'

import {
  StyleSheet,
  Text,
  Dimensions,
  TouchableHighlight
} from 'react-native'


const styles = StyleSheet.create({
  operationButton:{
    color: '#fff',
    backgroundColor: '#fa8231',
  },
  button: {
    fontSize: 40,
    height: Dimensions.get('window').width / 4,
    width: Dimensions.get('window').width / 4,
    padding: 20,
    backgroundColor: '#f0f0f0',
    textAlign: 'center',
    borderWidth: 1,
    borderColor: '#888',
  },
  buttonDouble: {
    width: (Dimensions.get('window').width / 4) * 2,
  },
  buttonTriple:{
    width: (Dimensions.get('window').width / 4) * 3,
  }
})


export default props => {
  const stylesButton = [styles.button]
  if(props.double) styles.push(styles.buttonDouble)
  if(props.triple) styles.push(styles.buttonTriple)
  if(props.operation) styles.push(styles.operationButton)
  return (
    <TouchableHighlight onPress={props.onCLick}>
      <Text style={styles.button}>{props.label}</Text>
    </TouchableHighlight>
  )
}
