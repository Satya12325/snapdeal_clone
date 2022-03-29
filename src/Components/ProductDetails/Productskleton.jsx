import * as React from 'react';
import Skeleton from '@mui/material/Skeleton';
import Stack from '@mui/material/Stack';

export default function Productskleton(){



    return(
        <Stack style={{ width:"70%",margin:"auto"}}>
      <Skeleton variant="text" />
      <Skeleton variant="rectangular" style={{height:"10rem"}} />
      <Skeleton variant="rectangular" style={{height:"10rem"}}  />
    </Stack>
    )
}