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
            touchableViewStyle: null,
            email: "",
            email_error: "",
            password: "",
            password_error: "",
            confirm_password: "",
            confirm_password_error: ""
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
            emailInputStyle: styles.emailInputMarginTop,
            passwordInputStyle: styles.passwordInputMarginTop,
            touchableViewStyle: styles.touchableView
        })
    }

    validateEmail = (email) => {
        var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(email);
    };

    onFocus() {
        if (this.state.email == "") {
            this.setState({
                email_error: "Email Address Required"
            })
            this.refs.Email.focus();
        } else if (!this.validateEmail(this.state.email)) {
            this.setState({
                email_error: "Invalid Email Address"
            })
        } else {
            this.setState({
                email_error: ""
            })
            this.refs.Password.focus();
        }
    }

    onReturnPassword() {
        if (this.state.password == "") {
            this.setState({
                password_error: "Password Required"
            })
        } else {
            this.setState({ email_error: "", password_error: "" })
            this.refs.confirmPassword.focus()
        }
    }

    onReturnConfirmPasword() {
        if (this.state.confirm_password == "") {
            this.setState({
                confirm_password_error: "Must re-type your password"
            })
        } else {
            this.setState({ confirm_password_error: "", error: "", email_error: "", password_error: "" })
            this.onSubmit()
        }
    }

    onSubmit() {
        if (this.state.password == "" && this.state.email == "" && this.state.confirm_password == "") {
            this.setState({
                email_error: "Email Address Required",
                password_error: "Password Required",
                confirm_password_error: "Must re-type your password"
            })
            this.refs.Email.focus();

        } else if (this.state.password != this.state.confirm_password) {
            this.setState({
                confirm_password_error: "Password do not match!"
            })
            Keyboard.dismiss()
        }
        else if (!this.validateEmail(this.state.email)) {
            this.setState({
                email_error: "Invalid Email Address"
            })
            this.refs.Email.focus();
        } else {
            this.setState({ email_error: "", password_error: "", confirm_password_error: "" })
            alert("Signing up......")
            Keyboard.dismiss()

        }
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
                        ref="Email"
                        style={[styles.emailInput, styles.emailInputMarginTop, this.state.emailInputStyle]}
                        placeholder="EMAIL"
                        keyboardType="email-address"
                        underlineColorAndroid="gray"
                        returnKeyType="next"
                        autoCapitalize="none"
                        onChangeText={(text) => this.setState({ email: text })}
                        blurOnSubmit={false}
                        onSubmitEditing={(event) => { this.onFocus() }} />
                    <Text style={{ marginLeft: 10, color: "red" }} >{this.state.email_error} </Text>
                    <TextInput
                        ref='Password'
                        style={[styles.passwordInput, styles.passwordInputMarginTop, this.state.passwordInputStyle]}
                        placeholder="PASSWORD"
                        secureTextEntry={true}
                        underlineColorAndroid="gray"
                        autoCapitalize="none"
                        returnKeyType="next"
                        blurOnSubmit={false}
                        onChangeText={(text) => this.setState({ password: text })}
                        onSubmitEditing={(event) => { this.onReturnPassword() }}
                    />
                    <Text style={{ marginLeft: 10, color: "red" }} >{this.state.password_error} </Text>
                    <TextInput
                        ref='confirmPassword'
                        style={[styles.passwordInput, styles.passwordInputMarginTop, this.state.passwordInputStyle]}
                        placeholder="CONFIRM PASSWORD"
                        secureTextEntry={true}
                        underlineColorAndroid="gray"
                        blurOnSubmit={false}
                        autoCapitalize="none"
                        returnKeyType="done"
                        onChangeText={(text) => this.setState({ confirm_password: text })}
                        onSubmitEditing={(event) => this.onReturnConfirmPasword()}
                    />
                    <Text style={{ marginLeft: 10, color: "red" }} >{this.state.confirm_password_error} </Text>
                    <View style={[styles.touchableView, this.state.touchableViewStyle]}>
                        <TouchableHighlight style={styles.touchable}
                            onPress={() => this.onSubmit()}>
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
