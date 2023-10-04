import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {colors} from '../../../utils/colors';
import useData from '../../../hooks/useData';
import TeamList from '../molecules/TeamList';

const OurTeam = () => {
  const {data} = useData();

  return (
    <View>
      <Text style={styles.container}>
        <Text>
          <Text style={styles.title}>
            NUESTRO <Text style={styles.orangeOne}>EQUIPO</Text>
          </Text>
        </Text>
      </Text>
      <TeamList data={data} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingTop: 30,
    paddingHorizontal: 15,
    textAlign: 'center',
    fontSize: 30,
    fontWeight: 'bold',
    color: colors.white,
    letterSpacing: 2.5,
    marginBottom: 20,
  },
  title: {
    letterSpacing: 5,
  },
  orangeOne: {
    fontSize: 30,
    color: colors.orange,
  },
  orangeTwo: {
    fontSize: 50,
    color: colors.orange,
    letterSpacing: 7,
  },
});

export default OurTeam;
