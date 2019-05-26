function countSteps(N) {
  
  /* for 1 step there is only one solution and
  for 2 steps there will be only two solutions */
  if (N === 1) { return 1; }
  if (N === 2) { return 2; }
  
  // for all N > 2, we add the previous (N - 1) + (N - 2) steps to get an answer recursively
  return countSteps(N - 1) + countSteps(N - 2);
  
}

countSteps(6); 