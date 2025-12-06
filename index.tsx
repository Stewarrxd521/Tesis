import React, { useState, useEffect, useRef } from 'react';
import { createRoot } from 'react-dom/client';
import { ChevronRight, ChevronLeft, Maximize, Minimize, BookOpen, Target, Activity, CheckCircle, BarChart2, Zap, Scale, Network, FileText, List, BrainCircuit, TrendingUp, AlertTriangle, Code, History, GitCommit } from 'lucide-react';

// --- Types & Helper Components ---

const Latex = ({ children, block = false }: { children: any, block?: boolean }) => {
  const containerRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    if (containerRef.current && (window as any).katex) {
      (window as any).katex.render(children, containerRef.current, {
        throwOnError: false,
        displayMode: block
      });
    }
  }, [children, block]);

  return <span ref={containerRef} className={block ? "block text-center my-4" : "inline"} />;
};

const SlideContainer = ({ children, title, subtitle, slideNumber, totalSlides }: any) => (
  <div className="h-screen w-full bg-slate-50 flex flex-col overflow-hidden relative text-slate-800">
    {/* Header */}
    <div className="bg-[#154360] text-white px-8 py-5 shadow-md flex justify-between items-center z-10">
      <div className="flex flex-col">
        <h1 className="text-xl md:text-2xl font-bold tracking-tight">{title}</h1>
        {subtitle && <h2 className="text-xs md:text-sm text-blue-200 mt-1 uppercase tracking-wider">{subtitle}</h2>}
      </div>
      <div className="flex items-center gap-4">
        <div className="text-right hidden md:block">
          <p className="text-xs font-bold opacity-80">Universidad Distrital</p>
          <p className="text-[10px] opacity-60">Francisco José de Caldas</p>
        </div>
        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/66/Escudo_Universidad_Distrital_Francisco_Jos%C3%A9_de_Caldas.svg/1200px-Escudo_Universidad_Distrital_Francisco_Jos%C3%A9_de_Caldas.svg.png" alt="Logo UD" className="h-10 md:h-12 w-auto bg-white rounded-full p-1" />
      </div>
    </div>

    {/* Body */}
    <div className="flex-1 p-6 md:p-10 overflow-y-auto flex flex-col scrollbar-thin scrollbar-thumb-slate-300">
      <div className="max-w-7xl mx-auto w-full h-full flex flex-col justify-center">
        {children}
      </div>
    </div>

    {/* Footer */}
    <div className="bg-slate-200 py-2 px-6 flex justify-between items-center text-[10px] md:text-xs text-slate-500 border-t border-slate-300">
      <span>Desarrollo de una metodología de optimización convexa para estimación de pérdidas</span>
      <span className="font-mono">{slideNumber} / {totalSlides}</span>
    </div>
  </div>
);

// --- SLIDES ---

const TitleSlide = () => (
  <div className="flex flex-col items-center justify-center h-full text-center space-y-8 animate-fade-in">
    <div className="mb-4">
       <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/66/Escudo_Universidad_Distrital_Francisco_Jos%C3%A9_de_Caldas.svg/1200px-Escudo_Universidad_Distrital_Francisco_Jos%C3%A9_de_Caldas.svg.png" alt="Logo UD" className="h-24 md:h-32 w-auto inline-block drop-shadow-xl" />
    </div>
    
    <div className="space-y-4 max-w-5xl mx-auto">
      <h2 className="text-sm font-bold tracking-[0.2em] text-slate-500 uppercase">Sustentación de Monografía</h2>
      <h1 className="text-3xl md:text-5xl font-extrabold text-[#154360] leading-tight">
        Desarrollo de una metodología de optimización de dominio convexo para la estimación de coeficientes de pérdidas
      </h1>
      <div className="h-1.5 w-24 bg-[#d35400] rounded-full mx-auto my-6"></div>
      <p className="text-lg md:text-xl text-slate-600 font-light">
        En sistemas de transmisión considerando mediciones de potencia
      </p>
    </div>
    
    <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-8 mt-12 text-left bg-white/80 backdrop-blur-sm p-8 rounded-2xl shadow-xl border border-slate-200">
      <div className="space-y-1">
        <p className="text-[10px] font-bold text-[#d35400] uppercase tracking-wider mb-2 flex items-center gap-1"><BrainCircuit size={12}/> Autores</p>
        <p className="text-base md:text-lg font-bold text-slate-800">Johan Andres Leon Llanos</p>
        <p className="text-base md:text-lg font-bold text-slate-800">Stewar Stevens Vanegas Arias</p>
      </div>
      <div className="space-y-1">
        <p className="text-[10px] font-bold text-[#154360] uppercase tracking-wider mb-2 flex items-center gap-1"><Target size={12}/> Director</p>
        <p className="text-base md:text-lg font-bold text-slate-800">Oscar Danilo Montoya Giraldo, PhD</p>
        <p className="text-xs text-slate-500 mt-1">Facultad de Ingeniería • Proyecto Curricular de Ingeniería Eléctrica</p>
      </div>
    </div>
    <p className="text-xs text-slate-400 mt-12 font-mono">Bogotá D.C., 4 de Diciembre de 2025</p>
  </div>
);

const AgendaSlide = () => (
  <div className="h-full flex items-center justify-center">
    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-5xl w-full">
      <div className="flex flex-col justify-center space-y-6">
        <h3 className="text-4xl font-bold text-[#154360] mb-4 border-l-8 border-[#d35400] pl-6">Contenido</h3>
        <p className="text-slate-600 pl-8 text-lg">Estructura de la sustentación</p>
      </div>
      <div className="space-y-3">
        {[
          "Contexto General",
          "Estado del Arte (Revisión Literaria)",
          "Planteamiento del Problema",
          "Justificación",
          "Objetivos",
          "Modelo Matemático (SDP)",
          "Metodología Experimental",
          "Implementación Algorítmica (CVX)",
          "Análisis de Resultados",
          "Conclusiones"
        ].map((item, idx) => (
          <div key={idx} className="flex items-center gap-4 bg-white p-3 rounded-lg shadow-sm border border-slate-100 hover:translate-x-2 transition-transform duration-300">
            <span className="flex-shrink-0 w-8 h-8 rounded-full bg-[#154360] text-white flex items-center justify-center font-bold text-sm">
              {idx + 1}
            </span>
            <span className="text-slate-700 font-medium text-sm">{item}</span>
          </div>
        ))}
      </div>
    </div>
  </div>
);

