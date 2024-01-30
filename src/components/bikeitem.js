import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const bikeitem = () => {
  return (
    <View>
     
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
    </View>
  )
}

export default bikeitem

const styles = StyleSheet.create({})