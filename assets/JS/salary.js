document.addEventListener("DOMContentLoaded", () => {

    const monthlyWageInput = document.querySelector('input[placeholder="Enter monthly salary"]');
    const yearlyWageInput = document.querySelector('input[placeholder="Auto calculated"]');

    const basicInput = document.querySelector('input[placeholder="₹ / month"]:nth-of-type(1)');
    const hraInput = document.querySelector('input[placeholder="₹ / month"]:nth-of-type(2)');
    const standardAllowanceInput = document.querySelector('input[placeholder="₹ / month"]:nth-of-type(3)');
    const performanceBonusInput = document.querySelector('input[placeholder="₹ / month"]:nth-of-type(4)');
    const leaveTravelAllowanceInput = document.querySelector('input[placeholder="₹ / month"]:nth-of-type(5)');
    const fixedAllowanceInput = document.querySelector('input[placeholder="₹ / month"]:nth-of-type(6)');

    const pfEmployeeInput = document.querySelector('input[placeholder="₹ / month"]:nth-of-type(7)');
    const pfEmployerInput = document.querySelector('input[placeholder="₹ / month"]:nth-of-type(8)');
    const professionalTaxInput = document.querySelector('input[placeholder="₹ / month"]:nth-of-type(9)');

    const percentages = {
        basic: 50,
        hra: 50,
        standardAllowance: 16.67,
        performanceBonus: 8.33,
        leaveTravelAllowance: 8.33,
        fixedAllowance: 11.67,
        pf: 12
    };

    function calculateSalary() {
        const monthlyWage = parseFloat(monthlyWageInput.value) || 0;

        yearlyWageInput.value = (monthlyWage * 12).toFixed(2);

        basicInput.value = ((percentages.basic / 100) * monthlyWage).toFixed(2);
        hraInput.value = ((percentages.hra / 100) * monthlyWage).toFixed(2);
        standardAllowanceInput.value = ((percentages.standardAllowance / 100) * monthlyWage).toFixed(2);
        performanceBonusInput.value = ((percentages.performanceBonus / 100) * monthlyWage).toFixed(2);
        leaveTravelAllowanceInput.value = ((percentages.leaveTravelAllowance / 100) * monthlyWage).toFixed(2);
        fixedAllowanceInput.value = ((percentages.fixedAllowance / 100) * monthlyWage).toFixed(2);

        pfEmployeeInput.value = ((percentages.pf / 100) * monthlyWage).toFixed(2);
        pfEmployerInput.value = ((percentages.pf / 100) * monthlyWage).toFixed(2);

        professionalTaxInput.value = monthlyWage > 15000 ? 200 : 0;
    }

    monthlyWageInput.addEventListener("input", calculateSalary);
});
