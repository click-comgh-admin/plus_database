echo Type File Generator && echo Opening Directory
cd "Y:\htdocs\AMG\plus_db\client_dashboards\version_one\plus_attendance\development\src\addons\interfaces\clients\client"
echo Directory Open && echo Generating File
quicktype -l ts main.json -t ClientInfoModel -o index.ts --nice-property-names --prefer-unions --all-properties-optional && echo Type File Generated Successfully!


