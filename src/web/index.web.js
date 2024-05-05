import App from '../../App';
import { AppRegistry } from 'react-native';

AppRegistry.registerComponent('App', () => App);
AppRegistry.runApplication('App', {
    initialProps: {},
    rootTag: document.getElementById('app-root'),
});
