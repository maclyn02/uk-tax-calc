function calculateSalary(){

  var numHours = document.getElementById('numHours').value();
  var basicHrRate = document.getElementById('basicHrRate').value();
  var overtimeHours = document.getElementById('overtimeHours').value();
  var overtimeRate = document.getElementById('overtimeRate').value();
  var nightHours = document.getElementById('nightHours').value();
  var nightRate = document.getElementById('nightRate').value();

  var overtimePay = (overtimeRate/100)*basicHrRate;
  var nightPay = (nightRate/100)*basicHrRate;

  var grossPay = (numHours*basicHrRate) + (overtimeHours*overtimePay) + (nightHours*nightPay);
  document.getElementById('grossPay').innerHTML(grossPay);

  var pensionRate = document.getElementById('pensionRate').value();
  var pension = (pensionRate/100)*grossPay;
  document.getElementById('pension').innerHTML(pension);
  var grossMinusPension = grossPay - pension;

  var niAllowance = document.getElementById('niAllowance').value();
  var ni = 0.12 * (grossPay - niAllowance*4);
  document.getElementById('ni').innerHTML(ni);

  var annualAllowance = document.getElementById('annualAllowance').value();
  var taxableGross = grossPay - pension - annualAllowance/13;
  var paye = 0.20 * taxableGross;
  document.getElementById('paye').innerHTML(paye);

  var netPay = grossPay - pension - ni - paye;
  document.getElementById('netPay').innerHTML(netPay);
}
