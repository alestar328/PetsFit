import React, { useState } from "react";
import { Mail, Eye, EyeOff, Apple, Facebook } from "lucide-react";

interface LoginProps {
  onClose: () => void;
}

const Login: React.FC<LoginProps> = ({ onClose }) => {
  const [email, setEmail] = useState("");
  const [pwd, setPwd] = useState("");
  const [showPwd, setShowPwd] = useState(false);
  const [loading, setLoading] = useState(false);

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      onClose(); // Close modal after successful login
    }, 800); // demo
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50" onClick={onClose}>
      <div className="bg-white rounded-2xl shadow-2xl w-full max-w-md mx-4 relative" onClick={(e) => e.stopPropagation()}>
        <div className="p-6">
          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition-colors"
            aria-label="Cerrar"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
          
          {/* Avatar */}
          <div className="flex justify-center">
            <div className="w-20 h-20 rounded-full border-4 border-orange-200 overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1548199973-03cce0bbc87b?q=80&w=300&auto=format&fit=crop"
                alt="Mascota"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Título */}
          <h1 className="mt-6 text-center text-2xl md:text-3xl font-semibold text-gray-800">
            Iniciar sesión
          </h1>

          {/* Formulario */}
          <form onSubmit={onSubmit} className="mt-8 space-y-4">
            {/* Email */}
            <label className="block">
              <div className="relative">
                <span className="absolute inset-y-0 left-0 pl-3 flex items-center text-gray-400">
                  <Mail className="w-5 h-5" />
                </span>
                <input
                  type="email"
                  required
                  placeholder="you@example.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full h-12 pl-11 pr-3 rounded-md border border-gray-300 focus:border-orange-400 focus:ring-2 focus:ring-orange-200 outline-none transition"
                />
              </div>
            </label>

            {/* Password */}
            <label className="block">
              <div className="relative">
                <input
                  type={showPwd ? "text" : "password"}
                  required
                  placeholder="••••••••"
                  value={pwd}
                  onChange={(e) => setPwd(e.target.value)}
                  className="w-full h-12 pl-4 pr-11 rounded-md border border-gray-300 focus:border-orange-400 focus:ring-2 focus:ring-orange-200 outline-none transition"
                />
                <button
                  type="button"
                  aria-label={showPwd ? "Ocultar contraseña" : "Mostrar contraseña"}
                  onClick={() => setShowPwd((s) => !s)}
                  className="absolute inset-y-0 right-0 pr-3 flex items-center text-gray-500 hover:text-gray-700"
                >
                  {showPwd ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                </button>
              </div>
            </label>

            {/* Submit */}
            <button
              type="submit"
              disabled={loading}
              className="w-full h-14 mt-2 rounded-full bg-orange-500 hover:bg-orange-600 disabled:opacity-60 text-white text-lg font-semibold shadow-sm transition"
            >
              {loading ? "Entrando..." : "Continuar"}
            </button>

            {/* Forgot */}
            <div className="text-center mt-2">
              <button
                type="button"
                className="text-teal-700 hover:text-teal-800 text-sm font-medium"
                onClick={() => alert("Recuperación de contraseña (demo)")}
              >
                He olvidado mi contraseña
              </button>
            </div>

            {/* Divider */}
            <div className="flex items-center gap-3 mt-6">
              <div className="flex-1 border-t border-gray-200" />
              <span className="text-gray-400 text-sm">o</span>
              <div className="flex-1 border-t border-gray-200" />
            </div>

            {/* Social buttons */}
            <div className="mt-4 grid grid-cols-1 gap-3 sm:grid-cols-3">
              {/* Google */}
              <button
                type="button"
                className="h-14 rounded-full border border-gray-300 bg-white hover:bg-gray-50 shadow-sm flex items-center justify-center gap-2"
              >
                <GoogleLogo />
                <span className="font-medium text-gray-800">Google</span>
              </button>

              {/* Facebook */}
              <button
                type="button"
                className="h-14 rounded-full border border-gray-300 bg-white hover:bg-gray-50 shadow-sm flex items-center justify-center gap-2"
              >
                <Facebook className="w-5 h-5 text-[#1877F2]" />
                <span className="font-medium text-gray-800">Facebook</span>
              </button>

              {/* Apple */}
              <button
                type="button"
                className="h-14 rounded-full border border-gray-300 bg-white hover:bg-gray-50 shadow-sm flex items-center justify-center gap-2"
              >
                <Apple className="w-5 h-5 text-black" />
                <span className="font-medium text-gray-800">Apple</span>
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;

/** Icono Google simple en SVG (para evitar dependencias extras) */
function GoogleLogo() {
  return (
    <svg viewBox="0 0 48 48" className="w-5 h-5">
      <path
        fill="#FFC107"
        d="M43.6 20.5H42V20H24v8h11.3C33.8 32.9 29.3 36 24 36c-6.6 0-12-5.4-12-12s5.4-12 12-12c3 0 5.7 1.1 7.8 3l5.7-5.7C33.5 6.1 28.9 4 24 4 12.9 4 4 12.9 4 24s8.9 20 20 20 20-8.9 20-20c0-1.3-.1-2.2-.4-3.5z"
      />
      <path fill="#FF3D00" d="M6.3 14.7l6.6 4.8C14.7 16.3 19 14 24 14c3 0 5.7 1.1 7.8 3l5.7-5.7C33.5 6.1 28.9 4 24 4 16.3 4 9.6 8.3 6.3 14.7z" />
      <path fill="#4CAF50" d="M24 44c5.2 0 9.9-2 13.4-5.2l-6.2-5.1C29 35.3 26.6 36 24 36c-5.2 0-9.6-3.3-11.3-7.9l-6.5 5C9.4 39.6 16.1 44 24 44z" />
      <path fill="#1976D2" d="M43.6 20.5H42V20H24v8h11.3c-1.3 4.1-5.1 8-11.3 8-5.2 0-9.6-3.3-11.3-7.9l-6.5 5C9.4 39.6 16.1 44 24 44c11.1 0 20-8.9 20-20 0-1.3-.1-2.2-.4-3.5z" />
    </svg>
  );
}