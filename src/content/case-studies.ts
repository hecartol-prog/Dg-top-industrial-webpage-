import type { LocalizedString } from './types';
const l = (en: string, es: string): LocalizedString => ({ en, es });
export interface CaseStudy {
  id: string;
  slug: LocalizedString;
  title: LocalizedString;
  industry: string;
  industryLabel: LocalizedString;
  scopeType: LocalizedString;
  outcome: LocalizedString;
  challenge: LocalizedString;
  scope: LocalizedString;
  approach: LocalizedString;
  execution: LocalizedString;
  result: LocalizedString;
  relatedSolutions: string[];
  relatedServices: string[];
}
export const caseStudies: CaseStudy[] = [
  {
    id: 'industrial-enclosure-program',
    slug: l('industrial-enclosure-program', 'programa-de-gabinetes-industriales'),
    title: l('Industrial Enclosure Program', 'Programa de gabinetes industriales'),
    industry: 'electronics',
    industryLabel: l('Industrial Equipment', 'Equipos industriales'),
    scopeType: l('Sheet Metal', 'Lámina metálica'),
    outcome: l('Zero Non-Conformances', 'Cero no conformidades'),
    challenge: l(
      'A growing equipment manufacturer needed a repeatable enclosure program across several configurations.',
      'Un fabricante de equipos en crecimiento necesitaba un programa repetible de gabinetes para varias configuraciones.',
    ),
    scope: l(
      'Sheet metal fabrication, surface finishing, hardware installation, assembly, and dimensional inspection for a family of NEMA-rated enclosures in 6 sizes.',
      'Fabricación de lámina metálica, acabado superficial, instalación de herrajes, ensamblaje e inspección dimensional para una familia de gabinetes con clasificación NEMA en 6 tamaños.',
    ),
    approach: l(
      'Standardized interface dimensions and mounting patterns across all configurations. Established a first-article inspection plan around critical dimensions (gasket groove, door alignment, latching engagement).',
      'Se estandarizaron dimensiones de interfaz y patrones de montaje en todas las configuraciones. Se estableció un plan de inspección de primer artículo en torno a dimensiones críticas (ranura de empaque, alineación de puerta, enganche de cierre).',
    ),
    execution: l(
      'Qualified two fabrication suppliers for different size ranges. Coordinated first builds with full dimensional reports. Documented configuration controls for repeat ordering.',
      'Se calificaron dos proveedores de fabricación para distintos rangos de tamaño. Se coordinaron primeras producciones con reportes dimensionales completos. Se documentaron controles de configuración para pedidos repetidos.',
    ),
    result: l(
      'Controlled production route supporting repeat orders with consistent lead times. Engineering change process established for future configuration updates. Zero critical non-conformances across first 3 production batches.',
      'Ruta de producción controlada que respalda pedidos repetidos con plazos consistentes. Proceso de cambio de ingeniería establecido para futuras actualizaciones de configuración. Cero no conformidades críticas en los primeros 3 lotes de producción.',
    ),
    relatedSolutions: ['metal-manufacturing', 'custom-manufacturing'],
    relatedServices: ['engineering', 'quality-control', 'project-management'],
  },
  {
    id: 'water-skid-integration',
    slug: l('water-skid-integration', 'integracion-de-skid-de-agua'),
    title: l('Water Treatment Skid Integration', 'Integración de skid de tratamiento de agua'),
    industry: 'water-treatment',
    industryLabel: l('Water Treatment', 'Tratamiento de agua'),
    scopeType: l('Skid Integration', 'Integración de skid'),
    outcome: l('Field-Ready Package', 'Paquete listo para campo'),
    challenge: l(
      'A project required coordinated fabrication and integration of a compact process skid.',
      'Un proyecto requirió fabricación e integración coordinada de un skid de proceso compacto.',
    ),
    scope: l(
      'Coordinated fabrication and integration of a compact water treatment process skid including structural frame, vessel mounting, piping, instrumentation, and electrical panel.',
      'Fabricación e integración coordinada de un skid compacto de tratamiento de agua que incluye bastidor estructural, montaje de vasos, tubería, instrumentación y panel eléctrico.',
    ),
    approach: l(
      'Reviewed P&ID and general arrangement against fabrication capability. Identified interface risks between structural, piping, and electrical subsystems before build.',
      'Se revisaron el P&ID y el arreglo general frente a la capacidad de fabricación. Se identificaron riesgos de interfaz entre los subsistemas estructural, de tubería y eléctrico antes de la construcción.',
    ),
    execution: l(
      'Managed fabrication across metal and piping suppliers. Coordinated subsystem assemblies and performed integration checks before final painting and documentation.',
      'Se gestionó la fabricación entre proveedores de metal y tubería. Se coordinaron ensambles de subsistemas y se realizaron verificaciones de integración antes de la pintura final y la documentación.',
    ),
    result: l(
      'Integrated skid shipped with complete documentation package including pressure test records, material certificates, and dimensional reports. Ready for field installation with verified interface alignment.',
      'Skid integrado enviado con paquete completo de documentación que incluye registros de prueba de presión, certificados de material e informes dimensionales. Listo para instalación en campo con alineación de interfaces verificada.',
    ),
    relatedSolutions: ['water-treatment', 'industrial-equipment'],
    relatedServices: ['engineering', 'manufacturing-supervision', 'quality-control'],
  },
  {
    id: 'molded-component-transfer',
    slug: l('molded-component-transfer', 'transferencia-de-componente-moldeado'),
    title: l('Molded Component Transfer', 'Transferencia de componente moldeado'),
    industry: 'automotive',
    industryLabel: l('Automotive', 'Automotriz'),
    scopeType: l('Mold Transfer', 'Transferencia de molde'),
    outcome: l('Dimensional Continuity', 'Continuidad dimensional'),
    challenge: l(
      'A legacy molded component required production transfer with controlled dimensional continuity.',
      'Un componente moldeado heredado requirió transferencia de producción con continuidad dimensional controlada.',
    ),
    scope: l(
      'Production transfer of a legacy injection-molded component from an existing supplier to a new qualified facility with controlled dimensional continuity.',
      'Transferencia de producción de un componente moldeado por inyección heredado desde un proveedor existente hacia una nueva planta calificada, con continuidad dimensional controlada.',
    ),
    approach: l(
      'Analyzed current part data and established a comparison baseline. Identified critical dimensions and aesthetic requirements that defined transfer success.',
      'Se analizaron los datos de la pieza actual y se estableció una línea base de comparación. Se identificaron dimensiones críticas y requisitos estéticos que definieron el éxito de la transferencia.',
    ),
    execution: l(
      'Qualified new mold and production capability. Ran first-article samples with full dimensional overlay against baseline data. Adjusted process parameters to match reference within tolerance.',
      'Se calificaron el nuevo molde y la capacidad de producción. Se corrieron muestras de primer artículo con superposición dimensional completa frente a la línea base. Se ajustaron parámetros de proceso para coincidir con la referencia dentro de tolerancia.',
    ),
    result: l(
      'Successful transfer with dimensional continuity confirmed across 50 sample parts. Production approved at new facility with documented process settings. Original tooling retired on schedule.',
      'Transferencia exitosa con continuidad dimensional confirmada en 50 piezas de muestra. Producción aprobada en la nueva planta con ajustes de proceso documentados. Herramental original retirado según cronograma.',
    ),
    relatedSolutions: ['plastic-injection'],
    relatedServices: ['manufacturing-transfer', 'tooling', 'quality-control'],
  },
  {
    id: 'mining-spare-part-reconstruction',
    slug: l('mining-spare-part-reconstruction', 'reconstruccion-de-repuesto-minero'),
    title: l('Mining Spare Part Reconstruction', 'Reconstrucción de repuesto minero'),
    industry: 'mining',
    industryLabel: l('Mining', 'Minería'),
    scopeType: l('Reverse Engineering', 'Ingeniería inversa'),
    outcome: l('Reduced Lead Time', 'Plazo reducido'),
    challenge: l(
      'An operating site needed a replacement component with incomplete legacy documentation.',
      'Una operación necesitaba un componente de reemplazo con documentación heredada incompleta.',
    ),
    scope: l(
      'Reverse-engineered replacement component for an operating mining site with incomplete legacy documentation and no available spare parts.',
      'Componente de reemplazo reconstruido por ingeniería inversa para un sitio minero en operación con documentación heredada incompleta y sin repuestos disponibles.',
    ),
    approach: l(
      'Received worn physical samples and partial drawings. Used 3D scanning to capture current geometry, cross-referenced with available documentation, and reconstructed a complete engineering package.',
      'Se recibieron muestras físicas desgastadas y planos parciales. Se usó escaneo 3D para capturar la geometría actual, se contrastó con la documentación disponible y se reconstruyó un paquete de ingeniería completo.',
    ),
    execution: l(
      'Produced prototype from reconstructed drawings. Validated fit and function against worn reference samples with site team. Adjusted material specification for improved wear life.',
      'Se fabricó un prototipo a partir de los planos reconstruidos. Se validó ajuste y función frente a muestras de referencia desgastadas con el equipo en sitio. Se ajustó la especificación de material para mejorar la vida útil al desgaste.',
    ),
    result: l(
      'Component installed and operating. Engineering package archived for future reordering. Lead time reduced from 16 weeks (OEM) to 6 weeks (reconstructed source). Material upgrade extended expected service life.',
      'Componente instalado y en operación. Paquete de ingeniería archivado para futuros reórdenes. Plazo reducido de 16 semanas (OEM) a 6 semanas (fuente reconstruida). La mejora de material extendió la vida útil esperada.',
    ),
    relatedSolutions: ['metal-manufacturing', 'custom-manufacturing'],
    relatedServices: ['reverse-engineering', 'engineering', 'quality-control'],
  },
];
