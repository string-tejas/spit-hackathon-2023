export default function convertKeysToLowerCase(obj) {
    let newObj = {};
    for (let key in obj) {
        if (obj.hasOwnProperty(key)) {
            newObj[key.toLowerCase()] = obj[key];
        }
    }
    return newObj;
}
