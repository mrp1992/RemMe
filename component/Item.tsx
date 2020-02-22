import React, { useState } from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';
import { IRemindMe } from './ListView';

const Item = ({ index, title, description }: IItemProps) => {
    const [selectedItem, setSelectedItem] = useState<number[]>([]);

    const listPress = key => {
        console.log('we pressed key', key);

        if (selectedItem.includes(key)) {
            const cloneSelectedItem = selectedItem;
            const itemIndex = cloneSelectedItem.indexOf(key);
            cloneSelectedItem.splice(itemIndex, 1);
            setSelectedItem([...cloneSelectedItem]);
        } else {
            setSelectedItem([...selectedItem, key]);
        }
    };
    return (
        <TouchableOpacity
            key={index}
            style={selectedItem.includes(index) ? { backgroundColor: '#d8bfd8' } : {}}
            onPress={() => listPress(index)}
        >
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

interface IItemProps extends IRemindMe {
    index: number;
}
