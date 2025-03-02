const Access_key = "q7QfNkOvw9kHKEUe9l1DbRVVJolW-QUo5qT6PyqOmqk";
const search_forms = document.getElementById("search-forms");
const search_box = document.getElementById("search-box");
const search_result = document.getElementById("search-result");
const show_more = document.getElementById("show-more");

//Access key = q7QfNkOvw9kHKEUe9l1DbRVVJolW-QUo5qT6PyqOmqk;
//Secret ley = YDCIwGwbXBNkztmeFrIovunlJWkxQrcT6SA0fuSzRkY;

let page = 1;
let keyword = "";

async function SearchImages() {
  keyword = search_box.value;
  const url = `https://api.unsplash.com/search/photos?page=${page}&query=${keyword}&client_id=${Access_key}&per_page=12`;
  const response = await fetch(url);
  const data = await response.json();

  if (page === 1) {
    search_result.innerHTML = "";
  }
  const results = data.results;

  results.map((result) => {
    const image = document.createElement("img");
    image.src = result.urls.small;
    const imageLink = document.createElement("a");
    imageLink.href = result.links.html;
    imageLink.target = "_blank";

    imageLink.appendChild(image);
    search_result.appendChild(imageLink);
  });

  show_more.style.display = "block";
}

search_forms.addEventListener("submit", function (e) {
  e.preventDefault();
  page = 1;
  SearchImages();
});

show_more.addEventListener("click", () => {
  page++;
  SearchImages();
});
