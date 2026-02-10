import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { Carrucel } from '../carrucel/carrucel';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-certificacion-detalle',
  imports: [CommonModule, Carrucel],
  templateUrl: './certificacion-detalle.html',
  styleUrl: './certificacion-detalle.css',
})
export class CertificacionDetalle {

  certId: string = '';
  certificacion: any;

  certificaciones = [
    { 
      id: 'apm', 
      nombre: 'ADVANCED PROJECT MANAGER', 
      imagen: 'assets/images/Carrucel/APM.png', 
      descripcion: 'Una certificación destacada para profesionales experimentados en la dirección de proyectos es la “Advanced Project Management (APM)”. Obtener la certificación APM demuestra un alto nivel de competencia y experiencia en la aplicación de buenas prácticas, técnicas y herramientas.',
      contenido: [
        'Conceptos Generales',
        'Entendimiento del Proyecto',
        'Inicio y Formalización',
        'Gestión y Desarrollo del Equipo',
        'Planificación', 
        'Crear Valor, Seguimiento y Control',
        'Cierre',
      ],
      preguntas: 120,
      duracion: 120,
      oportunidades: 2,
      aprobacion: 70,
      requisitos: [
        'Experiencia mínima de dos años dirigiendo proyectos'
      ],
      beneficios: [
        'Reconocimiento profesional avanzado',
      ]
    },
    { 
      id: 'spm', 
      nombre: 'SKILLED PROJECT MANAGER', 
      imagen: 'assets/images/Carrucel/SPM.png',
      descripcion: 'Nuestra certificación Skilled Project Management avala los conocimientos de un profesionista en dirección de proyectos.',
      contenido: [
        'Conceptos Generales',
        'Entendimiento del Proyecto',
        'Inicio y Formalización',
        'Gestión y Desarrollo del Equipo',
        'Planificación', 
        'Crear Valor, Seguimiento y Control',
        'Cierre',
      ],
      preguntas: 50,
      duracion: 72,
      oportunidades: 2,
      aprobacion: 80,
      requisitos: [
        'No hay requisitos previos para esta certificación.'
      ],
      beneficios: [
        'Reconocimiento profesional avanzado',
      ]
    },
    { 
      id: 'smp', 
      nombre: 'SCRUM MASTER PRACTITIONER', 
      imagen: 'assets/images/Carrucel/SMP.png',
      descripcion: 'La certificación Scrum Master Practitioner, valida las habilidades y conocimientos de un profesional en el desarrollo ágil de proyectos utilizando el marco de trabajo Scrum. La certificación se centra en el rol crucial del Scrum Master como facilitador de un equipo Scrum, asegurando que se sigan los principios y prácticas ágiles para lograr un desarrollo eficiente y adaptativo, asegurando que el equipo Scrum entregue el máximo valor posible.',
      contenido: [
        'Fundamentos de Agilidad',
        'Los Tres pilares de Scrum',
        'Mentalidad Ágil',
        'Roles en Scrum',
        'Responsabilidades del Scrum Master', 
        'Las Reuniones en un Proyecto Scrum',
        'Artefactos de un Proyecto Scrum',
        'Técnicas y Herramientas generalmente utilizadas en proyectos Scrum'
      ],
      preguntas: 50,
      duracion: 75,
      oportunidades: 2,
      aprobacion: 80,
      requisitos: [
        'No hay requisitos previos para esta certificación.'
      ],
      beneficios: [
        'Reconocimiento profesional avanzado',
      ]
    },
    { 
      id: 'spop', 
      nombre: 'SCRUM PRODUCT OWNER PRACTITIONER', 
      imagen: 'assets/images/Carrucel/SPOP.png',
      descripcion: 'La certificación Scrum Product Owner Practitioner, valida las habilidades y conocimientos de un profesional en el desarrollo ágil de proyectos utilizando el marco de trabajo Scrum. Este certificado se centra en la capacidad del Product Owner para identificar los requerimientos, especificar la solución y gestionar el producto.',
      contenido: [
        'Fundamentos de Agilidad',
        'Los Tres pilares de Scrum',
        'Mentalidad Ágil',
        'Gestión de Interesados',
        'Responsabilidades del Product Owner', 
        'Roles, Reuniones y Artefactos en un Proyecto Scrum',
        'Técnicas y Herramientas que el PO debe dominar en los proyectos Scrum',
      ],
      preguntas: 50,
      duracion: 75,
      oportunidades: 2,
      aprobacion: 80,
      requisitos: [
        'No hay requisitos previos para esta certificación.'
      ],
      beneficios: [
        'Reconocimiento profesional avanzado',
      ]
    },
    { id: 'prmp', 
      nombre: 'PROJECT RISK MANAGER PROFESSIONAL', 
      imagen: 'assets/images/Carrucel/PRMP.PNG',
      descripcion: 'Valida los conocimientos y habilidades esenciales para la identificación, análisis, planificación, respuesta y monitoreo de riesgos en proyectos y organizaciones. La certificación está diseñada para profesionales que desean fortalecer su capacidad de anticipar y gestionar incertidumbres en proyectos, minimizando impactos negativos y maximizando oportunidades. Es ideal para aquellos profesionales que buscan optimizar la gestión de riesgos en sus proyectos y aportar mayor valor a sus organizaciones.',
      contenido: [
        'Conceptos de Gestión de Riesgos',
        'Identificación de Riesgos',
        'Planificación de la Gestión de Riesgos',
        'Técnicas y herramientas para el análisis cualitativo y cuantitativo de riesgos',
        'Estrategias de Respuesta a Riesgos', 
        'Seguimiento y Monitoreo de Riesgos  ',
      ],
      preguntas: 40,
      duracion: 50,
      oportunidades: 2,
      aprobacion: 70,
      requisitos: [
        'No hay requisitos previos para esta certificación.'
      ],
      beneficios: [
        'Brinda a los profesionales una ventaja competitiva en la gestión de proyectos, ya que la persona certificada ha demostrado que cuenta con el conocimiento para la aplicación de metodologías estructuradas para manejar la incertidumbre y mejorar la toma de decisiones. ',
      ] 
    },
    { id: 'bcdp', 
      nombre: 'BUSINESS CASE DEVELOPMENT PROFESSIONAL', 
      imagen: 'assets/images/Carrucel/BCDP.PNG',
      descripcion: 'En un entorno empresarial altamente competitivo, la capacidad de tomar decisiones estratégicas fundamentadas marca la diferencia entre el éxito y el fracaso de una iniciativa. La certificación Business Case Development Professional (BCDP) valida tus habilidades y te posiciona como experta/experto en la estructuración, análisis y presentación de casos de negocio sólidos, permitiéndote justificar inversiones, optimizar recursos y generar valor para tu organización.',
      contenido: [
        'Conceptos de análisis de negocio',
        'Técnicas y herramientas para el entendimiento del cliente y definición del problema a abordar',
        'Técnicas para generar ideas de solución',
        'Evaluación de Riesgos',
        'Integración del Caso de Negocio', 
        'Técnicas de Evaluación Financiera',
        'Entregables esenciales en el desarrollo de casos de negocio',
      ],
      preguntas: 40,
      duracion: 50,
      oportunidades: 2,
      aprobacion: 70,
      requisitos: [
        'No hay requisitos previos para esta certificación.'
      ],
      beneficios: [
        'Evaluar la viabilidad de proyectos y propuestas de inversión.',
        'Realizar análisis financieros y estratégicos que respalden la toma de decisiones.',
        'Comunicar de manera efectiva los beneficios y riesgos de una iniciativa.',
        'Alinear propuestas con los objetivos y expectativas de stakeholders clave.'
      ]
    },
    { id: 'stmp', 
      nombre: 'SCRUM TEAM MEMBER PRACTITIONER', 
      imagen: 'assets/images/Carrucel/STMP.png',
      descripcion: 'La certificación de Scrum Team Member Practitioner, valida las habilidades y conocimientos de un profesional en el desarrollo ágil de proyectos utilizando el marco de trabajo Scrum. Esta certificación se enfoca en demostrar la capacidad de un individuo para trabajar eficazmente dentro de un equipo Scrum, contribuyendo al desarrollo exitoso de soluciones.',
      contenido: [
        'Fundamentos de Agilidad',
        'Los Tres pilares de Scrum',
        'Mentalidad Ágil de los Miembros del Equipo',
        'Roles en Scrum',
        'Responsabilidades del Team Member (Developer)', 
        'Las Reuniones en un Proyecto Scrum',
        'Artefactos de un Proyecto Scrum',
        'Técnicas y Herramientas generalmente utilizadas en proyectos Scrum'
      ],
      preguntas: 50,
      duracion: 75,
      oportunidades: 2,
      aprobacion: 80,
      requisitos: [
        'No hay requisitos previos para esta certificación.'
      ],
      beneficios: [
        'Reconocimiento profesional avanzado',
      ]
    },
    { id: 'bap', 
      nombre: 'BUSINESS ANALYSIS PRACTITIONER', 
      imagen: 'assets/images/Carrucel/BAP.PNG',
      descripcion: 'Orientada a los profesionales de la buena práctica de Análisis de Negocios, que muestran tener los conocimientos y expertiz requerido para obtener nuestra certificación.',
      contenido: [
        'Introducción al Análisis de Negocios',
        'Evaluación de las necesidades del negocio',
        'Planificación del Análisis de Negocio',
        'Elicitación y Análisis de requerimientos',
        'Trazabilidad y Monitoreo', 
        'Evaluación de la solución ',
      ],
      preguntas: 80,
      duracion: 120,
      oportunidades: 2,
      aprobacion: 70,
      requisitos: [
        'No hay requisitos previos para esta certificación.'
      ],
      beneficios: [
        'Reconocimiento profesional avanzado',
      ]
    },
    { id: 'cpat', 
      nombre: 'COACHING PRACTICES FOR AGILE TEAMS', 
      imagen: 'assets/images/Carrucel/CPAT.PNG',
      descripcion: 'Los profesionales con esta certificación comprenden que el proceso de transformación hacia la agilidad de las organizaciones requiere un cambio de mentalidad en las personas. Los profesionales con esta certificación conocen prácticas que ayudarán en el proceso de cambio y transformación para la implementación de prácticas ágiles en los equipos y en las organizaciones.',
      contenido: [
        'Fundamentos de Agilidad',
        'Fundamentos de Coaching',
        'Liderazgo ágil "Un nuevo enfoque"',
        'Prácticas para: Mejora continua del equipo',
        'Prácticas para: Fomentar mayor conciencia del equipo', 
        'Prácticas para: Aumentar responsabilidad personal (apropiación)',
        'Prácticas para: Facilitar la eliminación de obstáculos',
        'Prácticas para: Desarrollar las competencias del equipo',
        'Características y prácticas de métodos ágiles (Scrum, Kanban, RUP, XP, SAFE, SoS, entre otros) ',
      ],
      preguntas: 50,
      duracion: 75,
      oportunidades: 2,
      aprobacion: 80,
      requisitos: [
        'Experiencia mínima de dos años dirigiendo proyectos'
      ],
      beneficios: [
        'Los profesionales con esta certificación cuentan con profundo conocimiento sobre agilidad y sus principales prácticas y métodos, y tienen también una comprensión clara de las competencias fundamentales que el rol de líder Ágil debe tener para ser un catalizador de cambio en las personas y en las organizaciones. ',
      ]
    },
    { id: 'dtp', 
      nombre: 'DESIGN THINKING PRACTITIONER', 
      imagen: 'assets/images/Carrucel/DTP.PNG',
      descripcion: 'Los profesionales con esta certificación tienen el conocimiento de herramientas y técnicas para implementar prácticas de Design Thinking en sus organizaciones. Los profesionales con esta certificación aportarán gran valor al participar en proyectos para crear productos y servicios innovadores para sus clientes.',
      contenido: [
        'Fundamentos de Innovación',
        'Fundamentos de Design Thinking',
        'Técnicas y Herramientas en Design Thinking',
        'Fases del Design Thinking (Empatizar, Definir, Idear, Prototipar, Evaluar)',
        'Técnicas y Herramientas del Design Thinking', 
      ],
      preguntas: 50,
      duracion: 75,
      oportunidades: 2,
      aprobacion: 80,
      requisitos: [
        'No hay requisitos previos para esta certificación.'
      ],
      beneficios: [
        'Los profesionales con esta certificación tienen amplio conocimiento de principios de agilidad y cuentan con profundo conocimiento de las fases para el diseño de productos y servicios de valor para los clientes.',
      ]
    },
    { id: 'kmp', 
      nombre: 'KANBAN METHOD PRACTITIONER', 
      imagen: 'assets/images/Carrucel/KMP.PNG', 
      descripcion: 'Los profesionales con la certificación Kanban Method Practitioner (BP KMP), cuentan con el conocimiento necesario para implementar prácticas ágiles en sus organizaciones. Conocen y saben implementar las prácticas, valores y principios de Kanban, con lo que logran una gestión de proyectos y servicios más sana mediante el uso de métodos de priorización para garantizar la entrega de valor al cliente y a la organización.',
      contenido: [
        'Fundamentos de Kanban',
        'Fundamentos de Agilidad',
        'Principios lean',
        'Valores y Principios Kanban',
        'Prácticas Kanban', 
        'Métricas Kanban',
      ],
      preguntas: 50,
      duracion: 75,
      oportunidades: 2,
      aprobacion: 80,
      requisitos: [
        'Experiencia mínima de dos años dirigiendo proyectos'
      ],
      beneficios: [
        'Los profesionales con esta certificación dominan los principios de la agilidad y cuentan con el conocimiento para implementar prácticas ágiles y de mejora continua en diversos servicios, operaciones y proyectos, garantizando la entrega de valor al cliente y a su organización. ',
      ]
    },
    { id: 'atp', 
      nombre: 'AGILE THINKING PRACTITIONER', 
      imagen: 'assets/images/Carrucel/ATP.PNG',
      descripcion: 'Las y los profesionales con esta certificación comprenden la importancia de aplicar prácticas de gestión alineadas con los pilares de la agilidad y basadas en un proceso de experimentación y aprendizaje (empirismo). Identifican el conjunto de valores y principios del manifiesto ágil y saben llevarlo a la práctica a nivel personal, equipo y organizacional.',
      contenido: [
        'Fundamentos de Agilidad',
        'Valores y Principios del Manifiesto Ágil',
        'Enfoque de Gestión Ágil de Proyectos vs Tradicional (cascada)',
        'Entornos VUCA',
        'Características de un equipo ágil', 
        'Ser Ágil (Be Agile) vs Hacer de forma ágil (Do Agile)',
        'Características de un Equipo Ágil ',
      ],
      preguntas: 30,
      duracion: 45,
      oportunidades: 2,
      aprobacion: 70,
      requisitos: [
        'No hay requisitos previos para esta certificación.'
      ],
      beneficios: [
        'Los profesionales con esta certificación conocen los fundamentos de agilidad, así como los puntos esenciales para ponerla en práctica y comenzar un proceso de transformación que lleve a los equipos de trabajo a alcanzar un mayor rendimiento y resultados.',
      ]
    },
    { id: 'pmop', 
      nombre: 'PROFESSIONAL MANAGEMENT OFFICE PRACTITIONER', 
      imagen: 'assets/images/Carrucel/PMOP.PNG', 
      descripcion: 'Esta certificación valida los conocimientos de buenas prácticas requeridos para los integrantes de una Oficina de Gestión de Proyectos.',
      contenido: [
        'Conceptos Generales y Marco de Referencia',
        '¿Qué es una PMO?',
        'Tipos de PMO',
        'Pasos para implementar una PMO',
        'Equipo de Trabajo de la PMO', 
      ],
      preguntas: 40,
      duracion: 45,
      oportunidades: 2,
      aprobacion: 80,
      requisitos: [
        'No hay requisitos previos para esta certificación.'
      ],
      beneficios: [
        'Reconocimiento profesional avanzado',
      ]
    },
    { id: 'spp', 
      nombre: 'SCHEDULE & PROJECT PRACTITIONER', 
      imagen: 'assets/images/Carrucel/SPP.png',
      descripcion: 'La certificación Schedule & Project Practitioner acredita que la persona titular tiene el conocimiento fundamental para planificar, desarrollar y dar seguimiento a cronogramas de proyectos conforme a buenas prácticas de Dirección de Proyectos. La persona certificada demuestra comprensión de técnicas y herramientas utilizadas para la secuenciación de actividades, estimación de duraciones, análisis de dependencias y monitoreo del desempeño del cronograma. Asimismo, cuenta con conocimiento funcional del uso de Microsoft Project como herramienta de apoyo para la planificación y control de cronogramas en proyectos.',
      contenido: [
        'Fundamentos de Gestión de Cronogramas',
        'Planificar la Gestión de Cronogramas',
        'Desarrollar Cronogramas',
        'Identificar Rutas Críticas',
        'Técnicas de Estimación',
        'Técnicas para identificar actividades',
        'Técnicas para establecer la secuencia y programación de actividades',
        'Controlar y monitorear Cronogramas',
        'Establecer la Línea Base del Cronograma',
      ],
      preguntas: 30,
      duracion: 45,
      oportunidades: 2,
      aprobacion: 80,
      requisitos: [
        'No hay requisitos previos para esta certificación.'
      ],
      beneficios: [
        'Esta certificación respalda que el profesional comprende los principios clave de la gestión de cronogramas y puede contribuir en la planificación y seguimiento de proyectos en distintos entornos organizacionales.',
      ]
    },
    { id: 'pmf', 
      nombre: 'PROJECT MANAGEMENT FUNDAMENTALS', 
      imagen: 'assets/images/Carrucel/PMF.PNG',
      descripcion: 'La certificación de Fundamentos de la Dirección de Proyectos avala los conocimientos básicos de la práctica.',
      contenido: [
        'Conceptos Generales',
        'Entendimiento del Proyecto',
        'Inicio y Formalización',
        'Gestión y Desarrollo del Equipo',
        'Planificación', 
        'Crear Valor, Seguimiento y Control',
        'Cierre',
      ],
      preguntas: 25,
      duracion: 30,
      oportunidades: 2,
      aprobacion: 80,
      requisitos: [
        'No hay requisitos previos para esta certificación.'
      ],
      beneficios: [
        'Reconocimiento profesional avanzado',
      ]
    },

  ];

  constructor(private route: ActivatedRoute, private router: Router) {}

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.certId = params.get('id')!;
      this.certificacion = this.certificaciones.find(c => c.id === this.certId);

      setTimeout(() => {
        window.scrollTo({
          top: 0,
          behavior: 'smooth'
        });
      }, 0);
    });
  }
  
}
