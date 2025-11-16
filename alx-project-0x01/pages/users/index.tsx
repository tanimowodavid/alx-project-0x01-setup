import Button from "@/components/common/Button";
import Header from "@/components/layout/Header";
const Users: React.FC = () => {
  return (
    <div>
      <h1>users Page</h1>
      <Button />
    </div>
  );
};

export async function getStaticProps() {
  const response = await fetch("https://jsonplaceholder.typicode.com/users");
  const posts = await response.json();

  return {
    props: {
      posts,
    },
  };
}

export default Users;