const ContextSlide = () => (
  <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 h-full items-center">
    <div className="space-y-8">
      <div>
        <h3 className="text-2xl font-bold text-[#154360] mb-4 flex items-center gap-2">
          <BookOpen className="text-[#d35400]" /> El Problema de las Pérdidas
        </h3>
        <p className="text-slate-700 text-lg leading-relaxed text-justify">
          En la operación de sistemas de potencia, las pérdidas técnicas (efecto Joule, desbalance) impactan directamente la <strong>eficiencia energética</strong> y el <strong>despacho económico</strong>.
        </p>
      </div>
      
      <div className="bg-white p-8 rounded-xl shadow-lg border-l-4 border-[#154360]">
        <h4 className="font-bold text-slate-800 mb-4 border-b pb-2">Modelo Clásico (Kron)</h4>
        <Latex block>{`P_L = P_G^T B_a P_G + P_G^T B_b + B_c`}</Latex>
        <div className="mt-4 text-sm text-slate-600 space-y-2">
          <p>Esta ecuación cuadrática simplifica el cálculo de pérdidas <Latex>{`P_L`}</Latex> sin resolver el Flujo de Potencia completo en cada iteración del despacho económico.</p>
          <ul className="list-disc pl-5 mt-2 space-y-1">
             <li><Latex>{`B_a`}</Latex>: Efectos cuadráticos y acoplamientos.</li>
             <li><Latex>{`B_b, B_c`}</Latex>: Términos lineales y constantes (pérdidas en vacío).</li>
          </ul>
        </div>
      </div>
    </div>

    <div className="space-y-6">
       <div className="bg-slate-50 p-6 rounded-xl border border-slate-200">
         <h4 className="font-bold text-[#154360] mb-3">La Realidad Operativa</h4>
         <p className="text-slate-600 mb-4 text-justify">
           Los métodos clásicos asumen condiciones estáticas. Sin embargo, los sistemas modernos enfrentan desafíos que los modelos determinísticos no capturan bien:
         </p>
         <ul className="space-y-3">
           <li className="flex gap-3">
             <TrendingUp className="text-[#d35400] flex-shrink-0" />
             <span className="text-sm text-slate-700"><strong>Variabilidad Estocástica:</strong> Demanda cambiante y generación renovable intermitente (Huang et al., 2018).</span>
           </li>
           <li className="flex gap-3">
             <Network className="text-[#d35400] flex-shrink-0" />
             <span className="text-sm text-slate-700"><strong>Cambios Topológicos:</strong> Reconfiguraciones de red que invalidan los coeficientes estáticos (Exposito et al., 2016).</span>
           </li>
           <li className="flex gap-3">
             <AlertTriangle className="text-[#d35400] flex-shrink-0" />
             <span className="text-sm text-slate-700"><strong>Incertidumbre en Medición:</strong> Ruido y datos atípicos que sesgan la estimación (Kekatos et al., 2015).</span>
           </li>
         </ul>
       </div>
    </div>
  </div>
);

const StateOfTheArtSlide = () => (
  <div className="h-full flex flex-col">
    <h3 className="text-2xl font-bold text-[#154360] mb-6 flex items-center gap-2">
      <History /> Estado del Arte y Referentes
    </h3>
    
    <div className="flex-1 relative overflow-y-auto pr-4">
      {/* Vertical Line */}
      <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-slate-300"></div>

      <div className="space-y-8 pl-14 relative">
        
        {/* Item 1 */}
        <div className="relative">
          <div className="absolute -left-[3.25rem] bg-[#154360] text-white text-xs font-bold px-2 py-1 rounded">1964</div>
          <div className="bg-white p-4 rounded-lg shadow-sm border border-slate-200">
            <h4 className="font-bold text-[#154360]">Happ et al.</h4>
            <p className="text-sm text-slate-600 italic mb-1">"Direct Calculation of Transmission Loss Formula"</p>
            <p className="text-xs text-slate-500 text-justify">
              Introducción de los coeficientes <Latex>B</Latex>. Uso de ecuaciones cuadráticas para modelar pérdidas en sistemas simplificados. Sentó las bases teóricas.
            </p>
          </div>
        </div>

        {/* Item 2 */}
        <div className="relative">
          <div className="absolute -left-[3.25rem] bg-blue-600 text-white text-xs font-bold px-2 py-1 rounded">2018</div>
          <div className="bg-white p-4 rounded-lg shadow-sm border border-slate-200">
            <h4 className="font-bold text-[#154360]">Liu et al. & Ram Jethmalani et al.</h4>
            <p className="text-sm text-slate-600 italic mb-1">Modelos Adaptativos</p>
            <p className="text-xs text-slate-500 text-justify">
              Propusieron fórmulas mejoradas para <strong>generación distribuida</strong>. Liu incorporó modelos probabilísticos para capturar la volatilidad de fuentes renovables, superando la rigidez del modelo clásico.
            </p>
          </div>
        </div>

        {/* Item 3 */}
        <div className="relative">
          <div className="absolute -left-[3.25rem] bg-blue-500 text-white text-xs font-bold px-2 py-1 rounded">2020</div>
          <div className="bg-white p-4 rounded-lg shadow-sm border border-slate-200">
            <h4 className="font-bold text-[#154360]">Talbi et al.</h4>
            <p className="text-sm text-slate-600 italic mb-1">Optimización Multiobjetivo</p>
            <p className="text-xs text-slate-500 text-justify">
              Uso de algoritmos BFGS para resolver problemas económicos y ambientales simultáneamente. Muestra la necesidad de eficiencia computacional en sistemas complejos (IEEE 118).
            </p>
          </div>
        </div>

        {/* Item 4 */}
        <div className="relative">
          <div className="absolute -left-[3.25rem] bg-[#d35400] text-white text-xs font-bold px-2 py-1 rounded">2024</div>
          <div className="bg-white p-4 rounded-lg shadow-md border-l-4 border-[#d35400]">
            <h4 className="font-bold text-[#d35400]">Montoya & Gil-González</h4>
            <p className="text-sm text-slate-600 italic mb-1">Optimización Convexa (Base de esta Tesis)</p>
            <p className="text-xs text-slate-500 text-justify">
              Proponen el uso de <strong>Programación Semidefinida (SDP)</strong> basada en mediciones. Garantiza convergencia global y coherencia física (pérdidas no negativas). Esta tesis expande este trabajo incorporando diferentes normas vectoriales.
            </p>
          </div>
        </div>

      </div>
    </div>
  </div>
);

const ProblemSlide = () => (
  <div className="flex flex-col h-full space-y-8">
    <div className="bg-red-50 border-l-4 border-red-500 p-6 rounded-r-lg">
      <h3 className="text-2xl font-bold text-red-700 mb-2 flex items-center gap-2">
        <Activity /> Planteamiento del Problema
      </h3>
      <p className="text-lg text-red-900/80 italic">
        "¿Cómo mejorar la precisión en la estimación de los coeficientes para el cálculo de pérdidas en sistemas de transmisión, empleando información de los sistemas de medición a través de una formulación matemática convexa?"
      </p>
    </div>

    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 flex-1">
      <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-200">
        <h4 className="font-bold text-[#154360] mb-4 border-b pb-2">El Desafío de la No-Convexidad</h4>
        <div className="space-y-4 text-slate-700 text-sm text-justify">
           <p>
             El problema de Flujo de Potencia Óptimo (OPF) y la estimación de parámetros son inherentemente <strong>no lineales y no convexos</strong> (Liu et al., 2018).
           </p>
           <p>
             Los métodos tradicionales (Mínimos Cuadrados convencionales o algoritmos heurísticos) pueden quedar atrapados en <strong>mínimos locales</strong>, entregando coeficientes que no representan la realidad física del sistema (ej. pérdidas negativas o matrices indefinidas).
           </p>
        </div>
      </div>

      <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-200">
        <h4 className="font-bold text-[#d35400] mb-4 border-b pb-2">Necesidad de Robustez</h4>
        <div className="space-y-4 text-slate-700 text-sm text-justify">
           <p>
             Con la alta penetración de renovables, los perfiles de generación cambian drásticamente. Se requiere un modelo que:
           </p>
           <ul className="list-disc pl-5 space-y-2">
             <li>Garantice <strong>estabilidad numérica</strong> mediante convexidad global.</li>
             <li>Tenga <strong>interpretación física</strong> asegurada por restricciones SDP (<Latex>{`B \\succeq 0`}</Latex>).</li>
             <li>Sea robusto ante <strong>datos atípicos</strong> mediante el uso de normas <Latex>p</Latex> adaptadas al contexto.</li>
           </ul>
        </div>
      </div>
    </div>
  </div>
);

