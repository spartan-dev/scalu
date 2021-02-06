/* eslint-disable no-alert */
import React from 'react';

import { smoothLinkProps } from "@pagerland/common/src/utils"
import { Link } from "react-scroll"

import textToMultiline from "@pagerland/common/src/utils/textToMultiline"
import Typography from '@pagerland/common/src/components/Typography';

import MapMarker from "@pagerland/icons/src/monochrome/MapMarker"
import MobilePhone from "@pagerland/icons/src/monochrome/MobilePhone"
import PaperAirplane from "@pagerland/icons/src/monochrome/PaperAirplane"

import FacebookF from "@pagerland/icons/src/monochrome/FacebookF"
import Instagram from "@pagerland/icons/src/monochrome/Instagram"
import Twitter from "@pagerland/icons/src/monochrome/Twitter"
import Linkedin from "@pagerland/icons/src/monochrome/Linkedin"

import * as Yup from "yup"
import Welcome from "./assets/welcome.png"
import AboutUs from "./assets/about-us.jpg"
import AboutUs2x from "./assets/about-us@2x.jpg"

import Avatar1 from "./assets/avatars/avatar-1.jpg"
import Avatar12x from "./assets/avatars/avatar-1@2x.jpg"
import Avatar2 from "./assets/avatars/avatar-2.jpg"
import Avatar22x from "./assets/avatars/avatar-2@2x.jpg"
import Avatar3 from "./assets/avatars/avatar-3.jpg"
import Avatar32x from "./assets/avatars/avatar-3@2x.jpg"
import Avatar4 from "./assets/avatars/avatar-4.jpg"
import Avatar42x from "./assets/avatars/avatar-4@2x.jpg"
import Avatar5 from "./assets/avatars/avatar-5.jpg"
import Avatar52x from "./assets/avatars/avatar-5@2x.jpg"
import Avatar6 from "./assets/avatars/avatar-6.jpg"
import Avatar62x from "./assets/avatars/avatar-6@2x.jpg"
import Avatar7 from "./assets/avatars/avatar-7.jpg"
import Avatar72x from "./assets/avatars/avatar-7@2x.jpg"
import Avatar8 from "./assets/avatars/avatar-8.jpg"
import Avatar82x from "./assets/avatars/avatar-8@2x.jpg"

import Estimations from "./assets/estimation.svg"
import Ecommerce from "./assets/ecommerce.svg"
import Support from "./assets/support.svg"


import PricingBasic from "./assets/pricing/basic.svg"
import PricingAdvanced from "./assets/pricing/advanced.svg"
import PricingExpert from "./assets/pricing/expert.svg"
import Powerfull from './assets/powerfull.svg'

import Article1 from "./assets/articles/article-1.jpg"
import Article12x from "./assets/articles/article-1@2x.jpg"
import Article2 from "./assets/articles/article-2.jpg"
import Article22x from "./assets/articles/article-2@2x.jpg"
import Article3 from "./assets/articles/article-3.jpg"
import Article32x from "./assets/articles/article-3@2x.jpg"
import Article4 from "./assets/articles/article-4.jpg"
import Article42x from "./assets/articles/article-4@2x.jpg"
import Article5 from "./assets/articles/article-5.jpg"
import Article52x from "./assets/articles/article-5@2x.jpg"

