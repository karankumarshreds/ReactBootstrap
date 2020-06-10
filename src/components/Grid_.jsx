import React from 'react';
import { Grid } from '@material-ui/core';
import Header from './Header';

/************************************************
 * Grid contents need to be in the container
/************************************************
 * column means the axis is set vertical so that
 * components are stacked on top of each other 
 * by default: the axis is row
/************************************************/

const Grid_ = () => {
    return (
        <Grid container direction="column">
            {/* Navbar grid */}
            <Grid item xs={12}>
                <Header />
            </Grid>
            {/* Body grid */}
            <Grid item container>
                {/* Blank grid for side pads
                On small screen and up, takes only two
                blocks and on XS it takes 0 blocks  */}
                <Grid item sm={2}/>
                <Grid item xs={12} sm={8}>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ab unde alias sequi nesciunt eaque fuga repudiandae eveniet accusamus boob delectus veniam. Eligendi eveniet provident animi rerum. Expedita cupiditate voluptate assumenda et!
                </Grid>
                <Grid item sm={2}/>
            </Grid>
        </Grid>
    )
}

export default Grid_;