const JustificationSlide = () => (
  <div className="flex flex-col h-full justify-center space-y-8">
     <h3 className="text-3xl font-bold text-[#154360] border-b-2 border-[#d35400] pb-2 w-fit">Justificación del Proyecto</h3>
     
     <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
       <div className="bg-blue-50 p-6 rounded-xl border border-blue-100 hover:shadow-lg transition-all">
         <div className="bg-white w-12 h-12 rounded-full flex items-center justify-center text-blue-600 mb-4 shadow-sm">
           <Zap size={24} />
         </div>
         <h4 className="font-bold text-lg text-slate-800 mb-3">Eficiencia Operativa</h4>
         <p className="text-sm text-slate-600 text-justify">
           La estimación precisa de pérdidas es crítica para el despacho económico. Errores en los coeficientes <Latex>B</Latex> llevan a sobrecostos operativos y emisiones innecesarias.
         </p>
       </div>

       <div className="bg-green-50 p-6 rounded-xl border border-green-100 hover:shadow-lg transition-all">
         <div className="bg-white w-12 h-12 rounded-full flex items-center justify-center text-green-600 mb-4 shadow-sm">
           <BrainCircuit size={24} />
         </div>
         <h4 className="font-bold text-lg text-slate-800 mb-3">Matemática Rigurosa</h4>
         <p className="text-sm text-slate-600 text-justify">
           Se propone pasar de modelos empíricos a modelos <strong>Convexos (SDP)</strong>. Esto asegura convergencia global. Si existe una solución, el solver la encontrará y será única.
         </p>
       </div>

       <div className="bg-orange-50 p-6 rounded-xl border border-orange-100 hover:shadow-lg transition-all">
         <div className="bg-white w-12 h-12 rounded-full flex items-center justify-center text-orange-600 mb-4 shadow-sm">
           <Target size={24} />
         </div>
         <h4 className="font-bold text-lg text-slate-800 mb-3">Integración de Datos</h4>
         <p className="text-sm text-slate-600 text-justify">
           Aprovechamiento de la infraestructura de medición moderna. El modelo se alimenta de datos históricos (PMUs, SCADA) para "aprender" la topología implícita de las pérdidas.
         </p>
       </div>
     </div>

     <div className="bg-slate-800 text-slate-200 p-6 rounded-xl mt-4">
       <p className="text-center italic">
         "La investigación busca cerrar la brecha entre los modelos teóricos clásicos y la realidad estocástica de los sistemas de potencia modernos mediante optimización avanzada."
       </p>
     </div>
  </div>
);

const ObjectivesSlide = () => (
  <div className="flex flex-col justify-center h-full space-y-8">
    <div className="bg-gradient-to-r from-[#154360] to-[#2471A3] p-8 rounded-xl shadow-lg text-white transform hover:scale-[1.01] transition-transform">
      <div className="flex items-start gap-4">
        <div className="bg-white/20 p-3 rounded-lg"><Target className="h-8 w-8 text-yellow-300" /></div>
        <div>
          <h3 className="text-xl font-bold mb-2 text-yellow-300 uppercase tracking-wide">Objetivo General</h3>
          <p className="text-xl leading-relaxed font-light">
            Desarrollar una metodología de optimización en el dominio convexo para la estimación de los coeficientes de pérdidas en sistemas de transmisión, considerando mediciones de generación y demanda.
          </p>
        </div>
      </div>
    </div>

    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {[
        { text: "Formular un modelo de optimización integrando datos de mediciones de generación y demanda.", icon: <FileText size={20}/> },
        { text: "Evaluar características geométricas y realizar aproximaciones convexas (SDP).", icon: <BrainCircuit size={20}/> },
        { text: "Desarrollar un método adaptativo que capture la naturaleza estocástica del sistema.", icon: <Activity size={20}/> },
        { text: "Validar el desempeño en sistemas de prueba IEEE (9, 57, 118 nodos).", icon: <CheckCircle size={20}/> }
      ].map((obj, idx) => (
        <div key={idx} className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm flex gap-4 items-start group hover:border-[#154360] transition-colors">
          <div className="flex-shrink-0 h-8 w-8 bg-blue-50 text-[#154360] rounded-full flex items-center justify-center font-bold group-hover:bg-[#154360] group-hover:text-white transition-colors">
            {idx + 1}
          </div>
          <p className="text-slate-700 text-sm md:text-base group-hover:text-slate-900">{obj.text}</p>
        </div>
      ))}
    </div>
  </div>
);

const MathModelSlide = () => (
  <div className="h-full flex flex-col space-y-6">
    <div className="flex items-center gap-3 mb-2">
      <div className="p-2 bg-[#154360] text-white rounded"><BrainCircuit /></div>
      <h3 className="text-2xl font-bold text-[#154360]">Modelado Matemático (SDP)</h3>
    </div>

    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 h-full overflow-y-auto pr-2">
      {/* SDP Formulation */}
      <div className="bg-white p-6 rounded-xl shadow-md border border-slate-200">
        <h4 className="text-lg font-bold text-[#154360] mb-4 border-b pb-2">El Modelo Convexo Propuesto</h4>
        <div className="space-y-4">
          <p className="text-sm text-slate-600 mb-2">Se busca minimizar el error entre las pérdidas medidas <Latex>{`P_{L_m}`}</Latex> y las estimadas <Latex>{`\\hat{P}_{L_m}`}</Latex>:</p>
          
          <div className="bg-slate-50 p-4 rounded border border-slate-200 text-center">
             <Latex block>{`\\min_{B_{20}, B_{10}, B_{00}} E_m = ||\\Delta P||_p`}</Latex>
          </div>

          <div className="space-y-3 mt-4">
            <p className="text-sm font-bold text-slate-700 border-b w-fit">Restricciones Físicas y Matemáticas:</p>
            
            <div className="text-sm space-y-3">
              <div className="flex flex-col bg-blue-50/50 p-3 rounded">
                <span className="font-bold text-[#154360]">1. Estimación Cuadrática:</span>
                <Latex>{`\\hat{P}_{L_m} = P_{G_m}^T B_{20} P_{G_m} + B_{10}^T P_{G_m} + B_{00}`}</Latex>
              </div>
              
              <div className="flex flex-col bg-green-50/50 p-3 rounded border-l-4 border-green-500">
                <span className="font-bold text-green-800">2. Relajación Semidefinida (SDP):</span>
                <div className="flex justify-between items-center mt-1">
                  <Latex>{`B_{20} \\succeq 0`}</Latex>
                  <span className="text-xs text-slate-500 italic ml-2 text-right">Garantiza convexidad y pérdidas no negativas.</span>
                </div>
              </div>

              <div className="flex flex-col bg-blue-50/50 p-3 rounded">
                 <span className="font-bold text-[#154360]">3. Consistencia Física:</span>
                 <div className="grid grid-cols-2 gap-4 mt-1">
                    <div><Latex>{`\\text{diag}(B_{20}) \\ge 0`}</Latex> <span className="text-[10px] text-slate-500 block">(Auto-pérdidas positivas)</span></div>
                    <div><Latex>{`\\alpha \\le B_{00} \\le \\beta`}</Latex> <span className="text-[10px] text-slate-500 block">(Pérdidas en vacío acotadas)</span></div>
                 </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Norms Explanation */}
      <div className="space-y-4">
        <h4 className="text-lg font-bold text-[#d35400] mb-4">¿Por qué usar diferentes Normas (<Latex>{`p`}</Latex>)?</h4>
        <p className="text-sm text-slate-600 mb-4">La elección de la norma define cómo el modelo penaliza los errores de estimación (Marchetti, 2020):</p>
        
        <div className="bg-white p-4 rounded-lg border-l-4 border-blue-400 shadow-sm">
          <div className="flex justify-between items-center mb-1">
            <span className="font-bold text-[#154360] text-sm">Norma 1 (<Latex>{`\\ell_1`}</Latex>) - Manhattan</span>
          </div>
          <Latex block>{`\\sum |P_{L_m} - \\hat{P}_{L_m}|`}</Latex>
          <p className="text-xs text-slate-600 mt-1"><strong>Interpretación:</strong> Minimiza la suma de errores absolutos. Es robusta ante datos atípicos, similar a la regresión por mediana.</p>
        </div>

        <div className="bg-white p-4 rounded-lg border-l-4 border-blue-600 shadow-sm">
          <div className="flex justify-between items-center mb-1">
            <span className="font-bold text-[#154360] text-sm">Norma 2 (<Latex>{`\\ell_2`}</Latex>) - Euclidiana</span>
          </div>
          <Latex block>{`\\sqrt{\\sum (P_{L_m} - \\hat{P}_{L_m})^2}`}</Latex>
          <p className="text-xs text-slate-600 mt-1"><strong>Interpretación:</strong> Minimiza la energía del error. Es el estándar clásico (mínimos cuadrados) pero restringido al cono SDP.</p>
        </div>

        <div className="bg-white p-4 rounded-lg border-l-4 border-[#d35400] shadow-sm bg-orange-50/30">
          <div className="flex justify-between items-center mb-1">
            <span className="font-bold text-[#d35400] text-sm">Norma Infinito (<Latex>{`\\ell_\\infty`}</Latex>) - Chebyshev</span>
          </div>
          <Latex block>{`\\max |P_{L_m} - \\hat{P}_{L_m}|`}</Latex>
          <p className="text-xs text-slate-600 mt-1"><strong>Interpretación:</strong> Minimiza el <em>peor caso</em> posible. Prioriza la seguridad operativa evitando errores máximos grandes.</p>
        </div>
      </div>
    </div>
  </div>
);

