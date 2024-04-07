import React, { useEffect, useState } from 'react';
import mapboxgl from 'mapbox-gl';
import './MapboxDirectionsAPI.css';

const MapboxDirectionsAPI = () => {
  const [initialLocation, setInitialLocation] = useState('');
  const [destinationLocation, setDestinationLocation] = useState('');
  const [map, setMap] = useState(null);
  const [instructions, setInstructions] = useState([]);

  useEffect(() => {
    mapboxgl.accessToken = 'pk.eyJ1IjoibmFuZGluaS0iLCJhIjoiY2x0bHZrb3E1MTlpczJqbzF0ZmJycnRqZiJ9.AKaYwjn6HFfRDMQtXy7Big';

    const successLocation = (position) => {
      setupMap([position.coords.longitude, position.coords.latitude]);
    };

    const errorLocation = () => {
      setupMap([-122.663, 45.523751]); // Default coordinates if geolocation fails
    };

    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(successLocation, errorLocation, {
        enableHighAccuracy: true
      });
    } else {
      console.error('Geolocation is not supported by this browser.');
      setupMap([-122.663, 45.523751]);
    }
  }, []); // Re-render when startLocation changes

  const setupMap = (center) => {
    const map = new mapboxgl.Map({
      container: 'map',
      style: 'mapbox://styles/mapbox/streets-v12',
      center: center,
      zoom: 12,
      scrollZoom: true // Enable scroll to zoom
    });

    map.addControl(new mapboxgl.NavigationControl());
    map.addControl(new mapboxgl.ScaleControl());
    map.addControl(new mapboxgl.FullscreenControl());

    map.on('load', () => {
      map.addSource('route', {
        type: 'geojson',
        data: {
          type: 'Feature',
          properties: {},
          geometry: {
            type: 'LineString',
            coordinates: []
          }
        }
      });

      map.addLayer({
        id: 'route',
        type: 'line',
        source: 'route',
        layout: {
          'line-join': 'round',
          'line-cap': 'round'
        },
        paint: {
          'line-color': '#3887be',
          'line-width': 5,
          'line-opacity': 0.75
        }
      });
    });

    map.on('click', (event) => {
      const { lng, lat } = event.lngLat;
      setDestinationLocation(`${lat.toFixed(4)}, ${lng.toFixed(4)}`);
    });

    setMap(map);
  };

  const handleFindPath = () => {
    if (!initialLocation || !destinationLocation) {
      alert('Please enter both initial and destination locations.');
      return;
    }

    const initialCoords = initialLocation.split(',').map(coord => parseFloat(coord.trim()));
    const destinationCoords = destinationLocation.split(',').map(coord => parseFloat(coord.trim()));

    getRoute(initialCoords, destinationCoords);
  };

  const getRoute = async (start, end) => {
    const query = await fetch(
      `https://api.mapbox.com/directions/v5/mapbox/cycling/${start[1]},${start[0]};${end[1]},${end[0]}?steps=true&geometries=geojson&access_token=${mapboxgl.accessToken}`,
      { method: 'GET' }
    );
    const json = await query.json();

    if (json.routes && json.routes.length > 0) {
      const data = json.routes[0];
      const steps = data.legs[0].steps;
      const instructions = steps.map(step => step.maneuver.instruction);
      setInstructions(instructions);

      const route = data.geometry.coordinates;
      const geojson = {
        type: 'Feature',
        properties: {},
        geometry: {
          type: 'LineString',
          coordinates: route
        }
      };

      map.getSource('route').setData(geojson);
    } else {
      console.error('No routes found');
    }
  };

  return (
    <>
      <h1 className="map-heading">Map it</h1>
      <div className='input-container'>
        <input
          type='text'
          placeholder='Initial Location (latitude, longitude)'
          value={initialLocation}
          onChange={(e) => setInitialLocation(e.target.value)}
        />
        <input
          type='text'
          placeholder='Destination Location (latitude, longitude)'
          value={destinationLocation}
          onChange={(e) => setDestinationLocation(e.target.value)}
        />
        <button className='find-path-button' onClick={handleFindPath}>Find Path</button>
      </div>
      <div id='map' className='map-container'></div>
      <div id="instructions" className='instructions-container'>
        <h2>Follow me 😉:</h2>
        <ul>
          {instructions.map((instruction, index) => (
            <li key={index}>{instruction}</li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default MapboxDirectionsAPI;
