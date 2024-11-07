document.addEventListener('DOMContentLoaded', function() {
    // Стрілки і блоки для досвіду роботи

    const arrowsJob = document.querySelectorAll('.arrow-job');
    const jobTexts = document.querySelectorAll('.job_experience_right_text');
    // Стрілка і блок для діаграм навичок
    // const arrow = document.querySelector('.arrow');
    // const skillsDiagrams = document.querySelector('.skills_diagrams');

    const arrow = document.querySelectorAll('.arrow');
    const educationText = document.querySelectorAll('.skills_experience_right');



    // Стрілка і блок для діаграм хобі
    const hobbies_arrow = document.querySelector('.hobbies_arrow');
    const educationMain = document.querySelector('.hobbies_diagrams'); // Один елемент

    const skills_arrow = document.querySelector('.skills_arrow');
    const skillsMain = document.querySelector('.skills_diagrams'); // Один елемент

    // Додаємо обробники подій для кожної стрілки в досвіді роботи
    arrowsJob.forEach((arrowJob, index) => {
        arrowJob.addEventListener('click', function () {
            arrowJob.classList.toggle('expanded');
            const jobText = jobTexts[index];

            if (jobText.style.maxHeight && jobText.style.maxHeight !== '0px') {
                jobText.style.maxHeight = '0px'; // Приховуємо блок
                jobText.style.marginTop = '0'; // Прибираємо відступи
                jobText.style.padding = '0'; // Прибираємо padding
            } else {
                jobText.style.maxHeight = jobText.scrollHeight + 'px'; // Розгортаємо блок
                jobText.style.marginTop = '0px'; // Відновлюємо відступи
                jobText.style.padding = '0px 0'; // Відновлюємо padding
                // jobText.style.minHeight = '300px'; // Відновлюємо відступи

            }
        });
    });

    arrow.forEach((arrow, index) => {
        arrow.addEventListener('click', function () {
            arrow.classList.toggle('expanded');
            //const educationText = educationText[index];

            if (educationText.style.maxHeight && educationText.style.maxHeight !== '0px') {
                educationText.style.maxHeight = '0px'; // Приховуємо блок
                educationText.style.marginTop = '0'; // Прибираємо відступи
                educationText.style.padding = '0'; // Прибираємо padding
            } else {
                educationText.style.maxHeight = educationText.scrollHeight + 'px'; // Розгортаємо блок
                educationText.style.marginTop = '0px'; // Відновлюємо відступи
                educationText.style.padding = '110px 0'; // Відновлюємо padding
                // jobText.style.minHeight = '300px'; // Відновлюємо відступи

            }
        });
    });



    // Обробник для стрілки "навички"
    arrow.addEventListener('click', function () {
        arrow.classList.toggle('expanded'); // Поворот стрілки
        if (skillsDiagrams.style.maxHeight) {
            skillsDiagrams.style.maxHeight = null; // Згортаємо блок
        } else {
            skillsDiagrams.style.maxHeight = skillsDiagrams.scrollHeight + "px"; // Розгортаємо блок
        }
    });

    // Обробник для стрілки "хобі"
    // hobbies_arrow.addEventListener('click', function() {
    //     educationMain.classList.toggle('mt'); // Додаємо клас для зміни стилів
    //     hobbies_arrow.classList.toggle('expanded'); // Повертаємо стрілку
    // });

    // Обробник для бакалавра (припускаючи, що є така стрілка або блок)
    // const bachelor_d = document.querySelector('.bachelor_d');
    // if (bachelor_d) {
    //     bachelor_d.addEventListener('click', function() {
    //         educationMain.classList.toggle('mt');
    //         hobbies_arrow.classList.toggle('expanded');
    //     });
    // }
});
