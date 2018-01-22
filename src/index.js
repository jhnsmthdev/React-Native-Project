import React from 'react';
import {
    StyleSheet,
    Text,
    View,
    Image,
    TextInput,
    TouchableHighlight,
    TouchableNativeFeedback,
    Keyboard,
    Dimensions,
    LayoutAnimation,
    UIManager
} from 'react-native';
import styles from './styles/loginStyles'


export default class Index extends React.Component {

    constructor() {
        super()
        this.state = {
            visibleHeight: null,
            topLogo: null,
            marginStyle: null,
            marginTextStyle: null,
            editable: true
        }
    }

    componentWillMount() {
        UIManager.setLayoutAnimationEnabledExperimental && UIManager.setLayoutAnimationEnabledExperimental(true);
        this.keyboardDidShowListener = Keyboard.addListener('keyboardDidShow', this.keyboardDidShow.bind(this))
        this.keyboardDidHideListener = Keyboard.addListener('keyboardDidHide', this.keyboardDidHide.bind(this))
    }


    componentWillUnmount() {
        this.keyboardDidShowListener.remove()
        this.keyboardDidHideListener.remove()
    }

    keyboardDidShow(e) {
        LayoutAnimation.configureNext(LayoutAnimation.Presets.spring)
        let newSize = Dimensions.get('window').height - e.endCoordinates.height
        this.setState({
            visibleHeight: newSize,
            topLogo: { width: 100, height: 70 },
            marginStyle: { marginTop: 30 },
            marginTextStyle: { marginTop: 10 }
        })
    }

    keyboardDidHide(e) {
        LayoutAnimation.configureNext(LayoutAnimation.Presets.spring)
        this.setState({
            visibleHeight: Dimensions.get('window').height,
            topLogo: { width: 186, height: 112 },
            marginStyle: { marginTop: 40 },
            marginTextStyle: { marginTop: 30 }
        })
    }


    render() {
        return (
            <View style={[styles.container, { height: this.state.visibleHeight }]}>
                <View style={styles.logo}>
                    <Image source={require("../assets/sample-logo1.png")} style={[this.state.topLogo]} />
                </View>

                <View>
                    <Text style={styles.signinText}> Sign in </Text>
                </View>

                <View>
                    <TextInput
                        style={[styles.formLoginInput]}
                        placeholder="EMAIL"
                        keyboardType="email-address"
                        underlineColorAndroid="gray"
                        returnKeyType="next"
                        autoCapitalize="none"
                        editable={this.state.editable}
                        onSubmitEditing={(event) => { this.refs.Password.focus() }} />
                    <TextInput
                        ref='Password'
                        style={[styles.formLoginInput]}
                        placeholder="PASSWORD"
                        secureTextEntry={true}
                        underlineColorAndroid="gray"
                        autoCapitalize="none"
                        editable={this.state.editable}
                        returnKeyType="done"
                        onSubmitEditing={() => { this.setState({ editable: false }) }} />
                    <View style={[styles.touchableLoginView, this.state.marginStyle]}>
                        <TouchableHighlight style={styles.touchableLogin}
                            onPress={() => this.setState({ editable: true })}>
                            <Text style={styles.touchableLoginText}>Login</Text>
                        </TouchableHighlight>
                    </View>
                    <View style={styles.signinWithTextView}>
                        <Text style={styles.signinWithText}> or sign in with: </Text>
                    </View>
                    <View style={styles.socialButtonsView}>
                        <View style={styles.touchableNativeView} >
                            <TouchableNativeFeedback
                                background={TouchableNativeFeedback.Ripple('#4267B2', true)}
                                onPress={() => console.log("Button Pressed")}
                            // style={{ backgroundColor: "#232E51", width: 360, height: 50, borderRadius: 25, alignItems: "center", padding: 15 }} >
                            >
                                <View>
                                    <Image source={require("../assets/fb-logo.png")} style={styles.socialIcons} />
                                </View>
                            </TouchableNativeFeedback>
                        </View>
                        <View style={styles.touchableNativeViewWithMargin} >
                            <TouchableNativeFeedback
                                background={TouchableNativeFeedback.Ripple('#1DA1F2', true)}
                                onPress={() => console.log("Button Pressed")}
                            // style={{ backgroundColor: "#232E51", width: 360, height: 50, borderRadius: 25, alignItems: "center", padding: 15 }} >
                            >
                                <View>
                                    <Image source={require("../assets/twitter-logo.png")} style={styles.socialIcons} />
                                </View>
                            </TouchableNativeFeedback>
                        </View>
                        <View style={styles.touchableNativeViewWithMargin} >
                            <TouchableNativeFeedback
                                background={TouchableNativeFeedback.Ripple('#BD081C', true)}
                                onPress={() => console.log("Button Pressed")}
                            // style={{ backgroundColor: "#232E51", width: 360, height: 50, borderRadius: 25, alignItems: "center", padding: 15 }} >
                            >
                                <View>
                                    <Image source={require("../assets/pinterest-logo.png")} style={styles.socialIcons} />
                                </View>
                            </TouchableNativeFeedback>
                        </View>
                    </View>

                </View>

                <View style={styles.footer}>
                    <Text style={styles.footerText}>Don't Have An Account?</Text>
                    <Text style={styles.footerText}>Forgot Password</Text>

                </View>
            </View>
        );
    }
}
