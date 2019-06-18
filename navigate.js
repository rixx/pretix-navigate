var li = document.createElement("li")

var form = document.createElement("form");
form.setAttribute("id", "pretix-navigate-form")
form.setAttribute("action", window.location.pathname.split('/').slice(0, 5).join('/') + '/magicgoto/')
li.appendChild(form)

var hiddenUrl = document.createElement("input");
hiddenUrl.setAttribute("id", "pretix-navigate-url")
hiddenUrl.setAttribute("name", "pretix-navigate-url")
hiddenUrl.classList.add("hidden")
hiddenUrl.value = document.URL
form.appendChild(hiddenUrl)

var searchInput = document.createElement("input");
searchInput.setAttribute("id", "pretix-navigate-search")
searchInput.setAttribute("name", "pretix-navigate-search")
searchInput.classList.add('form-control')
form.appendChild(searchInput)

var submit = document.createElement("input")
submit.setAttribute('type', 'submit')
submit.classList.add("hidden")
form.appendChild(submit)

document.querySelector('ul.navbar-nav:nth-child(3)').prepend(li)
