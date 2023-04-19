import { NativeStackNavigationProp } from "@react-navigation/native-stack";

export  type  propsNavigationStack = {
    Home: any;
    Chat: undefined;
    Onboarding: undefined;
    ApiKeyScreen: undefined;
};

export type propsStack = NativeStackNavigationProp<propsNavigationStack>