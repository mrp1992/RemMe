import React, { useState } from 'react';
import { SafeAreaView, StyleSheet, Text, TouchableHighlight, View } from 'react-native';
import ListView from './component/ListView';
import Form from './component/Form';

export default function App() {
    const [formVisible, setFormVisible] = useState<boolean>(false);
    const [list, setList] = useState([]);
    const toggleForm = () => {
        console.log('formVisible?: ', !formVisible);
        setFormVisible(!formVisible);
    };

    const addToList = list => {
        setList(list);
    };

    return (
        <SafeAreaView style={styles.container}>
            <Form isOpen={formVisible} toggleForm={toggleForm} addToList={addToList} list={list} />
            <View style={styles.fixToText}>
                <TouchableHighlight style={styles.button} onPress={toggleForm}>
                    <Text>Add</Text>
                </TouchableHighlight>
                <TouchableHighlight style={styles.button} onPress={() => alert('Button functionality in progress')}>
                    <Text>Delete</Text>
                </TouchableHighlight>
            </View>
            <ListView remindMeList={list} />
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f5fffa',
        alignItems: 'center',
        justifyContent: 'center',
    },
    fixToText: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    button: {
        alignItems: 'center',
        backgroundColor: '#DDDDDD',
        padding: 10,
        paddingRight: 10,
    },
});
