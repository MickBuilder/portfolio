import type { PageLoad } from './$types';
import ugpPic from "$lib/assets/projet-ugp.png";
import mobistoryPic from "$lib/assets/projet-mobistory.png";
import galaxyPic from "$lib/assets/projet-galaxy.png";

const projects = [
    {
        link: "https://github.com/Mikdaam/Protocol-UGP",
        image: ugpPic,
        categories: ["Java", "Git", "Maven", "Réseaux"],
        title: "Protocol UGP",
        description: "Le protocole UGEGreed, développé pour le cours de 'Programmation Réseaux', vise à créer un protocole de distribution de calcul, 'UGP', pour tester efficacement des conjectures."
    },
    {
        link: "https://github.com/Mikdaam/mobistory-flutter",
        image: mobistoryPic,
        categories: ["Flutter", "Sqlite", "Git"],
        title: "Mobistory",
        description: "Application mobile d'exploration des évènements historiques à proximité de l'utilisateur. Réalisé avec Flutter."
    },
    {
        link: "https://github.com/Mikdaam/Galaxy_Simulation",
        image: galaxyPic,
        categories: ["Langage C", "Algorithmes"],
        title: "Galaxy Simulation",
        description: "Simulation de mouvements de corps dans la galaxie, réalisé en C avec une librairie interne."
    }
];

export const load = (async () => {
    return {
        projects,
    };
}) satisfies PageLoad;