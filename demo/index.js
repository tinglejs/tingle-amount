/**
 * Amount Component Demo for tingle
 * @author Kuncheng Zhao
 *
 * Copyright 2014-2015, Tingle Team, Alinw.
 * All rights reserved.
 */
require('tingle-context');
window.FastClick && FastClick.attach(document.body);
var Demo = require('./AmountDemo');
React.render(<Demo/>, document.getElementById('TingleDemo'));
