echo Type File Generator && echo Opening Directory
cd "Y:\htdocs\AMG\plus_db\client_dashboards\version_one\plus_attendance\development\src\addons\interfaces\members\user\contact"
echo Directory Open && echo Generating File
quicktype -l ts main.json -t UserContactModel -o index.ts --nice-property-names --prefer-unions --all-properties-optional && echo Type File Generated Successfully!


@REM // NULLABLE STEPS
@REM add  --all-properties-optional to command line
@REM in the generated file, for typeMap::: replace u(undefined, ... to u(null, ...
@REM        change all throw errors into console.error
@REM        replace if (typ === false) return invalidValue(typ, val); with if (typ === false) return;
@REM        remove line return invalidValue(typ, val);
@REM        use // @ts-ignore to silence prop error
@REM        export const typeMap
@REM        add custom types to typeMap. eg. "LocationCountryModel": cmTypeMap['LocationCountryModel'],



