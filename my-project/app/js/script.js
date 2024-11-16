document.addEventListener('DOMContentLoaded', function() {
    // Стрілки і блоки для досвіду роботи
    const arrowsJob = document.querySelectorAll('.arrow-job');
    const jobTexts = document.querySelectorAll('.job_experience_right_text');
    const arrow = document.querySelectorAll('.arrow');
    const educationText = document.querySelectorAll('.skills_experience_right');
    const hobbies_arrow = document.querySelector('.hobbies_arrow');
    const educationMain = document.querySelector('.hobbies_diagrams');
    const skills_arrow = document.querySelector('.skills_arrow');
    const skillsMain = document.querySelector('.skills_diagrams');

    // Додаємо обробники подій для стрілок
    arrowsJob.forEach((arrowJob, index) => {
        arrowJob.addEventListener('click', function () {
            arrowJob.classList.toggle('expanded');
            const jobText = jobTexts[index];
            if (jobText.style.maxHeight && jobText.style.maxHeight !== '0px') {
                jobText.style.maxHeight = '0px';
                jobText.style.marginTop = '0';
                jobText.style.padding = '0';
            } else {
                jobText.style.maxHeight = jobText.scrollHeight + 'px';
                jobText.style.marginTop = '0px';
                jobText.style.padding = '0px 0';
            }
        });
    });

    // Обробка навичок та освіти
    arrow.forEach((arrow, index) => {
        arrow.addEventListener('click', function () {
            arrow.classList.toggle('expanded');
            if (educationText[index].style.maxHeight && educationText[index].style.maxHeight !== '0px') {
                educationText[index].style.maxHeight = '0px';
                educationText[index].style.marginTop = '0';
                educationText[index].style.padding = '0';
            } else {
                educationText[index].style.maxHeight = educationText[index].scrollHeight + 'px';
                educationText[index].style.marginTop = '0px';
                educationText[index].style.padding = '110px 0';
            }
        });
    });

    // Функція для отримання даних з Fetch API
    // async function loadDataWithFetch() {
    //     try {
    //         const response = await fetch('http://localhost:8080/src/data/data.json', { cache: 'no-store' });
    //         if (!response.ok) {
    //             throw new Error(`HTTP error! Status: ${response.status}`);
    //         }
    //         const data = await response.json();
    //         updatePage(data);  // Переконайтесь, що викликаєте updatePage тільки після завантаження даних
    //     } catch (error) {
    //         console.error("Failed to fetch data: ", error);
    //         alert("An error occurred while fetching data. Please check the console for more information.");
    //     }
    // }
    //
    //
    //
    // // Функція для оновлення сторінки на основі даних
    // function updatePage(data) {
    //     // Заголовок
    //     document.getElementById('header').textContent = `${data.header.name} ${data.header.surname}`;
    //     document.getElementById('header_title').textContent = data.header.title;
    //
    //     // Контакти
    //     document.getElementById('phone_numbers').textContent = data.contact.phones.join(', ');
    //     document.getElementById('website').textContent = data.contact.website;
    //     document.getElementById('email').textContent = data.contact.email;
    //     document.getElementById('address').textContent = data.contact.address.join(', ');
    //
    //     // Про мене
    //     document.getElementById('about_text').textContent = data.about;
    //
    //     // Навички
    //     const skillsSection = document.getElementById('skills_section');
    //     skillsSection.innerHTML = '';  // Очищення перед додаванням елементів
    //     data.skills.forEach(skill => {
    //         const skillItem = document.createElement('div');
    //         skillItem.innerHTML = `<h5>${skill.name}</h5><div style="width:${skill.level}%" class="progress-bar"></div>`;
    //         skillsSection.appendChild(skillItem);
    //     });
    //
    //     // Досвід
    //     const experienceSection = document.getElementById('experience_section');
    //     experienceSection.innerHTML = '';  // Очищення перед додаванням елементів
    //     data.experience.forEach(exp => {
    //         const expItem = document.createElement('div');
    //         expItem.innerHTML = `<h4>${exp.position} at ${exp.company}</h4><p>${exp.location}, ${exp.years}</p><p>${exp.description}</p>`;
    //         experienceSection.appendChild(expItem);
    //     });
    //
    //     // Освіта
    //     const educationSection = document.getElementById('education_section');
    //     educationSection.innerHTML = '';  // Очищення перед додаванням елементів
    //     data.education.forEach(edu => {
    //         const eduItem = document.createElement('div');
    //         eduItem.innerHTML = `<h4>${edu.degree}</h4><p>${edu.institution}, ${edu.years}</p><p>${edu.description}</p>`;
    //         educationSection.appendChild(eduItem);
    //     });
    // }
    //
    // // Викликаємо функцію для завантаження даних
    // loadDataWithFetch();
    // document.addEventListener('DOMContentLoaded', function() {
    //     async function loadDataWithFetch() {
    //         try {
    //             const response = await fetch('http://localhost:3000/src/data/data.json', { cache: 'no-store' });
    //             if (!response.ok) {
    //                 throw new Error(`HTTP error! Status: ${response.status}`);
    //             }
    //             const data = await response.json();
    //             updatePage(data);
    //         } catch (error) {
    //             console.error("Failed to fetch data: ", error);
    //             alert("An error occurred while fetching data. Please check the console for more information.");
    //         }
    //     }
    //
    //     function updatePage(data) {
    //         document.getElementById('name').textContent = data.header.name;
    //         document.getElementById('surname').textContent = data.header.surname;
    //         document.getElementById('title').textContent = data.header.title;
    //     }
    //
    //     loadDataWithFetch();
    // });



    // loadDataWithFetch();

    // fetch('http://localhost:3000/src/data/data.json', {cache:"no-store"})
    //     .then(response => {
    //         if (!response.ok) {
    //             throw new Error('Failed to fetch data');
    //         }
    //         return response.json();
    //     })
    //     .then(data => {
    //         console.log('Data received:', data);
    //         // Тут ви можете вставити дані на сторінку, наприклад:
    //         const dataContainer = document.getElementById('data-container');
    //         dataContainer.innerHTML = `<pre>${JSON.stringify(data, null, 2)}</pre>`;
    //     })
    //     .catch(error => {
    //         console.error('Error fetching data:', error);
    //     });

});
