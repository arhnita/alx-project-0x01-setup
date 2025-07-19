import { UserProps } from "@/interfaces";

const UserCard: React.FC<UserProps> = ({ id, name, username, email, phone, website, company }) => {
  return (
    <div className="max-w-md mx-auto my-6 p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
      <h2 className="text-2xl font-bold mb-2 text-blue-700">{name} (@{username})</h2>
      <p className="text-gray-700 mb-1">Email: <span className="text-gray-900 font-medium">{email}</span></p>
      <p className="text-gray-700 mb-1">Phone: <span className="text-gray-900 font-medium">{phone}</span></p>
      <p className="text-gray-700 mb-1">Website: <span className="text-blue-500 underline">{website}</span></p>
      <div className="mt-3 text-gray-600">
        <h3 className="font-semibold">Company</h3>
        <p className="text-gray-900">{company.name}</p>
        <p className="italic text-sm">{company.catchPhrase}</p>
      </div>
      <div className="text-sm text-gray-500 mt-3">User ID: {id}</div>
    </div>
  );
};

export default UserCard;