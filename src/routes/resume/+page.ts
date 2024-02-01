import type { PageLoad } from "./$types";

const resume = {
    formations: [
        {
            title: 'Diplôme d\'Ingénieur Informatique | ESIEE Paris',
            date: '2021 — 2024',
            details: '• Informatique, design, architecture et développement - Option Réseaux <br />• Echange universitaire au Québec pendant un trimestre <br />• Last Project : Projet de fin d’étude',
        },
        {
            title: 'DUT Informatique | IUT Sénart Fontainebleau',
            date: '2019 — 2021',
            details: '• Bases de la programmation informatique et des réseaux informatiques <br />• Réalisation d’un stage de fin d’étude : automatisations des tests d’applications',
        },
    ],
    experiences: [
        {
            title: 'Alternant Développeur Supply Chain | Safran Aircraft Engines',
            date: '2021 — Present',
            details: '• Gestion de projet d’une application web.<br />• Utilisation avancée des technologies JavaScript (ReactJs, NodeJs) et SQL.<br />• Analyse de données avec Talend et Power BI.<br />• Création d\'indicateurs clés de performance (KPI) pour faciliter la migration vers SAP.',
        },
        {
            title: 'Stagiaire Engine Factory | EasyVista',
            date: 'Mars - Juin 2021',
            details: 'Développement de scripts d\'automatisation pour les tests d\'applications web.<br />• Optimisation des scripts de tests existants.<br />• Utilisation du logiciel Ranorex Studio pour l\'automatisation des tests.',
        },
    ],
};

export const load: PageLoad = () => {
    return {
        resume,
    };
};
