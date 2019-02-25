import React from 'react'
import '../setUpTests';
import { mount } from 'enzyme';
import ShareCom from './MockComponents/ShareCom'



jest.mock('./MockComponents/UserComponent', () => ()=> <div id="mockUserCom">mockUserCom</div>);
jest.mock('./MockComponents/InstallComponent', () => ()=> <div id="mockInstallCom">mockInstallCom</div>);

describe('ShareCom', () => {
    it('should return correct component', () => {
        const something = 'Flex';
        const wrapper = mount(
            <ShareCom
                something={something}
            />
        );
        expect(wrapper.find('#mockUserCom').length).toEqual(1);
        expect(wrapper.find('#mockInstallCom').length).toEqual(1);
    })
});
