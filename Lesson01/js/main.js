const products = [
  { id: 1, title: "Notebook", price: 2000 },
  { id: 2, title: "Mouse", price: 20 },
  { id: 3, title: "Keyboard", price: 200 },
  { id: 4, title: "Gamepad", price: 50 },
];

//Функция для формирования верстки каждого товара
//Добавить в выводе изображение
const renderProduct = (item) => {
  return `<div class="product-item">
                <img src="http://picsum.photos/150/150?random=${Math.random(100)}"/>
                <h3>${item.title}</h3>
                <p>Цена: ${item.price} р.</p>                
                <button class="btn-buy">Купить</button>
            </div>`;
};
const renderPage = (list) => {
  const productsList = list.map((item) => renderProduct(item));
  console.log(productsList);

  // Задание 3. Конвертируем массив в строку, чтобы избавиться от запятой
  let productListHtml = productsList.join("");

  document.querySelector(".products").innerHTML = productListHtml;
};

renderPage(products);
