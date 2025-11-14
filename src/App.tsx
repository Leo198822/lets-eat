function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-400 to-pink-500 flex items-center justify-center">
      <div className="bg-white rounded-lg shadow-2xl p-8 max-w-md">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">
          🍽️ Let's Eat!
        </h1>
        <p className="text-gray-600 text-lg">
          Votre application de recettes est prête !
        </p>
        <button className="mt-6 bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 px-6 rounded-lg transition-colors duration-200">
          Commencer
        </button>
      </div>
    </div>
  )
}

export default App