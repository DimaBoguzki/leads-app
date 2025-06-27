import { Box } from "@mui/material";
import { memo } from "react";
import Logo from '../assets/img/logo.jpg';


const AppLogo = memo( ( { pic, width }: { pic?: string; width?: number } ) => {

  return (
    <Box
      sx={ {
        borderRadius: 2,
        boxShadow: 1,
        overflow: 'hidden',
        display: 'flex',
        alignItems: 'center',
        background: 'transparent',
      } }
    >
      <img
        src={ pic || Logo } alt="Logo"
        loading="lazy"

        style={ {
          width: width || 120,
          objectFit: 'contain',
          overflow: 'hidden',
          objectPosition: 'center',
          backgroundColor: 'transparent',
          display: 'block'
        } }
      />
    </Box>
  )
}, ( p, n ) => p.pic === n.pic );

export {
  AppLogo
}