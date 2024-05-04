import { Button } from 'react-native';

function WelcomeScreen() {
    const navigation = useNavigation();

    const handleLogout = () => {
        // В данном примере, просто перенаправляем пользователя на экран логина
        navigation.navigate('Login');
    };

    return (
        <View style={styles.root}>
            <Text>Welcome</Text>
            <Button title="Log Out" onPress={handleLogout} />
        </View>
    );
}
