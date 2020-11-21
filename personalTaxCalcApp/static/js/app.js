function calculateSalary(){

  var grossPay = 0

  var selectedTimeframe = ""
  var radioBtns = document.querySelectorAll(`input[name='timeframe']`)
  radioBtns.forEach((button, i) => {
    if(button.checked)
      selectedTimeframe = button.value;
  });

  switch (selectedTimeframe) {
    case hourly:  grossPay = calculateHourlyGross();
                  break;
    case monthly:  grossPay = calculateMonthlyGross();
                  break;
    case annual:  grossPay = calculateAnnualGross();
                  break;
  }

  console.log(grossPay);

  var additionalCompensationNONI = document.getElementById('additionalCompensationNONI').value;

  var pensionRate = document.getElementById('pensionRate').value;
  var pension = (pensionRate/100)*(grossPay+Number(additionalCompensationNONI));
  var grossMinusPension = grossPay - pension;
  console.log(grossMinusPension);

  var niAllowance = document.getElementById('niAllowance').value;
  var ni = 0.12 * (grossPay - niAllowance/12);
  console.log(ni);

  var annualAllowance = document.getElementById('annualAllowance').value;
  var taxableGross = grossPay + Number(additionalCompensationNONI) - pension - annualAllowance/12;
  var paye = 0.20 * taxableGross;
  console.log(paye);

  var netPay = grossPay - pension - ni - paye;
  console.log(netPay);

  document.getElementById('grossPay').value=Number(grossPay).toPrecision(6);
  document.getElementById('pension').value=Number(pension).toPrecision(6);
  document.getElementById('ni').value=Number(ni).toPrecision(6);
  document.getElementById('paye').value=Number(paye).toPrecision(6);
  document.getElementById('netPay').value=Number(netPay).toPrecision(6);
};

function calculateHourlyGross(){

  var numHours = document.getElementById('numHours').value;
  var basicHrRate = document.getElementById('basicHrRate').value;
  var overtimeHours = document.getElementById('overtimeHours').value;
  var overtimeRate = document.getElementById('overtimeRate').value;
  var additionalOvertimeRate = document.getElementById('additionalOvertimeRate').value;
  var additionalOvertimeHours = document.getElementById('additionalOvertimeHours').value;
  var additionalCompensation = document.getElementById('additionalCompensation').value;

  var overtimePay = overtimeRate*basicHrRate;
  var additionalOvertimePay= additionalOvertimeRate*basicHrRate;

  var grossPay = (numHours*basicHrRate) + (overtimeHours*overtimePay) + (additionalOvertimeHours*additionalOvertimePay) + Number(additionalCompensation);

  return grossPay;

};

function calculateMonthlyGross(){

  var grossPay = Number(document.getElementById('monthlyBaseSalary').value);
  return grossPay;

};
function calculateAnnualGross(){

  var grossPay = Number(document.getElementById('annualBaseSalary').value);
  return grossPay;

};
