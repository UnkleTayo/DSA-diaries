function pickPeaks(arr) {
  let pos = [],
    peaks = [];

  if (!arr.length) {
    return { pos, peak: peaks };
  }

  for (let i = 1; i < arr.length; i++) {
    const isPeak = arr[i - 1] < arr[i] && arr[i + 1] < arr[i];
    if (isPeak) {
      pos.push(i);
      peaks.push(arr[i]);
    }
  }

  return { pos, peak: peaks };
}

pickPeaks([
  1, 2, 5, 4, 3, 2, 3, 6, 4, 1, 2, 3, 3, 4, 5, 3, 2, 1, 2, 3, 5, 5, 4, 3,
]);
