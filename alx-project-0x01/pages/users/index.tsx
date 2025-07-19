import UserCard from "@/components/common/UserCard";
import { UserProps } from "@/interfaces";

interface UserPageProps {
  posts: UserProps[];
}
const Users: React.FC<UserPageProps> = ({ posts }) => {
  console.log(posts);
  return (
    <div>
      <h1 className="text-2xl font-bold">Users Page</h1>
      <div>
        {posts?.map(
          (
            {
              id,
              name,
              username,
              email,
              address,
              phone,
              website,
              company,
            }: UserProps,
            key: number
          ) => (
            <UserCard
              id={id}
              name={name}
              username={username}
              email={email}
              address={address}
              phone={phone}
              website={website}
              company={company}
              key={key}
            />
          )
        )}
      </div>
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
