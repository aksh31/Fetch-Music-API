let cl = console.log; //=> first class function



let baseURL = "http://localhost:3000/profile";
const data = document.getElementById("data");

fetch(baseURL)
    .then(response => response.json())
    .then(res => {
        cl(res);
        templating(res);
    })
    .catch(cl);


function templating(arr){
    let result = '';
    arr.forEach((ele, i) => {
        result += `
                <tr>
                    <td>${i+1}</td>
                    <td>${ele.name}</td>
                    <td>
                        <audio controls>
                            <source src="${ele.url}" type="audio/mpeg">
                        </audio>
                    </td>
                </tr>`;
    });
    data.innerHTML = result;
}
