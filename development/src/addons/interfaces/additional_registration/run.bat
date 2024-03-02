echo Type File Generator && echo Opening Directory
cd "Y:\htdocs\AMG\plus_db\client_dashboards\version_one\plus_database\development\src\addons\interfaces\additional_registration"
echo Directory Open && echo Generating File
quicktype -l ts main.json -t AdditionalRegistrationModel -o index.ts --nice-property-names --prefer-unions --all-properties-optional && echo Type File Generated Successfully!



@REM // NULLABLE STEPS
@REM add  --all-properties-optional to command line
@REM in the generated file, for typeMap::: replace u(undefined, ... to u(null, ...
@REM        change all throw errors into console.error
@REM        replace if (typ === false) return invalidValue(typ, val, key, parent); with if (typ === false) return;
@REM        remove line return invalidValue(typ, val, key, parent);
@REM        use // @ts-ignore to silence prop error
@REM        export const typeMap
@REM        add custom types to typeMap. eg. "LocationCountryModel": cmTypeMap['LocationCountryModel'],
@REM        REPLACE } else if (typeof typ === "object" && typ.literal !== undefined) {
@REM            return typ.literal;
@REM        } WITH if (typeof typ === "object") {
@REM            return "";
@REM        }





