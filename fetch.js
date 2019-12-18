let url = 'https://jsonplaceholder.typicode.com/posts'

//console.log('fetch: ' + fetch(url))
// fetch(url)
//     .then(response => response.json())
//     .then(data => console.log('fetch: ' + data))
//     .catch(err => console.log('fetch: ' + err))



window.onload = function () {
    document.getElementById('button1').addEventListener('click', getText);
    document.getElementById('button2').addEventListener('click', getJson);
    document.getElementById('button3').addEventListener('click', getExternal);
}

//local text
function getText() {
    fetch('test.txt')
        .then((res) => res.text())
        .then((data) => {
            console.log(data);
            document.getElementById('output').innerHTML = data;
        })
        .catch(err => console.log(err));
}

//local json
function getJson() {
    fetch('posts.json')
        .then((res) => res.json())
        .then((data) => {
            console.log(data);

            let output = '';
            data.forEach((post) => {
                output += `<li>${post.title}</li>`;
            })
            document.getElementById('output').innerHTML = output;
        })
        .catch(err => console.log(err));
}

//web api
function getExternal() {
    fetch('https://api.github.com/users')
        .then((res) => res.json())
        .then((data) => {
            console.log(data);

            let output = '';
            data.forEach((user) => {
                output += `<li>${user.login}</li>`;
            })
            document.getElementById('output').innerHTML = output;
        })
        .catch(err => console.log(err));
}