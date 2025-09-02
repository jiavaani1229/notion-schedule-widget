// --- CONFIGURATION ---
// 1. SET YOUR COMPLETE 8-DAY SCHEDULE FROM THE IMAGE
const schedule = {
    'Day 1': [
        { name: 'English', start: '08:10', end: '08:55' },
        { name: 'Math', start: '09:00', end: '09:40' },
        { name: 'P.E.', start: '09:45', end: '10:25' },
        { name: 'H&CR', start: '10:30', end: '11:10' },
        { name: 'Lunch/Recess', start: '11:10', end: '12:00' },
        { name: 'Office Hours', start: '12:00', end: '12:35' },
        { name: 'Science', start: '12:40', end: '13:25' },
        { name: 'Spanish', start: '13:30', end: '14:15' },
        { name: 'History', start: '14:20', end: '15:00' }
    ],
    'Day 2': [
        { name: 'Strings', start: '08:10', end: '08:55' },
        { name: 'English', start: '09:00', end: '09:40' },
        { name: 'Math', start: '09:45', end: '10:25' },
        { name: 'P.E.', start: '10:30', end: '11:10' },
        { name: 'Lunch/Recess', start: '11:10', end: '12:00' },
        { name: 'Office Hours', start: '12:00', end: '12:35' },
        { name: 'H&CR', start: '12:40', end: '13:25' },
        { name: 'Science', start: '13:30', end: '14:15' },
        { name: 'Spanish', start: '14:20', end: '15:00' }
    ],
    'Day 3': [
        { name: 'History', start: '08:10', end: '08:55' },
        { name: 'Strings', start: '09:00', end: '09:40' },
        { name: 'English', start: '09:45', end: '10:25' },
        { name: 'Math', start: '10:30', end: '11:10' },
        { name: 'Lunch/Recess', start: '11:10', end: '12:00' },
        { name: 'Office Hours', start: '12:00', end: '12:35' },
        { name: 'P.E.', start: '12:40', end: '13:25' },
        { name: 'H&CR', start: '13:30', end: '14:15' },
        { name: 'Science', start: '14:20', end: '15:00' }
    ],
    'Day 4': [
        { name: 'Spanish', start: '08:10', end: '08:55' },
        { name: 'History', start: '09:00', end: '09:40' },
        { name: 'Strings', start: '09:45', end: '10:25' },
        { name: 'English', start: '10:30', end: '11:10' },
        { name: 'Lunch/Recess', start: '11:10', end: '12:00' },
        { name: 'Office Hours', start: '12:00', end: '12:35' },
        { name: 'Math', start: '12:40', end: '13:25' },
        { name: 'P.E.', start: '13:30', end: '14:15' },
        { name: 'H&CR', start: '14:20', end: '15:00' }
    ],
    'Day 5': [
        { name: 'Science', start: '08:10', end: '08:55' },
        { name: 'Spanish', start: '09:00', end: '09:40' },
        { name: 'History', start: '09:45', end: '10:25' },
        { name: 'Strings', start: '10:30', end: '11:10' },
        { name: 'Lunch/Recess', start: '11:10', end: '12:00' },
        { name: 'Office Hours', start: '12:00', end: '12:35' },
        { name: 'English', start: '12:40', end: '13:25' },
        { name: 'Math', start: '13:30', end: '14:15' },
        { name: 'P.E.', start: '14:20', end: '15:00' }
    ],
    'Day 6': [
        { name: 'H&CR', start: '08:10', end: '08:55' },
        { name: 'Science', start: '09:00', end: '09:40' },
        { name: 'Spanish', start: '09:45', end: '10:25' },
        { name: 'History', start: '10:30', end: '11:10' },
        { name: 'Lunch/Recess', start: '11:10', end: '12:00' },
        { name: 'Office Hours', start: '12:00', end: '12:35' },
        { name: 'Strings', start: '12:40', end: '13:25' },
        { name: 'English', start: '13:30', end: '14:15' },
        { name: 'Math', start: '14:20', end: '15:00' }
    ],
    'Day 7': [
        { name: 'P.E.', start: '08:10', end: '08:55' },
        { name: 'H&CR', start: '09:00', end: '09:40' },
        { name: 'Science', start: '09:45', end: '10:25' },
        { name: 'Spanish', start: '10:30', end: '11:10' },
        { name: 'Lunch/Recess', start: '11:10', end: '12:00' },
        { name: 'Office Hours', start: '12:00', end: '12:35' },
        { name: 'History', start: '12:40', end: '13:25' },
        { name: 'Strings', start: '13:30', end: '14:15' },
        { name: 'English', start: '14:20', end: '15:00' }
    ],
    'Day 8': [
        { name: 'Math', start: '08:10', end: '08:55' },
        { name: 'P.E.', start: '09:00', end: '09:40' },
        { name: 'H&CR', start: '09:45', end: '10:25' },
        { name: 'Science', start: '10:30', end: '11:10' },
        { name: 'Lunch/Recess', start: '11:10', end: '12:00' },
        { name: 'Office Hours', start: '12:00', end: '12:35' },
        { name: 'Spanish', start: '12:40', end: '13:25' },
        { name: 'History', start: '13:30', end: '14:15' },
        { name: 'Strings', start: '14:20', end: '15:00' }
    ]
};

