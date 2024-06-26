import GoogleMapReact from 'google-map-react';
import React from 'react'



const AnyReactComponent = ({ text }) => <div>{text}</div>;
function GoogleMap() {
    const defaultProps = {
        center: {
          lat: 22.722217,
          lng: 75.869879
        },
        zoom: 15
      };
    
      return (
        <div style={{ height: '100vh', width: '100%' }}>
          <GoogleMapReact
            bootstrapURLKeys={{ key: 'AIzaSyAfbRpsvE91JiV2fOYyd_I0u2HglI6f0f0' }}
            defaultCenter={defaultProps.center}
            defaultZoom={defaultProps.zoom}
          >
            <AnyReactComponent
              lat={59.955413}
              lng={30.337844}
              text=""
            />
          </GoogleMapReact>
        </div>
      );
}

export default GoogleMap
