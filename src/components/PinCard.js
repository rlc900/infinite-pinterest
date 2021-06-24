import React, {useState} from 'react';
import { Card, Image, Icon, Button, Label } from 'semantic-ui-react'

function PinCard({pin, images}) {

    const [likes, setLikes] = useState(0)
    

    const handleClick = (e) => {
        setLikes(likes + 1)
    }

    return (
        <Card centered={true}>
            <Image src={images['136x136'].url} wrapped ui={false} />
            <Card.Content className='content'>
                <Card.Header>{pin.title}</Card.Header>
                    <Button as='div' labelPosition='right' onClick={handleClick}>
                    <Button icon>
                    <Icon name='heart' />
                          Like
                     </Button>
                    <Label as='a' basic pointing='left'>
                         {likes}
                    </Label>
                    </Button>
                <Card.Description className='desc'>
                        {pin.description}
                 </Card.Description>
            </Card.Content>
        </Card>
    );
}

export default PinCard;
