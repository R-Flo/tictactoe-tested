import React from 'react'
import '../setUpTests';
import renderer from 'react-test-renderer';
import { shallow } from 'enzyme';


const STATUS = {
    HOVERED: 'hovered',
    NORMAL: 'normal',
};

class Link extends React.Component {
    constructor(props) {
        super(props);
        this._onMouseEnter = this._onMouseEnter.bind(this);
        this._onMouseLeave = this._onMouseLeave.bind(this);
        this.state = {
            class: STATUS.NORMAL,
        };
    }

    _onMouseEnter() {
        this.setState({class: STATUS.HOVERED});
    }

    _onMouseLeave() {
        this.setState({class: STATUS.NORMAL});
    }

    render() {
        return (
            <a
                className={this.state.class}
                href={this.props.page || '#'}
                onMouseEnter={this._onMouseEnter}
                onMouseLeave={this._onMouseLeave}
            >
                {this.props.children}
            </a>
        );
    }
}

it('renders correctly', () => {
    const tree = renderer
        .create(<Link page="http://www.facebook.com">Facebook</Link>)
        .toJSON();
    expect(tree).toMatchSnapshot();
});

test('render with enzyme', () => {
    const wrapper = shallow(
        <Link page="http://www.facebook.com">Facebook</Link>
    );
    expect(wrapper).toMatchSnapshot();
    expect(wrapper.prop('children')).toEqual('Facebook');
});