const MethodologySlide = () => (
  <div className="h-full flex flex-col justify-center">
    <h3 className="text-2xl font-bold text-[#154360] mb-2 text-center">Metodología Experimental</h3>
    <p className="text-center text-slate-500 mb-8 max-w-3xl mx-auto text-sm">
      El enfoque metodológico propuesto en el Capítulo 3 se divide en 4 fases sistemáticas para validar el modelo.
    </p>
    
    <div className="grid grid-cols-1 md:grid-cols-4 gap-4 w-full">
      
      {/* Step 1 */}
      <div className="relative bg-white p-5 rounded-xl shadow-lg border-t-4 border-orange-500 flex flex-col group hover:-translate-y-1 transition-transform duration-300 h-full">
        <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-orange-500 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold shadow-md text-sm">1</div>
        <div className="mt-4 mb-2 text-orange-600 flex justify-center"><Zap size={28}/></div>
        <h4 className="font-bold text-slate-800 mb-2 text-center text-sm">Generación Estocástica</h4>
        <div className="text-xs text-slate-500 text-justify space-y-2">
          <p>Se usó distribución normal para modelar la demanda, siguiendo a <strong>Wanjoli et al. (2025)</strong>.</p>
          <p>Se aseguró que <Latex>{`P_G > 0`}</Latex> en todos los nodos fuente para mantener viabilidad operativa.</p>
        </div>
      </div>

      {/* Step 2 */}
      <div className="relative bg-white p-5 rounded-xl shadow-lg border-t-4 border-blue-500 flex flex-col group hover:-translate-y-1 transition-transform duration-300 h-full">
        <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-blue-500 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold shadow-md text-sm">2</div>
        <div className="mt-4 mb-2 text-blue-600 flex justify-center"><FileText size={28}/></div>
        <h4 className="font-bold text-slate-800 mb-2 text-center text-sm">Construcción de Datos</h4>
        <div className="text-xs text-slate-500 text-justify space-y-2">
          <p>Uso de <strong>MATPOWER</strong> v8.1 en MATLAB.</p>
          <p><strong>100 Escenarios</strong> por sistema (IEEE 9, 57, 118).</p>
          <p>Filtrado de casos convergentes con balance exacto de potencia.</p>
        </div>
      </div>

      {/* Step 3 */}
      <div className="relative bg-white p-5 rounded-xl shadow-lg border-t-4 border-indigo-500 flex flex-col group hover:-translate-y-1 transition-transform duration-300 h-full">
        <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-indigo-500 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold shadow-md text-sm">3</div>
        <div className="mt-4 mb-2 text-indigo-600 flex justify-center"><BrainCircuit size={28}/></div>
        <h4 className="font-bold text-slate-800 mb-2 text-center text-sm">Optimización (CVX)</h4>
        <div className="text-xs text-slate-500 text-justify space-y-2">
          <p>Formulación del problema en <strong>CVX</strong>.</p>
          <p>Solver <strong>SDPT3</strong>: optimizado para conos semidefinidos y de segundo orden (Toh et al., 2025).</p>
          <p>Cálculo de matrices <Latex>{`B_{20}, B_{10}, B_{00}`}</Latex>.</p>
        </div>
      </div>

      {/* Step 4 */}
      <div className="relative bg-white p-5 rounded-xl shadow-lg border-t-4 border-green-500 flex flex-col group hover:-translate-y-1 transition-transform duration-300 h-full">
        <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-green-500 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold shadow-md text-sm">4</div>
        <div className="mt-4 mb-2 text-green-600 flex justify-center"><BarChart2 size={28}/></div>
        <h4 className="font-bold text-slate-800 mb-2 text-center text-sm">Validación Cruzada</h4>
        <div className="text-xs text-slate-500 text-justify space-y-2">
          <p>Evaluación con datos de prueba (distintos al entrenamiento).</p>
          <p>Métricas: MAE, RMSE y Error Relativo Máximo (ErrMax) para medir dispersión y peor caso.</p>
        </div>
      </div>
    </div>
  </div>
);

