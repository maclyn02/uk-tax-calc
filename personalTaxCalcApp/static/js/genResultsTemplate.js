function generateHourlyTemplate(){
  document.getElementById('results-container').innerHTML = `
      <table>
        <tr>
          <td class="label">Rate Per Hour:</td>
          <td class="content"><input type="text" id="basicHrRate" value="8.50"/>   X  <input type="text" id="numHours" value="160"/> Hours</td>
        </tr>
        <tr>
          <td class="label">Overtime Rate Per Hour:</td>
          <td class="content"><input type="text" id="overtimeRate" value="1.5"/> times </td>
          </tr>
          <tr>
          <td class="label"></td>
          <td class="content"> X   <input type="text" id="overtimeHours" value="0"/> Hours </td>
        </tr>
        <tr>
          <td class="label">Additional Overtime Rate Per Hour:</td>
          <td class="content"><input type="text" id="additionalOvertimeRate" value="2"/> times </td>
          </tr>
          <tr>
          <td class="label"></td>
          <td class="content"> X   <input type="text" id="additionalOvertimeHours" value="0"/> Hours</td>
        </tr>
        <tr>
          <td class="label">Additional Compensation:</td>
          <td class="content"><input type="text" id="additionalCompensation" value="0"/></td>
        </tr>
        <tr>
          <td class="label">Additional (Non-NI) Compensation:</td>
          <td class="content"><input type="text" id="additionalCompensationNONI" value="0"/></td>
        </tr>
      </table>
    `
}
function generateMonthlyTemplate(){
  document.getElementById('results-container').innerHTML = `
      <table>
        <tr>
          <td class="label">Monthly Base Pay:</td>
          <td class="content"><input type="text" id="monthlyBaseSalary" value="1833"/></td>
        </tr>
        <tr>
          <td class="label">Additional Compensation:</td>
          <td class="content"><input type="text" id="additionalCompensation" value="0"/></td>
        </tr>
        <tr>
          <td class="label">Additional (Non-NI) Compensation:</td>
          <td class="content"><input type="text" id="additionalCompensationNONI" value="0"/></td>
        </tr>
      </table>
    `
}
function generateAnnualTemplate(){
  document.getElementById('results-container').innerHTML =`
      <table>
        <tr>
          <td class="label">Annual Base Pay:</td>
          <td class="content"><input type="text" id="annualBaseSalary" value="22000"/></td>
        </tr>
        <tr>
          <td class="label">Additional Compensation:</td>
          <td class="content"><input type="text" id="additionalCompensation" value="0"/></td>
        </tr>
        <tr>
          <td class="label">Additional (Non-NI) Compensation:</td>
          <td class="content"><input type="text" id="additionalCompensationNONI" value="0"/></td>
        </tr>
      </table>
   `
}
