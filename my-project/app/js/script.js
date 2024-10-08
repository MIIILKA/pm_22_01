document.addEventListener('DOMContentLoaded', function() {
    const arrow = document.querySelector('.arrow');
    const hobbies_arrow = document.querySelector('.hobbies_arrow');

    const skillsDiagrams = document.querySelector('.skills_diagrams');
    const educationMain = document.querySelector('.hobbies_diagrams'); // Один елемент

    arrow.addEventListener('click', function() {
        skillsDiagrams.classList.toggle('skills_hidden'); // Показуємо/сховуємо блок skills_diagrams
        arrow.classList.toggle('expanded'); // Повертаємо стрілочку
        // Перевіряємо стан і змінюємо видимість блоків skills
        const skillsBlocks = document.querySelectorAll('.skills_diagrams');
        skillsBlocks.forEach(block => {
            block.style.display = skillsDiagrams.classList.contains('skills_hidden')
        });
    });
    hobbies_arrow.addEventListener('click', function() {
        educationMain.classList.toggle('mt'); // Показуємо/сховуємо блок skills_diagrams
        hobbies_arrow.classList.toggle('expanded'); // Повертаємо стрілочку

        // Перевіряємо стан і змінюємо видимість блоків hobbies
        const hobbiesBlocks = document.querySelectorAll('.hobbies_diagrams'); // Упевніться, що є такий клас
        hobbiesBlocks.forEach(block => {
            block.style.display = educationMain.classList.contains('mt')
        });
    });
    bachelor_d.addEventListener('click', function() {
        educationMain.classList.toggle('mt'); // Показуємо/сховуємо блок skills_diagrams
        hobbies_arrow.classList.toggle('expanded'); // Повертаємо стрілочку

        // Перевіряємо стан і змінюємо видимість блоків hobbies
        const hobbiesBlocks = document.querySelectorAll('.hobbies_diagrams'); // Упевніться, що є такий клас
        hobbiesBlocks.forEach(block => {
            block.style.display = educationMain.classList.contains('mt')
        });
    });
});

