const articles = [
  {
    id: "article1",
    title: "China",
    image: "./china.jpg",
    body: "China (Chinese: 中国; pinyin: Zhōngguó), officially the People's Republic of China (PRC; Chinese: 中华人民共和国; pinyin: Zhōnghuá Rénmín Gònghéguó), is a country in East Asia. It is the world's most populous country, with a population of more than 1.4 billion. China spans five geographical time zones and borders 14 different countries, the second most of any country in the world after Russia. Covering an area of approximately 9.6 million square kilometers (3,700,000 sq mi), it is the world's third or fourth largest country.[i] The country consists of 23 provinces,[j] five autonomous regions, four municipalities, and two Special Administrative Regions (Hong Kong and Macau). The national capital is Beijing.",
  },
  {
    id: "article2",
    title: "USA",
    image: "./usa.jpg",
    body: "The United States of America (U.S.A. or USA), commonly known as the United States (U.S. or US) or America, is a country primarily located in North America. It consists of 50 states, a federal district, five major unincorporated territories, 326 Indian reservations, and nine minor outlying islands.[h] At nearly 3.8 million square miles (9.8 million square kilometers), it is the world's third- or fourth-largest country by geographic area.[c] The United States shares land borders with Canada to the north and Mexico to the south as well as maritime borders with the Bahamas, Cuba, Russia, and other countries.[i] With a population of more than 331 million people,[j] it is the third-most-populous country in the world. The national capital is Washington, D.C., and the most populous city and financial center is New York City.",
  },
  {
    id: "article3",
    title: "Japan",
    image: "./japan.jpg",
    body: "Japan (Japanese: 日本, Nippon or Nihon,[nb 1] and formally 日本国)[nb 2] is an island country in East Asia. It is situated in the northwest Pacific Ocean, and is bordered on the west by the Sea of Japan, while extending from the Sea of Okhotsk in the north toward the East China Sea and Taiwan in the south. Japan is a part of the Ring of Fire, and spans an archipelago of 6852 islands covering 377,975 square kilometers (145,937 sq mi); the five main islands are Hokkaido, Honshu (the mainland), Shikoku, Kyushu, and Okinawa. Tokyo is the nation's capital and largest city; other major cities include Yokohama, Osaka, Nagoya, Sapporo, Fukuoka, Kobe, and Kyoto.",
  }
];

// const main = document.querySelector('main');
// articles.forEach(article => {
//   const articleElement = document.createElement('article');
//   const h1 = document.createElement('h1');
//   const img = document.createElement('img');
//   const p = document.createElement('p');
//   const a = document.createElement('a');

//   articleElement.id = article.id;
//   h1.textContent = article.title;
//   img.src = article.image;
//   p.textContent = article.body;
//   a.href = './art.html';

//   articleElement.append(h1);
//   h1.appendChild(a);
//   articleElement.append(img);
//   articleElement.append(p);
//   main.append(articleElement);
// });

const main = document.querySelector('main');
articles.forEach(article => {
  const articleElement = document.createElement('article');
  const h1 = document.createElement('h1');
  const img = document.createElement('img');
  const p = document.createElement('p');
  const a = document.createElement('a');

  articleElement.id = article.id;
  h1.textContent = article.title;
  img.src = article.image;
  p.textContent = article.body;
  a.href = './art.html';

  articleElement.append(a);
  a.appendChild(h1);
  articleElement.append(img);
  articleElement.append(p);
  main.append(articleElement);
});