

window.addEventListener('scroll', function() {
    let revealElements = document.querySelectorAll('.about-me-skills, .list-kills-header, .table-skills,.my-projects-heading,.my-projects,.main-projects,.projects-all,.project1,.project2,.project3,.project-title,.django-img');

    revealElements.forEach(function(element) {
        let windowHeight = window.innerHeight;
        let elementTop = element.getBoundingClientRect().top;
        let revealPoint = 150;

        if (elementTop < windowHeight - revealPoint) {
            element.classList.add('active');
        }
    });
});