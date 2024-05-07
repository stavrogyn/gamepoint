"use client"

import { SigninForm } from "@/shared/ui/sign-in-form/sign-in-form";
import { useUnit } from "effector-react";
import { authModel } from "./auth.model";

const isObject = (value) => {
  return value && typeof value === 'object' && !Array.isArray(value);
};

const RenderObject = ({ data }) => {
  return (
    <div>
      {Object.entries(data).map(([key, value]) => {
        // Check if the value is an object
        if (isObject(value)) {
          // Recursive call for nested objects
          return (
            <div key={key}>
              <strong>{key}:</strong>
              <RenderObject data={value} />
            </div>
          );
        }
        // Render key-value pair in a span if value is not an object
        return (
          <span key={key}>
            <strong>{key}:</strong> {value ? value.toString() : 'null'}
            <br />
          </span>
        );
      })}
    </div>
  );
};

export default function ReservationPage() {
  const {
    user,
  } = useUnit({
    user: authModel.outputs.user,
  });

  return (
    <div className="bg-black text-white">
      {!user && <SigninForm />}
      {user && <RenderObject data={user} />}
    </div>
  );
}
