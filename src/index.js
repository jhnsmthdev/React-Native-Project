import React from 'react';
import { StyleSheet, Text, View, Image, TextInput, TouchableHighlight, TouchableNativeFeedback, KeyboardAvoidingView } from 'react-native';



export default class Index extends React.Component {
    render() {
        return (
            <View style={styles.container}>
                <View style={{ alignItems: 'center', marginTop: 50 }}>
                    <Image source={require("../assets/sample-logo1.png")} />
                </View>

                <View>
                    <Text style={{ fontSize: 20, marginTop: 30 }}> Sign in </Text>
                </View>

                <View>
                    <TextInput
                        style={{
                            height: 60,
                            // color: '#ffffff',
                            // textAlign: 'center',
                            // backgroundColor: '#1D1F26',
                            fontSize: 16,
                            padding: 10,
                            marginTop: 30
                        }}
                        placeholder="EMAIL"
                        keyboardType="email-address"
                        underlineColorAndroid="gray" />
                    <TextInput
                        style={{
                            height: 60,
                            // color: '#ffffff',
                            // textAlign: 'center',
                            // backgroundColor: '#1D1F26',
                            fontSize: 16,
                            padding: 10,
                            marginTop: 30
                        }}
                        placeholder="PASSWORD"
                        secureTextEntry={true}
                        underlineColorAndroid="gray" />
                    <View style={{ alignItems: "center", marginTop: 40 }}>
                        <TouchableHighlight style={{ backgroundColor: "#232E51", width: 360, height: 50, borderRadius: 25, alignItems: "center", padding: 15 }} >
                            <Text style={{ fontSize: 16, color: "white" }}>Login</Text>
                        </TouchableHighlight>
                    </View>
                    <View style={{ alignItems: "center", marginTop: 10 }}>
                        <Text style={{ fontSize: 15 }}> or sign in with: </Text>
                    </View>
                    <View style={{ alignItems: "center", justifyContent: "center", flexDirection: "row", marginTop: 20 }}>
                        <View style={{ borderRadius: 24, backgroundColor: '#232E51', width: 48, height: 48 }} >
                            <TouchableNativeFeedback
                                background={TouchableNativeFeedback.Ripple('#4267B2', true)}
                                onPress={() => console.log("Button Pressed")}
                            // style={{ backgroundColor: "#232E51", width: 360, height: 50, borderRadius: 25, alignItems: "center", padding: 15 }} >
                            >
                                <View>
                                    <Image source={require("../assets/fb-logo.png")} style={{ height: 50, width: 50 }} />
                                </View>
                            </TouchableNativeFeedback>
                        </View>
                        <View style={{ borderRadius: 24, backgroundColor: '#232E51', width: 48, height: 48, marginLeft: 10 }} >
                            <TouchableNativeFeedback
                                background={TouchableNativeFeedback.Ripple('#1DA1F2', true)}
                                onPress={() => console.log("Button Pressed")}
                            // style={{ backgroundColor: "#232E51", width: 360, height: 50, borderRadius: 25, alignItems: "center", padding: 15 }} >
                            >
                                <View>
                                    <Image source={require("../assets/twitter-logo.png")} style={{ height: 50, width: 50 }} />
                                </View>
                            </TouchableNativeFeedback>
                        </View>
                        <View style={{ borderRadius: 24, backgroundColor: '#232E51', width: 48, height: 48, marginLeft: 10 }} >
                            <TouchableNativeFeedback
                                background={TouchableNativeFeedback.Ripple('#BD081C', true)}
                                onPress={() => console.log("Button Pressed")}
                            // style={{ backgroundColor: "#232E51", width: 360, height: 50, borderRadius: 25, alignItems: "center", padding: 15 }} >
                            >
                                <View>
                                    <Image source={require("../assets/pinterest-logo.png")} style={{ height: 50, width: 50 }} />
                                </View>
                            </TouchableNativeFeedback>
                        </View>
                    </View>

                </View>

                <View style={{ alignItems: "center", flexDirection: "row", justifyContent: "space-between", position: "absolute", left: 20, right: 20, bottom: 10 }}>
                    <Text style={{ fontSize: 15 }}>Don't Have An Account?</Text>
                    <Text style={{ fontSize: 15 }}>Forgot Password</Text>

                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#E7E7E7',
        padding: 20
        // alignItems: 'center',
        // justifyContent: 'center',
    },
});
