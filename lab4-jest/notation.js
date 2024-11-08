



function mean(scores) {
    let sum = 0;
    for (let i = 0; i < scores.length; i++) {
      sum += scores[i];
    }
    
    const average = sum / scores.length;
    return average;
  }
  
  module.exports = mean;
  