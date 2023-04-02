import { useMemo } from 'react';
import { GoogleMap, useLoadScript, MarkerF } from '@react-google-maps/api';

export const HomeScreen = () => {
  const center = useMemo(() => ({ lat: 30.0444, lng: 31.2357 }), []);
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: 'AIzaSyD8cW7J-u1NvWYR5Os155W7nG6OO6Z_Wd8',
  });

  if (!isLoaded) {
    return <div>Loading...</div>;
  }

  return (
    <GoogleMap
      zoom={10}
      center={center}
      mapContainerStyle={{
        height: '100vh',
        width: '100vw',
      }}
    >
      <MarkerF
        position={center}
        icon={{
          url: 'https://mui.com/static/images/avatar/1.jpg',
          scaledSize: { width: 72, height: 72, equals: () => false },
        }}
        label={{
          text: 'Tahrir Square',
          className: 'custom-label-class',
        }}
      />
    </GoogleMap>
  );
};
