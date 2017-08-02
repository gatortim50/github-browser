import { StackNavigator } from 'react-navigation';

import Login from '../components/Login';
import Profile from '../components/Profile';

export default StackNavigator({
  Login: {screen: Login,
    navigationOptions: {
      header: () => null,
    },
  },
  Profile: {screen: Profile},
});
