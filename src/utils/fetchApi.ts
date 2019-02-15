export default function fetchApi(method: string, url: string, data?: any) {
  const path = "http://localhost:3000";
  const headers = {
    "Accept": "application/json",
    "Content-Type": "application/json"
  }

  return fetch(path + "/" + url, {
    method,
    headers: { ...headers },
    body: method === "post" ? JSON.stringify(data) : undefined
  })
  .then(res => res.json())
  .then(value => {
    return value;
  })
  .catch(() => {
    alert("出错了");
  })
}
