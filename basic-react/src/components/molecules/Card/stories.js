import React from 'react';
import { storiesOf} from '@storybook/react';

import Card from '.';

storiesOf('molecules/ Card', module)
.add('example',() =>{
    return(
        <Card/>
    )
})