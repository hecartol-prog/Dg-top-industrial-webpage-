import type { LocalizedString, LocalizedStringArray } from './types';

const l = (en: string, es: string): LocalizedString => ({ en, es });
const a = (en: string[], es: string[]): LocalizedStringArray => ({ en, es });

export interface CapabilityCluster {
  id: string; title: LocalizedString; description: LocalizedString;
  items: LocalizedStringArray; relatedSolutions: string[];
}

export const capabilities: CapabilityCluster[] = [
  { id: 'engineering', title: l('Engineering and Product Definition', 'Ingeniería y definición de producto'), description: l('Turning requirements into a controlled technical package.', 'Conversión de requisitos en un paquete técnico controlado.'), items: a(['DFM review', 'Drawings and specifications', 'Prototype planning', 'Design change control'], ['Revisión DFM', 'Planos y especificaciones', 'Planificación de prototipos', 'Control de cambios de diseño']), relatedSolutions: ['plastic-injection', 'metal-manufacturing', 'custom-manufacturing'] },
  { id: 'manufacturing', title: l('Manufacturing Processes', 'Procesos de manufactura'), description: l('Qualified process routes selected for functional and commercial fit.', 'Rutas de proceso calificadas seleccionadas por ajuste funcional y comercial.'), items: a(['Injection molding', 'Machining and fabrication', 'Assembly and test', 'Surface finishing'], ['Moldeo por inyección', 'Mecanizado y fabricación', 'Ensamblaje y prueba', 'Acabados superficiales']), relatedSolutions: ['plastic-injection', 'metal-manufacturing', 'industrial-equipment'] },
  { id: 'quality', title: l('Quality and Validation', 'Calidad y validación'), description: l('Controls that make requirements verifiable at each execution stage.', 'Controles que hacen verificables los requisitos en cada etapa de ejecución.'), items: a(['Supplier qualification', 'Inspection planning', 'First-article verification', 'Nonconformance management'], ['Calificación de proveedores', 'Planificación de inspección', 'Verificación de primera pieza', 'Gestión de no conformidades']), relatedSolutions: ['custom-manufacturing', 'renewable-energy', 'water-treatment'] },
  { id: 'execution', title: l('Program Execution', 'Ejecución de programas'), description: l('Coordinated delivery across engineering, production, and logistics.', 'Entrega coordinada entre ingeniería, producción y logística.'), items: a(['Project controls', 'Production supervision', 'Packaging and shipping readiness', 'After-sales continuity'], ['Controles de proyecto', 'Supervisión de producción', 'Preparación de embalaje y envío', 'Continuidad posventa']), relatedSolutions: ['industrial-equipment', 'automation', 'packaging'] },
];
