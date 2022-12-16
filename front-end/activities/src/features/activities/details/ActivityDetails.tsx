import React from 'react';
import { Button, Card, Image } from 'semantic-ui-react';
import { Activity } from '../../../app/models/activity';

interface Props {
    activity: Activity;
    cancelSelectActivity: () => void;
}

const ActivityDetails = (props:Props) =>{
    return(
        <Card fluid>
            <Image src={`/assets/categoryImages/${props.activity.category}.jpg`} />
            <Card.Content>
                <Card.Header>
                    {props.activity.title}
                </Card.Header>
                <Card.Meta>
                    <span>{props.activity.date.toString()}</span>
                </Card.Meta>
                <Card.Description>
                    {props.activity.description}
                </Card.Description>
            </Card.Content>
            <Card.Content extra>
                <Button.Group>
                    <Button basic color='blue' content='Edit'/>
                    <Button onClick={props.cancelSelectActivity} basic color='blue' content='Cancel'/>
                </Button.Group>
            </Card.Content>
        </Card>
    )
}

export default ActivityDetails;