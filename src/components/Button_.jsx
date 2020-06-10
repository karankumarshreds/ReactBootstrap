import React from 'react';
import { Button } from '@material-ui/core';

/*************************************
 * Default color theme can be changed 
 * as done in the theme.js file
 ************************************/
function Button_() {
  return (
    <div className="Button_">
        <Button>Enabled</Button>
        <Button disabled>Disabled</Button>
        <br/><br/>
        <Button fullWidth>Full width button</Button>
        <br/><br/>
        <Button variant="outlined">Outlined Button</Button>
        <br/><br/>
        <Button color="primary" variant="outlined">Primary Color</Button>
        <Button color="secondary" variant="outlined">Secondary Color</Button>
        <br/><br/>
    </div>
  );
}

export default Button_;
