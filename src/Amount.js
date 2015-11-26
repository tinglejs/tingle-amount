const Context = require('tingle-context');
const classnames = require('classnames');

class Component extends React.Component {

    constructor(props) {
        super(props);

        const t = this;

        let _state = {
            value: parseInt(t.props.value) || 0,
            disabledController: ''
        };

        if (_state.value <= t.props.min) {
            _state.disabledController = 'minus';
        }

        if (_state.value >= t.props.max) {
            _state.disabledController = 'plus';
        }

        t.state = _state;
    }

    handleClickController(method) {
        const t = this;
        let value = t.state.value;
        let nextValue = method == 'minus' ? t.state.value - 1 : t.state.value + 1;

        // UI Control
        if (nextValue <= t.props.min) {
            t.setState({disabledController: 'minus'});
        } else if (nextValue >= t.props.max) {
            t.setState({disabledController: 'plus'});
        } else {
            t.setState({disabledController: ''});
        }

        if (method == 'minus') {
            t._minusOne(value, nextValue);
        } else {
            t._plusOne(value, nextValue);
        }
    }

    _minusOne(current, next) {
        const t = this;
        if (current <= t.props.min) {
            return;
        }

        t.setState({value: next});
        t.props.onChange(next);
    }

    _plusOne(current, next) {
        const t = this;
        if (current >= t.props.max) {
            return;
        }

        t.setState({value: next});
        t.props.onChange(next);
    }


    render() {
        const t = this;
        return (
            <div ref="root" className="tPR tAmount">
                <div onClick={t.handleClickController.bind(t, 'minus')}
                     className={classnames('tPA tController tP1', {'tMakeLikeDisabled': t.state.disabledController == 'minus'})}>
                    -
                </div>

                <div className="tPA tViewBox tP2">{t.state.value}</div>

                <div onClick={t.handleClickController.bind(t, 'plus')}
                     className={classnames('tPA tController tP3', {'tMakeLikeDisabled': t.state.disabledController == 'plus'})}>
                    +
                </div>
            </div>
        )
    }
}

Component.defaultProps = {
    min: 0,
    max: Infinity,
    value: 0,
    onChange: new Function()
};

Component.propTypes = {
    min: React.PropTypes.oneOfType([
        React.PropTypes.string,
        React.PropTypes.number
    ]),
    max: React.PropTypes.oneOfType([
        React.PropTypes.string,
        React.PropTypes.number
    ]),
    value: React.PropTypes.oneOfType([
        React.PropTypes.string,
        React.PropTypes.number
    ]),
    onChange: React.PropTypes.func
};

module.exports = Component;