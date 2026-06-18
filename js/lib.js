/*javacript*/
//Khai báo một đối tượng
const product = {
    id:"1",
    name:" Trà Sữa Trân Châu Đường Đen",
    price:25000,
    description:"Trà sữa trân châu đường đen là thức uống kết hợp hoàn hảo giữa nền trà sữa béo ngậy...",
    image:"../assets/images/tranchauduongden.jpg",
    link:"chi-tiet.html"
};

const products = [
    {
        id: "1",
        name: "Trà Sữa Trân Châu ",
        price: 25000,
        description: "Trà sữa trân châu đường đen là thức uống kết hợp hoàn hảo giữa nền trà sữa béo ngày...",
        descriptionFull: "Trà sữa trân châu đường đen được pha chế từ trà đen thượng hạng, kết hợp với sữa tươi béo ngậy và trân châu đường đen dai mềm. Đường đen được nấu thủ công tạo nên lớp syrup thơm ngọt đặc trưng. Thức uống mang lại cảm giác thư giãn, phù hợp cho mọi lứa tuổi.",
        image: "../assets/images/tranchauduongden.jpg",
        link: "chi-tiet.html"
    },
    {
        id: "2",
        name: "Matcha Latte",
        price: 27000,
        description: "Matcha Latte là thức uống kết hợp giữa bột matcha Nhật Bản và sữa tươi...",
        descriptionFull: "Matcha Latte được làm từ bột matcha Nhật Bản nguyên chất loại 1, hòa quyện cùng sữa tươi ấm béo ngậy. Vị đắng nhẹ của matcha kết hợp với độ ngọt vừa phải tạo nên hương vị độc đáo. Giàu chất chống oxy hóa, tốt cho sức khỏe và làn da.",
        image: "../assets/images/matchalatte.jpg",
        link: "chi-tiet.html"
    },
    {
        id: "3",
        name: "Trà Đào Cam Sả",
        price: 22000,
        description: "Trà đào cam sả là một thức uống giải khát vô cùng được ưa chuộng...",
        descriptionFull: "Trà đào cam sả kết hợp hài hòa giữa vị ngọt thanh của đào, vị chua dịu của cam và hương thơm nồng của sả. Được pha từ trà xanh tươi, thêm đá lạnh và lát đào tươi trang trí. Thức uống giải nhiệt tuyệt vời cho những ngày hè oi bức.",
        image: "../assets/images/tradaocamsa.jpg",
        link: "chi-tiet.html"
    },
    {
        id: "4",
        name: "Sinh Tố Bơ",
        price: 30000,
        description: "Sinh tố bơ là thức uống giải khát bổ dưỡng, nổi bật với hương vị béo ngày, thơm mát...",
        descriptionFull: "Sinh tố bơ được làm từ bơ tươi nhập khẩu, kết hợp với sữa tươi và đường, tạo nên hương vị béo ngậy thơm mát. Giàu vitamin E và chất béo lành mạnh, tốt cho da và sức khỏe. Thích hợp uống vào buổi sáng hoặc sau bữa ăn.",
        image: "../assets/images/sinhtobo.jpg",
        link: "chi-tiet.html"
    }
];



function addItemV2(product){
    document.getElementById("product-list").innerHTML += `
        <div class="col">
            <div class="card product-item h-100">
                <div class="product-image ratio ratio-1x1">
                    <img class="card-img-top object-fit-cover" src="${product.image}" alt="${product.name}">
                </div>
              <div class="card-body bg-light product-info text-center d-flex flex-column">
                    <h4 class ="card-title text-danger">${product.name}</h4>
                    <h5 class ="card-text">${product.price} VNĐ</h5>
                    <p stype ="text-align:justify; line-height:2" class = "card-text">${product.description}</p>
                    <a class="btn btn-info mt-auto" href="chi-tiet.html?ma=${product.id}">Xem chi tiết</a>

                    
                </div>
            </div>
        </div>
    `;
}

function loadAllProduct(array){
    let i = 0;
    while(i < products.length)
    {
        addItemV2(products[i]);
        i++;
    }
}


function inBCC(n)
{
    let result = "";
    let i=1;
    while(i<=10)
    {
       result += `${n} x ${i} = ${n*i} <br>`;
       i++;
    }  
    document.getElementById("result").innerHTML = result;  
}

function addItem(name, price, description, link, image)
{
    //Tạo khung chứa container-item
    const item = document.createElement("div"); //<div></div>

    item.setAttribute("class", "container-item");

    //Trong 1 item có khung chứa container-image và container-info

    //Tạo khung chứa container-image
    const containerImage = document.createElement("div");
    containerImage.setAttribute("class", "container-image");

    //Tạo 1 ảnh
    const imageProduct = document.createElement("img");
    imageProduct.setAttribute("src", image); // truyền tham số image
    imageProduct.setAttribute("alt", name);
    imageProduct.setAttribute("style", "width:100%; max-width:150px;");

    //Chèn đối tượng ảnh vào khung chứa ảnh
    containerImage.appendChild(imageProduct);

    //Tạo khung chứa container-info
    const containerInfo = document.createElement("div");
    containerInfo.setAttribute("class", "container-info");

    //Tạo 4 đứa con
    const nameProduct = document.createElement("p");
    nameProduct.innerHTML = name;

    const priceProduct = document.createElement("p");
    priceProduct.innerHTML = price;

    const descProduct = document.createElement("p");
    descProduct.innerHTML = description;

    const linkProduct = document.createElement("a");
    linkProduct.innerHTML = "Xem chi tiết";
    linkProduct.setAttribute("href", link);

    //Thêm con vào khung chứa info
    containerInfo.appendChild(nameProduct);
    containerInfo.appendChild(priceProduct);
    containerInfo.appendChild(descProduct);
    containerInfo.appendChild(linkProduct);

    //Đưa khung ảnh vào item
    item.appendChild(containerImage);

    //Đưa khung info vào item
    item.appendChild(containerInfo);

    //Đưa khung chứa container-product-list vào container
    document.getElementById("container-product-list").appendChild(item);
}
















