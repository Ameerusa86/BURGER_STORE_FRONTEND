"use client";

import toast, { Toaster } from "react-hot-toast";

const notify = () => toast("Added to cart!");

const ToasterComponent = () => {
  return (
    <div>
      <button onClick={notify}>Make me a toast</button>
      <Toaster />
    </div>
  );
};

export default ToasterComponent;
