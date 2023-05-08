const submissions = [
  { name: "Jane", score: 95, date: 2020 - 01 - 24, passed: true },
  { name: "Joe", score: 77, date: 2018 - 05 - 14, passed: true },
  { name: "Jack", score: 59, date: 2019 - 07 - 05, passed: false },
  { name: "Jill", score: 88, date: 2020 - 04 - 22, passed: true },
];

console.log(submissions);

function addSubmission(array, newName, newScore, newDate) {
  let didPass = false;

  if (newScore >= 60) {
    didPass = true;
  }
  let newStudent = {
    name: newName,
    score: newScore,
    date: newDate,
    passed: didPass,
  };

  array.push(newStudent);
}

addSubmission(submissions, "Nell", 85, 2020 - 05 - 05);

function deleteSubmissionByIndex(array, index) {
  array.splice(index, 1);
}

deleteSubmissionByIndex(submissions, 2);

console.log(submissions);

console.log(deleteSubmissionByIndex);

// //^ i'm not sure i did this correctly, the console only shows the "Jane" object, also the
// //also, date was changed to 1995, i don't know what caused that to happen

function deleteSubmissionByName(array, name) {
  const index = array.findIndex((submissions) => submissions.name === name);
  if (index !== -1) {
    array.splice(index, 1);
  }
}

deleteSubmissionByName(submissions, "Jack");

console.log(submissions);

function editSubmission(array, index, score) {
  const index = array.findIndex(submissions);
  if (index !== -1) {
    array.splice(index, 1, score);
  }

  if (score > 60) {
    array.splice(3, 1, "true");
  } else {
    array.splice(3, 1, "false");
  }
}

editSubmission(submissions, 2, 90);

console.log(submissions);

// ^ got totally confused on this one (editSubmission) - i think i couldnt figure out how to specify which
//value (score) of which object (index) this function is supposed to modify

function findSubmissionbyName(array, name) {
  const found = array.find((submissions) => submissions.name === name);

  return console.log(found);
}

findSubmissionbyName(submissions, "Joe");

function findLowestScore(array) {
  let lowestScore = 100;
  for (const submissions of array) {
    if (submissions.score < lowestScore) {
      lowestScore = submissions.score;
    }
    return lowestScore;
  }
}

console.log(findLowestScore(submissions));

// //^ the result for this (findLowestScore)  is coming back as 95, which is clearly
// //incorrect. Can't figure out where i messed up.

function findAverageScore(array) {
  let averageScore = 0;
  for (let i = 0; i < array.score.length; i++) {
    let currentNum = array[i];
    average += currentNum;
  }
  averageScore = averageScore / array.score.length;
  return averageScore;
}

console.log(findAverageScore(submissions));

function filterPassing(array) {
  const passing = array.filter((submissions) => submissions.score >= 60);
  return console.log(passing);
}

filterPassing(submissions);

function filter90AndAbove(array) {
  const aMinusOrHigher = array.filter((submissions) => submissions.score >= 90);
  return console.log(aMinusOrHigher);
}

filter90AndAbove(submissions);
