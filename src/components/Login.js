import {Platform, Pressable, StyleSheet, Text, TextInput, View} from "react-native";
import {useState} from "react";
import {useNavigation} from "@react-navigation/native";

export default function Login() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const navigation = useNavigation();
    const isWeb = Platform.OS === 'web';

    const onChangeUserNameHandler = username => {
        setUsername(username);
    };

    const onChangePasswordHandler = password => {
        setPassword(password);
    };


    const onSignInPressed = () => {
        if (username === 'admin' && password === 'admin') {
            navigation.navigate('Home');
            setUsername('');
            setPassword('');
        }
    };

    return (
        <View style={styles.root}>
            <TextInput
                value={username}
                onChangeText={onChangeUserNameHandler}
                placeholder="Login"
                style={[styles.container, isWeb && styles.webContainer]}
            />
            <TextInput
                value={password}
                onChangeText={onChangePasswordHandler}
                placeholder="Password"
                secureTextEntry={true}
                style={[styles.container, isWeb && styles.webContainer]}
            />
            <Pressable
                onPress={onSignInPressed}
                style={[
                    styles.containerForButton,
                    isWeb ? styles.webContainerForButton : styles.mobileContainerForButton
                ]}
            >
                <Text style={styles.text}>Sign In</Text>
            </Pressable>
        </View>
    );
}
const styles = StyleSheet.create({
    root: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#f0f0f0',
    },
    container: {
        backgroundColor: '#fff',
        borderRadius: 10,
        marginTop: 20,
        width: '80%',
        borderWidth: 1,
        paddingHorizontal: 10,
        height: 50,
        borderColor: '#ccc',
        fontSize: 16,
    },
    webContainer: {
        width: '40%',
    },
    containerForButton: {
        width: '80%',
        padding: 10,
        marginVertical: 10,
        alignItems: 'center',
        borderRadius: 10,
        backgroundColor: '#007bff'
    },
    mobileContainerForButton: {
        width: '80%'
    },
    webContainerForButton: {
        width: '40%'
    },
    text: {
        fontWeight: 'bold',
        color: 'white',
    }
});
