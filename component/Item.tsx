import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';
import { IRemindMe } from './ListView';

const Item = ({ title, description }: IRemindMe) => {
    return (
        <TouchableOpacity>
            <Text style={styles.text}>{title}</Text>
            <Text>{description}</Text>
        </TouchableOpacity>
    );
};

export default Item;

const styles = StyleSheet.create({
    text: {
        fontSize: 15,
        fontWeight: 'bold',
    },
});
