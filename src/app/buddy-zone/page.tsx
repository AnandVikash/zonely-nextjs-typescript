import BuddyCode from '@/components/pages/buddyzone/Buddycode';
import Buddyform from '@/components/pages/buddyzone/Buddyform';
import Introduction from '@/components/pages/buddyzone/Introduction';
import SafetyPriority from '@/components/pages/buddyzone/SafetyPriority';
import Special from '@/components/pages/buddyzone/Special';
import Started from '@/components/pages/buddyzone/Started';
import Whatbuddydoes from '@/components/pages/buddyzone/Whatbuddydoes';
import Whybuddy from '@/components/pages/buddyzone/Whybuddy';

import React from 'react'

export default function page() {
  return (
    <><Buddyform />
      <Introduction />
      <Whybuddy />
      <Whatbuddydoes />
      <Special />
      <SafetyPriority />
      <Started />
      <BuddyCode />
    </>
  );
}
