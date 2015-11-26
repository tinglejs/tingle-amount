const classnames = require('classnames');

const Amount = require('../src');

class Demo extends React.Component {

    constructor(props) {
        super(props);
    }

    handleChange(value) {
        console.log(value);
    }


    render() {
        const t = this;
        return (
            <div>
                <Amount min="0" max="8" value="2" onChange={t.handleChange.bind(t)}/>
            </div>
        )
    }
}

module.exports = Demo;