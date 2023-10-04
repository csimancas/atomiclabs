import React from 'react';
import {FlatList, View, StyleSheet} from 'react-native';
import ItemTeam from '../atoms/ItemTeam';

interface Props {
  data: Array<{
    name: string;
    avatar: string;
    position: string;
  }>;
}

const TeamList = ({data}: Props) => {
  return (
    <View style={styles.list}>
      <FlatList
        data={data}
        renderItem={({item}) => <ItemTeam item={item} />}
        keyExtractor={item => item.avatar}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  list: {
    paddingHorizontal: 25,
  },
});

export default TeamList;
