import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function ListView({ remindMeList }: IListViewProps) {
    return (
        <View>
            {remindMeList.map((remindMe: IRemindMe, index: number) => (
                <View key={index}>
                    <Text style={styles.text}>{remindMe.title}</Text>
                    <Text>{remindMe.description}</Text>
                </View>
            ))}
        </View>
    );
}

export interface IRemindMe {
    title: string;
    description: string;
}

interface IListViewProps {
    remindMeList: IRemindMe[];
}

const styles = StyleSheet.create({
    text: {
        fontSize: 15,
        fontWeight: 'bold',
    },
});
