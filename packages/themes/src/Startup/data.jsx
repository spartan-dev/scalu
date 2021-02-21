/* eslint-disable no-alert */
import React from "react"

import { smoothLinkProps } from "@pagerland/common/src/utils"
import { Link } from "react-scroll"

import Typography from "@pagerland/common/src/components/Typography"

import MapMarker from "@pagerland/icons/src/monochrome/MapMarker"
import MobilePhone from "@pagerland/icons/src/monochrome/MobilePhone"
import PaperAirplane from "@pagerland/icons/src/monochrome/PaperAirplane"

import FacebookF from "@pagerland/icons/src/monochrome/FacebookF"
import Instagram from "@pagerland/icons/src/monochrome/Instagram"
import Twitter from "@pagerland/icons/src/monochrome/Twitter"
import Linkedin from "@pagerland/icons/src/monochrome/Linkedin"

import * as Yup from "yup"
import Welcome from "./assets/welcome.png"

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

import Practico from "./assets/practico.svg"
import Experiencia from "./assets/experiencia.svg"
import Multiplica from "./assets/multiplica.svg"

import PricingExplore from "./assets/pricing/plan-1.svg"
import PricingStartup from "./assets/pricing/plan-2.svg"
import PricingGrowup from "./assets/pricing/plan-3.svg"
import PricingScaleup from "./assets/pricing/plan-4.svg"
import PricingOndemand from "./assets/pricing/plan-5.svg"

