import UserCard from "@/components/common/UserCard";
import Header from "@/components/layout/Header";
import { UserProps } from "@/interfaces";

interface UserPageProps {
  posts: UserProps[];
}

const Users: React.FC<UserPageProps> = ({ posts }) => {
  console.log(posts);
  return (
    <div className="flex flex-col h-screen">
      <Header />
      <main className="p-4">
        <h1 className="text-2xl font-semibold">Users List</h1>
        <div className="grid grid-cols-3 gap-2">
          {posts.map((user, key) => (
            <UserCard key={key} {...user} />
          ))}
        </div>
      </main>
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