import { Box } from "@mui/material";
import { memo } from "react";
import Logo from '../assets/img/logo.jpg';

const AppLogo = memo(({isRelative}: {isRelative?: boolean})=>{
  return (
    <Box 
      sx={!isRelative ? {
        position: 'absolute',
        top: t=>t.spacing(2),
        left: t=>t.spacing(2),
        borderRadius: 2,
        boxShadow: 1,
        overflow: 'hidden',     
      } : undefined}
    >
      <img 
        src={Logo} alt="Logo" 
        style={{ 
          width:250, height: 200, objectFit: 'cover', overflow: 'hidden'
        }} 
      />
    </Box>
  )
},(p,n) => p.isRelative === n.isRelative);

export {
  AppLogo
}