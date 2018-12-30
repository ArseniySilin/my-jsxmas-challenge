/* First solution */
[9, 2].forEach(row => {
  new Array(row).fill('').forEach((_, j) => {
    const arrows = [...new Array(1 + j * 2).fill('^')].join('');
    const dots = [...new Array(8 - j).fill('.')].join('');
    console.log(`${dots}${arrows}${dots}`);
  });
});

/* Second solution*/
(f = (rows = 11, initialDots = 16, initialArrows = 1) => {
  if (rows === 0) return;
  const dots = [...new Array(initialDots / 2).fill('.')].join('');
  const arrows = [...new Array(initialArrows).fill('^')].join('');
  console.log(`${dots}${arrows}${dots}`);
  initialDots !== 0 
    ? f(rows - 1, initialDots - 2, initialArrows + 2)
    : f(rows - 1);
})();
