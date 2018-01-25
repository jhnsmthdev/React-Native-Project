import React, { StyleSheet } from 'react-native'

export default StyleSheet.create({
    container: { flex: 1, backgroundColor: "#E7E7E7", padding: 20 },
    topView: { flexDirection: "row", alignItems: "center", justifyContent: "space-between", marginTop: 40 },
    topLogo: { height: 70, width: 70 },
    topTextView: { justifyContent: "center", alignItems: "center" },
    topText: { fontSize: 20, color: "#232E51", fontWeight: "500", borderBottomWidth: 3, borderBottomColor: "#232E51" },
    emailInput: { height: 60, fontSize: 16, padding: 10 },
    passwordInput: { height: 60, fontSize: 16, padding: 10 },
    touchableView: { alignItems: "center", marginTop: 30 },
    touchable: { backgroundColor: "#232E51", width: 360, height: 50, borderRadius: 25, alignItems: "center", padding: 15 },
    touchableText: { fontSize: 16, color: "white" },
    socialButtonView: { flexDirection: "row", alignItems: "center", justifyContent: "center", marginTop: 70 },
    socialText: { fontSize: 15 },
    socialTouchableView: { borderRadius: 24, backgroundColor: '#232E51', width: 48, height: 48, marginLeft: 10 },
    socialIcons: { height: 50, width: 50 },
    footerView: { alignItems: "center", position: "absolute", left: 20, right: 20, bottom: 10 },
    footerText: { fontSize: 13, color: "grey" },

    //Keyboard Avoid Animation Styles
    topViewAnimated: { flexDirection: "column", justifyContent: "center", marginTop: 20 },
    emailInputAnimated: { marginTop: 20 },
    passwordInputAnimated: { marginTop: 5 },
    touchableViewAnimated: { marginTop: 10 },
    emailInputMarginTop: { marginTop: 40 },
    passwordInputMarginTop: { marginTop: 10 }
});