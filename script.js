const posts = [
  {
    title: "Por que entender algoritmos é essencial?",
    content:
      "Mesmo em linguagens de alto nível, o conhecimento de algoritmos permite criar soluções mais eficientes e elegantes...",
    url: "posts/algoritmos.html",
    date: "2025-04-21",
  },
  {
    title: "Boas práticas no Git para equipes ágeis",
    content:
      "Trabalhar com Git de forma colaborativa exige convenções: nomes de branch claros, commits atômicos e pull requests bem descritos.",
    url: "posts/git-agil.html",
    date: "2025-04-15",
  },
  {
    title: "O que é Clean Architecture?",
    content:
      "Clean Architecture busca separar responsabilidades, promovendo código mais testável e fácil de manter ao longo do tempo.",
    url: "posts/clean-architecture.html",
    date: "2025-04-10",
  },
];

posts.sort((a, b) => new Date(b.date) - new Date(a.date));

const container = document.getElementById("posts-container");

posts.sort((a, b) => new Date(b.date) - new Date(a.date));

posts.forEach((post) => {
  const article = document.createElement("article");
  article.classList.add("post");

  const date = new Date(post.date).toLocaleDateString("pt-BR", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  article.innerHTML = `
    <h2><a href="${post.url}">${post.title}</a></h2>
    <p><small>${date}</small></p>
    <p>${post.content}</p>
  `;
  container.appendChild(article);
});

posts.forEach((post) => {
  const article = document.createElement("article");
  article.classList.add("post");
  article.innerHTML = `
    <h2><a href="${post.url}">${post.title}</a></h2>
    <p>${post.content}</p>
  `;
  container.appendChild(article);
});
