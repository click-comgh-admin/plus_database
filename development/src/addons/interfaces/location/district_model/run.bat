echo Type File Generator && echo Opening Directory
cd "Y:\htdocs\AMG\plus_db\client_dashboards\version_one\plus_attendance\development\src\addons\interfaces\location\district_model"
echo Directory Open && echo Generating File
quicktype -l ts main.json -t LocationDistrictModel -o index.ts && echo Type File Generated Successfully!


