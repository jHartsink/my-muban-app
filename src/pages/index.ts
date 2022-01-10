import type { AppTemplateProps } from '../App.template';
import { FooComponentsMock } from '@/components/foo-components/FooComponent.mock';

export const data = (): AppTemplateProps => ({
  layout: {
    name: 'default-layout',
    props: {
      blocks: [
        {
          name: 'foo-component',
          props: FooComponentsMock,
        },
      ],
    },
  },
});

// https://github.com/nfl/react-helmet
export const meta = (): Record<string, string> => ({
  title: 'foo',
  description: 'bar',
});
