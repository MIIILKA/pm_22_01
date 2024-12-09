async function getData() {
    try {
        const response = await fetch('http://localhost:8080/data/data.json', { cache: 'no-store' });

        //http://127.0.0.1:8080/my-project/dist/data/data.json
        //http://localhost:8080/data/data.json
        if (!response.ok) throw new Error('Помилка при завантаженні даних');
        const data = await response.json();
        renderData(data);
    } catch (error) {
        console.error('Помилка під час отримання даних:', error);
    }
}

function renderData(data) {

    //header
    document.getElementById('name').textContent = data.header.name;
    document.getElementById('surname').textContent = data.header.surname;
    document.getElementById('title').textContent = data.header.title;




    //subheader
    document.getElementById('nasme').textContent = data.subheader.nasme;
    document.getElementById('phone1').textContent = data.subheaderleft.phone1;
    document.getElementById('phone2').textContent = data.subheaderleft.phone2;
    document.getElementById('link').textContent = data.subheaderleft.link;
    document.getElementById('email').textContent = data.subheaderleft.email;
    document.getElementById('place1').textContent = data.subheaderleft.place1;
    document.getElementById('place2').textContent = data.subheaderleft.place2;

    document.getElementById('hoes').textContent = data.subheaderright.hoes;
    document.getElementById('lorem').textContent = data.subheaderright.lorem;


    //skills

    document.getElementById('h3').textContent = data.skills.h3;
    document.getElementById('text1').textContent =  data.skills.text1;
    document.getElementById('text2').textContent = data.skills.text2;
    document.getElementById('text3').textContent = data.skills.text3;
    document.getElementById('text4').textContent = data.skills.text4;
    document.getElementById('text5').textContent = data.skills.text5;


    //job_experience

    document.getElementById('jh3').textContent = data.job_experience.jh3;

    document.getElementById('job_experience_left11').textContent = data.job_experience.job_experience_left11;
    document.getElementById('job_experience_left12').textContent =  data.job_experience.job_experience_left12;
    document.getElementById('job_experience_left13').textContent = data.job_experience.job_experience_left13;
    document.getElementById('job_experience_right_h1').textContent = data.job_experience.job_experience_right_h1;
    document.getElementById('job_experience_lorem1').textContent = data.job_experience.job_experience_lorem1;

    document.getElementById('job_experience_left21').textContent = data.job_experience.job_experience_left21;
    document.getElementById('job_experience_left22').textContent =  data.job_experience.job_experience_left22;
    document.getElementById('job_experience_left23').textContent = data.job_experience.job_experience_left23;
    document.getElementById('job_experience_right_h2').textContent = data.job_experience.job_experience_right_h2;
    document.getElementById('job_experience_lorem2').textContent = data.job_experience.job_experience_lorem2;

    document.getElementById('job_experience_left31').textContent = data.job_experience.job_experience_left31;
    document.getElementById('job_experience_left32').textContent =  data.job_experience.job_experience_left32;
    document.getElementById('job_experience_left33').textContent = data.job_experience.job_experience_left33;
    document.getElementById('job_experience_right_h3').textContent = data.job_experience.job_experience_right_h3;
    document.getElementById('job_experience_lorem3').textContent = data.job_experience.job_experience_lorem3;

    //education
    document.getElementById('education_h').textContent = data.education.education_h;

    document.getElementById('education_h1').textContent = data.education.education_h1;
    document.getElementById('education_underh').textContent = data.education.education_underh;
    document.getElementById('education_year').textContent = data.education.education_year;
    document.getElementById('education_lorem').textContent = data.education.education_lorem;

    document.getElementById('education_2h1').textContent = data.education.education_2h1;
    document.getElementById('education_2underh').textContent = data.education.education_2underh;
    document.getElementById('education_2year').textContent = data.education.education_2year;
    document.getElementById('education_2lorem').textContent = data.education.education_2lorem;


    document.getElementById('hobbies_h1').textContent = data.education.hobbies_h1;
    document.getElementById('hobbies_text1').textContent = data.education.hobbies_text1;
    document.getElementById('hobbies_text2').textContent = data.education.hobbies_text2;
    document.getElementById('hobbies_text3').textContent = data.education.hobbies_text3;
    document.getElementById('hobbies_text4').textContent = data.education.hobbies_text4;
    document.getElementById('hobbies_text5').textContent = data.education.hobbies_text5;

    //reference
    document.getElementById('reference_h').textContent = data.reference.reference_h;

    document.getElementById('refernce_left1').textContent = data.reference.refernce_left1;
    document.getElementById('refernce_left2').textContent = data.reference.refernce_left2;
    document.getElementById('refernce_left3').textContent = data.reference.refernce_left3;
    document.getElementById('refernce_left4').textContent = data.reference.refernce_left4;


    document.getElementById('reference_right1').textContent = data.reference.reference_right1;
    document.getElementById('reference_right2').textContent = data.reference.reference_right2;
    document.getElementById('reference_right3').textContent = data.reference.reference_right3;
    document.getElementById('reference_right4').textContent = data.reference.reference_right4;

    document.getElementById('reference_linkedin_identify').textContent = data.reference.reference_linkedin_identify;
    document.getElementById('reference_linkedin').textContent = data.reference.reference_linkedin;
    document.getElementById('reference_linkedin_link').textContent = data.reference.reference_linkedin_link;

}

getData();


// const express = require('express');
// const path = require('path');
// const fs = require('fs');
//
// const app = express();
// const port = 8080;
//
// // Додаємо заголовки CORS
// app.use((req, res, next) => {
//     res.header("Access-Control-Allow-Origin", "*");
//     res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
//     res.header("Access-Control-Allow-Headers", "Content-Type");
//     next();
// });
//
// // Serve static files from the 'dist' directory (для index.html та інших статичних файлів)
// app.use(express.static(path.join(__dirname, 'my-project', 'dist')));
//
// // API endpoint to get JSON data
// app.get('/src/data/data.json', (req, res) => {
//     const dataPath = path.join(__dirname, 'my-project', 'app', 'src', 'data', 'data.json');
//     fs.readFile(dataPath, 'utf8', (err, data) => {
//         if (err) {
//             res.status(500).json({ message: 'Error reading data.json' });
//             return;
//         }
//         res.json(JSON.parse(data));
//     });
// });
//
// // Start server
// app.listen(port, () => {
//     console.log(`Server is running at http://localhost:${port}`);
// });
