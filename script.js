fetch('posts.json')
  .then(response => response.json())
  .then(posts => {
    const container = document.getElementById("posts-container");

    posts.forEach(post => {
      const article = document.createElement("article");
      article.classList.add("post");
      article.innerHTML = `
        <h2><a href="post.html?file=${post.file}">${post.title}</a></h2>
        <p>${post.description}</p>
      `;
      container.appendChild(article);
    });
  })
  .catch(error => {
    console.error('Erro ao carregar posts:', error);
  });