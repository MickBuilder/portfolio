import programmingIcon from "$lib/assets/icon-prog.png";
import mobileIcon from "$lib/assets/icon-app.png";
import gitIcon from "$lib/assets/icon-git.png";
import databaseIcon from "$lib/assets/icon-db.png";
import frontIcon from "$lib/assets/icon-front.png";
import backIcon from "$lib/assets/icon-back.png";
import type { PageLoad } from "./$types";

const skills = {
    technical: [
        {
            icon: programmingIcon,
            title: "Programmation",
            text: "Technologies utilisées : Java, Golang, Javascript, C. <br /> ..."
        },
        {
            icon: frontIcon, 
            title: "Web [Frontend]",
            text: "Conception et développement d'applications Web <br /> Tech utilisées : ReactJS, Angular, Svelte, Sveltekit. <br /> ..."
        },
        {
            icon: mobileIcon,
            title: "Développement mobile",
            text: "Flutter, Jetpack Compose, Android. <br /> ..."
        },
        {
            icon: backIcon, 
            title: "Web [Backend]",
            text: "Implantation et déploiement d'API REST. <br /> Tech utilisées : SpringBoot, NestJS, Fiber. <br /> ..."
        }
    ],
    soft: [
        {
          icon: gitIcon,
          title: "Git",
          text: "Construction de projets collaboratifs via Git (branches, etc). ..."
        },
        {
          icon: databaseIcon,
          title: "Base de données",
          text: "Modélisation de bases de données relationnelles et non relationnelles. <br /> Tech utilisées : PostgreSQL, SQLite. <br /> ..."
        }
    ]
}

export const load: PageLoad = () => {
    return {
        skills,
    };
};