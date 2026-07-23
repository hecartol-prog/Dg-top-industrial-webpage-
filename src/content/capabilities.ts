import type { CapabilityCluster } from './types';
import type { LocalizedString, LocalizedStringArray } from './types';

const l = (en: string, es: string): LocalizedString => ({ en, es });
const a = (en: string[], es: string[]): LocalizedStringArray => ({ en, es });

export const capabilities: CapabilityCluster[] = [
  {
    id: 'engineering',
    title: l('Engineering & Product Definition', 'Ingeniería y Definición de Producto'),
    description: l(
      'Converting requirements into a controlled, manufacturable technical package — the foundation that determines whether production runs clean or runs into chronic quality problems. Our engineering function applies APQP discipline, DFM/DFA analysis, tolerance studies, and DFMEA to surface manufacturability risk before tooling or supplier commitment.',
      'Conversión de requisitos en un paquete técnico controlado y fabricable — la base que determina si la producción corre limpia o corre hacia problemas crónicos de calidad. Nuestra función de ingeniería aplica disciplina APQP, análisis DFM/DFA, estudios de tolerancia y DFMEA para exponer riesgo de fabricabilidad antes del compromiso de herramentales o proveedores.',
    ),
    items: a(
      [
        'DFM / DFA review and recommendations',
        'GD&T interpretation and tolerance stack-up studies',
        'Drawings, BOM, and specification release',
        'APQP phase-gate planning',
        'DFMEA (Design FMEA) facilitation',
        'Critical-to-Quality (CTQ) register',
        'Prototype planning and validation protocols',
        'Engineering change control process',
      ],
      [
        'Revisión y recomendaciones DFM / DFA',
        'Interpretación GD&T y estudios de apilamiento de tolerancias',
        'Liberación de planos, BOM y especificaciones',
        'Planificación de puertas de fase APQP',
        'Facilitación de DFMEA (FMEA de Diseño)',
        'Registro de características críticas para la calidad (CTQ)',
        'Planificación de prototipos y protocolos de validación',
        'Proceso de control de cambios de ingeniería',
      ],
    ),
    relatedSolutions: ['plastic-injection', 'metal-manufacturing', 'custom-manufacturing'],
  },
  {
    id: 'manufacturing',
    title: l('Manufacturing Processes', 'Procesos de Manufactura'),
    description: l(
      'Qualified process routes selected for functional and commercial fit, not just availability. We match the part\'s requirements — geometry, tolerance, material, volume, regulatory regime — against the capabilities of qualified manufacturing partners. Each process is qualified with capacity studies (Cpk on critical dimensions) and validated through FAI before series production is authorized.',
      'Rutas de proceso calificadas seleccionadas por ajuste funcional y comercial, no solo por disponibilidad. Emparejamos los requisitos de la pieza — geometría, tolerancia, material, volumen, régimen regulatorio — contra las capacidades de socios de manufactura calificados. Cada proceso se califica con estudios de capacidad (Cpk en dimensiones críticas) y se valida a través de FAI antes de autorizar la producción en serie.',
    ),
    items: a(
      [
        'Plastic injection molding (single- to multi-cavity)',
        'CNC machining (3-, 4-, 5-axis, live-tooling turning)',
        'Sheet metal fabrication (stamping, bending, laser, welding)',
        'Casting (sand, investment, die-casting)',
        'Forging (open-die and closed-die)',
        'Extrusion (aluminum, plastic)',
        'Surface treatment (anodize, plate, powder coat, e-coat)',
        'Assembly and functional testing',
      ],
      [
        'Moldeo por inyección plástica (una a múltiples cavidades)',
        'Mecanizado CNC (3, 4, 5 ejes, torneado con herramienta viva)',
        'Fabricación de lámina metálica (estampado, doblado, láser, soldadura)',
        'Fundición (arena, inversión, inyección)',
        'Forjado (matriz abierta y cerrada)',
        'Extrusión (aluminio, plástico)',
        'Tratamiento superficial (anodizado, plateado, pintura en polvo, electrorecubrimiento)',
        'Ensamblaje y pruebas funcionales',
      ],
    ),
    relatedSolutions: ['plastic-injection', 'metal-manufacturing', 'industrial-equipment'],
  },
  {
    id: 'quality',
    title: l('Quality & Validation', 'Calidad y Validación'),
    description: l(
      'Controls that make requirements verifiable at each execution stage. Quality is engineered into the program — control plans, MSA / Gage R&R, FAI, in-process inspection, PPAP, SPC where applicable, and 8D corrective action. We work to industrial quality system standards: ISO 9001 baseline, IATF 16949 for automotive, ISO 13485 for medical, and AS9100 for aerospace where applicable.',
      'Controles que hacen verificables los requisitos en cada etapa de ejecución. La calidad se diseña en el programa — planes de control, MSA / Gage R&R, FAI, inspección en proceso, PPAP, SPC cuando aplica y acción correctiva 8D. Trabajamos según estándares de sistemas de calidad industriales: línea base ISO 9001, IATF 16949 para automotriz, ISO 13485 para médico y AS9100 para aeroespacial cuando aplica.',
    ),
    items: a(
      [
        'Supplier qualification (process + quality system)',
        'Control plan development',
        'MSA / Gage R&R studies',
        'First-article inspection (FAI, AS9102-compatible)',
        'PPAP submission at agreed level',
        'In-process inspection and SPC',
        'Nonconformance management (MRB, 8D)',
        'Pre-shipment inspection (PSI)',
      ],
      [
        'Calificación de proveedores (proceso + sistema de calidad)',
        'Desarrollo de plan de control',
        'Estudios de MSA / Gage R&R',
        'Inspección de primer artículo (FAI, compatible con AS9102)',
        'Presentación PPAP al nivel acordado',
        'Inspección en proceso y SPC',
        'Gestión de no conformidades (MRB, 8D)',
        'Inspección previa al envío (PSI)',
      ],
    ),
    relatedSolutions: ['custom-manufacturing', 'renewable-energy', 'water-treatment'],
  },
  {
    id: 'execution',
    title: l('Program Execution', 'Ejecución de Programas'),
    description: l(
      'Coordinated delivery across engineering, production, quality, and logistics — managed as an integrated program, not as disconnected workstreams. Project planning follows WBS / IMS / critical path discipline; risk is tracked at every gate; engineering changes flow through documented change-control before they reach the line. The objective is consistent delivery against the technical baseline, schedule, and commercial terms.',
      'Entrega coordinada entre ingeniería, producción, calidad y logística — gestionada como un programa integrado, no como flujos de trabajo desconectados. La planificación de proyecto sigue disciplina WBS / IMS / ruta crítica; el riesgo se rastrea en cada puerta; los cambios de ingeniería fluyen por control de cambios documentado antes de llegar a la línea. El objetivo es entrega consistente contra la línea base técnica, cronograma y términos comerciales.',
    ),
    items: a(
      [
        'Project controls (WBS, IMS, critical path)',
        'Risk register and mitigation tracking',
        'Manufacturing supervision during critical phases',
        'Engineering change control',
        'Packaging, preservation, and shipping specification',
        'Logistics coordination and Incoterms support',
        'After-sales continuity and spare-parts planning',
        'Supplier performance monitoring',
      ],
      [
        'Controles de proyecto (WBS, IMS, ruta crítica)',
        'Registro de riesgos y seguimiento de mitigación',
        'Supervisión de manufactura durante fases críticas',
        'Control de cambios de ingeniería',
        'Especificación de embalaje, preservación y envío',
        'Coordinación logística y soporte de Incoterms',
        'Continuidad posventa y planificación de refacciones',
        'Monitoreo de desempeño de proveedores',
      ],
    ),
    relatedSolutions: ['industrial-equipment', 'automation', 'packaging'],
  },
];
