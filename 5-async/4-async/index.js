async function fetchData(url) {
  // <-- start
  // TODO 24: 通过await/async实现异步请求

  const res = await fetch(url);
  const resData = await res.json();
  document.writeln(resData.name);

  // end -->
}

const URL = 'http://localhost:3000/api';
fetchData(URL);
