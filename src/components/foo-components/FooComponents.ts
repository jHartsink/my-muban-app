import { defineComponent } from '@muban/muban';
import { Heading } from '../heading/Heading';

export const FooComponent = defineComponent({
  name: 'foo-component',
  components: [Heading],
});
