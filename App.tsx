import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const App = () => {
  return (
    <ScrollView>
      {/* <View style={styles.container}>
        <View style={styles.card}>
          <Text style={styles.cardtxt}> my first ui</Text>
          <View style={styles.incard}>
            <Text style={styles.square}> </Text>

            <View style={styles.info}>
              <Text style={styles.txt}> B.D: 28/9/2006 </Text>
              <Text style={styles.txt}> name: kasem shahin</Text>
            </View>

          </View>

        </View>


      </View> */}
    </ScrollView>
  )
}

export default App

const styles = StyleSheet.create({

  container: {
    flex: 4,
    backgroundColor: 'white',

    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    paddingRight: 100,
    paddingLeft: 100,
    paddingTop: 250,
    paddingBottom: 250,
  },

  incard: {
    width: 390,
    flex: 1,
    backgroundColor: 'grey',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    padding: 30,

  },

  card: {
    borderRadius: 30,
    width: 390,
    flex: 1,
    backgroundColor: 'grey',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column-reverse',
    padding: 30,

  },

  txt: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: 20,
    fontWeight: 'bold',
    borderWidth: 4,
    borderRadius: 10,
    borderBottomLeftRadius: 20,
    color: 'black',
    padding: 1,
    borderColor: 'yellow',

  },
  square: {
    flex: 0.1,
    borderRadius: 20,
    borderTopWidth: 40,
    borderLeftWidth: 40,


    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    backgroundColor: 'green',
    borderWidth: 20,
    borderColor: 'green',

  },

  info: {
    flex: 10,
    flexDirection: 'column-reverse',


    paddingLeft: 5,
    paddingBottom: 10,


  },
  cardtxt: {
    flexDirection: 'column-reverse',
    fontSize: 25,
    color: 'black',
    fontWeight: 'bold',

  },
})