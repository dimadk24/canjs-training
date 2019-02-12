import template from './hello-world.stache';

export default can.Component.extend({
  tag: 'hello-world',
  template,
  viewModel: {
    name: 'World',
  },
});
