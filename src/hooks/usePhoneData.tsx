import {useState} from 'react';
import {Alert} from 'react-native';
import {useNavigation, useRoute} from '@react-navigation/native';
import axios from 'axios';

const usePhoneData = () => {
  const navigation: any = useNavigation();
  const router: any = useRoute();
  const {name, lastName} = router.params;
  const [phone, setPhone] = useState('');

  const [counter, setCounter] = useState(0);
  const sendData = async () => {
    try {
      const response = await axios.post(
        'https://atomic-test-api.onrender.com/form',
        {
          name,
          lastName,
          phone,
        },
      );
      setCounter(counter + 1);
      if (counter < 3 && response.status !== 200) {
        Alert.alert('Tuvimos un problema por favor intenta de nuevo');
      } else if (counter >= 3) {
        navigation.navigate('CompletePostulation');
      }
    } catch (error) {
      console.log(error);
    }
  };

  const validatePhone = () => {
    if (phone.length === 10) {
      sendData();
    } else {
      Alert.alert('El número de teléfono debe tener 10 dígitos');
    }
  };

  return {
    phone,
    setPhone,
    validatePhone,
  };
};

export default usePhoneData;
