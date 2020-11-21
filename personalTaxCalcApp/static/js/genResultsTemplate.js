function generateHourlyTemplate(){
  document.getElementById('results-container').innerHTML = `
      Rate Per Hour: <input type="text" id="basicHrRate" value="8.50"/>   X  <input type="text" id="numHours" value="160"/> Hours
      <br>
      Overtime Rate Per Hour: <input type="text" id="overtimeRate" value="1.5"/> times   X   <input type="text" id="overtimeHours" value="0"/> Hours
      <br>
      Additional Overtime Rate Per Hour: <input type="text" id="additionalOvertimeRate" value="2"/> times   X   <input type="text" id="additionalOvertimeHours" value="0"/> Hours
      <br>
      Additional Compensation: <input type="text" id="additionalCompensation" value="0"/>
      <br>
      Additional Compensation(NO NI DEDUCTED): <input type="text" id="additionalCompensationNONI" value="0"/>
    `
}
function generateMonthlyTemplate(){
  document.getElementById('results-container').innerHTML = `
      Monthly Base Pay: <input type="text" id="monthlyBaseSalary" value="1833"/>
      <br>
      Additional Compensation: <input type="text" id="additionalCompensation" value="0"/>
      <br>
      Additional Compensation(NO NI DEDUCTED): <input type="text" id="additionalCompensationNONI" value="0"/>
    `
}
function generateAnnualTemplate(){
  document.getElementById('results-container').innerHTML =`
      Annual Base Pay: <input type="text" id="annualBaseSalary" value="22000"/>
      <br>
      Additional Compensation: <input type="text" id="additionalCompensation" value="0"/>
      <br>
      Additional Compensation(NO NI DEDUCTED): <input type="text" id="additionalCompensationNONI" value="0"/>
   `
}
