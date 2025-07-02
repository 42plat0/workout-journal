import { Outlet } from "react-router";

export function AuthLayout() {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-gray-50 px-4">
      {/* Optional header/logo */}
      <header className="mb-8 text-center">
        <h1 className="text-3xl font-bold text-blue-600">Workout Tracker</h1>
        <p className="text-gray-600 mt-2">Please login or register to continue</p>
      </header>

      {/* Card container */}
      <main className="w-full max-w-md bg-gray rounded-lg shadow-md p-8">
        <Outlet />
      </main>
    </div>
  );
}
