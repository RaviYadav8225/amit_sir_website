export default function RegisterPage() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-100">
      <div className="w-full max-w-md p-8 bg-white rounded shadow">
        <h1 className="text-2xl font-bold mb-6 text-center">Register</h1>
        <form className="space-y-4">
          <input type="text" placeholder="Username" className="w-full px-3 py-2 border rounded" />
          <input type="password" placeholder="Password" className="w-full px-3 py-2 border rounded" />
          <button type="submit" className="w-full bg-green-600 text-white py-2 rounded hover:bg-green-700">Register</button>
        </form>
      </div>
    </div>
  );
}
