import { mount } from '@cypress/react';
import HelloWorld from "/components/hello-world";

describe('Layout', function ()  {
    it('renders the layout', function() {
        mount(<HelloWorld/>);
    })
})