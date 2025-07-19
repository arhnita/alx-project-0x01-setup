/* eslint-disable @typescript-eslint/no-explicit-any */
import { UserData, UserModalProps, UserProps } from "@/interfaces";
import React, { useState } from "react";

const UserModal: React.FC<UserModalProps> = ({ onClose, onSubmit }) => {
  const [user, setUser] = useState<UserData>({
    name: "",
    username: "",
    email: "",
    phone: "",
    website: "",
    address: {
      street: "",
      suite: "",
      city: "",
      zipcode: "",
      geo: {
        lat: "",
        lng: ""
      }
    },
    company: {
      name: "",
      catchPhrase: "",
      bs: ""
    }
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    if (name.startsWith("company.")) {
      const field = name.split(".")[1];
      setUser((prev) => ({
        ...prev,
        company: { ...prev.company, [field]: value }
      }));
    } else if (name.startsWith("address.")) {
      const field = name.split(".")[1];
      if (field === "lat" || field === "lng") {
        setUser((prev) => ({
          ...prev,
          address: {
            ...prev.address,
            geo: { ...prev.address.geo, [field]: value }
          }
        }));
      } else {
        setUser((prev) => ({
          ...prev,
          address: { ...prev.address, [field]: value }
        }));
      }
    } else {
      setUser((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Convert UserData to UserProps format (add required id)
    const userWithId: UserProps = {
      ...user,
      id: Date.now() // Generate a temporary ID, or use any number
    };
    
    onSubmit(userWithId);
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-gray-900 bg-opacity-50 flex justify-center items-center">
      <div className="bg-white rounded-lg p-8 shadow-lg w-full max-w-md max-h-[80vh] overflow-y-auto">
        <h2 className="text-2xl font-bold mb-4 text-gray-800">Add New User</h2>
        <form onSubmit={handleSubmit}>
          {/* Basic fields */}
          {["name", "username", "email", "phone", "website"].map((field) => (
            <div className="mb-4" key={field}>
              <label className="block text-gray-700 font-medium mb-2 capitalize">{field}</label>
              <input
                type="text"
                name={field}
                value={(user as any)[field]}
                onChange={handleChange}
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
          ))}

          {/* Address fields */}
          <h3 className="font-semibold text-gray-800 mb-2">Address</h3>
          {["street", "suite", "city", "zipcode"].map((field) => (
            <div className="mb-4" key={`address.${field}`}>
              <label className="block text-gray-700 font-medium mb-2 capitalize">{field}</label>
              <input
                type="text"
                name={`address.${field}`}
                value={user.address[field as keyof Omit<typeof user.address, 'geo'>]}
                onChange={handleChange}
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
          ))}

          {/* Geo coordinates */}
          <h4 className="font-medium text-gray-700 mb-2">Coordinates</h4>
          <div className="grid grid-cols-2 gap-4 mb-4">
            <div>
              <label className="block text-gray-700 font-medium mb-2">Latitude</label>
              <input
                type="text"
                name="address.lat"
                value={user.address.geo.lat}
                onChange={handleChange}
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div>
              <label className="block text-gray-700 font-medium mb-2">Longitude</label>
              <input
                type="text"
                name="address.lng"
                value={user.address.geo.lng}
                onChange={handleChange}
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
          </div>

          {/* Company fields */}
          <h3 className="font-semibold text-gray-800 mb-2">Company Info</h3>
          {["name", "catchPhrase", "bs"].map((field) => (
            <div className="mb-4" key={`company.${field}`}>
              <label className="block text-gray-700 font-medium mb-2 capitalize">{field}</label>
              <input
                type="text"
                name={`company.${field}`}
                value={user.company[field as keyof typeof user.company]}
                onChange={handleChange}
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
          ))}

          <div className="flex justify-between items-center mt-4">
            <button type="button" onClick={onClose} className="px-4 py-2 text-gray-600">Cancel</button>
            <button type="submit" className="px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition">Add User</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default UserModal;