"use client";

import * as React from 'react';
import Autocomplete from '@mui/material/Autocomplete';
import TextField from '@mui/material/TextField';
import Chip from '@mui/material/Chip';
import IconButton from '@mui/material/IconButton';
import ClearIcon from '@mui/icons-material/Clear';
import Typography from '@mui/material/Typography';


const FixedTags = React.forwardRef((props, ref) => {
  const fixedOptions = [];
  const [value, setValue] = React.useState([]);


  React.useImperativeHandle(ref, () => ({
    clear() {
      setValue([]);
    }
  }));

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: '' }}>
    <Typography className="font-['Inter'] font-[500] text-[14px]" variant="body1" gutterBottom>
       Stores
    </Typography>

      <Autocomplete
        multiple
        id="fixed-tags-demo"
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
        options={stores}
        getOptionLabel={(option) => option.title}
        renderTags={(tagValue, getTagProps) =>
          tagValue.map((option, index) => (
            <Chip
              style={{ borderRadius: "6px" }}
              key={index}
              label={option.title}
              {...getTagProps({ index })}
            />
          ))
        }
        style={{ flexGrow: 1 }}
        renderInput={(params) => (
         
          <TextField
            {...params}
            placeholder={!value.length ? 'Select Store' : ''}
            InputProps={{
              ...params.InputProps,
              endAdornment: (
                <React.Fragment>
                  {value.length > 0 && (
                    <IconButton
                      aria-label="clear tags"
                      onClick={() => setValue([])}
                      size="small"
                    >
                      <ClearIcon />
                    </IconButton>
                  )}
                </React.Fragment>
              ),
              style: { paddingRight: value.length > 0 ? '8px' : '0' },
            }}
          />
        )}
      />
    </div>
  );
});

export default FixedTags;

const stores = [
  { title: 'Jumia' },
  { title: 'Konga' },
  { title: 'Alibaba' },
  { title: 'Amazon' },
];
