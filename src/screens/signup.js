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
import styles from '../styles/signupStyles'


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
            viewStyle: styles.topViewAnimated,
            emailInputStyle: styles.emailInputAnimated,
            passwordInputStyle: styles.passwordInputAnimated,
            touchableViewStyle: styles.touchableViewAnimated
        })
    }

    keyboardDidHide(e) {
        LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut)
        this.setState({
            viewStyle: styles.topView,
            emailInputStyle: styles.emailInput,
            passwordInputStyle: styles.passwordInput,
            touchableViewStyle: styles.touchableView
        })
    }

    render() {
        return (
            <View style={styles.container}>
                <View style={[styles.topView, this.state.viewStyle]} >
                    <Image style={styles.topLogo} source={require("../../assets/sample-logo1.png")} />
                    <View style={styles.topTextView} >
                        <Text style={styles.topText}> Signup </Text>
                    </View>
                </View>
                <View>
                    <TextInput
                        ref='Email'
                        style={[styles.emailInput, this.state.emailInputStyle]}
                        placeholder="EMAIL"
                        keyboardType="email-address"
                        underlineColorAndroid="gray"
                        returnKeyType="next"
                        autoCapitalize="none"
                        blurOnSubmit={false}
                        onSubmitEditing={(event) => this.refs.Password.focus()} />
                    <TextInput
                        ref='Password'
                        style={[styles.passwordInput, this.state.passwordInputStyle]}
                        placeholder="PASSWORD"
                        secureTextEntry={true}
                        underlineColorAndroid="gray"
                        autoCapitalize="none"
                        returnKeyType="next"
                        blurOnSubmit={false}
                        onSubmitEditing={(event) => this.refs.confirmPassword.focus()}
                    />
                    <TextInput
                        ref='confirmPassword'
                        style={[styles.passwordInput, this.state.passwordInputStyle]}
                        placeholder="CONFIRM PASSWORD"
                        secureTextEntry={true}
                        underlineColorAndroid="gray"
                        blurOnSubmit={false}
                        autoCapitalize="none"
                        returnKeyType="done"
                    />
                    <View style={[styles.touchableView, this.state.touchableViewStyle]}>
                        <TouchableHighlight style={styles.touchable}
                            onPress={() => console.log("Sign up pressed!")}>
                            <Text style={styles.touchableText}>Signup</Text>
                        </TouchableHighlight>
                    </View>
                    <View style={styles.socialButtonView}>
                        <Text style={styles.socialText}> or sign in with: </Text>
                        <View style={styles.socialTouchableView} >
                            <TouchableNativeFeedback
                                background={TouchableNativeFeedback.Ripple('#4267B2', true)}
                                onPress={() => console.log("Button Pressed")}
                            // style={{ backgroundColor: "#232E51", width: 360, height: 50, borderRadius: 25, alignItems: "center", padding: 15 }} >
                            >
                                <View>
                                    <Image source={require("../../assets/fb-logo.png")} style={styles.socialIcons} />
                                </View>
                            </TouchableNativeFeedback>
                        </View>
                        <View style={styles.socialTouchableView} >
                            <TouchableNativeFeedback
                                background={TouchableNativeFeedback.Ripple('#1DA1F2', true)}
                                onPress={() => console.log("Button Pressed")}
                            // style={{ backgroundColor: "#232E51", width: 360, height: 50, borderRadius: 25, alignItems: "center", padding: 15 }} >
                            >
                                <View>
                                    <Image source={require("../../assets/twitter-logo.png")} style={styles.socialIcons} />
                                </View>
                            </TouchableNativeFeedback>
                        </View>
                        <View style={styles.socialTouchableView} >
                            <TouchableNativeFeedback
                                background={TouchableNativeFeedback.Ripple('#BD081C', true)}
                                onPress={() => console.log("Button Pressed")}
                            // style={{ backgroundColor: "#232E51", width: 360, height: 50, borderRadius: 25, alignItems: "center", padding: 15 }} >
                            >
                                <View>
                                    <Image source={require("../../assets/pinterest-logo.png")} style={styles.socialIcons} />
                                </View>
                            </TouchableNativeFeedback>
                        </View>
                    </View>
                </View>
                <View style={styles.footerView}>

                    <Text style={styles.footerText}>By Signing up you agree with our terms and conditions</Text>

                </View>
            </View >
        );
    }
}
