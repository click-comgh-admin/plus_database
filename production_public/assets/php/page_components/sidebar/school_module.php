<?php if (AccountInfoCategory == 4) { ?>
<li class="app-sidebar__heading">School</li>
<li>
    <a href="#" mm-active="student-report|student-mark|student-subject">
        <i class="metismenu-icon pe-7s-id"></i> Student
        <i class="metismenu-state-icon pe-7s-angle-down caret-left"></i>
    </a>
    <ul>
        <li>
            <a href="<?= CLIENT_BASE_URL; ?>school/student/student-report" mm-active="student-report">
                <i class="metismenu-icon pe-7s-note2"></i> Student Report
            </a>
        </li>
        <li>
            <a href="<?= CLIENT_BASE_URL; ?>school/student/student-mark" mm-active="student-mark">
                <i class="metismenu-icon pe-7s-note2"></i> Student Marks
            </a>
        </li>
        <li>
            <a href="<?= CLIENT_BASE_URL; ?>school/student/student-subject" mm-active="student-subject">
                <i class="metismenu-icon pe-7s-note2"></i> Student Subject
            </a>
        </li>
    </ul>
</li>
<li>
    <a href="<?= CLIENT_BASE_URL; ?>school/fees" mm-active="fees">
        <i class="metismenu-icon pe-7s-cash"></i> Fees
    </a>
</li>
<li>
    <a href="#" mm-active="home-pickup|school-pickup">
        <i class="metismenu-icon pe-7s-bicycle"></i> Pick-up
        <i class="metismenu-state-icon pe-7s-angle-down caret-left"></i>
    </a>
    <ul>
        <li>
            <a href="<?= CLIENT_BASE_URL; ?>school/pick-up/home-pickup" mm-active="home-pickup">
                <i class="metismenu-icon pe-7s-note2"></i> Home Pick-up
            </a>
        </li>
        <li>
            <a href="<?= CLIENT_BASE_URL; ?>school/pick-up/school-pickup" mm-active="school-pickup">
                <i class="metismenu-icon pe-7s-note2"></i> School Pick-up
            </a>
        </li>
    </ul>
</li>
<li>
    <a href="#" mm-active="class|subclass|exam-type|assessment-type|index-number|subjects">
        <i class="metismenu-icon pe-7s-config"></i> Settings
        <i class="metismenu-state-icon pe-7s-angle-down caret-left"></i>
    </a>
    <ul>
        <li>
            <a href="<?= CLIENT_BASE_URL; ?>school/class" mm-active="class">
                <i class="metismenu-icon pe-7s-note2"></i> Class(es)
            </a>
        </li>
        <li>
            <a href="<?= CLIENT_BASE_URL; ?>school/subclass" mm-active="subclass">
                <i class="metismenu-icon pe-7s-note2"></i> Sub-Class(es)
            </a>
        </li>
        <li>
            <a href="<?= CLIENT_BASE_URL; ?>school/exam-type" mm-active="exam-type">
                <i class="metismenu-icon pe-7s-note2"></i> Exam Type(s)
            </a>
        </li>
        <li>
            <a href="<?= CLIENT_BASE_URL; ?>school/assessment-type" mm-active="assessment-type">
                <i class="metismenu-icon pe-7s-note2"></i> Assessment Type(s)
            </a>
        </li>
        <li>
            <a href="<?= CLIENT_BASE_URL; ?>school/index-number" mm-active="index-number">
                <i class="metismenu-icon pe-7s-note2"></i> Index Number(s)
            </a>
        </li>
        <li>
            <a href="<?= CLIENT_BASE_URL; ?>school/subjects" mm-active="subjects">
                <i class="metismenu-icon pe-7s-news-paper"></i> Subject(s)
            </a>
        </li>
    </ul>
</li>
<?php } ?>