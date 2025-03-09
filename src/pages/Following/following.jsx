import Home from "../Home/home";
export default function Following() {
  return (
    <Home
      api={`https://tiktok.fullstack.edu.vn/api/videos?type=for-you&page=1`}
    />
  );
}
