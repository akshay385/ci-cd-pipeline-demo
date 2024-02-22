using MyService as service from '../../srv/service';

annotate service.employee with @(
    UI.LineItem : [
        {
            $Type : 'UI.DataField',
            Label : 'id',
            Value : id,
        },
        {
            $Type : 'UI.DataField',
            Label : 'employee_name',
            Value : employee_name,
        },
        {
            $Type : 'UI.DataField',
            Label : 'employee_salary',
            Value : employee_salary,
        },
        {
            $Type : 'UI.DataField',
            Label : 'employee_age',
            Value : employee_age,
        },
    ]
);
annotate service.employee with @(
    UI.FieldGroup #GeneratedGroup1 : {
        $Type : 'UI.FieldGroupType',
        Data : [
            {
                $Type : 'UI.DataField',
                Label : 'id',
                Value : id,
            },
            {
                $Type : 'UI.DataField',
                Label : 'employee_name',
                Value : employee_name,
            },
            {
                $Type : 'UI.DataField',
                Label : 'employee_salary',
                Value : employee_salary,
            },
            {
                $Type : 'UI.DataField',
                Label : 'employee_age',
                Value : employee_age,
            },
        ],
    },
    UI.Facets : [
        {
            $Type : 'UI.ReferenceFacet',
            ID : 'GeneratedFacet1',
            Label : 'General Information',
            Target : '@UI.FieldGroup#GeneratedGroup1',
        },
    ]
);
