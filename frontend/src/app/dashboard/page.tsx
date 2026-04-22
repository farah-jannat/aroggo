'use client'
import { useRouter } from "next/navigation";
import React from "react";

const Dashboard = () => {
  const router = useRouter();
  return (
    <div>
      <h3>List of Products</h3>
      <span onClick={() => router.push(`/dashboard/${1}`)}>
        go to a product id to update
      </span>
    </div>
  );
};

export default Dashboard;
