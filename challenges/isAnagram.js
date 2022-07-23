function isAnagram(s: string, t: string): boolean {
  const { length } = s;

  if (length !== t.length) {
    return false;
  }

  const charCounts = {};
  for (let i = 0; i < length; i++) {
    const char1 = s[i];
    const char2 = t[i];

    charCounts[char1] = (charCounts[char1] || 0) + 1;

    charCounts[char2] = (charCounts[char2] || 0) - 1;
  }



  for (const char in charCounts) {
    if (charCounts[char]) {
      return false;
    }
  }

  return true;

  // return s.toLowerCase().split("").sort().join("") === t.toLowerCase().split("").sort().join("")
}

isAnagram("anagram", "nagaramt")
