import React from 'react';
import { FlatList, SafeAreaView } from 'react-native';
import Item from './Item';

export default function ListView({ remindMeList }: IListViewProps) {
    return (
        <SafeAreaView>
            <FlatList
                data={remindMeList}
                scrollEnabled={true}
                renderItem={({ item }) => <Item title={item.title} description={item.description} />}
            />
        </SafeAreaView>
    );
}

export interface IRemindMe {
    title: string;
    description: string;
}

interface IListViewProps {
    remindMeList: IRemindMe[];
}