const AlgorithmSlide = () => (
  <div className="h-full flex flex-col">
    <h3 className="text-2xl font-bold text-[#154360] mb-6 flex items-center gap-2">
      <Code /> Implementación Algorítmica
    </h3>
    
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 h-full">
      
      {/* Code Snippet */}
      <div className="bg-[#1e1e1e] rounded-xl shadow-2xl overflow-hidden text-sm flex flex-col font-mono">
        <div className="bg-[#2d2d2d] px-4 py-2 text-slate-300 flex items-center gap-2 border-b border-gray-700">
           <GitCommit size={14} />
           <span>MATLAB / CVX Implementation</span>
        </div>
        <div className="p-4 text-gray-300 overflow-y-auto space-y-1">
           <div className="text-gray-500">// 1. Inicialización del Entorno CVX</div>
           <div><span className="text-purple-400">cvx_begin</span> sdp</div>
           <div>&nbsp;&nbsp;<span className="text-purple-400">cvx_solver</span> SDPT3</div>
           <br/>
           <div className="text-gray-500">// 2. Definición de Variables</div>
           <div>&nbsp;&nbsp;<span className="text-blue-400">variable</span> B20(G, G) <span className="text-yellow-300">symmetric</span></div>
           <div>&nbsp;&nbsp;<span className="text-blue-400">variable</span> B10(1, G)</div>
           <div>&nbsp;&nbsp;<span className="text-blue-400">variable</span> B00(1, 1)</div>
           <div>&nbsp;&nbsp;<span className="text-blue-400">variable</span> T(M, 1) <span className="text-green-600">% Vector de residuos</span></div>
           <br/>
           <div className="text-gray-500">// 3. Función Objetivo (Ej. Norma Infinito)</div>
           <div>&nbsp;&nbsp;<span className="text-purple-400">minimize</span>( <span className="text-yellow-300">norm</span>(T, inf) )</div>
           <br/>
           <div className="text-gray-500">// 4. Restricciones Físicas</div>
           <div>&nbsp;&nbsp;subject to</div>
           <div>&nbsp;&nbsp;&nbsp;&nbsp;B20 == <span className="text-yellow-300">semidefinite</span>(G);</div>
           <div>&nbsp;&nbsp;&nbsp;&nbsp;<span className="text-yellow-300">diag</span>(B20) &gt;= 0;</div>
           <div>&nbsp;&nbsp;&nbsp;&nbsp;B00 &gt;= 0.25; B00 &lt;= 2;</div>
           <br/>
           <div className="text-gray-500">// 5. Restricción de Ajuste (Loop)</div>
           <div>&nbsp;&nbsp;<span className="text-purple-400">for</span> k = 1:M</div>
           <div>&nbsp;&nbsp;&nbsp;&nbsp;T(k) == PL(k) - (Pgm(:,k)'*B20*Pgm(:,k) ...</div>
           <div>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;+ B10*Pgm(:,k) + B00);</div>
           <div>&nbsp;&nbsp;<span className="text-purple-400">end</span></div>
           <div><span className="text-purple-400">cvx_end</span></div>
        </div>
      </div>

      {/* Explanation */}
      <div className="space-y-6">
        <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
           <h4 className="font-bold text-[#154360] mb-3">Explicación del Procedimiento</h4>
           <ul className="space-y-4 text-sm text-slate-700 text-justify">
             <li className="flex gap-3">
               <div className="bg-blue-100 text-blue-700 h-6 w-6 rounded-full flex items-center justify-center flex-shrink-0 font-bold text-xs">A</div>
               <span>
                 <strong>Declaración de Variables:</strong> Se define <Latex>{`B_{20}`}</Latex> como simétrica para reducir la dimensionalidad y cumplir con la teoría de circuitos. El vector <Latex>{`T`}</Latex> es una variable auxiliar que almacena el error de cada medición.
               </span>
             </li>
             <li className="flex gap-3">
               <div className="bg-green-100 text-green-700 h-6 w-6 rounded-full flex items-center justify-center flex-shrink-0 font-bold text-xs">B</div>
               <span>
                 <strong>Restricción Semidefinida:</strong> El comando <code>B20 == semidefinite(G)</code> es el núcleo de la propuesta. Fuerza a que todos los autovalores de la matriz sean no negativos, garantizando la convexidad del problema.
               </span>
             </li>
             <li className="flex gap-3">
               <div className="bg-orange-100 text-orange-700 h-6 w-6 rounded-full flex items-center justify-center flex-shrink-0 font-bold text-xs">C</div>
               <span>
                 <strong>Bucle de Restricciones:</strong> Se impone la igualdad <Latex>{`T_k = P_{L_k} - \\hat{P}_{L_k}`}</Latex> para cada escenario <Latex>{`k`}</Latex>. CVX traduce esto automáticamente a restricciones cónicas que el solver SDPT3 puede procesar.
               </span>
             </li>
           </ul>
        </div>
        
        <div className="bg-yellow-50 p-4 rounded-lg border-l-4 border-yellow-400 text-xs text-slate-600">
           <strong>Nota Técnica:</strong> El uso de SDPT3 es crucial porque maneja eficientemente la intersección del cono semidefinido (PSD) con los conos de segundo orden requeridos por las normas (Toh et al., 2025).
        </div>
      </div>

    </div>
  </div>
);

const CaseStudiesSlide = () => (
  <div className="flex flex-col h-full justify-center space-y-8">
     <h3 className="text-2xl font-bold text-[#154360] text-center mb-4">Sistemas de Prueba IEEE Seleccionados</h3>
     <p className="text-center text-slate-600 max-w-4xl mx-auto mb-4">
       Se seleccionaron tres sistemas de complejidad creciente para evaluar la escalabilidad y comportamiento del modelo propuesto.
     </p>
     <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {[
          { 
            name: "IEEE 9 Nodos", 
            desc: "Sistema pequeño. Referencia básica (WSCC).", 
            detail: "3 Generadores, 9 Buses. Ideal para validación conceptual.",
          },
          { 
            name: "IEEE 57 Nodos", 
            desc: "Complejidad media. Red regional típica de EE. UU.", 
            detail: "7 Generadores, 80 Ramas. Reto intermedio de topología.",
          },
          { 
            name: "IEEE 118 Nodos", 
            desc: "Gran escala. Red del Medio Oeste (1962).", 
            detail: "54 Generadores, 186 Ramas. Prueba de estrés computacional.",
          }
        ].map((sys, idx) => (
          <div key={idx} className="bg-white rounded-xl shadow-lg overflow-hidden border border-slate-200 hover:shadow-xl transition-shadow">
            <div className="h-28 bg-[#154360] flex items-center justify-center text-white/90">
               <Network size={40} />
            </div>
            <div className="p-6">
              <h4 className="font-bold text-[#154360] text-lg mb-2">{sys.name}</h4>
              <p className="text-sm text-slate-600 mb-4 h-10">{sys.desc}</p>
              <div className="pt-4 border-t border-slate-100 text-xs font-bold text-slate-500 bg-slate-50 p-2 rounded">
                {sys.detail}
              </div>
            </div>
          </div>
        ))}
     </div>
  </div>
);

