require('tingle-context');
window.FastClick && FastClick.attach(document.body);
var Demo = require('./AmountDemo');
React.render(<Demo/>, document.getElementById('TingleDemo'));