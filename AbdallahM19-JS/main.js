document.addEventListener('DOMContentLoaded', () => {
    const sections = document.querySelectorAll('section');
    const buttons = document.querySelectorAll('.nav-buttons-header button');

    buttons.forEach(button => {
        button.addEventListener('click', () => {
            const targetClass = button.className;
            
            sections.forEach(section => {
                if (section.classList.contains(targetClass)) {
                    section.style.display = 'block'; // Show the target section
                } else {
                    section.style.display = 'none'; // Hide other sections
                }
            });
        });
    });

    // Initial display state: Show "home" section and hide others
    sections.forEach(section => {
        if (section.classList.contains('home')) {
            section.style.display = 'block';
        } else {
            section.style.display = 'none';
        }
    });
});
