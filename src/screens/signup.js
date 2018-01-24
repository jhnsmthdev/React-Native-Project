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


export default class Signup extends React.Component {

    constructor() {
        super()
        this.state = {
            viewStyle: null,
            emailInputStyle: null,
            passwordInputStyle: null,
            touchableViewStyle: null
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
        LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut)
        let newSize = Dimensions.get('window').height - e.endCoordinates.height
        this.setState({
            viewStyle: { flexDirection: "column", justifyContent: "center", marginTop: 20 },
            emailInputStyle: { marginTop: 20 },
            passwordInputStyle: { marginTop: 10 },
            touchableViewStyle: { marginTop: 30 }
        })
    }

    keyboardDidHide(e) {
        LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut)
        this.setState({
            viewStyle: { flexDirection: "row", alignItems: "center", justifyContent: "space-between", marginTop: 40 },
            emailInputStyle: { marginTop: 40 },
            passwordInputStyle: { marginTop: 20 },
            touchableViewStyle: { marginTop: 35 }
        })
    }

    render() {
        return (
            <View style={{ flex: 1, backgroundColor: "#E7E7E7", padding: 20 }}>
                <View style={[{ flexDirection: "row", alignItems: "center", justifyContent: "space-between", marginTop: 40 }, this.state.viewStyle]} >
                    <Image style={{ height: 70, width: 70 }} source={require("../../assets/sample-logo1.png")} />
                    <View style={{ justifyContent: "center", alignItems: "center" }} >
                        <Text style={{ fontSize: 20, color: "#232E51", fontWeight: "500", borderBottomWidth: 3, borderBottomColor: "#232E51" }}> Signup </Text>
                    </View>
                </View>
                <View>
                    <TextInput
                        ref='Email'
                        style={[{
                            height: 60,
                            // color: '#ffffff',
                            // textAlign: 'center',
                            // backgroundColor: '#1D1F26',
                            fontSize: 16,
                            padding: 10,
                            marginTop: 40
                        }, this.state.emailInputStyle]}
                        placeholder="EMAIL"
                        keyboardType="email-address"
                        underlineColorAndroid="gray"
                        returnKeyType="next"
                        autoCapitalize="none" />
                    <TextInput
                        ref='Password'
                        style={[{
                            height: 60,
                            // color: '#ffffff',
                            // textAlign: 'center',
                            // backgroundColor: '#1D1F26',
                            fontSize: 16,
                            padding: 10,
                            marginTop: 20
                        }, this.state.passwordInputStyle]}
                        placeholder="PASSWORD"
                        secureTextEntry={true}
                        underlineColorAndroid="gray"
                        autoCapitalize="none"
                        returnKeyType="done"
                    />
                    <TextInput
                        ref='Password'
                        style={[{
                            height: 60,
                            // color: '#ffffff',
                            // textAlign: 'center',
                            // backgroundColor: '#1D1F26',
                            fontSize: 16,
                            padding: 10,
                            marginTop: 20
                        }, this.state.passwordInputStyle]}
                        placeholder="CONFIRM PASSWORD"
                        secureTextEntry={true}
                        underlineColorAndroid="gray"
                        autoCapitalize="none"
                        returnKeyType="done"
                    />
                    <View style={[{ alignItems: "center", marginTop: 35 }, this.state.touchableViewStyle]}>
                        <TouchableHighlight style={{
                            backgroundColor: "#232E51",
                            width: 360,
                            height: 50,
                            borderRadius: 25,
                            alignItems: "center",
                            padding: 15
                        }}
                            onPress={() => console.log("Sign up pressed!")}>
                            <Text style={{
                                fontSize: 16,
                                color: "white"
                            }}>Signup</Text>
                        </TouchableHighlight>
                    </View>
                    <View style={{
                        flexDirection: "row",
                        alignItems: "center",
                        justifyContent: "center",
                        marginTop: 100
                    }}>
                        <Text style={{
                            fontSize: 15
                        }}> or sign in with: </Text>
                        <View style={{
                            borderRadius: 24,
                            backgroundColor: '#232E51',
                            width: 48,
                            height: 48,
                            marginLeft: 10
                        }} >
                            <TouchableNativeFeedback
                                background={TouchableNativeFeedback.Ripple('#4267B2', true)}
                                onPress={() => console.log("Button Pressed")}
                            // style={{ backgroundColor: "#232E51", width: 360, height: 50, borderRadius: 25, alignItems: "center", padding: 15 }} >
                            >
                                <View>
                                    <Image source={require("../../assets/fb-logo.png")} style={{
                                        height: 50,
                                        width: 50
                                    }} />
                                </View>
                            </TouchableNativeFeedback>
                        </View>
                        <View style={{
                            borderRadius: 24,
                            backgroundColor: '#232E51',
                            width: 48,
                            height: 48,
                            marginLeft: 10
                        }} >
                            <TouchableNativeFeedback
                                background={TouchableNativeFeedback.Ripple('#1DA1F2', true)}
                                onPress={() => console.log("Button Pressed")}
                            // style={{ backgroundColor: "#232E51", width: 360, height: 50, borderRadius: 25, alignItems: "center", padding: 15 }} >
                            >
                                <View>
                                    <Image source={require("../../assets/twitter-logo.png")} style={{
                                        height: 50,
                                        width: 50
                                    }} />
                                </View>
                            </TouchableNativeFeedback>
                        </View>
                        <View style={{
                            borderRadius: 24,
                            backgroundColor: '#232E51',
                            width: 48,
                            height: 48,
                            marginLeft: 10
                        }} >
                            <TouchableNativeFeedback
                                background={TouchableNativeFeedback.Ripple('#BD081C', true)}
                                onPress={() => console.log("Button Pressed")}
                            // style={{ backgroundColor: "#232E51", width: 360, height: 50, borderRadius: 25, alignItems: "center", padding: 15 }} >
                            >
                                <View>
                                    <Image source={require("../../assets/pinterest-logo.png")} style={{
                                        height: 50,
                                        width: 50
                                    }} />
                                </View>
                            </TouchableNativeFeedback>
                        </View>
                    </View>
                </View>
                <View style={{
                    alignItems: "center",
                    position: "absolute",
                    left: 20,
                    right: 20,
                    bottom: 10
                }}>

                    <Text style={{ fontSize: 13, color: "grey" }}>By Signing up you agree with our terms and conditions</Text>

                </View>
            </View >
        );
    }
}
