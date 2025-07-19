const Users: React.FC = () => {
  return (
    <div>
      <h1 className="text-2xl font-bold">Users Page</h1>
    </div>
  );
};

export async function getStaticProps() {
  const response = await fetch("https://jsonplaceholder.typicode.com/users")
  const posts = await response.json()

  return {
    props: {
      posts
    }
  }
}
export default Users;