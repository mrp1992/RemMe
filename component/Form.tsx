import React, { useState } from 'react';
import { Modal, StyleSheet, Text, TextInput, TouchableHighlight, TouchableOpacity, View } from 'react-native';
import { IRemindMe } from './ListView';

const Form = ({ isOpen, toggleForm, addToList, list }: IFormProps) => {
    console.log('IsOPEN:::', isOpen);

    const [title, setTitle] = useState();
    const [description, setDescription] = useState();
    const [error, setError] = useState();

    const finish = () => {
        if (title) {
            const newList = [...list];
            newList.push({ title, description });
            addToList(newList);
            clearState();
            toggleForm();
        } else {
            setError('Missing Title');
        }
    };

    const close = () => {
        clearState();
        toggleForm();
    };

    const errorMessage = () => {
        if (error) {
            console.log('we had error');
            return <Text style={{ color: '#ff0000' }}> asdfas {error} </Text>;
        }
    };

    const clearState = () => {
        setError('');
        setTitle('');
        setDescription('');
    };

    return (
        <Modal visible={isOpen} transparent={true}>
            <View style={styles.modal}>
                <View>
                    <TouchableOpacity style={styles.closeButton} onPress={close}>
                        <Text>X</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.textView}>
                    {errorMessage()}
                    <Text style={styles.text}>Title</Text>
                    <TextInput style={styles.titleInputBox} onChangeText={text => setTitle(text)} value={title} />
                    <Text style={styles.text}>Description</Text>
                    <TextInput
                        style={styles.descriptionInputBox}
                        onChangeText={text => setDescription(text)}
                        value={description}
                    />
                </View>
                <View style={styles.fixToText}>
                    <TouchableHighlight style={styles.button} onPress={finish}>
                        <Text>OK</Text>
                    </TouchableHighlight>
                    <TouchableHighlight style={styles.button} onPress={close}>
                        <Text>Cancel</Text>
                    </TouchableHighlight>
                </View>
            </View>
        </Modal>
    );
};

export default Form;

interface IFormProps {
    isOpen: boolean;
    toggleForm: () => void;
    addToList: (list: IRemindMe[]) => void;
    list: IRemindMe[];
}

const styles = StyleSheet.create({
    closeButton: {
        alignContent: 'flex-end',
        backgroundColor: '#DDDDDD',
        padding: 10,
        width: 30,
    },
    modal: {
        borderRadius: 4,
        borderWidth: 0.7,
        borderColor: '#000000',
        marginLeft: 20,
        marginRight: 20,
        marginBottom: 20,
        marginTop: 20,
        padding: 20,
        backgroundColor: 'rgb(230, 230, 220)',
    },
    textView: {
        marginLeft: 20,
    },
    text: {
        marginTop: 20,
        alignContent: 'center',
        fontSize: 19,
        fontWeight: 'bold',
    },
    titleInputBox: {
        borderRadius: 4,
        borderWidth: 0.5,
        width: 200,
        height: 35,
        backgroundColor: '#faf0e6',
    },
    descriptionInputBox: {
        borderRadius: 4,
        borderWidth: 0.5,
        width: 250,
        height: 100,
        backgroundColor: '#faf0e6',
    },
    button: {
        alignItems: 'center',
        backgroundColor: '#DDDDDD',
        padding: 10,
        paddingRight: 10,
    },
    fixToText: {
        padding: 20,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    },
});
