import React from 'react';
import {FlatList, View} from 'react-native';
import ItemTeam from '../atoms/ItemTeam';

interface Props {
  data: Array<{
    name: string;
    image: string;
    role: string;
  }>;
}

const TeamList = ({data}: Props) => {
  return (
    <View
      style={{
        paddingHorizontal: 25,
      }}>
      <FlatList
        data={data}
        renderItem={({item}) => <ItemTeam item={item} />}
        keyExtractor={item => item.image}
      />
    </View>
  );
};

export default TeamList;
