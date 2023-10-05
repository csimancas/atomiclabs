import {useState} from 'react';
import {useNavigation} from '@react-navigation/native';
import {Alert} from 'react-native';

const useUserData = () => {
  const navigation: any = useNavigation();
  const [name, setName] = useState('');
  const [lastName, setLastName] = useState('');

  const validateName = () => {
    if (name.length > 5) {
      return true;
    }
    return false;
  };

  const validateLastName = () => {
    if (lastName !== '') {
      return true;
    }
    return false;
  };

  const handleSendName = () => {
    if (name.length < 5) {
      Alert.alert('El nombre debe tener al menos 5 caracteres');
    } else if (lastName === '') {
      Alert.alert('El Apellido es requerido');
    } else {
      navigation.navigate('ValidatePhone', {
        name,
        lastName,
      });
    }
  };

  return {
    name,
    setName,
    lastName,
    setLastName,
    validateName,
    validateLastName,
    handleSendName,
  };
};

export default useUserData;
