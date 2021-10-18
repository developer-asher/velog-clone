export default function authHeader() {
  const token = sessionStorage.getItem('auth');

  if (token) {
    return {
      Authorization: `Bearer ${token}`,
    };
  } else {
    return {};
  }
}