const ResultsTable9 = () => (
  <div className="h-full flex flex-col">
    <h3 className="text-2xl font-bold text-[#154360] mb-6 flex items-center gap-2">
      <BarChart2 /> Resultados: Sistema IEEE 9
    </h3>
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 h-full">
      <div className="space-y-4">
        <div className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden">
          <div className="bg-slate-50 px-6 py-3 border-b border-slate-200 font-bold text-slate-700">Tabla 5.1: Desempeño Comparativo</div>
          <table className="w-full text-sm text-left">
            <thead className="text-xs text-slate-500 uppercase bg-slate-50 border-b">
              <tr>
                <th className="px-4 py-3">Variante</th>
                <th className="px-4 py-3">MAE</th>
                <th className="px-4 py-3">RMSE</th>
                <th className="px-4 py-3">Err. Máx (%)</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b"><td className="px-4 py-3">Var-<Latex>{`\\ell_1`}</Latex></td><td className="px-4">0.0200</td><td className="px-4">0.0318</td><td className="px-4">0.8379</td></tr>
              <tr className="border-b"><td className="px-4 py-3">Var-<Latex>{`\\ell_2`}</Latex></td><td className="px-4">0.0226</td><td className="px-4">0.0300</td><td className="px-4">0.6824</td></tr>
              <tr className="border-b bg-green-50 font-bold"><td className="px-4 py-3">Var-<Latex>{`\\ell_\\infty`}</Latex></td><td className="px-4">0.0311</td><td className="px-4">0.0338</td><td className="px-4 text-green-700">0.3232</td></tr>
              <tr><td className="px-4 py-3 text-slate-500">Base</td><td className="px-4 text-slate-500">0.0465</td><td className="px-4 text-slate-500">0.0667</td><td className="px-4 text-red-500">0.8145</td></tr>
            </tbody>
          </table>
        </div>
        <div className="bg-blue-50 p-5 rounded-lg text-sm text-slate-700 border-l-4 border-blue-500 shadow-sm">
          <p className="font-bold mb-2 text-[#154360]">Discusión de Resultados:</p>
          <p className="text-justify leading-relaxed">
            En sistemas pequeños, la variante <Latex>{`\\ell_\\infty`}</Latex> demuestra su capacidad teórica de <strong>minimizar el peor caso</strong>. Reduce el error máximo a <strong>0.32%</strong>, que es menos de la mitad comparado con <Latex>{`\\ell_1`}</Latex> y <Latex>{`\\ell_2`}</Latex>. Aunque sacrifica ligeramente el promedio (MAE), ofrece la mayor seguridad operativa.
          </p>
        </div>
      </div>
      <div className="flex items-center justify-center bg-white rounded-xl shadow-inner border border-slate-200 p-4">
        {/* Placeholder for chart */}
        <div className="w-full h-64 flex items-end justify-around px-4">
           <div className="w-16 bg-blue-300 h-[83%] relative group rounded-t"><span className="absolute -top-6 left-0 text-xs w-full text-center font-mono">0.83%</span><p className="absolute -bottom-6 text-xs w-full text-center font-bold">L1</p></div>
           <div className="w-16 bg-blue-400 h-[68%] relative group rounded-t"><span className="absolute -top-6 left-0 text-xs w-full text-center font-mono">0.68%</span><p className="absolute -bottom-6 text-xs w-full text-center font-bold">L2</p></div>
           <div className="w-16 bg-green-500 h-[32%] relative group rounded-t shadow-lg"><span className="absolute -top-6 left-0 text-xs w-full text-center font-bold text-green-700 font-mono">0.32%</span><p className="absolute -bottom-6 text-xs w-full text-center font-bold text-green-700">L∞</p></div>
           <div className="w-16 bg-slate-300 h-[81%] relative group rounded-t opacity-50"><span className="absolute -top-6 left-0 text-xs w-full text-center font-mono">0.81%</span><p className="absolute -bottom-6 text-xs w-full text-center font-bold">Base</p></div>
        </div>
        <p className="absolute bottom-14 text-xs font-bold text-slate-400 uppercase tracking-widest">Error Relativo Máximo (%)</p>
      </div>
    </div>
  </div>
);

const ResultsTable57 = () => (
  <div className="h-full flex flex-col">
    <h3 className="text-2xl font-bold text-[#154360] mb-6 flex items-center gap-2">
      <BarChart2 /> Resultados: Sistema IEEE 57
    </h3>
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 h-full">
      <div className="space-y-4">
        <div className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden">
          <div className="bg-slate-50 px-6 py-3 border-b border-slate-200 font-bold text-slate-700">Tabla 5.2: Desempeño Comparativo</div>
          <table className="w-full text-sm text-left">
            <thead className="text-xs text-slate-500 uppercase bg-slate-50 border-b">
              <tr>
                <th className="px-4 py-3">Variante</th>
                <th className="px-4 py-3">MAE</th>
                <th className="px-4 py-3">Err. Med (%)</th>
                <th className="px-4 py-3">Err. Máx (%)</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b"><td className="px-4 py-3">Var-<Latex>{`\\ell_1`}</Latex></td><td className="px-4">0.1349</td><td className="px-4">-0.2728</td><td className="px-4">1.0242</td></tr>
              <tr className="border-b"><td className="px-4 py-3">Var-<Latex>{`\\ell_2`}</Latex></td><td className="px-4">0.1038</td><td className="px-4">-0.1909</td><td className="px-4">0.9070</td></tr>
              <tr className="border-b bg-green-50 font-bold"><td className="px-4 py-3">Var-<Latex>{`\\ell_\\infty`}</Latex></td><td className="px-4">0.1068</td><td className="px-4 text-green-700">-0.1415</td><td className="px-4 text-green-700">0.9430</td></tr>
              <tr><td className="px-4 py-3 text-slate-500">Base</td><td className="px-4 text-slate-500">0.1356</td><td className="px-4 text-slate-500">-0.2741</td><td className="px-4 text-red-500">1.0319</td></tr>
            </tbody>
          </table>
        </div>
        <div className="bg-blue-50 p-5 rounded-lg text-sm text-slate-700 border-l-4 border-blue-500 shadow-sm">
          <p className="font-bold mb-2 text-[#154360]">Discusión de Resultados:</p>
          <p className="text-justify leading-relaxed">
            Se observa un fenómeno interesante de <strong>sesgo negativo</strong> (subestimación) en todos los métodos. Sin embargo, <Latex>{`\\ell_\\infty`}</Latex> logra reducir significativamente este sesgo sistemático (-0.14% vs -0.27% del caso base). Esto indica que la norma infinito no solo controla valores atípicos, sino que centra mejor las predicciones en sistemas de complejidad media.
          </p>
        </div>
      </div>
       <div className="flex items-center justify-center bg-white rounded-xl shadow-inner border border-slate-200 p-4 relative">
         <div className="w-full h-full flex items-center justify-center">
             {/* Mock visual for distribution */}
             <div className="w-full px-8 space-y-6">
                <div className="relative pt-6">
                   <div className="w-full h-2 bg-slate-100 rounded-full overflow-hidden">
                     <div className="w-1/3 h-full bg-blue-300 ml-[15%] opacity-60"></div>
                   </div>
                   <span className="text-xs text-slate-500 absolute top-0 left-0">Var-L1 (Mayor dispersión)</span>
                </div>
                <div className="relative pt-6">
                   <div className="w-full h-2 bg-slate-100 rounded-full overflow-hidden">
                     <div className="w-1/4 h-full bg-blue-500 ml-[25%] opacity-80"></div>
                   </div>
                   <span className="text-xs text-slate-500 absolute top-0 left-0">Var-L2</span>
                </div>
                 <div className="relative pt-6">
                   <div className="w-full h-2 bg-slate-100 rounded-full overflow-hidden shadow-sm">
                     <div className="w-1/6 h-full bg-green-500 ml-[30%]"></div>
                   </div>
                   <span className="text-xs font-bold text-green-700 absolute top-0 left-0">Var-L∞ (Distribución Compacta)</span>
                </div>
             </div>
         </div>
         <p className="absolute bottom-4 text-xs font-bold text-slate-400 uppercase tracking-widest">Distribución del Error</p>
      </div>
    </div>
  </div>
);

