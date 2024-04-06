const routes = {
  404: "/pages/404.html",
  "/": "/pages/index.html",
  "/about": "/pages/about.html",
  "/lorem": "/pages/lorem.html",
};

const route = (event) => {
  event.preventDefault();
  window.history.pushState({}, "", event.target.href);
};

const handleLocation = async () => {
  const path = window.location.pathname;
};

window.route = route;
