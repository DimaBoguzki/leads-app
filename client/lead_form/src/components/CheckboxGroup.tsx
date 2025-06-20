import { Box, Checkbox, FormControlLabel, Stack, Typography } from "@mui/material";
import { Controller } from "react-hook-form";
import type { Control } from "react-hook-form";



const CheckBoxGroup = <T extends Record<string, any>>(props: { 
  name: string; 
  label: string; 
  options: string[]; 
  control: Control<T>; 
}) => {
  const { name, label, options, control } = props;
  
  return (
    <Stack 
      sx={{
        border: 1,
        rowGap: 2,
        borderColor: '#555555',
        p:3
      }}
    >
      <Typography variant="subtitle1" color="primary.light" textAlign='right'>
        {label}
      </Typography> 
      <Controller
        name={name as any}
        control={control}
        render={({ field }) => (
          <Box 
            display='grid'
            gridTemplateColumns='repeat(auto-fill, minmax(150px, 1fr))'
          >
            {options.map(option => (
              <FormControlLabel
                key={option}
                label={option}
                control={
                  <Checkbox
                    size="small"
                    checked={field.value?.includes(option) || false}
                    onChange={e => {
                      const checked = e.target.checked;
                      const value = [...(field.value as string[] || [])];
                      if (checked) {
                        value.push(option);
                      } else {
                        const index = value.indexOf(option);
                        if (index >= 0) value.splice(index, 1);
                      }
                      field.onChange(value);
                    }}
                  />
                }
              />
            ))}
          </Box>
        )}
      />
    </Stack>
  )
};

export {
  CheckBoxGroup
}