import React from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    StatusBar,
    View
} from 'react-native';
import { COLOR, ThemeProvider, Toolbar, Drawer, Avatar, IconToggle } from 'react-native-material-ui';

const uiTheme = {
    palette: {
        primaryColor: "#232E51",
        accentColor: COLOR.pink500,
    },
    toolbar: {
        container: {
            height: 80,
            paddingTop: 20,
        },
    },
    avatar: {
        container: {
            backgroundColor: '#333'
        }
    }
};

export default class Info extends React.Component {

    navigate() {
        this.props.navigation.navigate("DrawerOpen"); // open drawer
    }

    render() {
        return (
            <ThemeProvider uiTheme={uiTheme}>
                <View style={styles.container}>
                    <StatusBar backgroundColor="rgba(0, 0, 0, 0.2)" translucent />

                    <Toolbar
                        leftElement="menu"
                        centerElement="Info"
                        onLeftElementPress={() => this.navigate()}
                    />


                </View>
                <Text>Info View</Text >
            </ThemeProvider >
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
});
