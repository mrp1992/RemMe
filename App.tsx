import React from 'react';
import {Alert, Button, SafeAreaView, StyleSheet, Text, View} from 'react-native';
import ListView from "./component/ListView";

export default function App() {
  const list = [{
    title: 'abc',
    description: 'def'
  },
    {title: 'abc',
    description: 'def'}];
  return (
    <SafeAreaView>
      <View style={styles.fixToText}>
        <Button title={"Add"} onPress={() => alert("Button functionality in progress")}/>
        <Button title={"Delete"} onPress={() => alert("Button functionality in progress")}/>
      </View>
      <ListView list={list}/>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },

  fixToText: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});
