const salaries = {
  John: 100,
  Ann: 160,
  Pete: 130,
};

function calcMonthlySalary() {
  let sum = 0;

  for (const key in salaries) {
    sum += salaries[key];
  }

  return sum;
}

console.log(`모든 팀원의 월급의 합은 다음과 같습니다. 합: ${calcMonthlySalary()}`);