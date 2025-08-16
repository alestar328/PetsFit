import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Dog, Cat, Check, X } from 'lucide-react';

interface BudgetCalculatorProps {
    onClose: () => void;
}

interface FormData {
    petType: 'perro' | 'gato' | '';
    breed: string;
    name: string;
    birthYear: string;
    birthMonth: string;
    birthDay: string;
    sex: 'macho' | 'hembra' | '';
    weight: string;
    isNeutered: 'si' | 'no' | '';
    intolerances: string[];
    mealsPerDay: number | '';
}

type PetType = 'perro' | 'gato';

const BudgetCalculator: React.FC<BudgetCalculatorProps> = ({ onClose }) => {
    const [currentStep, setCurrentStep] = useState<number>(1);
    const [formData, setFormData] = useState<FormData>({
        petType: '',
        breed: '',
        name: '',
        birthYear: '',
        birthMonth: '',
        birthDay: '',
        sex: '',
        weight: '',
        isNeutered: '',
        intolerances: [],
        mealsPerDay: ''
    });

    const totalSteps: number = 6;

    // Función para actualizar datos del formulario
    const updateFormData = <K extends keyof FormData>(field: K, value: FormData[K]): void => {
        setFormData(prev => ({
            ...prev,
            [field]: value
        }));
    };

    // Función para manejar intolerancias múltiples
    const toggleIntolerance = (intolerance: string): void => {
        setFormData(prev => ({
            ...prev,
            intolerances: prev.intolerances.includes(intolerance)
                ? prev.intolerances.filter(item => item !== intolerance)
                : [...prev.intolerances, intolerance]
        }));
    };

    const nextStep = (): void => {
        if (currentStep < totalSteps) {
            setCurrentStep(currentStep + 1);
        }
    };

    const prevStep = (): void => {
        if (currentStep > 1) {
            setCurrentStep(currentStep - 1);
        }
    };

    // Opciones para los selects
    const breeds: Record<PetType, string[]> = {
        perro: ['Labrador', 'Golden Retriever', 'Pastor Alemán', 'Bulldog Francés', 'Chihuahua', 'Border Collie', 'Beagle', 'Otro'],
        gato: ['Persa', 'Siamés', 'Maine Coon', 'Británico de Pelo Corto', 'Ragdoll', 'Bengalí', 'Europeo', 'Otro']
    };

    const intoleranceOptions: string[] = ['Pollo', 'Ternera', 'Pescado', 'Cereales', 'Lácteos', 'Huevos', 'Ninguna'];

    const months: string[] = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 
                              'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'];

    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
            <div className="bg-[#f5f1e8] rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
                {/* Header con botón cerrar */}
                <div className="sticky top-0 bg-white rounded-t-2xl shadow-lg p-6 border-b">
                    <div className="flex justify-between items-center">
                        <h1 className="text-2xl font-serif font-bold text-[#4a3728]">
                            Calculadora de Presupuesto
                        </h1>
                        <button
                            onClick={onClose}
                            className="text-gray-500 hover:text-gray-700 text-2xl font-bold"
                        >
                            ×
                        </button>
                    </div>
                    <p className="text-[#6b4c3a] mt-2">
                        Paso {currentStep} de {totalSteps}
                    </p>
                    
                    {/* Barra de progreso */}
                    <div className="w-full bg-gray-200 rounded-full h-2 mt-4">
                        <div 
                            className="bg-orange-500 h-2 rounded-full transition-all duration-300"
                            style={{ width: `${(currentStep / totalSteps) * 100}%` }}
                        ></div>
                    </div>
                </div>

                {/* Contenido del formulario */}
                <div className="p-6">

                    {/* Step 1: Tipo de mascota y raza */}
                    {currentStep === 1 && (
                        <div className="space-y-6">
                            <h2 className="text-2xl font-serif font-bold text-[#4a3728] text-center">
                                ¿Qué tipo de mascota tienes?
                            </h2>
                            
                            {/* Selección perro/gato */}
                            <div className="grid grid-cols-2 gap-4">
                                <button
                                    onClick={() => updateFormData('petType', 'perro')}
                                    className={`p-6 rounded-xl border-2 transition-all duration-300 ${
                                        formData.petType === 'perro'
                                            ? 'border-orange-500 bg-orange-50'
                                            : 'border-gray-200 hover:border-gray-300'
                                    }`}
                                >
                                    <Dog className="w-12 h-12 mx-auto mb-3 text-[#4a3728]" />
                                    <p className="font-bold text-[#4a3728]">Perro</p>
                                </button>
                                
                                <button
                                    onClick={() => updateFormData('petType', 'gato')}
                                    className={`p-6 rounded-xl border-2 transition-all duration-300 ${
                                        formData.petType === 'gato'
                                            ? 'border-orange-500 bg-orange-50'
                                            : 'border-gray-200 hover:border-gray-300'
                                    }`}
                                >
                                    <Cat className="w-12 h-12 mx-auto mb-3 text-[#4a3728]" />
                                    <p className="font-bold text-[#4a3728]">Gato</p>
                                </button>
                            </div>

                            {/* Selección de raza */}
                            {formData.petType && (
                                <div className="space-y-3">
                                    <label className="block text-[#4a3728] font-medium">
                                        ¿Qué raza es?
                                    </label>
                                    <select
                                        value={formData.breed}
                                        onChange={(e) => updateFormData('breed', e.target.value)}
                                        className="w-full p-4 border border-gray-300 rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                                    >
                                        <option value="">Selecciona una raza</option>
                                        {breeds[formData.petType as PetType]?.map((breed) => (
                                            <option key={breed} value={breed}>{breed}</option>
                                        ))}
                                    </select>
                                </div>
                            )}
                        </div>
                    )}

                    {/* Step 2: Nombre y fecha de nacimiento */}
                    {currentStep === 2 && (
                        <div className="space-y-6">
                            <h2 className="text-2xl font-serif font-bold text-[#4a3728] text-center">
                                Cuéntanos sobre tu {formData.petType}
                            </h2>
                            
                            {/* Nombre */}
                            <div className="space-y-3">
                                <label className="block text-[#4a3728] font-medium">
                                    ¿Cómo se llama?
                                </label>
                                <input
                                    type="text"
                                    value={formData.name}
                                    onChange={(e) => updateFormData('name', e.target.value)}
                                    placeholder="Nombre de tu mascota"
                                    className="w-full p-4 border border-gray-300 rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                                />
                            </div>

                            {/* Fecha de nacimiento */}
                            <div className="space-y-3">
                                <label className="block text-[#4a3728] font-medium">
                                    ¿Cuándo nació?
                                </label>
                                <div className="grid grid-cols-3 gap-3">
                                    <select
                                        value={formData.birthDay}
                                        onChange={(e) => updateFormData('birthDay', e.target.value)}
                                        className="p-4 border border-gray-300 rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                                    >
                                        <option value="">Día</option>
                                        {Array.from({length: 31}, (_, i) => (
                                            <option key={i+1} value={i+1}>{i+1}</option>
                                        ))}
                                    </select>
                                    
                                    <select
                                        value={formData.birthMonth}
                                        onChange={(e) => updateFormData('birthMonth', e.target.value)}
                                        className="p-4 border border-gray-300 rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                                    >
                                        <option value="">Mes</option>
                                        {months.map((month, index) => (
                                            <option key={index+1} value={index+1}>{month}</option>
                                        ))}
                                    </select>
                                    
                                    <select
                                        value={formData.birthYear}
                                        onChange={(e) => updateFormData('birthYear', e.target.value)}
                                        className="p-4 border border-gray-300 rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                                    >
                                        <option value="">Año</option>
                                        {Array.from({length: 20}, (_, i) => {
                                            const year = new Date().getFullYear() - i;
                                            return <option key={year} value={year}>{year}</option>
                                        })}
                                    </select>
                                </div>
                            </div>
                        </div>
                    )}

                    {/* Step 3: Sexo */}
                    {currentStep === 3 && (
                        <div className="space-y-6">
                            <h2 className="text-2xl font-serif font-bold text-[#4a3728] text-center">
                                ¿Cuál es el sexo de {formData.name || 'tu mascota'}?
                            </h2>
                            
                            <div className="grid grid-cols-2 gap-4">
                                <button
                                    onClick={() => updateFormData('sex', 'macho')}
                                    className={`p-6 rounded-xl border-2 transition-all duration-300 ${
                                        formData.sex === 'macho'
                                            ? 'border-orange-500 bg-orange-50'
                                            : 'border-gray-200 hover:border-gray-300'
                                    }`}
                                >
                                    <p className="font-bold text-[#4a3728] text-lg">♂ Macho</p>
                                </button>
                                
                                <button
                                    onClick={() => updateFormData('sex', 'hembra')}
                                    className={`p-6 rounded-xl border-2 transition-all duration-300 ${
                                        formData.sex === 'hembra'
                                            ? 'border-orange-500 bg-orange-50'
                                            : 'border-gray-200 hover:border-gray-300'
                                    }`}
                                >
                                    <p className="font-bold text-[#4a3728] text-lg">♀ Hembra</p>
                                </button>
                            </div>
                        </div>
                    )}

                    {/* Step 4: Peso y esterilización */}
                    {currentStep === 4 && (
                        <div className="space-y-6">
                            <h2 className="text-2xl font-serif font-bold text-[#4a3728] text-center">
                                Información física
                            </h2>
                            
                            {/* Peso */}
                            <div className="space-y-3">
                                <label className="block text-[#4a3728] font-medium">
                                    ¿Cuánto pesa? (en kg)
                                </label>
                                <input
                                    type="number"
                                    value={formData.weight}
                                    onChange={(e) => updateFormData('weight', e.target.value)}
                                    placeholder="Ej: 15"
                                    min="0"
                                    step="0.1"
                                    className="w-full p-4 border border-gray-300 rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                                />
                            </div>

                            {/* Esterilización */}
                            <div className="space-y-3">
                                <label className="block text-[#4a3728] font-medium">
                                    ¿Está esterilizado/a?
                                </label>
                                <div className="grid grid-cols-2 gap-3">
                                    <button
                                        onClick={() => updateFormData('isNeutered', 'si')}
                                        className={`p-4 rounded-xl border-2 transition-all duration-300 ${
                                            formData.isNeutered === 'si'
                                                ? 'border-orange-500 bg-orange-50'
                                                : 'border-gray-200 hover:border-gray-300'
                                        }`}
                                    >
                                        <Check className="w-6 h-6 mx-auto mb-2 text-green-600" />
                                        <p className="font-medium text-[#4a3728]">Sí</p>
                                    </button>
                                    
                                    <button
                                        onClick={() => updateFormData('isNeutered', 'no')}
                                        className={`p-4 rounded-xl border-2 transition-all duration-300 ${
                                            formData.isNeutered === 'no'
                                                ? 'border-orange-500 bg-orange-50'
                                                : 'border-gray-200 hover:border-gray-300'
                                        }`}
                                    >
                                        <X className="w-6 h-6 mx-auto mb-2 text-red-600" />
                                        <p className="font-medium text-[#4a3728]">No</p>
                                    </button>
                                </div>
                            </div>
                        </div>
                    )}

                    {/* Step 5: Intolerancias */}
                    {currentStep === 5 && (
                        <div className="space-y-6">
                            <h2 className="text-2xl font-serif font-bold text-[#4a3728] text-center">
                                ¿Tiene alguna intolerancia alimentaria?
                            </h2>
                            <p className="text-center text-[#6b4c3a]">
                                Puedes seleccionar varias opciones
                            </p>
                            
                            <div className="grid grid-cols-2 gap-3">
                                {intoleranceOptions.map((intolerance) => (
                                    <button
                                        key={intolerance}
                                        onClick={() => toggleIntolerance(intolerance)}
                                        className={`p-4 rounded-xl border-2 transition-all duration-300 ${
                                            formData.intolerances.includes(intolerance)
                                                ? 'border-orange-500 bg-orange-50'
                                                : 'border-gray-200 hover:border-gray-300'
                                        }`}
                                    >
                                        <p className="font-medium text-[#4a3728]">{intolerance}</p>
                                        {formData.intolerances.includes(intolerance) && (
                                            <Check className="w-5 h-5 mx-auto mt-2 text-orange-500" />
                                        )}
                                    </button>
                                ))}
                            </div>
                        </div>
                    )}

                    {/* Step 6: Comidas al día y resumen */}
                    {currentStep === 6 && (
                        <div className="space-y-6">
                            <h2 className="text-2xl font-serif font-bold text-[#4a3728] text-center">
                                ¿Cuántas veces come al día?
                            </h2>
                            
                            <div className="grid grid-cols-4 gap-3 mb-8">
                                {[1, 2, 3, 4].map((meals) => (
                                    <button
                                        key={meals}
                                        onClick={() => updateFormData('mealsPerDay', meals)}
                                        className={`p-4 rounded-xl border-2 transition-all duration-300 ${
                                            formData.mealsPerDay === meals
                                                ? 'border-orange-500 bg-orange-50'
                                                : 'border-gray-200 hover:border-gray-300'
                                        }`}
                                    >
                                        <p className="font-bold text-2xl text-[#4a3728]">{meals}</p>
                                        <p className="text-sm text-[#6b4c3a]">
                                            {meals === 1 ? 'vez' : 'veces'}
                                        </p>
                                    </button>
                                ))}
                            </div>

                            {/* Resumen */}
                            <div className="bg-gray-50 rounded-xl p-6">
                                <h3 className="text-xl font-serif font-bold text-[#4a3728] mb-4">
                                    Resumen de {formData.name}
                                </h3>
                                <div className="space-y-2 text-sm">
                                    <p><span className="font-medium">Tipo:</span> {formData.petType}</p>
                                    <p><span className="font-medium">Raza:</span> {formData.breed}</p>
                                    <p><span className="font-medium">Fecha de nacimiento:</span> {formData.birthDay}/{formData.birthMonth}/{formData.birthYear}</p>
                                    <p><span className="font-medium">Sexo:</span> {formData.sex}</p>
                                    <p><span className="font-medium">Peso:</span> {formData.weight} kg</p>
                                    <p><span className="font-medium">Esterilizado:</span> {formData.isNeutered}</p>
                                    <p><span className="font-medium">Intolerancias:</span> {formData.intolerances.join(', ') || 'Ninguna'}</p>
                                    <p><span className="font-medium">Comidas al día:</span> {formData.mealsPerDay}</p>
                                </div>
                            </div>
                        </div>
                    )}

                    {/* Botones de navegación */}
                    <div className="flex justify-between mt-8">
                        <button
                            onClick={prevStep}
                            disabled={currentStep === 1}
                            className={`flex items-center space-x-2 px-6 py-3 rounded-xl transition-all duration-300 ${
                                currentStep === 1
                                    ? 'bg-gray-200 text-gray-400 cursor-not-allowed'
                                    : 'bg-gray-100 text-[#4a3728] hover:bg-gray-200'
                            }`}
                        >
                            <ChevronLeft className="w-5 h-5" />
                            <span>Anterior</span>
                        </button>

                        <button
                            onClick={nextStep}
                            disabled={currentStep === totalSteps}
                            className={`flex items-center space-x-2 px-6 py-3 rounded-xl transition-all duration-300 ${
                                currentStep === totalSteps
                                    ? 'bg-green-500 text-white hover:bg-green-600'
                                    : 'bg-orange-500 text-white hover:bg-orange-600'
                            }`}
                        >
                            <span>{currentStep === totalSteps ? 'Calcular Precio' : 'Siguiente'}</span>
                            <ChevronRight className="w-5 h-5" />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BudgetCalculator;