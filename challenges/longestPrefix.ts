// def commonPrefixUtil(str1, str2):

// result = ""
// n1, n2 = len(str1), len(str2)
// i, j = 0, 0

// while i <= n1 - 1 and j <= n2 - 1:

// if str1[i] != str2[j]:
//   break
// result += str1[i]
// i, j = i + 1, j + 1

// return result


// def longestCommonPrefix(S, low, high):

// if low == high:
//   return S[low]

// if high > low:
//   mid = low + (high - low) // 2

// str1 = longestCommonPrefix(S, low, mid)
// str2 = longestCommonPrefix(S, mid + 1, high)

// return commonPrefixUtil(str1, str2)



// if __name__ == "__main__":
//     # Your code goes here
// s = ['flower', 'flow', 'flight']
// print(longestCommonPrefix(s, 0, 2))


const commonPrefixUtil = (str) => {
  let size = str.length;
  if (size == 0) return '';
  if (size == 1) return str[0]


  str.sort()

  let end = Math.min(str[0].length, str[size - 1].length)
  console.log(end)

  let i = 0;
  while (i < end && str[0][i] == str[size - 1][i]) {
    i++
  }

  let pre = str[0].substring(0, i)
  return pre
}


console.log(commonPrefixUtil(['flower', 'flow', 'flight']))