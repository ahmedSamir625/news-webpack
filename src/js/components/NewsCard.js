export const NewsCard = ({
  source,
  title,
  description,
  publishedAt,
  urlToImage,
}) => {
  const cardDiv = document.createElement("div");
  cardDiv.classList.add("row", "p-3", "border-white");

  cardDiv.innerHTML = `   
  <div class="col-4">
  <img
    class="img-fluid"
    src="${urlToImage?urlToImage:'/src/assets/images/article.jpg'}"
    alt=""
  />
</div>
<div class="col-8 text-start">
  <h4>${title}</h4>
  <p>${description}</p>
  <div class="text-end">
    <h6>${source.name}</h6>
    <h6>${publishedAt.substring(0, 10) }</h6>
  </div>
</div>
          `;

  return cardDiv;
};
