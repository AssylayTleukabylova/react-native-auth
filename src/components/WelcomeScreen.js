import {Button, View, StyleSheet, Text, Pressable, Platform} from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function WelcomeScreen() {
    const navigation = useNavigation();
    const isWeb = Platform.OS === 'web';

    const handleLogout = () => {
        navigation.navigate('Login');
    };

    return (
        <View style={styles.root}>
            <Text style={styles.text}>Welcome</Text>
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
        color: 'black',
        fontSize: 18
    }
});
