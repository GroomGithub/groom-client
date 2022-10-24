import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';

import GroupPage from './index';

export default {
  title: 'templates/GroupPage',
  component: GroupPage
} as ComponentMeta<typeof GroupPage>;

export const Primary: ComponentStory<typeof GroupPage> = ({
  groupName = '그룹 이름',
  selectedTabIndex = 0
}) => (
  <GroupPage {...{ groupName, selectedTabIndex }}>
    <div>콘텐츠</div>
  </GroupPage>
);