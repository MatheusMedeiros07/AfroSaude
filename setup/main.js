var space_id = "gzs22y5r9in3";
var access_token = "tEx4dSbDSuRxaGhi7TthTuna1zgge-cLROZgImy0qIE";

const endpoint = "https://cdn.contentful.com/spaces/" + space_id + "/environments/master/entries?access_token=" + access_token;

function getContentful() {
    let request = new XMLHttpRequest();
    request.open("GET", endpoint, false);
    request.send();
    return request.responseText;
}

function createComponent(item, image) {
    post = document.createElement("div");
    bodyPost = document.createElement("div");

    divImage = document.createElement("div");
    iImage = document.createElement("img")
    h4Title = document.createElement("h4");
    pText = document.createElement("p");
    readMore = document.createElement("a");
    
    h4Title.innerHTML = item.fields.title;
    pText.innerHTML = item.fields.subtitle;
    readMore.innerHTML = "Leia mais";

    post.className = "stm-bloco-blog";
    bodyPost.className = "stm-blog-txt";
    divImage.className = "stm-blog-img";
    iImage.setAttribute("src", "https:" + image.fields.file.url)
    readMore.setAttribute("href", "#");
    h4Title.className = "stm-blog-txt";

    bodyPost.appendChild(h4Title);
    bodyPost.appendChild(pText);
    bodyPost.appendChild(readMore);

    divImage.appendChild(iImage);
    post.appendChild(divImage);
    post.appendChild(bodyPost);

    return post;
}

function main() {
    let data = JSON.parse(getContentful());
    let items = data.items;
    let images = data.includes.Asset;
    console.log(data);
    for(var i=0 in items) {
        let post = createComponent(items[i], images[i]);
        console.log(post);
        document.getElementById("pt-baixo-setima").appendChild(post);
    }      

}

main();