import { UserProps } from "@/interfaces";

const UserCard: React.FC<UserProps> = ({ name, username, email, address, phone, website, company }) => {
  return (
    <div className="max-w-md mx-auto my-6 p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
      <div className="mb-4">
        <h2 className="text-2xl font-semibold text-gray-800">{name}</h2>
        <p className="text-blue-600 font-medium">@{username}</p>
      </div>
      
      <div className="space-y-3 text-sm text-gray-600">
        <div>
          <span className="font-semibold">Email:</span> {email}
        </div>
        <div>
          <span className="font-semibold">Phone:</span> {phone}
        </div>
        <div>
          <span className="font-semibold">Website:</span> 
          <a href={`http://${website}`} className="text-blue-500 hover:underline ml-1" target="_blank" rel="noopener noreferrer">
            {website}
          </a>
        </div>
      </div>

      <div className="mt-4 p-3 bg-gray-50 rounded">
        <h3 className="font-semibold text-gray-800 mb-2">Address</h3>
        <p className="text-sm text-gray-600">
          {address.street}, {address.suite}<br />
          {address.city}, {address.zipcode}
        </p>
      </div>

      <div className="mt-4 p-3 bg-blue-50 rounded">
        <h3 className="font-semibold text-gray-800 mb-2">Company</h3>
        <p className="text-sm font-medium text-gray-700">{company.name}</p>
        <p className="text-xs text-gray-600 italic">{company.catchPhrase}</p>
        <p className="text-xs text-gray-500 mt-1">{company.bs}</p>
      </div>
    </div>
  );
};


export default UserCard