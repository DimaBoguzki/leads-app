import { Box, Skeleton } from "@mui/material";
import { memo, useState } from "react";
import Logo from '../assets/img/logo-transparent.png';
import Placeholder from '../assets/img/placeholder.png';

const AppLogo = memo(
  ( { pic, width, height }: { pic?: string; width?: number; height?: number } ) => {
    const [ loaded, setLoaded ] = useState( false );
    const [ error, setError ] = useState( false );

    const handleLoad = () => setLoaded( true );
    const handleError = () => {
      setError( true );
      setLoaded( true );
    };

    const imageSrc = error ? Placeholder : ( pic || Logo );

    return (
      <Box
        sx={ {
          borderRadius: 2,
          boxShadow: 1,
          width: width || 120,
          height: height || 120,
          overflow: 'hidden',
          display: 'flex',
          alignItems: 'center',
          background: 'transparent',
        } }
      >
        { !loaded && (
          <Skeleton variant="rectangular" width="100%" height="100%" />
        ) }
        <img
          src={ imageSrc }
          alt="Logo"
          loading="lazy"
          onLoad={ handleLoad }
          onError={ handleError }
          style={ {
            width: '100%',
            height: '100%',
            objectFit: 'contain',
            objectPosition: 'center',
            backgroundColor: 'transparent',
            display: 'block',
          } }
        />
      </Box>
    );
  },
  ( prev, next ) =>
    prev.pic === next.pic &&
    prev.width === next.width &&
    prev.height === next.height
);

export { AppLogo };