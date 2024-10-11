'use client';

import HomeCard from './HomeCard';
import { useState } from 'react';
import { useRouter } from 'next/navigation';

const MeetingTypeList = () => {
  const [meetingState, setMeetingState] = useState<
    'isScheduleStream' | 'isJoiningStream' | 'isInstantStream' | undefined
  >();
  const router = useRouter();

  return (
    <section className='grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-4'>
      <HomeCard
        img="/icons/add-meeting.svg"
        title="New Stream"
        description="Start an instant stream"
        handleClick={() => setMeetingState('isInstantStream')}
        className='bg-orange-1'
      />
      <HomeCard
        img="/icons/schedule.svg"
        title="Schedule Stream"
        description="Plan your meeting"
        handleClick={() => setMeetingState('isScheduleStream')}
        className='bg-blue-1'
      />
      <HomeCard
        img="/icons/recordings.svg"
        title="View Recordings"
        description="View your recordings"
        handleClick={() => setMeetingState('isJoiningStream')}
        className='bg-purple-1'
      />
      <HomeCard
        img="/icons/join-meeting.svg"
        title="View Stream"
        description="via invitation link"
        handleClick={() => setMeetingState('isJoiningStream')}
        className='bg-yellow-1'
      />
    </section>
  );
};

export default MeetingTypeList;
