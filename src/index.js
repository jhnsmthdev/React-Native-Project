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
            editable: true,
            email: "",
            password: "",
            background: null,
            email_error: "",
            password_error: ""
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
            topLogo: styles.topLogoAnimated,
            marginStyle: styles.touchableLoginViewAnimated,
            // marginTextStyle: { marginTop: 20 }
        })
    }

    keyboardDidHide(e) {
        LayoutAnimation.configureNext(LayoutAnimation.Presets.spring)
        this.setState({
            visibleHeight: Dimensions.get('window').height,
            topLogo: styles.topLogo,
            marginStyle: styles.touchableLoginView,
            // marginTextStyle: { marginTop: 20 }
        })
    }

    onFocus() {
        if (this.state.email == "") {
            this.setState({
                editable: true,
                email_error: "Email Address Required"
            })
            this.refs.Email.focus();
        } else if (!this.validateEmail(this.state.email)) {
            this.setState({
                editable: true,
                email_error: "Invalid Email Address"
            })
        } else {
            this.setState({
                editable: true,
                email_error: ""
            })
            this.refs.Password.focus();
        }
    }

    validateEmail = (email) => {
        var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(email);
    };

    onSubmit() {
        if (this.state.password == "" && this.state.email == "") {
            this.setState({
                editable: true,
                email_error: "Email Required",
                password_error: "Password Required"
            })
        } else if (!this.validateEmail(this.state.email)) {
            this.setState({
                editable: true,
                email_error: "Invalid Email Address"
            })
            this.refs.Email.focus();
        } else {
            this.setState({ editable: true, email_error: "", password_error: "" })
            alert("Logging in......")
            Keyboard.dismiss()
            this.props.navigation.navigate("Home")
        }
    }

    onReturnPasword() {
        if (this.state.password == "") {
            this.setState({
                password_error: "Password Required"
            })
        } else if (!this.validateEmail(this.state.email)) {
            this.setState({
                editable: true,
                email_error: "Invalid Email Address",
                password_error: ""
            })
            this.refs.Email.focus();
        } else {
            this.setState({ editable: false, error: "", email_error: "", password_error: "" })
            this.onSubmit()
        }
    }


    render() {
        const { navigate } = this.props.navigation
        return (
            <View style={[styles.container, { height: this.state.visibleHeight }]}>
                <View style={styles.logo}>
                    <Image source={require("../assets/sample-logo1.png")} style={[styles.topLogo, this.state.topLogo]} />
                </View>

                <View>
                    <Text style={styles.signinText}> Sign in </Text>
                </View>

                <View>
                    <TextInput
                        ref='Email'
                        style={[styles.formLoginInput, this.state.background]}
                        placeholder="EMAIL"
                        keyboardType="email-address"
                        underlineColorAndroid="gray"
                        returnKeyType="next"
                        autoCapitalize="none"
                        editable={this.state.editable}
                        onChangeText={(text) => this.setState({ email: text })}
                        blurOnSubmit={false}
                        onSubmitEditing={(event) => { this.onFocus() }} />
                    <Text style={{ marginLeft: 10, color: "red" }} >{this.state.email_error} </Text>
                    <TextInput
                        ref='Password'
                        style={[styles.formLoginInput]}
                        placeholder="PASSWORD"
                        secureTextEntry={true}
                        underlineColorAndroid="gray"
                        autoCapitalize="none"
                        editable={this.state.editable}
                        returnKeyType="done"
                        onChangeText={(text) => this.setState({ password: text })}
                        blurOnSubmit={false}
                        onSubmitEditing={() => { this.onReturnPasword() }} />
                    <Text style={{ marginLeft: 10, color: "red" }} >{this.state.password_error} </Text>
                    <View style={[styles.touchableLoginView, this.state.marginStyle]}>
                        <TouchableHighlight style={styles.touchableLogin}
                            onPress={() => this.onSubmit()}>
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
                    <TouchableHighlight onPress={() => navigate("Signup")}>
                        <Text style={styles.footerText}>Don't Have An Account?</Text>
                    </TouchableHighlight>
                    <Text style={styles.footerText}>Forgot Password</Text>

                </View>
            </View >
        );
    }
}