export default {
  title: "Startup",
  navbar: {
    links: [
      {
        to: "",
        label: "Inicio",
      },
      {
        to: "services",
        label: "Servicios",
      },
      {
        to: "pricing",
        label: "Paquetes",
      },
      {
        to: "team",
        label: "Nosotros",
      },
      {
        to: "contact",
        label: "Contacto",
      },
    ],
    actions: [
      {
        href:
          "https://themeforest.net/item/pagerland-react-and-gatsby-landing-page-templates/26548567",
        label: "Buy this theme",
      },
    ],
  },
  welcome: {
    title: [
      "SCALE OUTSIDE",
    <Typography as="span" variant="title">
      {" "} THE <br/> BOX 
      <Typography as="span" variant="title" color='primary'>
      .
    </Typography>
    </Typography>,
    ],
    text: [
      "En Scalu Technologies",
      <Typography as="span" variant="body1" color='primary'>
        {" "} damos soluciones ágiles para escalar tu negocio físico a dígital.
      </Typography>,
       'Te acampañamos durante cada etapa de la transformación para crecer por medio del comercio electrónico de alto impacto.',
    ],
    actions: [
      {
        label: "Contáctonos",
        to: "contact",
        as: Link,
        ...smoothLinkProps,
        variant: "primary",
      },
    ],
    img: {
      src: Welcome,
      srcSet: `${Welcome} 1x`,
    },
  },
  services: {
    title: "Our services",
    services: [
      {
        icon: Estimations,
        title: "Estimation",
        text:
          "Vivamus eleifend nec purus eget rutrum. Cras urna lacus, consectetur ut erat sed, commodo gravida mauris. Sed eu vulputate sapien. Nulla consectetur efficitur congue.",
      },
      {
        icon: Ecommerce,
        title: "Ecommerce",
        text:
          "Vivamus eleifend nec purus eget rutrum. Cras urna lacus, consectetur ut erat sed, commodo gravida mauris. Sed eu vulputate sapien. Nulla consectetur efficitur congue.",
      },
      {
        icon: Support,
        title: "Support",
        text:
          "Vivamus eleifend nec purus eget rutrum. Cras urna lacus, consectetur ut erat sed, commodo gravida mauris. Sed eu vulputate sapien. Nulla consectetur efficitur congue.",
      },
    ],
    cta: {
      label: "Request a free demo",
      href:
        "https://themeforest.net/item/pagerland-react-and-gatsby-landing-page-templates/26548567",
    },
  },
  about: {
    img: {
      src: AboutUs,
      srcSet: `${AboutUs} 1x, ${AboutUs2x} 2x`,
    },
    title: "About us",
    text:
      "Nunc nec ultricies quam. Integer iaculis erat id leo consequat ultricies. Pellentesque mattis ultricies rhoncus. Maecenas vehicula efficitur sagittis. Interdum et malesuada fames ac ante ipsum primis in faucibus. Etiam laoreet at erat sit amet efficitur. Nam interdum tellus molestie, elementum felis in, consectetur ipsum. Aenean justo dolor, pretium nec dui eget, vulputate ullamcorper dolor.",
    cta: {
      label: "Learn more bout us",
      href:
        "https://themeforest.net/item/pagerland-react-and-gatsby-landing-page-templates/26548567",
    },
  },
  team: {
    title: "Meet our team",
    text:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam eu magna pharetra sem ullamcorper bibendum quis et mauris. Phasellus tincidunt iaculis porttitor. Sed ut mi varius, gravida nulla eget, bibendum est. Ut auctor nec erat vitae placerat. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.",
    cta: {
      label: "Contact us",
      href:
        "https://themeforest.net/item/pagerland-react-and-gatsby-landing-page-templates/26548567",
    },
    people: [
      {
        avatar: {
          src: Avatar1,
          srcSet: `${Avatar1} 1x, ${Avatar12x} 2x`,
        },
        name: "Timothy Wilson",
        position: "Co-Founder, CEO",
        social: {
          linkedin: "#",
          twitter: "#",
          skype: "#",
        },
      },
      {
        avatar: {
          src: Avatar2,
          srcSet: `${Avatar2} 1x, ${Avatar22x} 2x`,
        },
        name: "Bernard Nguyen",
        position: "Co-Founder, CEO",
        social: {
          linkedin: "#",
          twitter: "#",
          skype: "#",
        },
      },
      {
        avatar: {
          src: Avatar3,
          srcSet: `${Avatar3} 1x, ${Avatar32x} 2x`,
        },
        name: "Bessie Richards",
        position: "Co-Founder, CEO",
        social: {
          linkedin: "#",
          twitter: "#",
          skype: "#",
        },
      },
      {
        avatar: {
          src: Avatar4,
          srcSet: `${Avatar4} 1x, ${Avatar42x} 2x`,
        },
        name: "Judith Black",
        position: "Co-Founder, CEO",
        social: {
          linkedin: "#",
          twitter: "#",
          skype: "#",
        },
      },
      {
        avatar: {
          src: Avatar5,
          srcSet: `${Avatar5} 1x, ${Avatar52x} 2x`,
        },
        name: "Robert Edwards",
        position: "Co-Founder, CEO",
        social: {
          linkedin: "#",
          twitter: "#",
          skype: "#",
        },
      },
      {
        avatar: {
          src: Avatar6,
          srcSet: `${Avatar6} 1x, ${Avatar62x} 2x`,
        },
        name: "Dianne Robertson",
        position: "Co-Founder, CEO",
        social: {
          linkedin: "#",
          twitter: "#",
          skype: "#",
        },
      },
      {
        avatar: {
          src: Avatar7,
          srcSet: `${Avatar7} 1x, ${Avatar72x} 2x`,
        },
        name: "Shane Black",
        position: "Co-Founder, CEO",
        social: {
          linkedin: "#",
          twitter: "#",
          skype: "#",
        },
      },
      {
        avatar: {
          src: Avatar8,
          srcSet: `${Avatar8} 1x, ${Avatar82x} 2x`,
        },
        name: "Nathan Fox",
        position: "Co-Founder, CEO",
        social: {
          linkedin: "#",
          twitter: "#",
          skype: "#",
        },
      },
    ],
  },
  pricing: {
    title: "Pricing",
    prices: {
      currency: "$",
      sections: [
        {
          icon: PricingBasic,
          title: "Basic",
          price: "9.99",
          period: "month",
          features: [
            {
              text: "users",
              prefix: "2",
            },
            {
              text: "estimates per month",
              prefix: "10",
            },
            {
              text: "invoices per month",
              prefix: "10",
            },
            {
              text: "support",
              prefix: "Basic",
            },
          ],
          button: {
            text: "Buy basic plan",
            ButtonProps: {
              as: "a",
              href: "https://mypags.app",
            },
          },
        },
        {
          icon: PricingAdvanced,
          title: "Advanced",
          price: "19.99",
          period: "month",
          features: [
            {
              text: "users",
              prefix: "5",
            },
            {
              text: "estimates per month",
              prefix: "20",
            },
            {
              text: "invoices per month",
              prefix: "20",
            },
            {
              text: "support",
              prefix: "Basic",
            },
          ],
          button: {
            text: "Buy advanced plan",
            ButtonProps: {
              as: "a",
              href: "https://mypags.app",
            },
          },
        },
        {
          icon: PricingExpert,
          title: "Expert",
          price: "29.99",
          period: "month",
          features: [
            {
              text: "users",
              prefix: "10",
            },
            {
              text: "estimates per month",
              prefix: "Unlimited",
            },
            {
              text: "invoices per month",
              prefix: "Unlimited",
            },
            {
              text: "support",
              prefix: "Priority",
            },
          ],
          button: {
            text: "Buy expert plan",
            ButtonProps: {
              as: "a",
              href: "https://mypags.app",
            },
          },
        },
      ],
    },
  },
  blog: {
    title: "Latest news",
    articles: [
      {
        url: "#",
        src: Article1,
        srcSet: `${Article1} 1x, ${Article12x} 2x`,
        date: "Today",
        title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
        text:
          "Nullam sed tellus nec arcu mollis iaculis. Aliquam eget velit a libero suscipit tempor eget at leo. Vestibulum commodo tempor gravida. Donec dictum nunc at lorem euismod, et faucibus ante consectetur. Nullam porttitor eros in ligula posuere dignissim.",
      },
      {
        url: "#",
        src: Article2,
        srcSet: `${Article2} 1x, ${Article22x} 2x`,
        date: "Yesterday",
        title: "Ut ornare augue quis diam vehicula, vitae vulputate mauris",
      },
      {
        url: "#",
        src: Article3,
        srcSet: `${Article3} 1x, ${Article32x} 2x`,
        date: "Last week",
        title: "Pellentesque finibus porttitor mauris, nec tempor nulla",
      },
      {
        url: "#",
        src: Article4,
        srcSet: `${Article4} 1x, ${Article42x} 2x`,
        date: "2 weeks ago",
        title: "Phasellus ornare metus sit amet luctus bibendum",
      },
      {
        url: "#",
        src: Article5,
        srcSet: `${Article5} 1x, ${Article52x} 2x`,
        date: "Last month",
        title: "Donec auctor ante sit amet elit pretium condimentum",
      },
    ],
    cta: {
      label: "Read all news on Medium",
      href:
        "https://themeforest.net/item/pagerland-react-and-gatsby-landing-page-templates/26548567",
    },
  },
  contact: {
    firstTitle: 'Que nada detenga tu salida de la caja...',
    src:`${Powerfull}`,
    title: "CONTÁCTANOS",
    sections: [
      {
        icon: MapMarker,
        text: textToMultiline`Magnolias 203, Nova Ciudad Cayalá, zona 16. Guatemala`,
      },
      {
        icon: MobilePhone,
        text: "+502 42118498",
      },
      {
        icon: PaperAirplane,
        text: "sgarcia@scalu.io",
      },
    ],
    socialLinks: [
      {
        icon: FacebookF,
        href: "https://mypags.app",
        title: "Facebook",
      },
      {
        icon: Instagram,
        href: "https://mypags.app",
        title: "Instagram",
      },
      {
        icon: Twitter,
        href: "https://mypags.app",
        title: "Twitter",
      },
      {
        icon: Linkedin,
        href: "https://mypags.app",
        title: "Linkedin",
      },
    ],
    mailer: {
      title: "AGENDAR LLAMADA",
      cta: "Mandar información",
      validationSchema: Yup.object({
        name: Yup.string()
          .max(15, "Deben ser 15 caracteres o menos")
          .required("Campo requerido"),
        country: Yup.string().required("Campo requerido"),
        email: Yup.string().email("Debe contener un e-mail válido").required("Campo requerido"),
        phone: Yup.string().required("Campo requerido"),
        comments: Yup.string().required("Campo requerido"),
      }),
      // eslint-disable-next-line no-undef
      onSubmit: values =>
        window.alert(`Form sent with values ${JSON.stringify(values)}`),
      fields: [
        {
          name: "name",
          label: "Nombre",
          placeholder: "ie. John Doe",
          initialValue: "",
        },
        {
          name: "email",
          label: "Correo",
          placeholder: "i.e. john.doe@email.com",
          type: "email",
          initialValue: "",
        },
        {
          name: "country",
          label: "Código de país",
          placeholder: "123",
          type: "number",
          initialValue: "",
        },
        {
          name: "phone",
          label: "Número de teléfono",
          placeholder: "123-456-7890",
          type: "number",
          initialValue: "",
        },
        {
          name: "comments",
          label: "¡Cuéntanos tu idea!",
          placeholder: `Mensaje...`,
          initialValue: "",
        },
      ],
    },
  },
  copyright: "© 2020 Scalu Technologies",
}
