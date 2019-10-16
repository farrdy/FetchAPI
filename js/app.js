document.getElementById('button1').addEventListener('click', loadText);

document.getElementById('button2').addEventListener('click', loadJSON);

document.getElementById('button3').addEventListener('click', loadREST);




function loadText() {
    fetch('data.txt')
        .then(function (response) {
            return response.text();
        })
        .then(function (data) {
            console.log(data);
            document.getElementById('result').innerHTML = data;
        })
        .catch(function (error) {
            console.log(error);
        });
}

function loadJSON() {
    fetch('employees.json')
        .then(function (response) {
            console.log(response);
            return response.json();
        })
        .then(function (data) {
            let html = '';
            data.forEach(employee => {
                html += `<li>${employee.name} - ${employee.job} - ${employee.title}</li>`;
            });
            document.getElementById('result').innerHTML = html
        });

}

function loadREST() {
    fetch('https://picsum.photos/list')
        .then(function (response) {
            return response.json();
        })
        .then(function (images) {
            let html = '';
            images.forEach(function (image) {

                html += `<li>
                             <a  target="_blank" href="${image.post_url}">View Image </a> ${image.author}
                         </li>
                        `
            });
            document.getElementById('result').innerHTML = html;
        })
        .catch(function (error) {
            console.log(error);
        })

}
