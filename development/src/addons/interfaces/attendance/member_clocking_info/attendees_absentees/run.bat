echo Type File Generator && echo Opening Directory
cd "Y:\htdocs\AMG\plus_db\client_dashboards\version_one\plus_attendance\development\src\addons\interfaces\attendance\member_clocking_info\attendees_absentees"
echo Directory Open && echo Generating File
quicktype -l ts main.json -t ClockingAttendanceAttendeesModel -o index.ts && echo Type File Generated Successfully!


