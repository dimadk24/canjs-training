
const viewModel = can.Map.extend({
  name: 'World',
  sayHello: function sayHello() {
    console.log(`hello ${this.attr('name')}`);
  },
});

export default can.Component.extend({
  tag: 'hello-world',
  template: can.view('/src/components/hello-world/hello-world.stache'),
  viewModel,
});
