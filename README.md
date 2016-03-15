# oToArray
Convert object to Array. Array will contain [**key**, **value**] or only **values**.


```javascript
const oToArray = require('o-to-array');

const example = {
    key1: value1,
    key2: value2
};

oToArray(example); // result in [value1, value2]
oToArray(example, true); // result in [[key1, value1], [key1, value2]]
