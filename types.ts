
export type Program = 'Economía' | 'Administración de Empresas' | 'Contaduría Pública' | 'Comercio Internacional' | 'Mercadeo';

export interface Subject {
  id: string;
  name: string;
  category: string;
}

export interface UserProfile {
  name: string;
  email: string;
  program: Program;
  semester: number;
  selectedSubject: Subject;
  avatar?: string;
}

export interface Message {
  id: string;
  role: 'user' | 'model';
  content: string;
  timestamp: Date;
}

export const PROGRAMS: Program[] = [
  'Administración de Empresas',
  'Comercio Internacional',
  'Contaduría Pública',
  'Economía',
  'Mercadeo'
];

export const PROGRAM_SUBJECTS: Record<Program, Record<number, Subject[]>> = {
  'Mercadeo': {
    1: [
      { id: 'm1_1', name: 'Fundamentos de Mercadeo', category: 'Profesional' },
      { id: 'm1_2', name: 'Psicología del Consumidor', category: 'Profesional' },
      { id: 'm1_3', name: 'Teoría de la Investigación', category: 'Investigación' },
      { id: 'm1_4', name: 'Introducción a la Economía', category: 'Básica' },
      { id: 'm1_5', name: 'Cálculo Diferencial e Integral', category: 'Ciencias' }
    ],
    2: [
      { id: 'm2_1', name: 'Comportamiento del Consumidor', category: 'Profesional' },
      { id: 'm2_2', name: 'Metodología de la Investigación', category: 'Investigación' },
      { id: 'm2_3', name: 'Microeconomía', category: 'Básica' },
      { id: 'm2_4', name: 'Álgebra de Matrices y Programación Lineal', category: 'Ciencias' },
      { id: 'm2_5', name: 'Administración', category: 'Básica' }
    ],
    3: [
      { id: 'm3_1', name: 'Legislación Comercial', category: 'Jurídica' },
      { id: 'm3_2', name: 'Gerencia del Producto', category: 'Profesional' },
      { id: 'm3_3', name: 'Macroeconomía', category: 'Básica' },
      { id: 'm3_4', name: 'Estadística I', category: 'Ciencias' },
      { id: 'm3_5', name: 'Contabilidad Financiera y de Costos', category: 'Finanzas' }
    ],
    4: [
      { id: 'm4_1', name: 'Mercadeo de Servicios', category: 'Profesional' },
      { id: 'm4_2', name: 'Gerencia de Precio', category: 'Profesional' },
      { id: 'm4_3', name: 'Laboratorio del Consumidor', category: 'Práctica' },
      { id: 'm4_4', name: 'Economía Colombiana', category: 'Básica' },
      { id: 'm4_5', name: 'Estadística II', category: 'Ciencias' }
    ],
    5: [
      { id: 'm5_1', name: 'Mix de Comunicación', category: 'Profesional' },
      { id: 'm5_2', name: 'Empaques y Embalajes', category: 'Profesional' },
      { id: 'm5_3', name: 'Green Marketing', category: 'Tendencias' },
      { id: 'm5_4', name: 'Sistema de Información de Mercados', category: 'Tecnología' },
      { id: 'm5_5', name: 'Matemática Financiera', category: 'Finanzas' }
    ],
    6: [
      { id: 'm6_1', name: 'Mercadeo Promocional y de Merchandising', category: 'Profesional' },
      { id: 'm6_2', name: 'Publicidad', category: 'Profesional' },
      { id: 'm6_3', name: 'Empresarismo e Idea de Negocios', category: 'Gestión' },
      { id: 'm6_4', name: 'Mercadeo Electrónico', category: 'Digital' },
      { id: 'm6_5', name: 'Investigación de Mercados Cualitativa', category: 'Investigación' }
    ],
    7: [
      { id: 'm7_1', name: 'Mercadeo Internacional I', category: 'Internacional' },
      { id: 'm7_2', name: 'Investigación de Mercados Cuantitativa', category: 'Investigación' },
      { id: 'm7_3', name: 'Mercadeo Estratégico', category: 'Profesional' },
      { id: 'm7_4', name: 'Formulación y Evaluación de Proyectos', category: 'Gestión' }
    ],
    8: [
      { id: 'm8_1', name: 'Mercadeo Internacional II', category: 'Internacional' },
      { id: 'm8_2', name: 'Gerencia de Marca', category: 'Profesional' },
      { id: 'm8_3', name: 'Gerencia de Ventas', category: 'Profesional' },
      { id: 'm8_4', name: 'Seminario de Trabajo de Grado', category: 'Investigación' }
    ],
    9: [
      { id: 'm9_1', name: 'Plan Estratégico de Mercadeo', category: 'Profesional' },
      { id: 'm9_2', name: 'Inteligencia de Mercados', category: 'Profesional' },
      { id: 'm9_3', name: 'Gerencia de Distribución y Logística', category: 'Profesional' },
      { id: 'm9_4', name: 'Negocios Internacionales', category: 'Internacional' }
    ],
    10: [
      { id: 'm10_1', name: 'Práctica Profesional', category: 'Práctica' }
    ]
  },
  'Administración de Empresas': {
    1: [
      { id: 'a1_1', name: 'Administración I', category: 'Básica' },
      { id: 'a1_2', name: 'Contabilidad General', category: 'Básica' },
      { id: 'a1_3', name: 'Inglés I', category: 'Lenguas' },
      { id: 'a1_4', name: 'Matemáticas I', category: 'Ciencias' },
      { id: 'a1_5', name: 'Introducción a la Economía', category: 'Básica' },
      { id: 'a1_6', name: 'Emprendimiento y Empresarismo I', category: 'Gestión' }
    ],
    2: [
      { id: 'a2_1', name: 'Administración II', category: 'Básica' },
      { id: 'a2_2', name: 'Contabilidad de Costos', category: 'Básica' },
      { id: 'a2_3', name: 'Inglés II', category: 'Lenguas' },
      { id: 'a2_4', name: 'Matemáticas II', category: 'Ciencias' },
      { id: 'a2_5', name: 'Informática', category: 'Tecnología' },
      { id: 'a2_6', name: 'Emprendimiento y Empresarismo II', category: 'Gestión' }
    ],
    3: [
      { id: 'a3_1', name: 'Teorías Generales de la Administración', category: 'Básica' },
      { id: 'a3_2', name: 'Microeconomía I', category: 'Básica' },
      { id: 'a3_3', name: 'Algebra de Matrices y Programación Lineal', category: 'Ciencias' },
      { id: 'a3_4', name: 'Presupuesto y Auditoría', category: 'Finanzas' },
      { id: 'a3_5', name: 'Estadística I', category: 'Ciencias' },
      { id: 'a3_6', name: 'Inglés III', category: 'Lenguas' }
    ],
    4: [
      { id: 'a4_1', name: 'Teorías Gerenciales Contemporáneas', category: 'Básica' },
      { id: 'a4_2', name: 'Estadística II', category: 'Ciencias' },
      { id: 'a4_3', name: 'Microeconomía II', category: 'Básica' },
      { id: 'a4_4', name: 'Inglés IV', category: 'Lenguas' },
      { id: 'a4_5', name: 'Sociología de las Organizaciones', category: 'Social' },
      { id: 'a4_6', name: 'Matemáticas Financieras', category: 'Finanzas' }
    ],
    5: [
      { id: 'a5_1', name: 'Gerencia del Cambio', category: 'Gestión' },
      { id: 'a5_2', name: 'Dinámica Empresarial Regional', category: 'Contexto' },
      { id: 'a5_3', name: 'Macroeconomía', category: 'Básica' },
      { id: 'a5_4', name: 'Inglés V', category: 'Lenguas' },
      { id: 'a5_5', name: 'Administración de Operaciones', category: 'Básica' },
      { id: 'a5_6', name: 'Psicología Organizacional', category: 'Social' }
    ],
    6: [
      { id: 'a6_1', name: 'Laboratorio Empresarial I', category: 'Práctica' },
      { id: 'a6_2', name: 'Gerencia de Mercadeo I', category: 'Mercadeo' },
      { id: 'a6_3', name: 'Economía Colombiana', category: 'Básica' },
      { id: 'a6_4', name: 'Inglés VI', category: 'Lenguas' },
      { id: 'a6_5', name: 'Gerencia Financiera I', category: 'Finanzas' },
      { id: 'a6_6', name: 'Investigación I', category: 'Investigación' }
    ],
    7: [
      { id: 'a7_1', name: 'Laboratorio Empresarial II', category: 'Práctica' },
      { id: 'a7_2', name: 'Gerencia de Mercadeo II', category: 'Mercadeo' },
      { id: 'a7_3', name: 'Gerencia Financiera II', category: 'Finanzas' },
      { id: 'a7_4', name: 'Investigación II', category: 'Investigación' },
      { id: 'a7_5', name: 'Plan de Negocios', category: 'Gestión' }
    ],
    8: [
      { id: 'a8_1', name: 'Gerencia del Talento Humano I', category: 'Gestión' },
      { id: 'a8_2', name: 'Laboratorio Empresarial III', category: 'Práctica' },
      { id: 'a8_3', name: 'Planeación Estratégica y Prospectiva', category: 'Gestión' },
      { id: 'a8_4', name: 'Gerencia de la Operaciones y la Productividad I', category: 'Básica' },
      { id: 'a8_5', name: 'Investigación III', category: 'Investigación' }
    ],
    9: [
      { id: 'a9_1', name: 'Gerencia del Talento Humano II', category: 'Gestión' },
      { id: 'a9_2', name: 'Gerencia de la Operaciones y la Productividad II', category: 'Básica' },
      { id: 'a9_3', name: 'Legislación Laboral', category: 'Jurídica' },
      { id: 'a9_4', name: 'Legislación Comercial y Tributaria', category: 'Jurídica' },
      { id: 'a9_5', name: 'Negocios Internacionales', category: 'Internacional' }
    ],
    10: [
      { id: 'a10_1', name: 'Práctica Empresarial', category: 'Práctica' }
    ]
  },
  'Contaduría Pública': {
    1: [
      { id: 'c1_1', name: 'Introducción a la Contabilidad', category: 'Básica' },
      { id: 'c1_2', name: 'Fundamentos de Administración', category: 'Básica' },
      { id: 'c1_3', name: 'Matemáticas I', category: 'Ciencias' },
      { id: 'c1_4', name: 'Fundamentos de Derecho', category: 'Jurídica' },
      { id: 'c1_5', name: 'Introducción a la Economía', category: 'Básica' },
      { id: 'c1_6', name: 'Inglés I', category: 'Lenguas' }
    ],
    2: [
      { id: 'c2_1', name: 'Contabilidad del Activo', category: 'Profesional' },
      { id: 'c2_2', name: 'Emprendimiento y Empresarismo', category: 'Gestión' },
      { id: 'c2_3', name: 'Matemáticas II', category: 'Ciencias' },
      { id: 'c2_4', name: 'Derecho Comercial', category: 'Jurídica' },
      { id: 'c2_5', name: 'Inglés II', category: 'Lenguas' },
      { id: 'c2_6', name: 'Sistemas I', category: 'Tecnología' }
    ],
    3: [
      { id: 'c3_1', name: 'Contabilidad de Pasivos y Patrimonio', category: 'Profesional' },
      { id: 'c3_2', name: 'Estadística', category: 'Ciencias' },
      { id: 'c3_3', name: 'Microeconomía', category: 'Básica' },
      { id: 'c3_4', name: 'Sistemas II', category: 'Tecnología' },
      { id: 'c3_5', name: 'Inglés III', category: 'Lenguas' },
      { id: 'c3_6', name: 'Plan de Negocios', category: 'Gestión' }
    ],
    4: [
      { id: 'c4_1', name: 'Negocios Conjuntos', category: 'Profesional' },
      { id: 'c4_2', name: 'Macroeconomía', category: 'Básica' },
      { id: 'c4_3', name: 'Presupuestos', category: 'Profesional' },
      { id: 'c4_4', name: 'Sistemas III', category: 'Tecnología' },
      { id: 'c4_5', name: 'Derecho Laboral', category: 'Jurídica' },
      { id: 'c4_6', name: 'Inglés IV', category: 'Lenguas' }
    ],
    5: [
      { id: 'c5_1', name: 'Estados Financieros', category: 'Profesional' },
      { id: 'c5_2', name: 'Auditoria y Aseguramiento I', category: 'Control' },
      { id: 'c5_3', name: 'Laboratorio Contable', category: 'Práctica' },
      { id: 'c5_4', name: 'Matemáticas Financieras', category: 'Finanzas' },
      { id: 'c5_5', name: 'Economía Colombiana', category: 'Básica' }
    ],
    6: [
      { id: 'c6_1', name: 'Costos I', category: 'Profesional' },
      { id: 'c6_2', name: 'Auditoria y Aseguramiento II', category: 'Control' },
      { id: 'c6_3', name: 'Análisis Financiero', category: 'Profesional' },
      { id: 'c6_4', name: 'Habilidades Gerenciales', category: 'Gestión' },
      { id: 'c6_5', name: 'Legislación Tributara I', category: 'Jurídica' }
    ],
    7: [
      { id: 'c7_1', name: 'Contabilidad Pública I', category: 'Profesional' },
      { id: 'c7_2', name: 'Costos II', category: 'Profesional' },
      { id: 'c7_3', name: 'Finanzas I', category: 'Profesional' },
      { id: 'c7_4', name: 'Gerencia Estratégica', category: 'Gestión' },
      { id: 'c7_5', name: 'Legislación Tributaria II', category: 'Jurídica' }
    ],
    8: [
      { id: 'c8_1', name: 'Contabilidad Pública II', category: 'Profesional' },
      { id: 'c8_2', name: 'Laboratorio de Costos', category: 'Práctica' },
      { id: 'c8_3', name: 'Investigación I', category: 'Investigación' },
      { id: 'c8_4', name: 'Finanzas II', category: 'Profesional' }
    ],
    9: [
      { id: 'c9_1', name: 'Comercio Internacional', category: 'Internacional' },
      { id: 'c9_2', name: 'Contabilidad Social y Ambiental', category: 'Profesional' },
      { id: 'c9_3', name: 'Revisoría Fiscal', category: 'Control' },
      { id: 'c9_4', name: 'Investigación II', category: 'Investigación' },
      { id: 'c9_5', name: 'Cuadro de Mando Integral', category: 'Gestión' }
    ],
    10: [
      { id: 'c10_1', name: 'Contabilidades Especiales', category: 'Profesional' },
      { id: 'c10_2', name: 'Laboratorio Tributario', category: 'Práctica' },
      { id: 'c10_3', name: 'Investigación III', category: 'Investigación' },
      { id: 'c10_4', name: 'Ética Profesional', category: 'Humana' }
    ]
  },
  'Comercio Internacional': {
    1: [
      { id: 'ci1_1', name: 'Introducción a la Economía', category: 'Básica' },
      { id: 'ci1_2', name: 'Cálculo Diferencial e Integral', category: 'Ciencias' },
      { id: 'ci1_3', name: 'Contabilidad General', category: 'Básica' },
      { id: 'ci1_4', name: 'Teoría de la Investigación', category: 'Investigación' },
      { id: 'ci1_5', name: 'Fundamentos de Comercio Internacional', category: 'Profesional' }
    ],
    2: [
      { id: 'ci2_1', name: 'Microeconomía', category: 'Básica' },
      { id: 'ci2_2', name: 'Análisis Financiero', category: 'Finanzas' },
      { id: 'ci2_3', name: 'Fundamentos de Mercadeo', category: 'Básica' },
      { id: 'ci2_4', name: 'Estadística I', category: 'Ciencias' },
      { id: 'ci2_5', name: 'Álgebra y Programación Lineal', category: 'Ciencias' }
    ],
    3: [
      { id: 'ci3_1', name: 'Teoría del Comercio Internacional', category: 'Profesional' },
      { id: 'ci3_2', name: 'Macroeconomía', category: 'Básica' },
      { id: 'ci3_3', name: 'Estadística II', category: 'Ciencias' },
      { id: 'ci3_4', name: 'Geopolítica', category: 'Profesional' },
      { id: 'ci3_5', name: 'Administración', category: 'Básica' }
    ],
    4: [
      { id: 'ci4_1', name: 'Política Comercial Internacional', category: 'Profesional' },
      { id: 'ci4_2', name: 'Matemática Financiera', category: 'Finanzas' },
      { id: 'ci4_3', name: 'Economía Colombiana', category: 'Básica' },
      { id: 'ci4_4', name: 'Metodología de la Investigación', category: 'Investigación' },
      { id: 'ci4_5', name: 'Legislación Comercial', category: 'Jurídica' }
    ],
    5: [
      { id: 'ci5_1', name: 'Empresarismo e Ideas de Negocios', category: 'Gestión' },
      { id: 'ci5_2', name: 'Comercio Electrónico', category: 'Digital' },
      { id: 'ci5_3', name: 'Investigación de Mercados', category: 'Investigación' },
      { id: 'ci5_4', name: 'Régimen Arancelario', category: 'Jurídica' },
      { id: 'ci5_5', name: 'Integración Económica y Organismos Regionales', category: 'Internacional' }
    ],
    6: [
      { id: 'ci6_1', name: 'Política del Comercio Exterior Colombiano', category: 'Profesional' },
      { id: 'ci6_2', name: 'Banca y Crédito Internacional', category: 'Finanzas' },
      { id: 'ci6_3', name: 'Mercadeo Internacional I', category: 'Internacional' },
      { id: 'ci6_4', name: 'Importaciones', category: 'Logística' },
      { id: 'ci6_5', name: 'Derecho Comercial Internacional', category: 'Jurídica' }
    ],
    7: [
      { id: 'ci7_1', name: 'Seminario de Trabajo de Grado', category: 'Investigación' },
      { id: 'ci7_2', name: 'Finanzas Internacionales', category: 'Finanzas' },
      { id: 'ci7_3', name: 'Exportaciones', category: 'Logística' },
      { id: 'ci7_4', name: 'Mercadeo Internacional II', category: 'Internacional' }
    ],
    8: [
      { id: 'ci8_1', name: 'Laboratorio de Comercio Exterior', category: 'Práctica' },
      { id: 'ci8_2', name: 'Logística Comercial Internacional I', category: 'Logística' },
      { id: 'ci8_3', name: 'Cooperación Internacional para el Desarrollo', category: 'Internacional' },
      { id: 'ci8_4', name: 'Negocios Internacionales', category: 'Profesional' }
    ],
    9: [
      { id: 'ci9_1', name: 'Logística Comercial Internacional II', category: 'Logística' },
      { id: 'ci9_2', name: 'Derecho Aduanero', category: 'Jurídica' },
      { id: 'ci9_3', name: 'Plan de Negocios Internacionales', category: 'Gestión' }
    ],
    10: [
      { id: 'ci10_1', name: 'Práctica Profesional', category: 'Práctica' }
    ]
  },
  'Economía': {
    1: [
      { id: 'e1_1', name: 'Pensamiento económico I', category: 'Historia' },
      { id: 'e1_2', name: 'Introducción a la economía', category: 'Básica' },
      { id: 'e1_3', name: 'Cálculo diferencial e integral', category: 'Ciencias' },
      { id: 'e1_4', name: 'Contabilidad general', category: 'Básica' }
    ],
    2: [
      { id: 'e2_1', name: 'Pensamiento económico II', category: 'Historia' },
      { id: 'e2_2', name: 'Microeconomía I', category: 'Básica' },
      { id: 'e2_3', name: 'Álgebra de matrices y programación lineal', category: 'Ciencias' },
      { id: 'e2_4', name: 'Costos y presupuestos', category: 'Básica' }
    ],
    3: [
      { id: 'e3_1', name: 'Macroeconomía I', category: 'Básica' },
      { id: 'e3_2', name: 'Microeconomía II', category: 'Básica' },
      { id: 'e3_3', name: 'Análisis exploratorio de datos', category: 'Ciencias' },
      { id: 'e3_4', name: 'Fundamentos de administración de empresas', category: 'Básica' }
    ],
    4: [
      { id: 'e4_1', name: 'Economía política', category: 'Historia' },
      { id: 'e4_2', name: 'Macroeconomía II', category: 'Básica' },
      { id: 'e4_3', name: 'Microeconomía III', category: 'Básica' },
      { id: 'e4_4', name: 'Metodología de la investigación', category: 'Investigación' },
      { id: 'e4_5', name: 'Inferencia estadística aplicada a la economía', category: 'Ciencias' }
    ],
    5: [
      { id: 'e5_1', name: 'Historia económica de Colombia', category: 'Historia' },
      { id: 'e5_2', name: 'Teoría y política fiscal', category: 'Política' },
      { id: 'e5_3', name: 'Ingeniería económica', category: 'Finanzas' },
      { id: 'e5_4', name: 'Econometría I', category: 'Cuantitativa' }
    ],
    6: [
      { id: 'e6_1', name: 'Desarrollo económico', category: 'Teoría' },
      { id: 'e6_2', name: 'Teoría y política monetaria', category: 'Política' },
      { id: 'e6_3', name: 'Medición económica', category: 'Cuantitativa' },
      { id: 'e6_4', name: 'Econometría II', category: 'Cuantitativa' }
    ],
    7: [
      { id: 'e7_1', name: 'Economía Colombiana', category: 'Contexto' },
      { id: 'e7_2', name: 'Formulación de proyectos', category: 'Gestión' },
      { id: 'e7_3', name: 'Teorías del desarrollo regional y local', category: 'Teoría' }
    ],
    8: [
      { id: 'e8_1', name: 'Economía internacional', category: 'Internacional' },
      { id: 'e8_2', name: 'Evaluación de proyectos', category: 'Gestión' },
      { id: 'e8_3', name: 'Seminario de investigación regional I', category: 'Investigación' },
      { id: 'e8_4', name: 'Economía de Nariño', category: 'Contexto' },
      { id: 'e8_5', name: 'Políticas públicas', category: 'Política' }
    ],
    9: [
      { id: 'e9_1', name: 'Finanzas internacionales', category: 'Internacional' },
      { id: 'e9_2', name: 'Seminario de investigación regional II', category: 'Investigación' }
    ],
    10: [
      { id: 'e10_1', name: 'Trabajo de Grado', category: 'Investigación' }
    ]
  }
};
