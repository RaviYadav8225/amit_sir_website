export default function LoginPage() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-100">
      <div className="w-full max-w-md p-8 bg-white rounded shadow">
        <h1 className="text-2xl font-bold mb-6 text-center">Login</h1>
        <form className="space-y-4">
          <input type="text" placeholder="Username" className="w-full px-3 py-2 border rounded" />
          <input type="password" placeholder="Password" className="w-full px-3 py-2 border rounded" />
          <button type="submit" className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700">Login</button>
        </form>
      </div>
    </div>
  );
}
