const linksSocialMedia = {
  github: 'math-lopes',
  youtube: 'matheuseduardolopes',
  facebook: 'unknown',
  instagram: 'th.euz',
  twitter: 't1math'
}

function changeSocialMediaLinks() {
  for (let li of socialLinks.children) {
    const social = li.getAttribute('class')

    li.children[0].href = `https://${social}.com/${linksSocialMedia[social]}`
  }
}

changeSocialMediaLinks()

function getGitHubProfileInfo() {
  const url = `https://api.github.com/users/${linksSocialMedia.github}`

  fetch(url)
    .then(response => response.json())
    .then(data => {
      userName.textContent = data.name
      userBio.textContent = data.bio
      userImage.src = data.avatar_url
      userLink.href = data.html_url
      userLogin.textContent = data.login
    })
}

getGitHubProfileInfo()
