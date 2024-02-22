sap.ui.require(
    [
        'sap/fe/test/JourneyRunner',
        'employee/test/integration/FirstJourney',
		'employee/test/integration/pages/employeeList',
		'employee/test/integration/pages/employeeObjectPage'
    ],
    function(JourneyRunner, opaJourney, employeeList, employeeObjectPage) {
        'use strict';
        var JourneyRunner = new JourneyRunner({
            // start index.html in web folder
            launchUrl: sap.ui.require.toUrl('employee') + '/index.html'
        });

       
        JourneyRunner.run(
            {
                pages: { 
					onTheemployeeList: employeeList,
					onTheemployeeObjectPage: employeeObjectPage
                }
            },
            opaJourney.run
        );
    }
);