import Powerfull from "./assets/powerfull.svg"

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
        to: "experts",
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
        <br />
        THE <br /> BOX
      </Typography>,
    ],
    text: [
      "En Scalu Technologies",
      <Typography as="span" variant="body1" color="primary">
        {" "}
        damos soluciones ágiles para escalar tu negocio físico a dígital.{" "}
      </Typography>,
      "Te acompañamos durante cada etapa de la transformación para crecer por medio del comercio electrónico de alto impacto.",
    ],
    actions: [
      {
        label: "Contáctanos",
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
    title: "¿CÓMO TE AYUDAMOS?",
    text: (
      <>
        Scalu Technologies te ofrece asesoría, desarrollo y acompañamiento en
        branding,
        <br className="none" /> marketing, diseño, desarrollo web, ventas,
        logística y sourcing para tu negocio digital.
      </>
    ),
    services: [
      {
        icon: Practico,
        title: [
          <Typography variant="h5" color="primary">
            Práctico y ágil
          </Typography>,
        ],
        text:
          "Diseñamos para ser amigables con el usuario, enfocándonos en la experiencia de compra ágil.",
      },
      {
        icon: Experiencia,
        title: [
          <Typography variant="h5" color="primary">
            Alta experiencia
          </Typography>,
        ],
        text:
          "Al ser expertos en productos de mucho tráfico sumamos valor a tu negocio mientras restamos error.",
      },
      {
        icon: Multiplica,
        title: [
          <Typography variant="h5" color="primary">
            Multiplica tus clientes
          </Typography>,
        ],
        text:
          "Agregamos valor medible a través de la adquisición de usuarios y retención de los mismos.",
      },
    ],
    actions: [
      {
        label: "Contáctanos",
        to: "contact",
        as: Link,
        ...smoothLinkProps,
        variant: "primary",
      },
    ],
  },
  experts: {
    title: "NUESTROS EXPERTOS",
    text:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    cta: {
      label: "¡Únete a nuestros expertos!",
      to: "",
    },
    sections: [
      {
        name: "Marketing",
        color: "secondary",
        labels: [
          "Analista de marketing digital",
          "Experto en AdWords de Google",
          "Diseñador de logos",
          "Community manager",
          "Consultor SEO",
        ],
      },
      {
        name: "Diseño",
        color: "accent",
        labels: [
          "Diseñador gráfico",
          "Diseñador UI",
          "Programador WordPress",
          "Diseñador web",
          "Diseñador UX",
        ],
      },
      {
        name: "Desarrollo",
        color: "quaternary",
        labels: [
          "Progamador Frontend / Backend",
          "Programador Android",
          "Programador Java",
          "Ingeniero DevOps",
          "Programador IOS",
          "Programador PHP ",
          "Ingeniero Microservicios y APIS",
          "Programador Python",
        ],
      },
      {
        name: "Contenidos",
        color: "quinary",
        labels: [
          "Redactor de Articulos",
          "Traductor",
          "Musico Comercial",
          "Transcriptor",
          "Locutor",
          "Promotor Musical",
        ],
      },
    ],
  },
  team: {
    title: (
      <>
        Estamos orgullosos de trabajar con <br className="none" /> los mejores
        clientes
      </>
    ),
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
    title: "PAQUETES",
    text: (
      <>
        Tenemos el paquete perfecto para tu negocio ya que nuestras soluciones{" "}
        <br /> son personalizadas y no pagarás por un servicio que no requieres.
      </>
    ),
    prices: {
      currency: "$",
      sections: [
        {
          icon: PricingExplore,
          title: "Explore",
          text: (
            <>
              Si deseas conocer y explorar <br /> soluciones digitales
            </>
          ),
          features: [
            {
              text: [
                <Typography variant="button2" color="gray.8" fontWeight="600">
                  GRATIS
                </Typography>,
                <Typography
                  variant="button2"
                  color="gray.8"
                  fontWeight="normal"
                >
                  {" "}
                  - catálogo de soluciones
                </Typography>,
              ],
            },
            {
              text: "Desarrollado por expertos",
            },
            {
              text: "Sin subscripciones innecesarias",
            },
          ],
          button: {
            ButtonProps: [
              {
                label: "Contáctanos",
                to: "contact",
                variant: "secondary",
                as: Link,
                ...smoothLinkProps,
              },
            ],
          },
        },
        {
          icon: PricingStartup,
          title: "Startup",
          text: (
            <>
              Si deseas comenzar a vender
              <br /> en canales digitales
            </>
          ),
          features: [
            {
              text: "Soluciones ágiles",
            },
            {
              text: "Los mejores proveedores",
            },
            {
              text: "Ajustados a tu presupuesto",
            },
          ],
          button: {
            ButtonProps: [
              {
                label: "Contáctanos",
                variant: "accent",
                to: "contact",
                as: Link,
                ...smoothLinkProps,
              },
            ],
          },
        },
        {
          icon: PricingGrowup,
          title: "Growup",
          text: (
            <>
              Si deseas renovar tus plata- <br />
              formas digitales
            </>
          ),
          features: [
            {
              text: "Nuevas tecnologías y estrategías ",
            },
            {
              text: "Diseños innovadores",
            },
            {
              text: "Generación de contenidos",
            },
          ],
          button: {
            ButtonProps: [
              {
                label: "Contáctanos",
                variant: "quaternary",
                to: "contact",
                as: Link,
                ...smoothLinkProps,
              },
            ],
          },
        },
        {
          icon: PricingScaleup,
          title: "Scaleup",
          text: (
            <>
              Si necesitas una solución a <br /> la medida
            </>
          ),
          features: [
            {
              text: "Experiencia SCALU",
            },
            {
              text: "Acompañamiento especializado",
            },
            {
              text: "Desarrollo ágil",
            },
          ],
          button: {
            ButtonProps: [
              {
                label: "Contáctanos",
                variant: "primary",
                to: "contact",
                as: Link,
                ...smoothLinkProps,
              },
            ],
          },
        },
        {
          icon: PricingOndemand,
          title: "On demand",
          text: [
            <Typography
              marginBottom="15px"
              fontSize="20px"
              color="gray.8"
              fontWeight="600"
            >
              Pregunta por nuestra fabrica <br /> de desarrollos{" "}
              <Typography
                fontSize="20px"
                color="gray.8"
                fontWeight="normal"
                as="span"
              >
                donde proveemos Outsourcing Especializado y Soluciones Digitales
                en temas de E-commerce, Logística, Servicios Financieros y
                Cyberseguridad.
              </Typography>
            </Typography>,
          ],
          button: {
            ButtonProps: [
              {
                label: "Contáctanos",
                variant: "quinary",
                to: "contact",
                as: Link,
                ...smoothLinkProps,
              },
            ],
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
    firstTitle: "Que nada detenga tu salida de la caja...",
    src: `${Powerfull}`,
    title: "CONTÁCTANOS",
    sections: [
      {
        icon: MapMarker,
        text: (
          <>
            Magnolias 203,
            <br /> Nova Ciudad Cayalá,
            <br /> zona 16. Guatemala
          </>
        ),
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
        email: Yup.string()
          .email("Debe contener un e-mail válido")
          .required("Campo requerido"),
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
          as: "input",
        },
        {
          name: "email",
          label: "Correo",
          placeholder: "i.e. john.doe@email.com",
          type: "email",
          initialValue: "",
          as: "input",
        },
        {
          name: "country",
          label: "Código de país",
          placeholder: "123",
          type: "number",
          initialValue: "",
          as: "input",
        },
        {
          name: "phone",
          label: "Número de teléfono",
          placeholder: "123-456-7890",
          type: "number",
          initialValue: "",
          as: "input",
        },
        {
          name: "comments",
          label: "¡Cuéntanos tu idea!",
          placeholder: `Mensaje...`,
          initialValue: "",
          as: "textarea",
        },
      ],
    },
  },
  modalMailer: {
    title: "ÚNETE A NUESTROS EXPERTOS",
    description:
      "Si te interesa ser parte del equipo Scalu, no dudes en mandarnos tu información.",
    cta: "Mandar información",
    validationSchema: Yup.object({
      name: Yup.string()
        .max(15, "Deben ser 15 caracteres o menos")
        .required("Campo requerido"),
      email: Yup.string()
        .email("Debe contener un e-mail válido")
        .required("Campo requerido"),
      ocupation: Yup.string().required("Campo requerido"),
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
        as: "input",
      },
      {
        name: "email",
        label: "Correo",
        placeholder: "i.e. john.doe@email.com",
        type: "email",
        initialValue: "",
        as: "input",
      },
      {
        name: "ocupation",
        label: "Ocupación",
        placeholder: "i.e. Desarrollador",
        initialValue: "",
        as: "input",
      },
    ],
  },
  copyright: "© 2020 Scalu Technologies",
}
