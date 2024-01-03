import { useSelector } from "react-redux";
import { useEffect, useRef, useState } from "react";
import {
  getDownloadURL,
  getStorage,
  ref,
  uploadBytesResumable,
} from "firebase/storage";
import { app } from "../../firebase";

import React from 'react'


const Profile = () =>{

  const fileRef = useRef(null);
  const { currentUser } = useSelector((state) => state.user);
  const [file, setFile] = useState(undefined);
  const [filePerc, setFilePerc] = useState(0);
  const [fileUploadError, setFileUploadError] = useState(false);
  const [formData, setFormData] = useState({});

  // console.log(filePerc)
  // console.log(fileUploadError)
  // console.log(formData)

  useEffect(() => {
    if (file) {
      handleFileUpload(file);
    }
  }, [file]);

  const handleFileUpload = (file) => {
    const storage = getStorage(app);
    const fileName = new Date().getTime() + file.name;
    const storageRef = ref(storage, fileName);
    const uploadTask = uploadBytesResumable(storageRef, file);
    uploadTask.on(
      "state_changed",
      (snapshot) => {
        const progress =
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        // console.log('Upload is ' + progress + '% done')
        setFilePerc(Math.round(progress));
      },
      (error) => {
        setFileUploadError(true);
        console.log(error)
      },
      () => {
        getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) =>
          setFormData({ ...formData, avatar: downloadURL })
        );
      }
    );
  };
  return (
    <div className="m-auto max-w-lg p-3">
      <h1 className="text-center text-3xl font-semibold my-3">Profile</h1>
      <form action="" className="flex flex-col gap-4">
        <input
          type="file"
          hidden
          ref={fileRef}
          accept="image/*"
          onChange={(e) => setFile(e.target.files[0])}
        />
        <img
          src={formData.avatar || currentUser.avatar}
          onClick={() => fileRef.current.click()}
          alt="profile"
          className="rounded-full h-24 w-24 object-cover cursor-pointer self-center bg-[]"
        />
        <p className="text-sm self-center">
          {fileUploadError ? (
            <span className="text-red-700">(image must be less than 2 mb)</span>
          ) : filePerc > 0 && filePerc < 100 ? (
            <span>{`Uploaing ${filePerc}%`}</span>
          ) : filePerc === 100 ? (
            <span className="text-green-700">Image successfull uploaded!</span>
          ) : (
            ""
          )}
        </p>
        <input
          type="text"
          placeholder="Username"
          className="rounded-lg border p-3 outline-none"
          id="username"
        />
        <input
          type="email"
          placeholder="Email"
          className="rounded-lg border p-3 outline-none"
          id="email"
        />
        <input
          type="password"
          placeholder="Password"
          className="rounded-lg border p-3 outline-none"
          id="password"
        />
        <button className="p-3 rounded-lg bg-slate-700 hover:opacity-95 text-[#ffff] uppercase">
          Update
        </button>
        <button className="p-3 rounded-lg bg-green-700 hover:opacity-95 text-[#ffff] uppercase">
          Create Listing
        </button>

        <div className="flex items-center justify-between">
          <button className="p-3 rounded-lg  text-[#f00] text-[12px] sm:text-sm border-[2px]">
            Delete Account
          </button>
          <button className="p-3 rounded-lg  text-[#f00] text-[12px] sm:text-sm border-[2px] animate-bounce">
            Sign Out
          </button>
          <button className="p-3 rounded-lg  text-[#3faf37] border-[2px] border-green-600 text-[12px] sm:text-sm">
            Show Listing
          </button>
        </div>
      </form>
    </div>
  )
}

export default Profile