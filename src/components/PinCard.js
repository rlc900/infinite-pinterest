import React from 'react';
import { Card, Image } from 'semantic-ui-react'

function PinCard({pin, images}) {

    // console.log(images)
    return (
        <Card centered={true}>
            <Image src={images['136x136'].url} wrapped ui={false} />
            <Card.Content>
                <Card.Header>{pin.title}</Card.Header>
                 <Card.Meta>
                    <span className='date'>Joined in 2015</span>
                 </Card.Meta>
                <Card.Description>
                 {pin.description}
                </Card.Description>
         </Card.Content>
  </Card>
    );
}

export default PinCard;
