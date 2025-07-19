import PostCard from "@/components/common/PostCard";
import { PostProps } from "@/interfaces";

interface PostPageProps {
  posts: PostProps[];
}
const Users: React.FC<PostPageProps> = ({ posts }) => {
  return (
    <div>
      <h1 className="text-2xl font-bold">Users Page</h1>
      <div>
        {posts?.map(({ title, body, userId, id }: PostProps, key: number) => (
          <PostCard
            title={title}
            body={body}
            userId={userId}
            id={id}
            key={key}
          />
        ))}
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
