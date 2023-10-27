import {
  createDrawerNavigator,
  DrawerContent,
  type DrawerContentComponentProps,
  type DrawerScreenProps,
} from '@react-navigation/drawer';
import {
  Header as NavigationHeader,
  HeaderBackButton,
} from '@react-navigation/elements';
import { type ParamListBase, useNavigation } from '@react-navigation/native';
import type { StackScreenProps } from '@react-navigation/stack';
import * as React from 'react';
import { useWindowDimensions } from 'react-native';

import { Albums } from '../shared/Albums';
import { Article } from '../shared/Article';
import { NewsFeed } from '../shared/NewsFeed';

type DrawerParams = {
  Article: undefined;
  NewsFeed: undefined;
  Albums: undefined;
};

const useIsLargeScreen = () => {
  const dimensions = useWindowDimensions();

  return dimensions.width > 414;
};

const Header = ({
  onGoBack,
  title,
}: {
  onGoBack: () => void;
  title: string;
}) => {
  const isLargeScreen = useIsLargeScreen();

  return (
    <NavigationHeader
      title={title}
      headerLeft={
        isLargeScreen
          ? undefined
          : (props) => <HeaderBackButton {...props} onPress={onGoBack} />
      }
    />
  );
};

const ArticleScreen = ({
  navigation,
}: DrawerScreenProps<DrawerParams, 'Article'>) => {
  return (
    <>
      <Header title="Article" onGoBack={() => navigation.toggleDrawer()} />
      <Article />
    </>
  );
};

const NewsFeedScreen = ({
  navigation,
}: DrawerScreenProps<DrawerParams, 'NewsFeed'>) => {
  return (
    <>
      <Header title="Feed" onGoBack={() => navigation.toggleDrawer()} />
      <NewsFeed />
    </>
  );
};

const AlbumsScreen = ({
  navigation,
}: DrawerScreenProps<DrawerParams, 'Albums'>) => {
  return (
    <>
      <Header title="Albums" onGoBack={() => navigation.toggleDrawer()} />
      <Albums />
    </>
  );
};

const CustomDrawerContent = (props: DrawerContentComponentProps) => {
  const navigation = useNavigation();

  return (
    <>
      <NavigationHeader
        title="Pages"
        headerLeft={(props) => (
          <HeaderBackButton {...props} onPress={() => navigation.goBack()} />
        )}
      />
      <DrawerContent {...props} />
    </>
  );
};

const Drawer = createDrawerNavigator<DrawerParams>();

type Props = Partial<React.ComponentProps<typeof Drawer.Navigator>> &
  StackScreenProps<ParamListBase>;

export function MasterDetail({ navigation, ...rest }: Props) {
  React.useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
      gestureEnabled: false,
    });
  }, [navigation]);

  const isLargeScreen = useIsLargeScreen();

  return (
    <Drawer.Navigator
      backBehavior="none"
      defaultStatus="open"
      drawerContent={(props) => <CustomDrawerContent {...props} />}
      screenOptions={{
        headerShown: false,
        drawerType: isLargeScreen ? 'permanent' : 'back',
        drawerStyle: isLargeScreen ? null : { width: '100%' },
        drawerContentContainerStyle: { paddingTop: 4 },
        overlayColor: 'transparent',
      }}
      {...rest}
    >
      <Drawer.Screen name="Article" component={ArticleScreen} />
      <Drawer.Screen
        name="NewsFeed"
        component={NewsFeedScreen}
        options={{ title: 'Feed' }}
      />
      <Drawer.Screen
        name="Albums"
        component={AlbumsScreen}
        options={{ title: 'Albums' }}
      />
    </Drawer.Navigator>
  );
}
