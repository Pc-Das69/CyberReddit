// Post form
const postForm = document.getElementById('post-form');

postForm.addEventListener('submit', (e) => {
  e.preventDefault();

  const title = postForm['post-title'].value;
  const content = postForm['post-content'].value;

  // Create new post
  const postSection = document.createElement('section');
  postSection.classList.add('post');
  postSection.innerHTML = `
    <h2>${title}</h2>
    <p>${content}</p>
    <div class="post-meta">
      <span>Posted by Anonymous</span>
      <span>Just now</span>
    </div>
  `;

  // Insert new post at the beginning of the main section
  const main = document.querySelector('main');
  main.insertBefore(postSection, main.firstChild);

  // Clear input fields
  postForm.reset();
});
