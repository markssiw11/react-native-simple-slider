import React from 'react';
import { View, Text } from 'react-native';
import {Slider} from 'react-native-simple-slider';

function SliderField() {
  const [value, setValue] = React.useState();
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Slider
        maximumValue={10000000}
        tintColor="green"
        backgroundColor="#99E1D9"
        minimumValue={0}
        unit={1000}
        widthLine={300}
        mode="currency"
        value={value}
        style={{ alignItems: 'center' }}
        currencySetting={{ lang: 'vi', fixed: 0 }}
        onChangeValue={setValue}
      />
    </View>
  );
}

export default SliderField;
