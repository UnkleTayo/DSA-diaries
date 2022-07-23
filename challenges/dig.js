function isValueAnObject(objValue) {
  return (
    typeof ObjValue === 'object' &&
    !Array.isArray(objValue) &&
    objValue !== null
  );
}

function isLastKeyInArray(index, arrayOfSequentialKeys) {
  return index === arrayOfSequentialKeys.length - 1;
}

function isObjectEmpty(obj) {
  return Object.keys(obj).length === 0 && obj.constructor === Object;
}

const dig = (obj, arrayOfSequentialKeys) => {
  let tempObj = obj;
  if (isObjectEmpty(obj)) return null;
  for (let index = 0; index < arrayOfSequentialKeys.length; index++) {
    let key = arrayOfSequentialKeys[index];
    console.log(key);
    let value = tempObj[key];
    if (isValueAnObject(value)) {
      tempObj = value;
    } else {
      if (isLastKeyInArray(index, arrayOfSequentialKeys)) {
        console.log(value);
        return value ? value : null;
      }
      return null;
    }

    if (isLastKeyInArray(index, arrayOfSequentialKeys)) return tempObj;
  }
  return null;
};

const hash = {
  a: {
    b: {
      c: {
        d: {
          e: 'gold',
        },
      },
    },
  },
};

console.log(dig(hash, ['a', 'b', 'c']));
// console.log(dig(hash, ['a', 'b', 'c', 'd', 'e']));
