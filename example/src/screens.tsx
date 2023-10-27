import type { NavigatorScreenParams } from '@react-navigation/native';

import { AuthFlow } from './screens/AuthFlow';
import { BottomTabs } from './screens/BottomTabs';
import { CustomLayout } from './screens/CustomLayout';
import { DrawerView } from './screens/DrawerView';
import { DynamicTabs } from './screens/DynamicTabs';
import { LinkComponent } from './screens/LinkComponent';
import { LinkingScreen } from './screens/LinkingScreen';
import { MasterDetail } from './screens/MasterDetail';
import { MaterialTopTabsScreen } from './screens/MaterialTopTabs';
import { MixedHeaderMode } from './screens/MixedHeaderMode';
import { MixedStack } from './screens/MixedStack';
import { ModalStack } from './screens/ModalStack';
import { NativeStack } from './screens/NativeStack';
import { NativeStackHeaderCustomization } from './screens/NativeStackHeaderCustomization';
import { NativeStackPreventRemove } from './screens/NativeStackPreventRemove';
import { SimpleStack } from './screens/SimpleStack';
import { StackHeaderCustomization } from './screens/StackHeaderCustomization';
import { StackPreventRemove } from './screens/StackPreventRemove';
import { StackTransparent } from './screens/StackTransparent';
import { StaticScreen } from './screens/Static';
import { TabView } from './screens/TabView';

export type RootDrawerParamList = {
  Examples: undefined;
};

export type LinkComponentDemoParamList = {
  Article: { author: string };
  Albums: undefined;
};

export const SCREENS = {
  NativeStack: {
    title: 'Native Stack',
    component: NativeStack,
  },
  SimpleStack: {
    title: 'Simple Stack',
    component: SimpleStack,
  },
  ModalStack: {
    title: 'Modal Stack',
    component: ModalStack,
  },
  MixedStack: {
    title: 'Regular + Modal Stack',
    component: MixedStack,
  },
  MixedHeaderMode: {
    title: 'Float + Screen Header Stack',
    component: MixedHeaderMode,
  },
  StackTransparent: {
    title: 'Transparent Stack',
    component: StackTransparent,
  },
  StackHeaderCustomization: {
    title: 'Header Customization in Stack',
    component: StackHeaderCustomization,
  },
  NativeStackHeaderCustomization: {
    title: 'Header Customization in Native Stack',
    component: NativeStackHeaderCustomization,
  },
  BottomTabs: {
    title: 'Bottom Tabs',
    component: BottomTabs,
  },
  MaterialTopTabs: {
    title: 'Material Top Tabs',
    component: MaterialTopTabsScreen,
  },
  DynamicTabs: {
    title: 'Dynamic Tabs',
    component: DynamicTabs,
  },
  MasterDetail: {
    title: 'Master Detail',
    component: MasterDetail,
  },
  AuthFlow: {
    title: 'Auth Flow',
    component: AuthFlow,
  },
  StackPreventRemove: {
    title: 'Prevent removing screen in Stack',
    component: StackPreventRemove,
  },
  NativeStackPreventRemove: {
    title: 'Prevent removing screen in Native Stack',
    component: NativeStackPreventRemove,
  },
  CustomLayout: {
    title: 'Custom Layout',
    component: CustomLayout,
  },
  LinkComponent: {
    title: '<Link />',
    component: LinkComponent,
  },
  TabView: {
    title: 'TabView',
    component: TabView,
  },
  DrawerView: {
    title: 'DrawerView',
    component: DrawerView,
  },
  Static: {
    title: 'Static config',
    component: StaticScreen,
  },
  Linking: {
    title: 'Linking with authentication flow',
    component: LinkingScreen,
  },
};

type ParamListTypes = {
  Home: undefined;
  NotFound: undefined;
  LinkComponent: NavigatorScreenParams<LinkComponentDemoParamList> | undefined;
};

export type RootStackParamList = {
  [P in Exclude<keyof typeof SCREENS, keyof ParamListTypes>]: undefined;
} & ParamListTypes;

// Make the default RootParamList the same as the RootStackParamList
declare global {
  // eslint-disable-next-line @typescript-eslint/no-namespace
  namespace ReactNavigation {
    interface RootParamList extends RootStackParamList {}
  }
}
