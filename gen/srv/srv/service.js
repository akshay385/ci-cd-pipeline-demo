const cds = require('@sap/cds');
module.exports = cds.service.impl(async function () {
    let {
        employee,
    } = this.entities;


    this.before("READ",employee, async(req) => {
        var firstread = true;
        if(firstread)
        {
            cds.tx(req).run(DELETE(employee));
            const data = [
                {
                    employee_id : 1,
                  employee_name: "John Doe",
                  employee_salary: "50000",
                  employee_age: "30"
                },
                {
                    employee_id : 2,
                  employee_name: "Jane Smith",
                  employee_salary: "60000",
                  employee_age: "35"
                },
                {
                    employee_id : 3,
                  employee_name: "Alice Johnson",
                  employee_salary: "55000",
                  employee_age: "32"
                }
              ];
            const entries = [];
            data.forEach(space => {
                entries.push({
                    id : `${space.employee_id}`,
                employee_name : `${space.employee_name}`,
                employee_salary : `${space.employee_salary}`,
                employee_age : `${space.employee_age}`,
                });
            });
            await cds.tx(req).run(INSERT.into(employee).entries(entries));
        }
        firstread = false;
        return req;
    })

});
