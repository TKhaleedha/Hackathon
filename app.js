// Simulated teacher data for each course
const teacherData = {
    1: [
        { id: 1, name: 'Dr. John Doe', rating: 4.5, research: 'AI and Robotics', patents: 3, background: 'PhD in Computer Science' },
        { id: 2, name: 'Dr. Jane Smith', rating: 4.0, research: 'Cybersecurity', patents: 1, background: 'PhD in Information Security' }
    ],
    2: [
        { id: 3, name: 'Dr. Alan Turing', rating: 4.8, research: 'Cryptography', patents: 5, background: 'PhD in Mathematics' },
        { id: 4, name: 'Dr. Grace Hopper', rating: 4.9, research: 'Programming Languages', patents: 2, background: 'PhD in Computer Science' }
    ],
    3: [
        { id: 5, name: 'Dr. Ada Lovelace', rating: 4.7, research: 'Computational Theory', patents: 3, background: 'PhD in Computer Science' }
    ],
    4: [
        { id: 6, name: 'Dr. Elon Musk', rating: 4.6, research: 'Network Infrastructure', patents: 4, background: 'PhD in Engineering' }
    ],
    5: [
        { id: 7, name: 'Dr. Barbara Liskov', rating: 4.9, research: 'Distributed Systems', patents: 2, background: 'PhD in Computer Science' }
    ],
    6:[
        { id: 8, name: 'Dr. Prasad', rating: 4.8, research: 'Operating Systems', patents: 5, background: 'PhD in Software Engineering' },
        { id: 9, name: 'Dr. Siva Kumar', rating: 4.9, research: 'Algorithms', patents: 4, background: 'PhD in AIML' }
    ],
    7: [
        { id: 10, name: 'Dr. Linus Torvalds', rating: 4.8, research: 'Operating Systems', patents: 5, background: 'PhD in Software Engineering' },
        { id: 11, name: 'Dr. Donald Knuth', rating: 4.9, research: 'Algorithms', patents: 4, background: 'PhD in Mathematics' }
    ],
    8: [
        { id: 12, name: 'Dr. Richard Feynman', rating: 4.7, research: 'Quantum Computing', patents: 3, background: 'PhD in Physics' }
    ],
    9: [
        { id: 13, name: 'Dr. Nagababu', rating: 4.8, research: 'Machine Learning', patents: 5, background: 'PhD in Data Science' },
        { id: 14, name: 'Dr. Krishna', rating: 4.9, research: 'Algorithms', patents: 4, background: 'PhD in Operating System' }
    ],
};

// Load teachers based on course selection
function loadTeachers(courseId, teacherSelectId) {
    const teacherSelect = document.getElementById(teacherSelectId);
    teacherSelect.innerHTML = '<option value="">--Select a teacher--</option>'; // Clear previous options

    const teachers = teacherData[courseId] || [];
    teachers.forEach(teacher => {
        const option = document.createElement('option');
        option.value = teacher.id;
        option.textContent = teacher.name;
        teacherSelect.appendChild(option);
    });
}

// Handle form submission
document.getElementById('course-selection-form').addEventListener('submit', function (event) {
    event.preventDefault();

    const selectedTeacherIds = [
        document.getElementById('teacher-theory-1').value,
        document.getElementById('teacher-theory-2').value,
        document.getElementById('teacher-theory-3').value,
        document.getElementById('teacher-theory-4').value,
        document.getElementById('teacher-lab-1').value,
        document.getElementById('teacher-lab-2').value
    ];
   
    const teacherProfiles = selectedTeacherIds
        .filter(id => id !== '') // Filter out unselected options
        .map(id => {
            // Find teacher profile by id
            const teachers = Object.values(teacherData).flat();
            return teachers.find(teacher => teacher.id == id);

        });
        
    // Display selected teacher profiles
    const teacherInfoSection = document.getElementById('teacher-info');
    teacherInfoSection.innerHTML = ''; // Clear previous profiles

    teacherProfiles.forEach(teacher => {
        const profileDiv = document.createElement('div');
        profileDiv.className = 'teacher-profile';
        profileDiv.innerHTML = `
            <h3>${teacher.name}</h3>
            <p><strong>Rating:</strong> ${teacher.rating}</p>
            <p><strong>Research Area:</strong> ${teacher.research}</p>
            <p><strong>Patents:</strong> ${teacher.patents}</p>
            <p><strong>Background:</strong> ${teacher.background}</p>
        `;
        teacherInfoSection.appendChild(profileDiv);
    });
    
    // Show the teacher profile section
    document.getElementById('teacher-profiles').style.display = 'block';
    
});

document.getElementById('feedback-form').addEventListener('submit', function(e) {
    e.preventDefault();
    const feedback = document.getElementById('feedback-text').value;
    const rating = document.getElementById('rating').value;
    if (feedback && rating) {
        alert('Thank you for your feedback!');
        // Clear the form
        document.getElementById('feedback-text').value = '';
        document.getElementById('rating').value = '';
    } else {
        alert('Please provide feedback and a rating before submitting.');
    }
});

