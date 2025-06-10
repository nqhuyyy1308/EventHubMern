import {useState, useEffect} from 'react';
import MainStack from './src/navigators/MainNavigator';
import {SplashScreen} from './src/screens';

const App = () => {
  const [isSplash, setIsSplash] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsSplash(false);
    }, 1500);

    return () => clearTimeout(timeout);
  }, []);

  return isSplash ? <SplashScreen /> : <MainStack />;
};

export default App;
