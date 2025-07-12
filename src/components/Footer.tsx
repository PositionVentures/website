export default function Footer() {
  const currentYear = new Date().getFullYear()
  
  return (
    <footer className="bg-white border-t border-gray-100">
      <div className="max-w-6xl mx-auto px-6 lg:px-8 py-12">
        <div className="text-center">
          <p className="text-gray-400 text-sm font-light">
            © {currentYear} Position Ventures
          </p>
        </div>
      </div>
    </footer>
  )
}