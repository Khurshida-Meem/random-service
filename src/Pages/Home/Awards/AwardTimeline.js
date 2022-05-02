import * as React from 'react';
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';
import { Box } from '@mui/material';
import AwardContent from './AwardContent';

const award = {
    color: '#fff',
    backgroundColor: '#221F46',
    width: {md: '60%'},
    padding: '20px 10px',
    borderRadius: '20px',
}

const AwardTimeline = () => {
    return (
        <Box>
            <Timeline position="alternate">
                <TimelineItem>
                    <TimelineSeparator>
                        <TimelineDot />
                        <TimelineConnector />
                    </TimelineSeparator>
                    <TimelineContent>
                        <Box sx={award}>
                            <AwardContent heading={'Search Strategy'} />
                        </Box>
                    </TimelineContent>
                </TimelineItem>
                <TimelineItem>
                    <TimelineSeparator>
                        <TimelineDot />
                        <TimelineConnector />
                    </TimelineSeparator>
                    <TimelineContent>
                        <Box sx={award} style={{marginLeft: 'auto'}}>
                            <AwardContent heading={'Link & Content'} />
                        </Box>

                    </TimelineContent>
                </TimelineItem>
                <TimelineItem>
                    <TimelineSeparator>
                        <TimelineDot />
                        <TimelineConnector />
                    </TimelineSeparator>
                    <TimelineContent>
                        <Box sx={award}>
                            <AwardContent heading={'Digital Marketing'} />
                        </Box>
                    </TimelineContent>
                </TimelineItem>
                <TimelineItem>
                    <TimelineSeparator>
                        <TimelineDot />
                    </TimelineSeparator>
                    <TimelineContent>
                        <Box sx={award} style={{marginLeft: 'auto'}}>
                            <AwardContent heading={'Unique Methods'} />
                        </Box>
                    </TimelineContent>
                </TimelineItem>
            </Timeline>
        </Box>
    );
};

export default AwardTimeline;