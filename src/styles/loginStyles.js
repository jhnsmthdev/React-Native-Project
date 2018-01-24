import React, { StyleSheet } from 'react-native'

export default StyleSheet.create({

    container: {
        flex: 1,
        backgroundColor: '#E7E7E7',
        padding: 20
        // alignItems: 'center',
        // justifyContent: 'center',
    },
    logo: {
        alignItems: 'center',
        marginTop: 50
    },
    signinText: {
        fontSize: 20,
        marginTop: 30
    },
    formLoginInput: {
        height: 60,
        // color: '#ffffff',
        // textAlign: 'center',
        // backgroundColor: '#1D1F26',
        fontSize: 16,
        padding: 10,
        marginTop: 20
    },
    formLoginDisabled: {
        height: 60,
        // color: '#ffffff',
        // textAlign: 'center',
        backgroundColor: '#EEEEEE',
        fontSize: 16,
        padding: 10,
        marginTop: 30
    },
    touchableLoginView: {
        alignItems: "center",
        marginTop: 25
    },
    touchableLogin: {
        backgroundColor: "#232E51",
        width: 360,
        height: 50,
        borderRadius: 25,
        alignItems: "center",
        padding: 15
    },
    touchableLoginText: {
        fontSize: 16,
        color: "white"
    },
    signinWithTextView: {
        alignItems: "center",
        marginTop: 10
    },
    signinWithText: {
        fontSize: 15
    },
    socialButtonsView: {
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "row",
        marginTop: 20
    },
    touchableNativeView: {
        borderRadius: 24,
        backgroundColor: '#232E51',
        width: 48,
        height: 48
    },
    touchableNativeViewWithMargin: {
        borderRadius: 24,
        backgroundColor: '#232E51',
        width: 48,
        height: 48,
        marginLeft: 10
    },
    socialIcons: {
        height: 50,
        width: 50
    },
    footer: {
        alignItems: "center",
        flexDirection: "row",
        justifyContent: "space-between",
        position: "absolute",
        left: 20,
        right: 20,
        bottom: 10
    },
    footerText: {
        fontSize: 15
    }
});