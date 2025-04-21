const posts = [
  {
    title: "Por que entender algoritmos é essencial?",
    content:
      "Mesmo em linguagens de alto nível, o conhecimento de algoritmos permite criar soluções mais eficientes e elegantes...",
  },
  {
    title: "Boas práticas no Git para equipes ágeis",
    content:
      "Trabalhar com Git de forma colaborativa exige convenções: nomes de branch claros, commits atômicos e pull requests bem descritos.",
  },
  {
    title: "O que é Clean Architecture?",
    content:
      "Clean Architecture busca separar responsabilidades, promovendo código mais testável e fácil de manter ao longo do tempo.",
  },
];

const container = document.getElementById("posts-container");

posts.forEach((post) => {
  const article = document.createElement("article");
  article.classList.add("post");
  article.innerHTML = `
    <h2>${post.title}</h2>
    <p>${post.content}</p>
  `;
  container.appendChild(article);
});
