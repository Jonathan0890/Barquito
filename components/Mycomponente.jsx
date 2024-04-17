import React, { useState, useEffect } from 'react';
import { View, Text, ActivityIndicator } from 'react-native';
import axios from 'axios';

const APIComponent = () => {
  const [username, setUsername] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Función para realizar la solicitud a la API
    const fetchData = async () => {
      try {
        const response = await axios.get('https://localhost:3000/users');
        // Extraer el nombre de usuario de la respuesta
        const { data } = response;
        const { username } = data;
        setUsername(username);
        setLoading(false);
      } catch (error) {
        console.error('Error al obtener los datos:', error);
        setLoading(false);
      }
    };

    // Llamar a la función para obtener los datos cuando el componente se monta
    fetchData();

    // Limpieza: Cancelar la solicitud o realizar otras tareas necesarias cuando el componente se desmonta
    return () => {
      // Cancelar la solicitud si es necesario
    };
  }, []); // La matriz vacía como segundo argumento asegura que useEffect solo se ejecute una vez (equivalente a componentDidMount en componentes de clase)

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      {loading ? (
        // Muestra un indicador de carga mientras se cargan los datos
        <ActivityIndicator size="large" color="#0000ff" />
      ) : (
        // Muestra el nombre de usuario una vez que se ha cargado
        <View>
          {username ? (
            <Text>Username: {username}</Text> // Mostrar el nombre de usuario
          ) : (
            <Text>No hay datos de usuario disponibles</Text>
          )}
        </View>
      )}
    </View>
  );
};

export default APIComponent;
