// Datos de ejemplo basados en el archivo Excel proporcionado
const educationData = {
    matriculados: {
        total: 201768,
        porSexo: {
            hombres: 91753,
            mujeres: 110015,
            porcentajeMujeres: 54.53
        },
        porDepartamento: [
            { departamento: "Guatemala", total: 89854, hombres: 41431, mujeres: 48423 },
            { departamento: "El Progreso", total: 1675, hombres: 771, mujeres: 904 },
            { departamento: "Sacatepéquez", total: 8419, hombres: 4404, mujeres: 4015 },
            { departamento: "Chimaltenango", total: 6508, hombres: 2697, mujeres: 3811 },
            { departamento: "Escuintla", total: 7683, hombres: 3713, mujeres: 3970 },
            { departamento: "Santa Rosa", total: 3221, hombres: 1379, mujeres: 1842 },
            { departamento: "Sololá", total: 3577, hombres: 1462, mujeres: 2115 },
            { departamento: "Totonicapán", total: 1881, hombres: 822, mujeres: 1059 },
            { departamento: "Quetzaltenango", total: 19469, hombres: 9390, mujeres: 10079 },
            { departamento: "Suchitepéquez", total: 3763, hombres: 1654, mujeres: 2109 },
            { departamento: "Retalhuleu", total: 3457, hombres: 1552, mujeres: 1905 },
            { departamento: "San Marcos", total: 4951, hombres: 2090, mujeres: 2861 },
            { departamento: "Huehuetenango", total: 11395, hombres: 5073, mujeres: 6322 },
            { departamento: "Quiché", total: 5245, hombres: 2144, mujeres: 3101 },
            { departamento: "Baja Verapaz", total: 1928, hombres: 898, mujeres: 1030 },
            { departamento: "Alta Verapaz", total: 8012, hombres: 3784, mujeres: 4228 },
            { departamento: "Petén", total: 4099, hombres: 1583, mujeres: 2516 },
            { departamento: "Izabal", total: 3234, hombres: 1164, mujeres: 2070 },
            { departamento: "Zacapa", total: 2650, hombres: 1144, mujeres: 1506 },
            { departamento: "Chiquimula", total: 2415, hombres: 938, mujeres: 1477 },
            { departamento: "Jalapa", total: 1625, hombres: 765, mujeres: 860 },
            { departamento: "Jutiapa", total: 6595, hombres: 2848, mujeres: 3747 },
            { departamento: "Ignorado", total: 112, hombres: 47, mujeres: 65 }
        ],
        porEdad: [
            { grupo: "15-19", total: 38207, hombres: 16445, mujeres: 21762 },
            { grupo: "20-24", total: 87822, hombres: 39247, mujeres: 48575 },
            { grupo: "25-29", total: 36161, hombres: 17309, mujeres: 18852 },
            { grupo: "30-34", total: 16788, hombres: 8208, mujeres: 8580 },
            { grupo: "35-39", total: 7967, hombres: 3965, mujeres: 4002 },
            { grupo: "40-44", total: 3680, hombres: 1688, mujeres: 1992 },
            { grupo: "45-49", total: 2046, hombres: 912, mujeres: 1134 },
            { grupo: "50-54", total: 955, hombres: 411, mujeres: 544 },
            { grupo: "55-59", total: 454, hombres: 213, mujeres: 241 },
            { grupo: "60-64", total: 196, hombres: 101, mujeres: 95 },
            { grupo: "65-69", total: 70, hombres: 37, mujeres: 33 },
            { grupo: "70+", total: 36, hombres: 21, mujeres: 15 },
            { grupo: "Ignorado", total: 7386, hombres: 3196, mujeres: 4190 }
        ],
        porNivel: [
            { nivel: "Técnico", total: 20968 },
            { nivel: "Licenciatura", total: 164722 },
            { nivel: "Maestría", total: 13519 },
            { nivel: "Doctorado", total: 126 },
            { nivel: "Pre-Técnico", total: 2433 }
        ],
        porCampo: [
            { campo: "Educación", total: 8880 },
            { campo: "Humanidades", total: 1331 },
            { campo: "Ciencias Sociales", total: 87538 },
            { campo: "Ciencias", total: 2324 },
            { campo: "Ingeniería", total: 38363 },
            { campo: "Agricultura", total: 1838 },
            { campo: "Salud", total: 36802 },
            { campo: "Servicios", total: 1387 },
            { campo: "No especificado", total: 23305 }
        ]
    },
    graduados: {
        total: 10858,
        porSexo: {
            hombres: 4467,
            mujeres: 6391,
            porcentajeMujeres: 58.85
        },
        porDepartamento: [
            { departamento: "Guatemala", total: 4977, hombres: 2091, mujeres: 2886 },
            { departamento: "El Progreso", total: 102, hombres: 35, mujeres: 67 },
            { departamento: "Sacatepéquez", total: 404, hombres: 179, mujeres: 225 },
            { departamento: "Chimaltenango", total: 379, hombres: 129, mujeres: 250 },
            { departamento: "Escuintla", total: 486, hombres: 237, mujeres: 249 },
            { departamento: "Santa Rosa", total: 177, hombres: 71, mujeres: 106 },
            { departamento: "Sololá", total: 220, hombres: 95, mujeres: 125 },
            { departamento: "Totonicapán", total: 112, hombres: 46, mujeres: 66 },
            { departamento: "Quetzaltenango", total: 1032, hombres: 424, mujeres: 608 },
            { departamento: "Suchitepéquez", total: 188, hombres: 79, mujeres: 109 },
            { departamento: "Retalhuleu", total: 131, hombres: 48, mujeres: 83 },
            { departamento: "San Marcos", total: 248, hombres: 109, mujeres: 139 },
            { departamento: "Huehuetenango", total: 423, hombres: 184, mujeres: 239 },
            { departamento: "Quiché", total: 305, hombres: 105, mujeres: 200 },
            { departamento: "Baja Verapaz", total: 91, hombres: 45, mujeres: 46 },
            { departamento: "Alta Verapaz", total: 412, hombres: 191, mujeres: 221 },
            { departamento: "Petén", total: 206, hombres: 71, mujeres: 135 },
            { departamento: "Izabal", total: 98, hombres: 43, mujeres: 55 },
            { departamento: "Zacapa", total: 172, hombres: 45, mujeres: 127 },
            { departamento: "Chiquimula", total: 160, hombres: 55, mujeres: 105 },
            { departamento: "Jalapa", total: 81, hombres: 29, mujeres: 52 },
            { departamento: "Jutiapa", total: 443, hombres: 150, mujeres: 293 },
            { departamento: "Ignorado", total: 11, hombres: 6, mujeres: 5 }
        ],
        porNivel: [
            { nivel: "Técnico", total: 1820 },
            { nivel: "Licenciatura", total: 7219 },
            { nivel: "Maestría", total: 1681 },
            { nivel: "Doctorado", total: 12 },
            { nivel: "Pre-Técnico", total: 126 }
        ],
        porCampo: [
            { campo: "Educación", total: 1364 },
            { campo: "Humanidades", total: 89 },
            { campo: "Ciencias Sociales", total: 4676 },
            { campo: "Ciencias", total: 176 },
            { campo: "Ingeniería", total: 1161 },
            { campo: "Agricultura", total: 91 },
            { campo: "Salud", total: 1429 },
            { campo: "Servicios", total: 72 },
            { campo: "No especificado", total: 1800 }
        ]
    },
    docentes: {
        total: 23432,
        porSexo: {
            hombres: 12491,
            mujeres: 10941,
            porcentajeMujeres: 46.69
        },
        porDepartamento: [
            { departamento: "Guatemala", total: 10452, hombres: 5646, mujeres: 4806 },
            { departamento: "El Progreso", total: 4, hombres: 4, mujeres: 0 },
            { departamento: "Sacatepéquez", total: 103, hombres: 57, mujeres: 46 },
            { departamento: "Chimaltenango", total: 80, hombres: 29, mujeres: 51 },
            { departamento: "Escuintla", total: 246, hombres: 135, mujeres: 111 },
            { departamento: "Santa Rosa", total: 15, hombres: 8, mujeres: 7 },
            { departamento: "Sololá", total: 72, hombres: 42, mujeres: 30 },
            { departamento: "Totonicapán", total: 48, hombres: 29, mujeres: 19 },
            { departamento: "Quetzaltenango", total: 1175, hombres: 567, mujeres: 608 },
            { departamento: "Suchitepéquez", total: 189, hombres: 114, mujeres: 75 },
            { departamento: "Retalhuleu", total: 94, hombres: 50, mujeres: 44 },
            { departamento: "San Marcos", total: 141, hombres: 75, mujeres: 66 },
            { departamento: "Huehuetenango", total: 661, hombres: 367, mujeres: 294 },
            { departamento: "Quiché", total: 95, hombres: 51, mujeres: 44 },
            { departamento: "Baja Verapaz", total: 5, hombres: 3, mujeres: 2 },
            { departamento: "Alta Verapaz", total: 273, hombres: 125, mujeres: 148 },
            { departamento: "Petén", total: 80, hombres: 43, mujeres: 37 },
            { departamento: "Izabal", total: 122, hombres: 57, mujeres: 65 },
            { departamento: "Zacapa", total: 16, hombres: 9, mujeres: 7 },
            { departamento: "Chiquimula", total: 17, hombres: 11, mujeres: 6 },
            { departamento: "Jalapa", total: 13, hombres: 4, mujeres: 9 },
            { departamento: "Jutiapa", total: 15, hombres: 9, mujeres: 6 },
            { departamento: "Ignorado", total: 9516, hombres: 5056, mujeres: 4460 }
        ],
        porPueblo: [
            { pueblo: "Maya", total: 201, hombres: 121, mujeres: 80 },
            { pueblo: "Garífuna", total: 3, hombres: 0, mujeres: 3 },
            { pueblo: "Xinka", total: 0, hombres: 0, mujeres: 0 },
            { pueblo: "Afrodescendiente", total: 0, hombres: 0, mujeres: 0 },
            { pueblo: "Ladino", total: 13866, hombres: 7285, mujeres: 6581 },
            { pueblo: "Extranjero", total: 142, hombres: 83, mujeres: 59 },
            { pueblo: "Ignorado", total: 9220, hombres: 5002, mujeres: 4218 }
        ]
    },
    historicoMatriculados: [
        { año: 2020, total: 333820, publico: 149067, privado: 184753 },
        { año: 2021, total: 433389, publico: 236040, privado: 197349 },
        { año: 2022, total: 423650, publico: 238027, privado: 185623 },
        { año: 2023, total: 519561, public