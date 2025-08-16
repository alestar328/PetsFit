import { motion } from "framer-motion";
import aboutUs from '../assets/aboutUs.png';
import { Leaf, UtensilsCrossed, Factory, Package, HeartHandshake, Dog, Cat } from "lucide-react";

export default function NuestraMision() {
  return (
    <div className="min-h-screen bg-[#f5f1e8] text-[#4a3728]">
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute -top-24 -right-24 w-72 h-72 rounded-full blur-3xl opacity-20 bg-orange-300" />
          <div className="absolute -bottom-24 -left-24 w-72 h-72 rounded-full blur-3xl opacity-20 bg-amber-200" />
        </div>

        <div className="max-w-7xl mx-auto px-6 md:px-8 py-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <span className="inline-flex items-center gap-2 text-sm tracking-wide uppercase text-orange-600 bg-orange-100 px-3 py-1 rounded-full">
              <Leaf className="w-4 h-4" /> Nuestra misión
            </span>
            <h1 className="mt-4 text-3xl md:text-5xl font-serif font-extrabold leading-tight">
              Nutrición fresca, procesos cuidados, <span className="text-orange-600">amor por cada mascota</span>
            </h1>
            <p className="mt-4 md:text-lg text-[#6b4c3a] max-w-3xl mx-auto">
              Seleccionamos ingredientes de calidad, fabricamos con estándares altos y envasamos de forma segura para
              llevar comida fresca a perros y gatos. Transparencia en cada paso.
            </p>
          </motion.div>

          {/* Media destacada (vídeo o imagen) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mt-10 aspect-video rounded-2xl overflow-hidden shadow-2xl bg-white"
            aria-label="Video del proceso de elaboración"
          >
            {/* Reemplaza src por tu video/imágen real. */}
            <img src={aboutUs} alt="Video del proceso de elaboración" className="w-full h-full object-cover" />
          </motion.div>
        </div>
      </section>

      {/* Pasos del proceso */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            {/* Paso 1 */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5 }}
              className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition"
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="p-3 rounded-xl bg-green-100">
                    <UtensilsCrossed className="w-6 h-6 text-green-700" />
                  </div>
                  <h3 className="text-xl font-bold">Selección de alimentos de calidad</h3>
                </div>
              </div>
              <p className="mt-4 text-[#6b4c3a]">
                Trabajamos con proveedores de confianza y materias primas frescas (pollo, ternera, pescado). Cada lote
                pasa por controles sensoriales y de trazabilidad.
              </p>
            </motion.div>

            {/* Paso 2 */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, delay: 0.05 }}
              className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition"
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="p-3 rounded-xl bg-blue-100">
                    <Factory className="w-6 h-6 text-blue-700" />
                  </div>
                  <h3 className="text-xl font-bold">Fabricación y envasado</h3>
                </div>
              </div>
              <p className="mt-4 text-[#6b4c3a]">
                Cocción controlada para preservar nutrientes y sabor. Envasamos de forma segura (450 g por bolsa) para
                garantizar frescura y trazabilidad hasta tu hogar.
              </p>
              <div className="mt-4 flex items-center gap-2 text-sm text-[#6b4c3a]">
                <Package className="w-4 h-4" />
                <span>Sellado hermético • Etiquetado claro • Cadena de frío</span>
              </div>
            </motion.div>

            {/* Paso 3 */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition"
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="p-3 rounded-xl bg-rose-100">
                    <HeartHandshake className="w-6 h-6 text-rose-700" />
                  </div>
                  <h3 className="text-xl font-bold">Cuidado a perros y gatos</h3>
                </div>
              </div>
              <p className="mt-4 text-[#6b4c3a]">
                Diseñamos recetas específicas para <strong>perros</strong> y <strong>gatos</strong>, con porciones
                adecuadas y guía nutricional. Estamos comprometidos con su bienestar a largo plazo.
              </p>
              <div className="mt-4 flex items-center gap-3 text-[#6b4c3a]">
                <Dog className="w-5 h-5" />
                <Cat className="w-5 h-5" />
                <span className="text-sm">Recetas por especie • Apoyo a tutores • Transparencia</span>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Bloque de valores/compromisos */}
      <section className="py-12">
        <div className="max-w-5xl mx-auto px-6 md:px-8">
          <div className="bg-white rounded-2xl p-8 shadow-lg">
            <h2 className="text-2xl md:text-3xl font-serif font-bold text-center">Nuestro compromiso</h2>
            <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
              <div>
                <p className="font-bold">Ingredientes reales</p>
                <p className="text-sm text-[#6b4c3a] mt-1">Sin rellenos innecesarios ni artificios.</p>
              </div>
              <div>
                <p className="font-bold">Procesos seguros</p>
                <p className="text-sm text-[#6b4c3a] mt-1">Cocción y envasado con estándares altos.</p>
              </div>
              <div>
                <p className="font-bold">Bienestar animal</p>
                <p className="text-sm text-[#6b4c3a] mt-1">Nutrición equilibrada para cada especie.</p>
              </div>
            </div>

            <div className="mt-8 flex flex-col md:flex-row items-center justify-center gap-4">
              <a
                href="#tienda"
                className="px-6 py-3 rounded-full bg-orange-500 hover:bg-orange-600 text-white font-semibold shadow-md transition"
              >
                Conoce nuestros productos
              </a>
              <a
                href="#calculadora"
                className="px-6 py-3 rounded-full bg-gray-200 hover:bg-gray-300 text-[#4a3728] font-semibold transition"
              >
                Calcula la porción ideal
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ breve (opcional) */}
      <section className="py-10">
        <div className="max-w-4xl mx-auto px-6 md:px-8">
          <details className="bg-white rounded-xl p-5 shadow-sm mb-3">
            <summary className="cursor-pointer font-semibold">¿De dónde provienen los ingredientes?</summary>
            <p className="mt-2 text-[#6b4c3a]">
              Trabajamos con proveedores locales certificados y auditados, priorizando frescura y trazabilidad.
            </p>
          </details>
          <details className="bg-white rounded-xl p-5 shadow-sm mb-3">
            <summary className="cursor-pointer font-semibold">¿Cómo conservan la frescura?</summary>
            <p className="mt-2 text-[#6b4c3a]">
              Cocción controlada y cadena de frío. El envasado sellado mantiene textura y nutrientes.
            </p>
          </details>
          <details className="bg-white rounded-xl p-5 shadow-sm">
            <summary className="cursor-pointer font-semibold">¿Tienen recetas para perros y gatos?</summary>
            <p className="mt-2 text-[#6b4c3a]">
              Sí, desarrollamos formulaciones específicas por especie, considerando requerimientos nutricionales.
            </p>
          </details>
        </div>
      </section>
    </div>
  );
}
