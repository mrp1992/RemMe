import React from 'react';
import {Text, View} from "react-native";

export default function ListView(props) {
    const remindMeList: IRemindMe[] = props.list;

    return (
        <View>
            {remindMeList.map((remindMe: IRemindMe, index: number) => (
                <View>
                <Text>
                    {remindMe.title}
                </Text>
                <Text>
                     {remindMe.description}
                </Text>
                </View>

            ))
            }
        </View>
    )
}

interface IRemindMe {
    title: string;
    description: string;
}