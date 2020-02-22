import React from 'react';
import { Text, View } from 'react-native';

export default function ListView({ remindMeList }: IListViewProps) {
    return (
        <View>
            {remindMeList.map((remindMe: IRemindMe, index: number) => (
                <View key={index}>
                    <Text>{remindMe.title}</Text>
                    <Text>{remindMe.description}</Text>
                </View>
            ))}
        </View>
    );
}

interface IRemindMe {
    title: string;
    description: string;
}

interface IListViewProps {
    remindMeList: IRemindMe[];
}
