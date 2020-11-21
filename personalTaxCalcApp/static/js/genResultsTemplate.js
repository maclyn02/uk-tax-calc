function generateHourlyTemplate(){
  document.getElementById('results-container').innerHTML = `
        <table>
          <tr>
            <td>Rate Per Hour:</td>
            <td><input type="text" id="basicHrRate" value="8.50"/></td>
            <td>Number of Hours this month:</td>
            <td><input type="text" id="numHours" value="160"/></td>
          </tr>
          <tr>
            <td>Overtime Rate Per Hour:</td>
            <td><input type="text" id="overtimeRate" value="1.5"/>times</td>
            <td>Number of Hours this month:</td>
            <td><input type="text" id="overtimeHours" value="0"/></td>
          </tr>
          <tr>
            <td>Additional Overtime Rate Per Hour:</td>
            <td><input type="text" id="additionalOvertimeRate" value="2"/>times</td>
            <td>Number of Hours this month:</td>
            <td><input type="text" id="additionalOvertimeHours" value="0"/></td>
          </tr>
          <tr>
            <td>Additional Compensation:</td>
            <td><input type="text" id="additionalCompensation" value="0"/>times</td>
          </tr>
          <tr>
            <td>Additional Compensation(NO NI DEDUCTED):</td>
            <td><input type="text" id="additionalCompensationNONI" value="0"/>times</td>
          </tr>
        </table>
    `
}
function generateMonthlyTemplate(){
  document.getElementById('results-container').innerHTML = `
        <table>
          <tr>
            <td>Monthly Base Pay:</td>
            <td><input type="text" id="monthlyBaseSalary" value="1833"/></td>
          </tr>
          <tr>
            <td>Additional Compensation:</td>
            <td><input type="text" id="additionalCompensation" value="0"/>times</td>
          </tr>
          <tr>
            <td>Additional Compensation(NO NI DEDUCTED):</td>
            <td><input type="text" id="additionalCompensationNONI" value="0"/>times</td>
          </tr>
        </table>
    `
}
function generateAnnualTemplate(){
  document.getElementById('results-container').innerHTML =`
        <table>
          <tr>
            <td>Annual Base Pay:</td>
            <td><input type="text" id="annualBaseSalary" value="22000"/></td>
          </tr>
          <tr>
            <td>Additional Compensation:</td>
            <td><input type="text" id="additionalCompensation" value="0"/>times</td>
          </tr>
          <tr>
            <td>Additional Compensation(NO NI DEDUCTED):</td>
            <td><input type="text" id="additionalCompensationNONI" value="0"/>times</td>
          </tr>
        </table>
   `
}
