import Buddyform from '@/components/pages/buddyzone/Buddyform';
import Introduction from '@/components/pages/buddyzone/Introduction';
import Whatbuddydoes from '@/components/pages/buddyzone/Whatbuddydoes';
import Whybuddy from '@/components/pages/buddyzone/Whybuddy';

import React from 'react'

export default function page() {
  return (
    <><Buddyform />
      <Introduction />
      <Whybuddy />
      <Whatbuddydoes />
    </>
  );
}
