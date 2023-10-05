import {useEffect, useState} from 'react';
import {Alert} from 'react-native';
import Axios from 'axios';

const useData = () => {
  const [data, setData] = useState([]);

  const getData = async () => {
    try {
      const response = await Axios.get(
        'https://atomic-test-api.onrender.com/names',
      );
      setData(response.data);
    } catch (error) {
      Alert.alert('Error', 'No se pudo obtener la información');
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return {
    data,
  };
};

export default useData;
