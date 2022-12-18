import React from 'react';
import { Grid } from 'semantic-ui-react';
import { Activity } from '../../../app/models/activity';
import ActivityDetails from '../details/ActivityDetails';
import ActivityFrom from '../form/ActivityForm';
import ActivityList from './ActivityList';

interface Props {
    activities: Activity[];
    selectedActivity: Activity | undefined;
    selectActivity: (id: string) => void;
    cancelSelectActivity: () => void;
    editMode: boolean;
    openForm: (id?: string) => void;
    closeForm: () => void;
}

const ActivityDashboard = (props: Props) => {
    return (
        <Grid>
            <Grid.Column width='10'>
                <ActivityList
                    activities={props.activities}
                    selectActivity={props.selectActivity} />
            </Grid.Column>
            <Grid.Column width='6'>
                {props.selectedActivity && !props.editMode &&
                    <ActivityDetails
                        cancelSelectActivity={props.cancelSelectActivity}
                        activity={props.selectedActivity}
                        openForm={props.openForm} />}
                {props.editMode &&
                    <ActivityFrom
                        closeForm={props.closeForm}
                        activity={props.selectedActivity} />}
            </Grid.Column>
        </Grid>
    )
}

export default ActivityDashboard;