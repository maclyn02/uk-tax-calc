function calculateSalary(){

  var numHours = document.getElementById('numHours').value;
  var basicHrRate = document.getElementById('basicHrRate').value;
  var overtimeHours = document.getElementById('overtimeHours').value;
  var overtimeRate = document.getElementById('overtimeRate').value;
  var additionalOvertimeRate = document.getElementById('additionalOvertimeRate').value;
  var additionalOvertimeHours = document.getElementById('additionalOvertimeHours').value;
  var additionalCompensation = document.getElementById('additionalCompensation').value;

  var overtimePay = overtimeRate*basicHrRate;
  var additionalOvertimePay= additionalOvertimeRate*basicHrRate;

  var grossPay = (numHours*basicHrRate) + (overtimeHours*overtimePay) + (additionalOvertimeHours*additionalOvertimePay) + additionalCompensation;
  console.log(grossPay)

  var pensionRate = document.getElementById('pensionRate').value;
  var pension = (pensionRate/100)*grossPay;
  var grossMinusPension = grossPay - pension;
  console.console.log(grossMinusPension);

  var niAllowance = document.getElementById('niAllowance').value;
  var ni = 0.12 * (grossPay - niAllowance/12);
  console.console.log(ni);

  var annualAllowance = document.getElementById('annualAllowance').value;
  var taxableGross = grossPay - pension - annualAllowance/12;
  var paye = 0.20 * taxableGross;
  console.console.log(paye);

  var netPay = grossPay - pension - ni - paye;
  console.console.log(netPay);

  // document.getElementById('grossPay').value=grossPay.toPrecision(6);
  // document.getElementById('pension').value=pension.toPrecision(6);
  // document.getElementById('ni').value=ni.toPrecision(6);
  // document.getElementById('paye').value=paye.toPrecision(6);
  // document.getElementById('netPay').value=netPay.toPrecision(6);
};