const ResultsTable118 = () => (
  <div className="h-full flex flex-col">
    <h3 className="text-2xl font-bold text-[#154360] mb-6 flex items-center gap-2">
      <BarChart2 /> Resultados: Sistema IEEE 118
    </h3>
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 h-full">
      <div className="space-y-4">
        <div className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden">
          <div className="bg-slate-50 px-6 py-3 border-b border-slate-200 font-bold text-slate-700">Tabla 5.3: Desempeño Comparativo</div>
          <table className="w-full text-sm text-left">
            <thead className="text-xs text-slate-500 uppercase bg-slate-50 border-b">
              <tr>
                <th className="px-4 py-3">Variante</th>
                <th className="px-4 py-3">MAE</th>
                <th className="px-4 py-3">RMSE</th>
                <th className="px-4 py-3">Err. Máx (%)</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b bg-green-50 font-bold"><td className="px-4 py-3">Var-<Latex>{`\\ell_1`}</Latex></td><td className="px-4 text-green-700">1.6616</td><td className="px-4">1.9790</td><td className="px-4 text-green-700">0.6826</td></tr>
              <tr className="border-b bg-green-50 font-bold"><td className="px-4 py-3">Var-<Latex>{`\\ell_2`}</Latex></td><td className="px-4 text-green-700">1.6597</td><td className="px-4 text-green-700">1.9691</td><td className="px-4">0.6841</td></tr>
              <tr className="border-b"><td className="px-4 py-3">Var-<Latex>{`\\ell_\\infty`}</Latex></td><td className="px-4">1.8517</td><td className="px-4">2.2190</td><td className="px-4 text-red-500">0.9129</td></tr>
              <tr><td className="px-4 py-3 text-slate-500">Base</td><td className="px-4 text-slate-500">1.8317</td><td className="px-4 text-slate-500">2.2316</td><td className="px-4">0.7532</td></tr>
            </tbody>
          </table>
        </div>
        <div className="bg-blue-50 p-5 rounded-lg text-sm text-slate-700 border-l-4 border-blue-500 shadow-sm">
          <p className="font-bold mb-2 text-[#154360]">Cambio de Paradigma:</p>
          <p className="text-justify leading-relaxed">
            En sistemas de <strong>gran escala (alta dimensión)</strong>, la norma <Latex>{`\\ell_\\infty`}</Latex> pierde efectividad y presenta el peor error máximo. Esto sugiere que optimizar el "peor caso" en un espacio de 54 generadores es demasiado restrictivo. Aquí, <Latex>{`\\ell_1`}</Latex> y <Latex>{`\\ell_2`}</Latex> recuperan el liderazgo, demostrando que la elección de la norma <strong>no es trivial</strong> y depende de la escala del sistema.
          </p>
        </div>
      </div>
      <div className="flex flex-col gap-4">
        <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm flex-1">
           <h4 className="font-bold text-[#154360] mb-2 text-sm flex items-center gap-2"><TrendingUp size={16}/> Escalabilidad</h4>
           <p className="text-sm text-slate-600 text-justify">A medida que aumenta el número de buses (9 <Latex>{`\\rightarrow`}</Latex> 118), el modelo mantiene la consistencia física (pérdidas positivas), lo cual valida la restricción semidefinida, pero la estrategia de minimización debe adaptarse.</p>
        </div>
        <div className="bg-yellow-50 p-6 rounded-xl border border-yellow-200 shadow-sm flex-1">
           <h4 className="font-bold text-yellow-800 mb-2 text-sm flex items-center gap-2"><AlertTriangle size={16}/> Sensibilidad Dimensional</h4>
           <p className="text-sm text-slate-700 text-justify">La variante <Latex>{`\\ell_\\infty`}</Latex> pasa de ser la mejor (IEEE 9) a ser la menos efectiva (IEEE 118). Este hallazgo es clave: en sistemas grandes, tratar de controlar el outlier extremo puede degradar el desempeño global del modelo.</p>
        </div>
      </div>
    </div>
  </div>
);

const ConclusionsSlide = () => (
  <div className="h-full flex flex-col justify-center space-y-6">
    <div className="flex items-center gap-2 mb-4">
       <CheckCircle className="text-green-600 h-8 w-8"/>
       <h3 className="text-3xl font-bold text-[#154360]">Conclusiones Generales</h3>
    </div>
    
    <div className="space-y-4">
      <div className="bg-white p-6 rounded-xl shadow border-l-8 border-[#154360] flex gap-4 hover:shadow-lg transition-shadow">
         <div className="mt-1 bg-blue-100 p-2 rounded-full h-fit"><BrainCircuit size={20} className="text-[#154360]"/></div>
         <div>
            <h4 className="font-bold text-lg text-slate-800">Modelo Convexo vs. Tradicional</h4>
            <p className="text-slate-600 text-justify">La formulación SDP garantiza soluciones <strong>globalmente óptimas</strong> y <strong>físicamente coherentes</strong> (matriz <Latex>{`B_{20}`}</Latex> semidefinida positiva). Esto elimina el riesgo de obtener pérdidas negativas o mínimos locales, común en algoritmos no convexos.</p>
         </div>
      </div>

      <div className="bg-white p-6 rounded-xl shadow border-l-8 border-[#d35400] flex gap-4 hover:shadow-lg transition-shadow">
         <div className="mt-1 bg-orange-100 p-2 rounded-full h-fit"><Activity size={20} className="text-[#d35400]"/></div>
         <div>
            <h4 className="font-bold text-lg text-slate-800">Adaptabilidad a la Escala</h4>
            <p className="text-slate-600 text-justify">Se demostró que no existe una "norma única". <Latex>{`\\ell_\\infty`}</Latex> es superior para robustez en sistemas pequeños/medianos, mientras que <Latex>{`\\ell_1/\\ell_2`}</Latex> son necesarias para sistemas de gran escala debido a la complejidad dimensional.</p>
         </div>
      </div>

      <div className="bg-white p-6 rounded-xl shadow border-l-8 border-green-600 flex gap-4 hover:shadow-lg transition-shadow">
         <div className="mt-1 bg-green-100 p-2 rounded-full h-fit"><Scale size={20} className="text-green-600"/></div>
         <div>
            <h4 className="font-bold text-lg text-slate-800">Impacto Práctico</h4>
            <p className="text-slate-600 text-justify">Todas las variantes propuestas superan al modelo base en consistencia. El método permite actualizar los coeficientes ante cambios de topología usando datos operativos, lo cual es vital para redes inteligentes con renovables.</p>
         </div>
      </div>
    </div>
  </div>
);

