import React from 'react';
import { Text, View, SectionList } from 'react-native';

export default StatesApp = () => {
  return (
    <View style={{ flex: 1, paddingTop: 22 }}>
      <SectionList
        sections={[{ tile: 'A', data: ['Alabama', 'Alaska', 'Arizona'] },
        { tile: 'B', data: ['Bloominton'] },
        { tile: 'C', data: ['Chicago', 'California'] },
        { tile: 'D', data: ['Delaware', 'Dogville'] }
        ]}
        renderItem={({ item }) => <Text style={{ padding: 10, fontSize: 20, height: 44 }}> {item} </Text>}
        renderSectionHeader={({ section }) => <Text style={{
          paddingTop: 4, paddingLeft: 10,
          paddingRight: 10,
          paddingBottom: 4,
          fontSize: 14,
          fontWeight: 'bold',
          backgroundColor: '#ff93ff93',
        }}>{section.title}</Text>}
          keyExtractor={(item, index) => index}
          />
    </View>

  );
}

