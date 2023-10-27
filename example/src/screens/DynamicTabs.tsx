import Feather from '@expo/vector-icons/Feather';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Button, Text } from '@react-navigation/elements';
import * as React from 'react';
import { StyleSheet, View } from 'react-native';

type BottomTabParams = {
  [key: string]: undefined;
};

const BottomTabs = createBottomTabNavigator<BottomTabParams>();

export function DynamicTabs() {
  const [tabs, setTabs] = React.useState([0, 1]);

  return (
    <BottomTabs.Navigator>
      {tabs.map((i) => (
        <BottomTabs.Screen
          key={i}
          name={`tab-${i}`}
          options={{
            title: `Tab ${i}`,
            tabBarIcon: ({ color, size }) => (
              <Feather name="octagon" color={color} size={size} />
            ),
          }}
        >
          {() => (
            <View style={styles.container}>
              <Text style={styles.heading}>Tab {i}</Text>
              <View style={styles.buttons}>
                <Button
                  onPress={() => setTabs((tabs) => [...tabs, tabs.length])}
                >
                  Add a tab
                </Button>
                <Button
                  color="tomato"
                  onPress={() =>
                    setTabs((tabs) =>
                      tabs.length > 1 ? tabs.slice(0, -1) : tabs
                    )
                  }
                >
                  Remove a tab
                </Button>
              </View>
            </View>
          )}
        </BottomTabs.Screen>
      ))}
    </BottomTabs.Navigator>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    gap: 8,
  },
  heading: {
    fontSize: 18,
    fontWeight: '600',
    marginBottom: 12,
  },
  buttons: {
    gap: 8,
  },
});