const FutureWorkSlide = () => (
  <div className="h-full flex flex-col justify-center items-center">
    <h3 className="text-3xl font-bold text-[#154360] mb-12">Recomendaciones y Trabajos Futuros</h3>
    
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full">
      <div className="bg-white p-8 rounded-2xl shadow-lg border border-slate-100 text-center hover:-translate-y-2 transition-transform duration-300 group">
         <div className="mx-auto bg-blue-50 w-16 h-16 rounded-full flex items-center justify-center text-[#154360] mb-6 group-hover:bg-[#154360] group-hover:text-white transition-colors">
           <Network size={32}/>
         </div>
         <h4 className="font-bold text-lg mb-3 text-slate-800">Escalabilidad Masiva</h4>
         <p className="text-sm text-slate-600 text-justify">
           Para redes reales (>1000 nodos), el costo computacional de SDP crece drásticamente. Se sugiere explorar <strong>estrategias de descomposición</strong> o relajaciones SOCP (Second Order Cone Programming) más ligeras.
         </p>
      </div>

      <div className="bg-white p-8 rounded-2xl shadow-lg border border-slate-100 text-center hover:-translate-y-2 transition-transform duration-300 group">
         <div className="mx-auto bg-purple-50 w-16 h-16 rounded-full flex items-center justify-center text-purple-600 mb-6 group-hover:bg-purple-600 group-hover:text-white transition-colors">
           <BrainCircuit size={32}/>
         </div>
         <h4 className="font-bold text-lg mb-3 text-slate-800">Enfoques Híbridos (AI)</h4>
         <p className="text-sm text-slate-600 text-justify">
           Integrar la formulación SDP con técnicas de <strong>Machine Learning</strong>. Usar redes neuronales para predecir qué norma (<Latex>p</Latex>) usar según el estado operativo actual del sistema.
         </p>
      </div>

      <div className="bg-white p-8 rounded-2xl shadow-lg border border-slate-100 text-center hover:-translate-y-2 transition-transform duration-300 group">
         <div className="mx-auto bg-green-50 w-16 h-16 rounded-full flex items-center justify-center text-green-600 mb-6 group-hover:bg-green-600 group-hover:text-white transition-colors">
           <Zap size={32}/>
         </div>
         <h4 className="font-bold text-lg mb-3 text-slate-800">Validación con PMUs</h4>
         <p className="text-sm text-slate-600 text-justify">
           Implementar la metodología con datos de <strong>Unidades de Medición Fasorial</strong> reales que contengan ruido no gaussiano y errores de sincronización para probar la robustez en campo.
         </p>
      </div>
    </div>
  </div>
);

const EndSlide = () => (
  <div className="flex flex-col items-center justify-center h-full text-center animate-fade-in">
    <h2 className="text-4xl md:text-5xl font-extrabold text-[#154360] mb-8">¡Gracias por su atención!</h2>
    
    <div className="bg-white/80 backdrop-blur p-10 rounded-2xl shadow-2xl max-w-3xl border border-slate-100">
      <div className="mb-8">
        <p className="font-bold text-xl text-[#154360]">Sesión de Preguntas</p>
        <div className="h-1 w-12 bg-[#d35400] mx-auto mt-2"></div>
      </div>
      
      <p className="text-slate-600 mb-8 italic text-sm md:text-base leading-relaxed">
        "Este proyecto de investigación fue apoyado por el Centro de Investigación y Desarrollo Científico de la Universidad Distrital Francisco José de Caldas bajo el código interno 1643-12-2020."
      </p>
      
      <div className="flex justify-center gap-12 mt-8 pt-8 border-t border-slate-100">
        <div className="text-center">
          <p className="font-bold text-[#154360] text-lg">Johan Andres Leon Llanos</p>
          <p className="text-xs text-slate-400 uppercase tracking-wider">Ingeniería Eléctrica</p>
        </div>
        <div className="text-center">
          <p className="font-bold text-[#154360] text-lg">Stewar Stevens Vanegas Arias</p>
          <p className="text-xs text-slate-400 uppercase tracking-wider">Ingeniería Eléctrica</p>
        </div>
      </div>
    </div>
  </div>
);

// --- MAIN APP COMPONENT ---

const PresentationApp = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isFullscreen, setIsFullscreen] = useState(false);

  const slides = [
    { component: <TitleSlide />, title: "Inicio", subtitle: "" },
    { component: <AgendaSlide />, title: "Agenda", subtitle: "Estructura" },
    { component: <ContextSlide />, title: "Introducción", subtitle: "Contexto y Motivación" },
    { component: <StateOfTheArtSlide />, title: "Estado del Arte", subtitle: "Referentes Académicos" },
    { component: <ProblemSlide />, title: "Problemática", subtitle: "Planteamiento del Problema" },
    { component: <JustificationSlide />, title: "Justificación", subtitle: "Impacto del Proyecto" },
    { component: <ObjectivesSlide />, title: "Objetivos", subtitle: "General y Específicos" },
    { component: <MathModelSlide />, title: "Modelo Matemático", subtitle: "Formulación SDP y Normas" },
    { component: <MethodologySlide />, title: "Metodología", subtitle: "Diseño Experimental" },
    { component: <AlgorithmSlide />, title: "Implementación", subtitle: "Código y Algoritmos" },
    { component: <CaseStudiesSlide />, title: "Casos de Estudio", subtitle: "Sistemas IEEE" },
    { component: <ResultsTable9 />, title: "Resultados IEEE 9", subtitle: "Análisis Detallado" },
    { component: <ResultsTable57 />, title: "Resultados IEEE 57", subtitle: "Análisis Detallado" },
    { component: <ResultsTable118 />, title: "Resultados IEEE 118", subtitle: "Análisis Detallado" },
    { component: <ConclusionsSlide />, title: "Conclusiones", subtitle: "Síntesis Final" },
    { component: <FutureWorkSlide />, title: "Futuros Trabajos", subtitle: "Líneas de Investigación" },
    { component: <EndSlide />, title: "Cierre", subtitle: "" }
  ];

  const nextSlide = () => setCurrentSlide(curr => Math.min(curr + 1, slides.length - 1));
  const prevSlide = () => setCurrentSlide(curr => Math.max(curr - 1, 0));

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight" || e.key === "Space") nextSlide();
      if (e.key === "ArrowLeft") prevSlide();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  const toggleFullscreen = () => {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen();
      setIsFullscreen(true);
    } else {
      if (document.exitFullscreen) {
        document.exitFullscreen();
        setIsFullscreen(false);
      }
    }
  };

  return (
    <div className="relative font-sans text-slate-800 h-screen w-screen overflow-hidden selection:bg-blue-200">
      <SlideContainer 
        title={slides[currentSlide].title} 
        subtitle={slides[currentSlide].subtitle}
        slideNumber={currentSlide + 1}
        totalSlides={slides.length}
      >
        {slides[currentSlide].component}
      </SlideContainer>

      {/* Controls Overlay */}
      <div className="fixed bottom-4 right-4 md:bottom-6 md:right-6 flex items-center gap-2 bg-white/90 backdrop-blur p-2 rounded-full shadow-xl border border-slate-200 z-50 transition-opacity opacity-70 hover:opacity-100">
        <button onClick={prevSlide} disabled={currentSlide === 0} className="p-2 md:p-3 rounded-full hover:bg-slate-100 disabled:opacity-30 text-[#154360] transition-colors">
          <ChevronLeft size={20} />
        </button>
        <button onClick={nextSlide} disabled={currentSlide === slides.length - 1} className="p-2 md:p-3 rounded-full hover:bg-slate-100 disabled:opacity-30 text-[#154360] transition-colors">
          <ChevronRight size={20} />
        </button>
        <div className="w-px h-6 bg-slate-300 mx-1"></div>
        <button onClick={toggleFullscreen} className="p-2 md:p-3 rounded-full hover:bg-slate-100 text-[#154360] transition-colors">
          {isFullscreen ? <Minimize size={18} /> : <Maximize size={18} />}
        </button>
      </div>
    </div>
  );
};

const root = createRoot(document.getElementById('root')!);
root.render(<PresentationApp />);