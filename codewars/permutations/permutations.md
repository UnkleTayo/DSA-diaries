In this kata you have to create all permutations of a non empty input string and remove duplicates, if present. This means, you have to shuffle all letters from the input in all possible orders.

Examples:

* With input 'a'
* Your function should return: ['a']
* With input 'ab'
* Your function should return ['ab', 'ba']
* With input 'aabb'
* Your function should return ['aabb', 'abab', 'abba', 'baab', 'baba', 'bbaa']
The order of the permutations doesn't matter.


## Test  Cases

describe('permutations', function() {
  it('unique letters', function() {
    Test.assertSimilar(permutations('a'), ['a']);
    Test.assertSimilar(permutations('ab').sort(), ['ab', 'ba'].sort());
    Test.assertSimilar(permutations('abc').sort(), ['abc', 'acb', 'bac', 'bca', 'cab', 'cba'].sort());

    var abcd = [
      'abcd', 'abdc', 'acbd', 'acdb', 'adbc', 'adcb', 'bacd', 'badc', 'bcad', 'bcda', 'bdac', 'bdca',
      'cabd', 'cadb', 'cbad', 'cbda', 'cdab', 'cdba', 'dabc', 'dacb', 'dbac', 'dbca', 'dcab', 'dcba'
    ];
    Test.assertSimilar(permutations('abcd').sort(), abcd.sort());
    Test.assertSimilar(permutations('bcad').sort(), abcd.sort());
    Test.assertSimilar(permutations('dcba').sort(), abcd.sort());
  });
  
  it('duplicate letters', function() {
    Test.assertSimilar(permutations('aa').sort(), ['aa'].sort());
    Test.assertSimilar(permutations('aabb').sort(), ['aabb', 'abab', 'abba', 'baab', 'baba', 'bbaa'].sort());
    Test.assertSimilar(permutations('aaaab').sort(), ['aaaab', 'aaaba', 'aabaa', 'abaaa', 'baaaa'].sort());
  });
});
