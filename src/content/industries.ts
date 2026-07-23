import type { Industry } from './types';

const l = (en: string, es: string) => ({ en, es });
const a = (en: string[], es: string[]) => ({ en, es });

export const industries: Industry[] = [
  {
    id: 'automotive',
    slug: l('automotive', 'automotriz'),
    title: l('Automotive', 'Automotriz'),
    summary: l(
      'Production-ready components and assemblies for demanding vehicle programs — built to IATF 16949 discipline with PPAP, capability studies, and traceability.',
      'Componentes y conjuntos listos para producción para programas de vehículos exigentes — construidos con disciplina IATF 16949 con PPAP, estudios de capacidad y trazabilidad.',
    ),
    challenge: l(
      'Automotive programs require IATF 16949-aligned quality systems, PPAP submissions, capacity demonstrations (Ppk ≥ 1.67 for new processes, Cpk ≥ 1.33 for series production), full material traceability, and dependable launch timing aligned to vehicle build cycles. Launch performance is measured in PPM defect rates, on-time delivery, and warranty cost — each carries commercial consequences. Supplier changes during a vehicle program are highly controlled; a single change can require re-validation, re-PPAP, and customer engineering approval before parts ship.',
      'Los programas automotrices requieren sistemas de calidad alineados con IATF 16949, presentaciones PPAP, demostraciones de capacidad (Ppk ≥ 1,67 para procesos nuevos, Cpk ≥ 1,33 para producción en serie), trazabilidad total de material y plazos de lanzamiento confiables alineados a ciclos de construcción de vehículos. El desempeño de lanzamiento se mide en tasas de defecto PPM, entrega a tiempo y costo de garantía — cada uno conlleva consecuencias comerciales. Los cambios de proveedor durante un programa de vehículo son altamente controlados; un solo cambio puede requerir re-validación, re-PPAP y aprobación de ingeniería del cliente antes de enviar piezas.',
    ),
    approach: l(
      'We align drawings, validation plans, tooling, and production controls with automotive program requirements. Quality planning follows APQP — Design FMEA, Process FMEA, control plans, MSA, and PPAP at the level required by the customer. Critical-to-Quality (CTQ) dimensions are identified, capability studies (Cpk/Ppk) are run, and SPC is applied during series production where appropriate. Traceability is maintained through lot identification, material certificates, and process records. Launch timing is managed against vehicle build milestones — prototype, validation, pre-production, Job #1, ramp-up.',
      'Alineamos planos, planes de validación, herramentales y controles de producción con los requisitos del programa automotriz. La planificación de calidad sigue APQP — DFMEA, PFMEA, planes de control, MSA y PPAP al nivel requerido por el cliente. Las dimensiones críticas para la calidad (CTQ) se identifican, se ejecutan estudios de capacidad (Cpk/Ppk) y se aplica SPC durante la producción en serie donde es apropiado. La trazabilidad se mantiene a través de identificación de lote, certificados de material y registros de proceso. El cronograma de lanzamiento se gestiona contra hitos de construcción del vehículo — prototipo, validación, pre-producción, Job #1, ramp-up.',
    ),
    relatedSolutions: ['plastic-injection', 'metal-manufacturing', 'automation', 'custom-manufacturing'],
    relatedServices: ['engineering', 'quality-control', 'tooling', 'project-management'],
    projectTypes: a(
      [
        'Interior trim and exterior components (UV-stabilized, A-grade surface)',
        'Metal brackets, stamped parts, structural reinforcements',
        'Assembly fixtures, gauges, and end-of-line test equipment',
        'Under-hood components (heat-stabilized, chemical-resistant)',
        'Electrical and electronic housings (EMI-shielded)',
      ],
      [
        'Componentes interiores y exteriores (estabilizados UV, superficie grado A)',
        'Soportes metálicos, piezas estampadas, refuerzos estructurales',
        'Dispositivos de ensamblaje, calibres y equipos de prueba final de línea',
        'Componentes bajo capó (estabilizados al calor, resistentes a químicos)',
        'Carcasas eléctricas y electrónicas (protegidas EMI)',
      ],
    ),
  },
  {
    id: 'medical',
    slug: l('medical', 'medico'),
    title: l('Medical', 'Médico'),
    summary: l(
      'Manufacturing support for components requiring ISO 13485 discipline — material control, process validation, and clear records supporting regulatory submissions.',
      'Soporte de manufactura para componentes que requieren disciplina ISO 13485 — control de material, validación de proceso y registros claros que respalden presentaciones regulatorias.',
    ),
    challenge: l(
      'Medical applications demand material control, process validation (IQ/OQ/PQ), biocompatibility verification per ISO 10993 where applicable, and clear records supporting regulatory submissions (FDA 510(k), CE marking under MDR). Single-batch traceability is often required — every component back to raw material lot and processing parameters. Process changes are controlled through documented change management that may require regulatory notification before implementation. Supplier qualification is more rigorous than general industrial — quality agreements, audit history, and continuity planning are baseline expectations, not optional extras.',
      'Las aplicaciones médicas exigen control de material, validación de proceso (IQ/OQ/PQ), verificación de biocompatibilidad según ISO 10993 cuando aplica, y registros claros que respalden presentaciones regulatorias (FDA 510(k), marcado CE bajo MDR). La trazabilidad por lote único se requiere a menudo — cada componente hasta el lote de material en bruto y los parámetros de procesamiento. Los cambios de proceso se controlan a través de gestión de cambios documentada que puede requerir notificación regulatoria antes de la implementación. La calificación de proveedores es más rigurosa que la industrial general — acuerdos de calidad, historial de auditoría y planificación de continuidad son expectativas de línea base, no extras opcionales.',
    ),
    approach: l(
      'We define the applicable quality plan and coordinate qualified production for the intended use. Material selection is verified against biocompatibility requirements; processes requiring validation (IQ/OQ/PQ) are identified and validation protocols are executed before series production. Cleanroom manufacturing is coordinated where required (ISO Class 7 / 8 typical). Traceability is maintained through lot identification, material certificates, and process records — supporting single-batch trace-back when required. Supplier qualification includes quality agreement, audit history, and continuity planning. Documentation is structured to support regulatory submissions — Device History Record (DHR), Design History File (DHF), and Technical Documentation File (TDF) where applicable.',
      'Definimos el plan de calidad aplicable y coordinamos producción calificada para el uso previsto. La selección de material se verifica contra requisitos de biocompatibilidad; los procesos que requieren validación (IQ/OQ/PQ) se identifican y los protocolos de validación se ejecutan antes de la producción en serie. La manufactura en sala limpia se coordina cuando se requiere (ISO Clase 7 / 8 típico). La trazabilidad se mantiene a través de identificación de lote, certificados de material y registros de proceso — respaldando trazabilidad de lote único cuando se requiere. La calificación de proveedores incluye acuerdo de calidad, historial de auditoría y planificación de continuidad. La documentación se estructura para respaldar presentaciones regulatorias — Registro de Historia del Dispositivo (DHR), Archivo de Historia de Diseño (DHF) y Archivo de Documentación Técnica (TDF) cuando aplica.',
    ),
    relatedSolutions: ['plastic-injection', 'metal-manufacturing', 'custom-manufacturing'],
    relatedServices: ['supplier-qualification', 'quality-control', 'manufacturing-supervision'],
    projectTypes: a(
      [
        'Enclosures and housings (cleanroom-compatible)',
        'Precision machined components (tight tolerance)',
        'Disposable plastic components (high-volume molding)',
        'Surgical instrument components',
        'Diagnostic equipment housings',
      ],
      [
        'Carcasas y envolventes (compatibles con sala limpia)',
        'Componentes mecanizados de precisión (tolerancia estrecha)',
        'Componentes plásticos desechables (moldeo de alto volumen)',
        'Componentes de instrumentos quirúrgicos',
        'Carcasas de equipos de diagnóstico',
      ],
    ),
  },
  {
    id: 'consumer-goods',
    slug: l('consumer-goods', 'bienes-de-consumo'),
    title: l('Consumer Goods', 'Bienes de Consumo'),
    summary: l(
      'Scalable product manufacturing that balances finish, cost, and reliable replenishment — translating brand expectations into repeatable production specifications.',
      'Manufactura escalable de productos que equilibra acabado, costo y reabastecimiento confiable — traduciendo expectativas de marca en especificaciones de producción repetibles.',
    ),
    challenge: l(
      'Consumer products must meet brand expectations for finish, function, and perceived quality while remaining manufacturable at competitive cost and reliable replenishment cycle. Brand-damaging defects — sink marks, flash, color mismatch, misregistration, surface blemish — appear at low rates but accumulate to visible quality drift across a season. Lead time is critical: seasonal launches and replenishment cycles tolerate little slip. SKU proliferation (colorways, configurations, regional variants) multiplies complexity and requires disciplined changeover procedures to prevent cross-contamination and configuration errors.',
      'Los productos de consumo deben cumplir expectativas de marca en acabado, función y calidad percibida manteniéndose fabricables a costo competitivo y ciclo de reabastecimiento confiable. Los defectos que dañan la marca — hundimientos, rebarba, desajuste de color, desalineación, mancha superficial — aparecen a tasas bajas pero se acumulan en deriva de calidad visible a lo largo de una temporada. El plazo es crítico: lanzamientos estacionales y ciclos de reabastecimiento toleran poco desliz. La proliferación de SKU (colorways, configuraciones, variantes regionales) multiplica la complejidad y requiere procedimientos disciplinados de cambio para prevenir contaminación cruzada y errores de configuración.',
    ),
    approach: l(
      'We translate product intent into practical specifications, tooling, and production controls. Cosmetic standards are defined with A-grade surface specifications, golden samples, and visual limit samples agreed before production. Color is controlled through Pantone or custom master with delta-E tolerance. Tooling is specified for the program volume — single-cavity for low-volume, multi-cavity for higher volume — and qualified to deliver cosmetic consistency across cavities. Production control plans emphasize the cosmetic CTQs identified at program start. Changeover procedures are documented for multi-SKU programs; first-off inspection confirms configuration before series production resumes.',
      'Traducimos la intención del producto en especificaciones prácticas, herramentales y controles de producción. Los estándares estéticos se definen con especificaciones de superficie grado A, muestras doradas y muestras límite visuales acordadas antes de la producción. El color se controla a través de Pantone o master personalizado con tolerancia delta-E. Los herramentales se especifican para el volumen del programa — una cavidad para bajo volumen, múltiples cavidades para mayor volumen — y se califican para entregar consistencia estética entre cavidades. Los planes de control de producción enfatizan los CTQs estéticos identificados al inicio del programa. Los procedimientos de cambio se documentan para programas multi-SKU; la inspección de primera pieza confirma configuración antes de reanudar la producción en serie.',
    ),
    relatedSolutions: ['plastic-injection', 'packaging', 'custom-manufacturing'],
    relatedServices: ['product-development', 'oem', 'quality-control'],
    projectTypes: a(
      [
        'Durable consumer goods (appliances, electronics)',
        'Household products (kitchen, bath, organization)',
        'Retail-ready assemblies and gift sets',
        'Seasonal products (limited-run production)',
        'Brand-extension products (ODM platform adaptation)',
      ],
      [
        'Bienes de consumo duraderos (electrodomésticos, electrónica)',
        'Productos para el hogar (cocina, baño, organización)',
        'Conjuntos listos para venta y sets de regalo',
        'Productos estacionales (producción de tirada limitada)',
        'Productos de extensión de marca (adaptación de plataforma ODM)',
      ],
    ),
  },
  {
    id: 'industrial-equipment',
    slug: l('industrial-equipment', 'equipos-industriales'),
    title: l('Industrial Equipment', 'Equipos Industriales'),
    summary: l(
      'Built-to-spec parts, subassemblies, and complete equipment packages for operating environments — managed as integration programs with full documentation.',
      'Piezas a especificación, subconjuntos y paquetes completos de equipo para entornos operativos — gestionados como programas de integración con documentación completa.',
    ),
    challenge: l(
      'Equipment programs combine technical interfaces (mechanical, electrical, control), lifecycle expectations (10–25 year service life, maintainability, spare-parts availability), and field reliability requirements (uptime, MTBF, service response). The integration of subsystems — structural, mechanical, piping, instrumentation, electrical, control — surfaces mismatches that are expensive to fix at commissioning. Documentation must support not only initial installation but the equipment\'s entire service life — operating manuals, maintenance procedures, spare parts lists, electrical schematics, P&IDs.',
      'Los programas de equipos combinan interfaces técnicas (mecánicas, eléctricas, de control), expectativas de ciclo de vida (10–25 años de vida de servicio, mantenibilidad, disponibilidad de refacciones) y requisitos de confiabilidad en campo (uptime, MTBF, respuesta de servicio). La integración de subsistemas — estructural, mecánico, tubería, instrumentación, eléctrico, control — expone desajustes costosos de corregir en la puesta en marcha. La documentación debe respaldar no solo la instalación inicial sino toda la vida de servicio del equipo — manuales de operación, procedimientos de mantenimiento, listas de refacciones, esquemas eléctricos, P&IDs.',
    ),
    approach: l(
      'We manage interfaces across fabrication, machining, assembly, inspection, and documentation. P&ID and general arrangement drawings are reviewed against the operational envelope before build. Each subsystem is qualified through its own build and test cycle; integration is staged — mechanical completion, electrical completion, functional test, FAT. Documentation is built in parallel with the equipment, not generated at the end — released as a controlled package at delivery. Pre-shipment inspection covers dimensional, functional, and documentation completeness. Where applicable, SAT and commissioning support is provided.',
      'Gestionamos interfaces entre fabricación, mecanizado, ensamblaje, inspección y documentación. Los planos P&ID y de arreglo general se revisan contra la envolvente operacional antes de la construcción. Cada subsistema se califica a través de su propio ciclo de construcción y prueba; la integración se escalona — completitud mecánica, completitud eléctrica, prueba funcional, FAT. La documentación se construye en paralelo con el equipo, no se genera al final — se libera como paquete controlado en la entrega. La inspección previa al envío cubre completitud dimensional, funcional y documental. Cuando aplica, se proporciona SAT y soporte de puesta en marcha.',
    ),
    relatedSolutions: ['industrial-equipment', 'metal-manufacturing', 'automation', 'water-treatment'],
    relatedServices: ['engineering', 'project-management', 'manufacturing-supervision'],
    projectTypes: a(
      [
        'Skids and frames (process, pumping, filtration)',
        'Machine assemblies and subassemblies',
        'Replacement parts (including reverse-engineered)',
        'Custom equipment packages (FAT-validated)',
        'Field-installable modular assemblies',
      ],
      [
        'Skids y bastidores (proceso, bombeo, filtración)',
        'Conjuntos y subconjuntos de maquinaria',
        'Piezas de repuesto (incluyendo reconstruidas por ingeniería inversa)',
        'Paquetes de equipo a medida (validados con FAT)',
        'Conjuntos modulares instalables en campo',
      ],
    ),
  },
  {
    id: 'energy',
    slug: l('energy', 'energia'),
    title: l('Energy', 'Energía'),
    summary: l(
      'Industrial supply and execution support for conventional and renewable energy assets — traceable materials, long-lead coordination, and project-aligned logistics.',
      'Suministro industrial y soporte de ejecución para activos de energía convencional y renovable — materiales trazables, coordinación de largo plazo y logística alineada al proyecto.',
    ),
    challenge: l(
      'Energy projects combine long service life (25+ years for solar, 30+ for wind, 40+ for conventional), distributed sites, demanding environmental conditions (corrosion categories C1–C5, UV, wind, snow, seismic), and tight project schedules with multiple sites and seasons. Long-lead items — structural steel, galvanizing, specialty components — require early commitment and qualified supplier readiness. Material traceability is non-negotiable: every structural member carries a heat number and certificate. Documentation — material certificates, weld records, coating records, environmental certifications — must accompany components to site, not arrive later.',
      'Los proyectos energéticos combinan larga vida de servicio (25+ años para solar, 30+ para eólica, 40+ para convencional), sitios distribuidos, condiciones ambientales exigentes (categorías de corrosión C1–C5, UV, viento, nieve, sísmica) y cronogramas ajustados de proyecto con múltiples sitios y temporadas. Los artículos de largo plazo — acero estructural, galvanizado, componentes especiales — requieren compromiso temprano y preparación calificada del proveedor. La trazabilidad de material es innegociable: cada miembro estructural lleva un número de colada y certificado. La documentación — certificados de material, registros de soldadura, registros de recubrimiento, certificaciones ambientales — debe acompañar a los componentes al sitio, no llegar después.',
    ),
    approach: l(
      'We coordinate technical review, supplier readiness, inspection, and delivery sequencing. Material selection is verified against the operating environment — corrosion category, UV exposure, wind/snow loads, seismic category. Structural calculations are reviewed against local codes. Welding is qualified (AWS D1.1 / ISO 15614); hot-dip galvanizing is specified (ASTM A123 / ISO 1461) and verified (thickness, adhesion, uniformity). Supplier readiness is verified before commitment; inspection covers dimensional, weld, coating, and material certificate verification. Logistics sequencing aligns supplier production with site installation windows — partial shipments, staged inventory, documented chain of custody.',
      'Coordinamos revisión técnica, preparación de proveedores, inspección y secuencia de entrega. La selección de material se verifica contra el entorno operativo — categoría de corrosión, exposición UV, cargas de viento/nieve, categoría sísmica. Los cálculos estructurales se revisan contra códigos locales. La soldadura se califica (AWS D1.1 / ISO 15614); el galvanizado en caliente se especifica (ASTM A123 / ISO 1461) y se verifica (espesor, adherencia, uniformidad). La preparación del proveedor se verifica antes del compromiso; la inspección cubre verificación dimensional, de soldadura, de recubrimiento y de certificado de material. La secuencia logística alinea la producción del proveedor con las ventanas de instalación en sitio — envíos parciales, inventario escalonado, cadena de custodia documentada.',
    ),
    relatedSolutions: ['renewable-energy', 'metal-manufacturing', 'automation', 'water-treatment'],
    relatedServices: ['supplier-qualification', 'quality-control', 'supply-chain-development'],
    projectTypes: a(
      [
        'Solar mounting structures (fixed-tilt, single-axis tracker)',
        'Electrical enclosures (DC/AC combiners, inverter skids)',
        'Process auxiliaries (heat exchangers, vessels)',
        'Conventional power components (structural, mechanical)',
        'Energy storage system components',
      ],
      [
        'Estructuras de montaje solar (inclinación fija, seguidor de eje único)',
        'Gabinetes eléctricos (combinadores CC/CA, skids de inversor)',
        'Auxiliares de proceso (intercambiadores de calor, vasos)',
        'Componentes de energía convencional (estructurales, mecánicos)',
        'Componentes de sistemas de almacenamiento de energía',
      ],
    ),
  },
  {
    id: 'mining',
    slug: l('mining', 'mineria'),
    title: l('Mining', 'Minería'),
    summary: l(
      'Durable engineered components for abrasive, remote, and high-duty operations — with material upgrades for wear life and reverse-engineered spares for obsolete supply.',
      'Componentes de ingeniería durables para operaciones abrasivas, remotas y de alta exigencia — con mejoras de material para vida al desgaste y repuestos reconstruidos por ingeniería inversa para suministro obsoleto.',
    ),
    challenge: l(
      'Mining operations face abrasive wear, remote access, high downtime cost, and long equipment service lives (often 30+ years). OEM support for legacy equipment may be unavailable, lead times for OEM spares can stretch to 16+ weeks, and the cost of a single downtime event can dwarf the cost of the spare itself. Material selection drives total cost of ownership — a wear component that lasts 2× longer may cost 1.5× more but saves multiple change-out cycles. Documentation for legacy equipment is often incomplete or lost, making reverse engineering the only practical path to a controlled spare part.',
      'Las operaciones mineras enfrentan desgaste abrasivo, acceso remoto, alto costo de tiempo muerto y largas vidas de servicio del equipo (a menudo 30+ años). El soporte OEM para equipos heredados puede no estar disponible, los plazos para repuestos OEM pueden estirarse a 16+ semanas y el costo de un solo evento de tiempo muerto puede enanizar el costo del repuesto mismo. La selección de material impulsa el costo total de propiedad — un componente de desgaste que dura 2× más puede costar 1,5× más pero ahorra múltiples ciclos de cambio. La documentación para equipos heredados a menudo es incompleta o perdida, haciendo de la ingeniería inversa el único camino práctico a un repuesto controlado.',
    ),
    approach: l(
      'We prioritize application review, material selection, fabrication quality, and spare-part continuity. Application review captures the operating envelope — abrasive media, impact loading, temperature, corrosion environment. Material selection is matched to the application — wear-resistant steels (Hardox, AR400/500), chrome iron, ceramics, hardened surfaces — with documented upgrade opportunities presented for buyer decision. Reverse engineering is applied where original documentation is unavailable — 3D scanning, CMM measurement, material analysis, and reconstructed engineering packages. Fabrication quality is controlled through weld procedure qualification, dimensional verification, and material certification. Spare-part continuity is planned through documentation archiving and supplier qualification for repeat ordering.',
      'Priorizamos revisión de aplicación, selección de materiales, calidad de fabricación y continuidad de repuestos. La revisión de aplicación captura la envolvente operativa — medio abrasivo, carga de impacto, temperatura, ambiente corrosivo. La selección de material se ajusta a la aplicación — aceros resistentes al desgaste (Hardox, AR400/500), hierro al cromo, cerámicas, superficies endurecidas — con oportunidades documentadas de mejora presentadas para decisión del comprador. La ingeniería inversa se aplica cuando la documentación original no está disponible — escaneo 3D, medición CMM, análisis de material y paquetes de ingeniería reconstruidos. La calidad de fabricación se controla a través de calificación de procedimiento de soldadura, verificación dimensional y certificación de material. La continuidad de repuestos se planifica a través de archivado de documentación y calificación de proveedores para pedidos repetidos.',
    ),
    relatedSolutions: ['metal-manufacturing', 'industrial-equipment', 'water-treatment'],
    relatedServices: ['reverse-engineering', 'quality-control', 'manufacturing-transfer'],
    projectTypes: a(
      [
        'Wear components (liners, plates, hammers, teeth)',
        'Fabricated structures (chutes, frames, supports)',
        'Pump and process skids (slurry, dewatering)',
        'Replacement parts (reverse-engineered for obsolete supply)',
        'Material-upgrade programs (longer wear life)',
      ],
      [
        'Componentes de desgaste (revestimientos, placas, martillos, dientes)',
        'Estructuras fabricadas (canales, bastidores, soportes)',
        'Skids de bombeo y proceso (pasta, desaguado)',
        'Piezas de repuesto (reconstruidas por ingeniería inversa para suministro obsoleto)',
        'Programas de mejora de material (mayor vida al desgaste)',
      ],
    ),
  },
  {
    id: 'food',
    slug: l('food', 'alimentos'),
    title: l('Food & Beverage', 'Alimentos y Bebidas'),
    summary: l(
      'Equipment and packaging solutions designed around hygienic, maintainable production — materials, surfaces, and equipment interfaces matched to food-grade standards.',
      'Soluciones de equipos y empaque diseñadas para producción higiénica y mantenible — materiales, superficies e interfaces de equipo ajustados a estándares de grado alimentario.',
    ),
    challenge: l(
      'Food operations must protect product integrity while maintaining throughput and cleanability. Material selection is regulated — stainless steel (304, 316L), FDA-compliant plastics, food-grade elastomers; surface finish requirements (Ra ≤ 0.8 µm for product-contact surfaces) prevent microbial retention. Equipment interfaces must support clean-in-place (CIP) and sanitize-in-place (SIP) procedures without disassembly. Throughput demands tolerate little downtime; changeover between SKUs must be fast and repeatable. Documentation supports regulatory audits — material certificates, surface finish records, weld procedure qualifications, and CIP validation records.',
      'Las operaciones alimentarias deben proteger la integridad del producto manteniendo rendimiento y facilidad de limpieza. La selección de material está regulada — acero inoxidable (304, 316L), plásticos compatibles con FDA, elastómeros de grado alimentario; los requisitos de acabado superficial (Ra ≤ 0,8 µm para superficies de contacto con producto) previenen retención microbiana. Las interfaces de equipo deben soportar procedimientos de limpieza in situ (CIP) y saneamiento in situ (SIP) sin desensamblaje. Las exigencias de rendimiento toleran poco tiempo muerto; el cambio entre SKUs debe ser rápido y repetible. La documentación respalda auditorías regulatorias — certificados de material, registros de acabado superficial, calificaciones de procedimiento de soldadura y registros de validación CIP.',
    ),
    approach: l(
      'We review materials, surface requirements, equipment interfaces, and sanitation considerations. Material selection is verified for product-contact and non-contact zones — FDA-compliant, EU 1935/2004 where applicable, with material certificates (3.1 per EN 10204). Surface finish is specified (Ra, electropolishing where required) and verified. Weld procedures are qualified to hygienic standards — smooth, crevice-free, drainable. Equipment interfaces are designed for CIP/SIP — sloped, no dead legs, fully drainable. Documentation supports regulatory audit — material certificates, surface records, weld maps, CIP validation. Packaging solutions for food products are matched to barrier requirements, line rate, and recyclability targets.',
      'Revisamos materiales, requisitos de superficie, interfaces de equipos y consideraciones de saneamiento. La selección de material se verifica para zonas de contacto y no contacto con producto — compatible con FDA, EU 1935/2004 cuando aplica, con certificados de material (3.1 según EN 10204). El acabado superficial se especifica (Ra, electropulido cuando se requiere) y se verifica. Los procedimientos de soldadura se califican a estándares higiénicos — lisos, sin hendiduras, drenables. Las interfaces de equipo se diseñan para CIP/SIP — inclinadas, sin piernas muertas, totalmente drenables. La documentación respalda auditoría regulatoria — certificados de material, registros de superficie, mapas de soldadura, validación CIP. Las soluciones de empaque para productos alimentarios se ajustan a requisitos de barrera, velocidad de línea y objetivos de reciclabilidad.',
    ),
    relatedSolutions: ['packaging', 'industrial-equipment', 'water-treatment', 'automation'],
    relatedServices: ['engineering', 'supplier-qualification', 'quality-control'],
    projectTypes: a(
      [
        'Conveying and handling equipment (food-grade)',
        'Stainless steel assemblies (316L typical)',
        'Packaging line components and change parts',
        'CIP/SIP-compatible equipment interfaces',
        'Process skids for food and beverage',
      ],
      [
        'Equipos de transporte y manejo (grado alimentario)',
        'Conjuntos de acero inoxidable (316L típico)',
        'Componentes de línea de empaque y piezas de cambio',
        'Interfaces de equipo compatibles con CIP/SIP',
        'Skids de proceso para alimentos y bebidas',
      ],
    ),
  },
  {
    id: 'packaging',
    slug: l('packaging', 'empaque'),
    title: l('Packaging', 'Empaque'),
    summary: l(
      'Packaging components, machinery support, and production integration for stable operations — designed around the line, not just the product.',
      'Componentes de empaque, soporte de maquinaria e integración de producción para operaciones estables — diseñados alrededor de la línea, no solo del producto.',
    ),
    challenge: l(
      'Packaging lines depend on repeatable materials, dimensional fit between components (bottle, cap, label, secondary), and coordinated changeovers between SKUs. A packaging component that looks right but does not run at line rate, jams in the capper, misregisters in the labeler, or fails the drop test causes more loss than any unit-price advantage can recover. SKU proliferation multiplies complexity; without disciplined changeover procedures, cross-contamination and configuration errors erode line efficiency. Recyclability and PCR (post-consumer recycled) content targets add material selection complexity while maintaining performance.',
      'Las líneas de empaque dependen de materiales repetibles, ajuste dimensional entre componentes (botella, tapa, etiqueta, secundario) y cambios coordinados entre SKUs. Un componente de empaque que luce correcto pero no corre a velocidad de línea, se atasca en el tapón, se desalinea en el etiquetador o falla la prueba de caída causa más pérdida que cualquier ventaja de precio unitario pueda recuperar. La proliferación de SKU multiplica la complejidad; sin procedimientos disciplinados de cambio, la contaminación cruzada y los errores de configuración erosionan la eficiencia de línea. Los objetivos de reciclabilidad y contenido PCR (reciclado post-consumo) agregan complejidad a la selección de material manteniendo el desempeño.',
    ),
    approach: l(
      'We connect component specifications with tooling, machine interfaces, and incoming inspection. Material selection (PET, HDPE, PP, PCR content) is matched to product compatibility, barrier requirements, and recyclability targets. Tooling is specified for the program volume and qualified to deliver dimensional stability at production rate. Machine change parts are reverse-engineered or built to OEM specifications. Line integration support covers changeover procedures, incoming inspection criteria, and performance trending during the initial production period. Validation includes dimensional verification, drop testing, leak testing, and shelf-life testing where applicable.',
      'Conectamos especificaciones de componentes con herramentales, interfaces de máquina e inspección de entrada. La selección de material (PET, HDPE, PP, contenido PCR) se ajusta a compatibilidad con producto, requisitos de barrera y objetivos de reciclabilidad. Los herramentales se especifican para el volumen del programa y se califican para entregar estabilidad dimensional a velocidad de producción. Las piezas de cambio de máquina se reconstruyen por ingeniería inversa o se construyen según especificaciones OEM. El soporte de integración de línea cubre procedimientos de cambio, criterios de inspección de entrada y tendencia de desempeño durante el período inicial de producción. La validación incluye verificación dimensional, prueba de caída, prueba de fuga y prueba de vida en estante cuando aplica.',
    ),
    relatedSolutions: ['packaging', 'plastic-injection', 'automation', 'custom-manufacturing'],
    relatedServices: ['tooling', 'oem', 'quality-control'],
    projectTypes: a(
      [
        'Rigid packaging (bottles, caps, closures)',
        'Machine change parts (OEM-spec)',
        'Automation modules (line integration)',
        'Multi-component packaging systems',
        'Sustainable packaging (PCR, recyclable)',
      ],
      [
        'Empaque rígido (botellas, tapas, cierres)',
        'Piezas de cambio de máquina (especie OEM)',
        'Módulos de automatización (integración de línea)',
        'Sistemas de empaque multicomponente',
        'Empaque sostenible (PCR, reciclable)',
      ],
    ),
  },
  {
    id: 'electronics',
    slug: l('electronics', 'electronica'),
    title: l('Electronics', 'Electrónica'),
    summary: l(
      'Mechanical, enclosure, and integration support for electronic products and equipment — manufacturability review, component sourcing, and disciplined assembly.',
      'Soporte mecánico, de gabinetes e integración para productos y equipos electrónicos — revisión de fabricabilidad, suministro de componentes y ensamblaje disciplinado.',
    ),
    challenge: l(
      'Electronic systems require accurate mechanical interfaces, finish control (cosmetic and EMI shielding), and disciplined assembly. Sheet metal enclosures must meet NEMA/IP ratings, dimensional tolerance, and surface finish requirements; plastic housings must balance cosmetic appearance with structural integrity and EMI shielding; electromechanical assemblies combine mechanical, electronic, and firmware components that must integrate cleanly. Component sourcing for electronic products is volatile — long lead times, obsolescence, and counterfeit risk require disciplined supplier management. Documentation must support not only initial production but repair, service, and field returns.',
      'Los sistemas electrónicos requieren interfaces mecánicas precisas, control de acabado (estético y blindaje EMI) y ensamblaje disciplinado. Los gabinetes de lámina metálica deben cumplir calificaciones NEMA/IP, tolerancia dimensional y requisitos de acabado superficial; las carcasas plásticas deben balancear apariencia estética con integridad estructural y blindaje EMI; los conjuntos electromecánicos combinan componentes mecánicos, electrónicos y de firmware que deben integrarse limpiamente. El suministro de componentes para productos electrónicos es volátil — plazos largos, obsolescencia y riesgo de falsificación requieren gestión disciplinada de proveedores. La documentación debe respaldar no solo la producción inicial sino reparación, servicio y devoluciones de campo.',
    ),
    approach: l(
      'We manage manufacturability review, component sourcing, assembly instructions, and verification. Sheet metal enclosures are specified to NEMA/IP ratings with dimensional tolerance, surface finish, and EMI shielding requirements verified. Plastic housings are designed with DFM/DFA for moldability and assembly efficiency; EMI shielding is specified (conductive coatings, gaskets) where required. Component sourcing applies disciplined supplier qualification — authorized distributors preferred, obsolescence monitoring for critical components, counterfeit avoidance procedures. Assembly is documented with work instructions; in-process inspection verifies critical-to-quality characteristics at each assembly step. Documentation supports repair, service, and field returns — schematics, BOM, assembly drawings, repair procedures.',
      'Gestionamos revisión de fabricabilidad, suministro de componentes, instrucciones de ensamblaje y verificación. Los gabinetes de lámina metálica se especifican a calificaciones NEMA/IP con tolerancia dimensional, acabado superficial y requisitos de blindaje EMI verificados. Las carcasas plásticas se diseñan con DFM/DFA para moldeabilidad y eficiencia de ensamblaje; el blindaje EMI se especifica (recubrimientos conductivos, empaques) cuando se requiere. El suministro de componentes aplica calificación disciplinada de proveedores — distribuidores autorizados preferidos, monitoreo de obsolescencia para componentes críticos, procedimientos de evitación de falsificación. El ensamblaje se documenta con instrucciones de trabajo; la inspección en proceso verifica características críticas para la calidad en cada paso de ensamblaje. La documentación respalda reparación, servicio y devoluciones de campo — esquemas, BOM, planos de ensamblaje, procedimientos de reparación.',
    ),
    relatedSolutions: ['metal-manufacturing', 'plastic-injection', 'automation', 'custom-manufacturing'],
    relatedServices: ['product-development', 'engineering', 'quality-control'],
    projectTypes: a(
      [
        'Sheet-metal enclosures (NEMA-rated, IP-rated)',
        'Plastic housings (cosmetic, EMI-shielded)',
        'Electromechanical assemblies',
        'Component sourcing (authorized distributor)',
        'Cable and harness assemblies',
      ],
      [
        'Gabinetes de lámina metálica (clasificados NEMA, IP)',
        'Carcasas plásticas (estéticas, blindadas EMI)',
        'Conjuntos electromecánicos',
        'Suministro de componentes (distribuidor autorizado)',
        'Conjuntos de cables y mazos',
      ],
    ),
  },
  {
    id: 'construction',
    slug: l('construction', 'construccion'),
    title: l('Construction', 'Construcción'),
    summary: l(
      'Fabricated and engineered products for infrastructure, building, and site operations — specification compliance, logistics, and site sequencing.',
      'Productos fabricados y de ingeniería para infraestructura, edificación y operaciones en sitio — cumplimiento de especificaciones, logística y secuencia en sitio.',
    ),
    challenge: l(
      'Construction projects must reconcile specification compliance, logistics constraints, and site sequencing. Structural components carry code requirements (AWS D1.1 for structural steel, ACI for concrete embeds, local building codes); coating systems must meet durability categories (C1–C5); documentation — material certificates, weld records, coating records — must accompany components to site. Site logistics constrain delivery windows; partial shipments, staged inventory near site, and documented chain of custody are normal. Sequencing is critical: components arriving out of sequence cause installation delays that ripple through the project schedule.',
      'Los proyectos de construcción deben conciliar cumplimiento de especificaciones, restricciones logísticas y secuencia en sitio. Los componentes estructurales cargan requisitos de código (AWS D1.1 para acero estructural, ACI para embebidos de concreto, códigos locales de edificación); los sistemas de recubrimiento deben cumplir categorías de durabilidad (C1–C5); la documentación — certificados de material, registros de soldadura, registros de recubrimiento — debe acompañar a los componentes al sitio. La logística de sitio restringe las ventanas de entrega; los envíos parciales, el inventario escalonado cerca del sitio y la cadena de custodia documentada son normales. La secuenciación es crítica: los componentes que llegan fuera de secuencia causan retrasos de instalación que se propagan por el cronograma del proyecto.',
    ),
    approach: l(
      'We coordinate technical documentation, qualified fabrication, inspection, and delivery planning. Structural calculations are reviewed against local codes. Welding is qualified (AWS D1.1 / equivalent); coating systems are specified (zinc-rich primer, intermediate, topcoat) and verified (thickness, adhesion). Material certificates (3.1 / 3.2 per EN 10204) accompany every structural member. Supplier qualification covers process capability, capacity profile, and on-time delivery performance. Logistics planning aligns fabrication with site installation windows — partial shipments, staged inventory near site, documented chain of custody for traceability.',
      'Coordinamos documentación técnica, fabricación calificada, inspección y planificación de entrega. Los cálculos estructurales se revisan contra códigos locales. La soldadura se califica (AWS D1.1 / equivalente); los sistemas de recubrimiento se especifican (primario rico en zinc, intermedio, acabado) y se verifican (espesor, adherencia). Los certificados de material (3.1 / 3.2 según EN 10204) acompañan a cada miembro estructural. La calificación de proveedores cubre capacidad de proceso, perfil de capacidad y desempeño de entrega a tiempo. La planificación logística alinea la fabricación con las ventanas de instalación en sitio — envíos parciales, inventario escalonado cerca del sitio, cadena de custodia documentada para trazabilidad.',
    ),
    relatedSolutions: ['metal-manufacturing', 'industrial-equipment', 'renewable-energy', 'water-treatment'],
    relatedServices: ['project-management', 'factory-audits', 'manufacturing-supervision'],
    projectTypes: a(
      [
        'Structural steel components (AWS D1.1)',
        'Site equipment and tooling',
        'Water infrastructure packages',
        'Coated fabricated members (C3–C5 systems)',
        'Modular assemblies (site-installable)',
      ],
      [
        'Componentes de acero estructural (AWS D1.1)',
        'Equipos y herramentales para obra',
        'Paquetes de infraestructura hidráulica',
        'Miembros fabricados recubiertos (sistemas C3–C5)',
        'Conjuntos modulares (instalables en sitio)',
      ],
    ),
  },
  {
    id: 'water-treatment',
    slug: l('water-treatment', 'tratamiento-de-agua'),
    title: l('Water Treatment', 'Tratamiento de Agua'),
    summary: l(
      'Process equipment, skid fabrication, and component supply for water and wastewater treatment systems — coordinated fabrication, verified interfaces, and field-ready documentation.',
      'Equipos de proceso, fabricación de skids y suministro de componentes para sistemas de tratamiento de agua y aguas residuales — fabricación coordinada, interfaces verificadas y documentación lista para campo.',
    ),
    challenge: l(
      'Water and wastewater projects require coordinated fabrication, verified interfaces, and documentation that supports installation and commissioning. Fluid compatibility (corrosion, pitting, crevice corrosion), pressure ratings, code compliance (ASME Section VIII for vessels, ASME B31.3 for piping), and integration complexity (frame, vessels, piping, pumps, valves, instrumentation, control panel) drive design decisions. Field installation tolerates little rework — the package must arrive ready to install with verified interface alignment, complete documentation, and a clear commissioning path. Service life expectations are long (20+ years), making material selection and fabrication quality determinants of total cost of ownership.',
      'Los proyectos de agua y aguas residuales requieren fabricación coordinada, interfaces verificadas y documentación que respalde la instalación y la puesta en marcha. La compatibilidad de fluidos (corrosión, picadura, corrosión de hendidura), las calificaciones de presión, el cumplimiento de código (ASME Sección VIII para vasos, ASME B31.3 para tubería) y la complejidad de integración (bastidor, vasos, tubería, bombas, válvulas, instrumentación, tablero de control) determinan las decisiones de diseño. La instalación en campo tolera poco retrabajo — el paquete debe llegar listo para instalar con alineación de interfaces verificada, documentación completa y un claro camino de puesta en marcha. Las expectativas de vida de servicio son largas (20+ años), haciendo de la selección de material y la calidad de fabricura determinantes del costo total de propiedad.',
    ),
    approach: l(
      'We align process requirements with fabrication capability, qualify suppliers for structural, piping, and mechanical scope, and manage inspection through delivery. P&ID is reviewed against the operating envelope; material selection is verified for fluid compatibility (304L, 316L, duplex, FRP, engineered plastics). Piping is fabricated to ASME B31.3 with hydrostatic testing; vessels are fabricated to ASME Section VIII where applicable. Skid integration follows the equipment build approach — structural, mechanical, piping, instrumentation, electrical — with interface control between subsystems. FAT covers pump performance, valve operation, instrumentation calibration, and control system function. Documentation — P&ID, GA, electrical schematics, instrument lists, material certificates, hydrotest records, calibration records, operating manuals — accompanies the equipment.',
      'Alineamos los requisitos de proceso con la capacidad de fabricación, calificamos proveedores para alcance estructural, de tubería y mecánico, y gestionamos la inspección hasta la entrega. El P&ID se revisa contra la envolvente operativa; la selección de material se verifica para compatibilidad de fluido (304L, 316L, dúplex, FRP, plásticos de ingeniería). La tubería se fabrica según ASME B31.3 con prueba hidrostática; los vasos se fabrican según ASME Sección VIII cuando aplica. La integración del skid sigue el enfoque de construcción de equipos — estructural, mecánico, tubería, instrumentación, eléctrico — con control de interfaz entre subsistemas. El FAT cubre desempeño de bomba, operación de válvulas, calibración de instrumentación y función del sistema de control. La documentación — P&ID, GA, esquemas eléctricos, listas de instrumentos, certificados de material, registros de hidroprueba, registros de calibración, manuales de operación — acompaña al equipo.',
    ),
    relatedSolutions: ['water-treatment', 'industrial-equipment'],
    relatedServices: ['engineering', 'project-management', 'manufacturing-supervision', 'quality-control'],
    projectTypes: a(
      [
        'Process skids and frames (filtration, dosing, pumping)',
        'Vessel and piping packages (ASME-certified where required)',
        'Pump and filtration assemblies',
        'Replacement parts for treatment systems',
        'Control panel and instrumentation integration',
      ],
      [
        'Skids y bastidores de proceso (filtración, dosificación, bombeo)',
        'Paquetes de vasos y tubería (certificados ASME cuando se requiere)',
        'Conjuntos de bombeo y filtración',
        'Piezas de repuesto para sistemas de tratamiento',
        'Integración de tablero de control e instrumentación',
      ],
    ),
  },
];