// 2. SET THE ANCHOR DATE
const anchorDate = new Date('2025-08-13');
const anchorDayNumber = 1;

// 3. SET YOUR HOLIDAYS
const holidays = [
    '2025-09-01',
    '2025-11-27', '2025-11-28',
    '2025-12-22', '2025-12-23', '2025-12-24', '2025-12-25', '2025-12-26', '2025-12-29', '2025-12-30', '2025-12-31', '2026-01-01', '2026-01-02', '2026-01-05',
    '2026-01-19',
    '2025-09-23',
    '2025-10-02',
    '2025-10-13', '2025-10-14', '2025-10-15',
    '2025-11-03',
    '2026-02-16',
    '2026-02-27', '2026-03-02', '2026-03-03', '2026-03-04', '2025-03-05', '2026-03-06',
    '2026-04-02', '2026-04-03', '2026-04-06',
];

// 4. SET THE LAST DAY OF SCHOOL
const lastDayOfSchool = new Date('2026-05-21');

// 5. SET YOUR EXAM DAYS
const examDays = [
    '2025-12-08', '2025-12-09', '2025-12-10', '2025-12-11', '2025-12-12',
    '2026-05-15', '2026-05-18', '2026-05-19', '2026-05-20', '2026-05-21'
];

// --- CORE LOGIC (CORRECTED) ---
document.addEventListener('DOMContentLoaded', () => {
    const today = new Date();
    today.setHours(0, 0, 0, 0);

    const todayString = today.toISOString().split('T')[0];
    const todayDay = today.getDay();

    const isWeekend = todayDay === 0 || todayDay === 6;
    const isHoliday = holidays.includes(todayString);
    const isExamDay = examDays.includes(todayString);
    const isAfterSchoolYear = today > lastDayOfSchool;

    const scheduleDayElement = document.getElementById('schedule-day');
    const scheduleListElement = document.getElementById('schedule-list');

    // Handle non-school days first
    if (isAfterSchoolYear) {
        scheduleDayElement.textContent = "School's Out!";
        scheduleListElement.textContent = "Have a great summer! ☀️";
        return;
    }

    if (isWeekend || isHoliday) {
        scheduleDayElement.textContent = "No School Today";
        scheduleListElement.textContent = "Enjoy your day off!";
        return;
    }

    if (isExamDay) {
        scheduleDayElement.textContent = "Exam Week!";
        scheduleListElement.innerHTML = "<div>You get out early at 11am!</div>";
        return;
    }

    // It's a school day, proceed with schedule logic
    let daysPassed = 0;
    let currentDate = new Date(anchorDate);
    
    while (currentDate < today) {
        const currentDateString = currentDate.toISOString().split('T')[0];
        if (currentDate.getDay() !== 0 && currentDate.getDay() !== 6 && !holidays.includes(currentDateString)) {
            daysPassed++;
        }
        currentDate.setDate(currentDate.getDate() + 1);
    }
    
    const totalDaysInCycle = Object.keys(schedule).length;
    const currentDayIndex = ((daysPassed + anchorDayNumber - 1) % totalDaysInCycle) + 1;
    const currentDayKey = `Day ${currentDayIndex}`;
    const todaysSchedule = schedule[currentDayKey];

    // Find and display only the current period
    const now = new Date();
    const currentHour = now.getHours().toString().padStart(2, '0');
    const currentMinute = now.getMinutes().toString().padStart(2, '0');
    const currentTime = `${currentHour}:${currentMinute}`;
    
    let currentPeriod = null;
    todaysSchedule.forEach(period => {
        if (currentTime >= period.start && currentTime <= period.end) {
            currentPeriod = period;
        }
    });

    scheduleDayElement.textContent = currentDayKey;
    scheduleListElement.innerHTML = '';

    if (currentPeriod) {
        const periodDiv = document.createElement('div');
        periodDiv.classList.add('current-period');
        periodDiv.textContent = `${currentPeriod.name} (${currentPeriod.start} - ${currentPeriod.end})`;
        scheduleListElement.appendChild(periodDiv);
    } else if (currentTime < todaysSchedule[0].start) {
        scheduleListElement.textContent = `Your first class is at ${todaysSchedule[0].start}.`;
    } else if (currentTime > todaysSchedule[todaysSchedule.length - 1].end) {
        scheduleListElement.textContent = "Your school day is over! 🥳";
    } else {
        scheduleListElement.textContent = "You are between classes.";
    }
});
