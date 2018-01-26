import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    StatusBar,
    View
} from 'react-native';
import { COLOR, ThemeProvider, Toolbar, Drawer, Avatar, IconToggle } from 'react-native-material-ui';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';


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
export default class DrawerMenu extends Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
            active: 'people',
        };
    }

    _setInfoActive() {
        this.setState({ active: 'info' });
    }

    render() {
        console.disableYellowBox = true;
        return (
            <ThemeProvider uiTheme={uiTheme}>
                <View style={styles.container} >
                    <StatusBar backgroundColor="rgba(255,0,0,0.3)" translucent />
                    <Toolbar
                        // leftElement="arrow-back"
                        onLeftElementPress={() => this.props.navigation.navigate('DrawerClose')}
                        centerElement="Menu"
                    />
                    <View style={styles.container}>
                        <Drawer>
                            <Drawer.Header >
                                <Drawer.Header.Account
                                    style={{
                                        container: { backgroundColor: '#fafafa' },
                                    }}
                                    avatar={<Avatar text={'D'} key={0} />}
                                    // accounts={[
                                    //     { avatar: <Avatar text="H" key={1} /> },
                                    //     { avatar: <Avatar text="L" key={2} /> },
                                    // ]}
                                    footer={{
                                        dense: true,
                                        centerElement: {
                                            primaryText: 'Dale John',
                                            secondaryText: 'tayagdale@gmail.com',
                                        },
                                        rightElement: "arrow-drop-down",
                                        onRightElementPress: () => console.log("Hello world")
                                    }}
                                />
                            </Drawer.Header>
                            <Drawer.Section
                                style={{
                                    label: { color: '#0000ff' }
                                }}
                                divider
                                items={[
                                    {
                                        icon: 'bookmark-border', value: 'Bookmarks',
                                        active: this.state.active == 'bookmark',
                                        onPress: () => {
                                            this.setState({ active: 'bookmark' });
                                            // this.props.navigation.navigate('Bookmark');
                                        },
                                    },
                                    {
                                        icon: 'today', value: 'Calendar',
                                        active: this.state.active == 'calendar',
                                        onPress: () => {
                                            this.setState({ active: 'calendar' });
                                            // this.props.navigation.navigate('Calendar');
                                        },
                                    },
                                    {
                                        icon: 'people', value: 'Clients',
                                        active: this.state.active == 'client',
                                        onPress: () => {
                                            this.setState({ active: 'client' });
                                            // this.props.navigation.navigate('Client');
                                        },
                                    },
                                ]}
                            />
                            <Drawer.Section
                                title="Personal"
                                items={[
                                    {
                                        icon: 'info', value: 'Info',
                                        active: this.state.active == 'info',
                                        onPress: () => {
                                            this.setState({ active: 'info' });

                                            //this.props.navigation.navigate('DrawerClose');
                                            // this.props.navigation.navigate('Info');
                                        },
                                    },
                                    {
                                        icon: 'settings', value: 'Settings',
                                        active: this.state.active == 'settings',
                                        onPress: () => {
                                            this.setState({ active: 'settings' });
                                            // this.props.navigation.navigate('Settings');
                                        },
                                    },
                                ]}
                            />
                        </Drawer>
                    </View>
                </View>
            </ThemeProvider >
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,

    },
});
