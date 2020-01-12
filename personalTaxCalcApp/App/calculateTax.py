#Program logic


noOfDays = 20;
hoursPerDay = 8;
totalHours = hoursPerDay*noOfDays;
deductedMinutes = 0;
monthsOvertimeHours = 0;
nightHoursPerDay = 6;

basicRate = 8.50;
over40Rate = 8.50*1.5;
nightRate = 0.2*8.50; #@20% more

basicPay = totalHours-deductedMinutes;
overtimePay = monthsOvertimeHours*over40Rate;
nightPay = (nightHoursPerDay*nightRate);
print ('night pay - ',nightPay);

grossSalary = basicPay*basicRate + overtimePay*over40Rate + nightPay*nightRate;

print ('GROSS - ',grossSalary);

NIAllowance = 664;
PAYEAllowance = 961.53;

pension = grossSalary*0.04;
NIDeduction = (grossSalary - NIAllowance)*0.12;
PAYEDeduction = (grossSalary - pension - PAYEAllowance)*0.2;

print ('\nPension - ',pension);
print ('NI - ',NIDeduction);
print ('PAYE- ',PAYEDeduction);

netSalary = grossSalary - pension - NIDeduction - PAYEDeduction;
print ('\nNET - ',netSalary);
