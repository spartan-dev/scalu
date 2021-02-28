/* eslint-disable no-alert */
import React from "react"

import { smoothLinkProps } from "@pagerland/common/utils"
import { Link } from "react-scroll"

import Typography from "@pagerland/common/components/Typography"

import MapMarker from "@pagerland/icons/MapMarker"
import MobilePhone from "@pagerland/icons/MobilePhone"
import PaperAirplane from "@pagerland/icons/PaperAirplane"

import FacebookF from "@pagerland/icons/FacebookF"
import Instagram from "@pagerland/icons/Instagram"
import Twitter from "@pagerland/icons/Twitter"
import Linkedin from "@pagerland/icons/Linkedin"

import Practico from "@pagerland/icons/Practico"
import Experiencia from "@pagerland/icons/Experiencia"
import Multiplica from "@pagerland/icons/Multiplica"

import Powerfull from "@pagerland/icons/Powerfull"

import * as Yup from "yup"
import Welcome from "./assets/welcome.png"

import Avatar1 from "./assets/avatars/avatar-1.jpg"
import Avatar2 from "./assets/avatars/avatar-2.jpg"
import Avatar3 from "./assets/avatars/avatar-3.jpg"
import Avatar4 from "./assets/avatars/avatar-4.jpg"
import Avatar5 from "./assets/avatars/avatar-5.jpg"
import Avatar6 from "./assets/avatars/avatar-6.jpg"
import Avatar7 from "./assets/avatars/avatar-7.jpg"
import Avatar8 from "./assets/avatars/avatar-8.jpg"

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
    actions: {
      label: "Agendar llamada",
      to: "contact",
      as: Link,
      variant: "primary",
    },
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
        damos soluciones <br className="none" /> ágiles para escalar tu negocio
        físico a dígital. <br className="none" />
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
      alt: "Soluciones digitales",
      title: "Soluciones digitales",
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
    people: [
      {
        avatar: {
          src: Avatar1,
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
        <br className="none" /> son personalizadas y no pagarás por un servicio
        que no requieres.
      </>
    ),
    prices: {
      currency: "$",
      sections: [
        {
          icon: "#FFB800",
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
                label: "Descargar catálogo",
                to: "contact",
                variant: "secondary",
                as: Link,
                ...smoothLinkProps,
              },
            ],
          },
        },
        {
          icon: "#FF5F00",
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
          icon: "#FF42B3",
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
          icon: "#8D00FF",
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
          icon: "#00CE73",
          title: "On demand",
          text: [
            <Typography
              marginBottom="50px"
              fontSize="20px"
              color="gray.8"
              fontWeight="600"
              lineHeight="28px"
            >
              Pregunta por nuestra fabrica <br /> de desarrollos{" "}
              <Typography
                fontSize="20px"
                color="gray.8"
                fontWeight="normal"
                as="span"
                lineHeight="28px"
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
  contact: {
    firstTitle: "Que nada detenga tu salida de la caja...",
    src: Powerfull,
    title: "CONTÁCTANOS",
    sections: [
      {
        icon: MapMarker,
        text: (
          <>
            Magnolias 203
            <br /> Nova, Ciudad Cayalá
            <br /> Z16, Guatemala
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
        [
          {
            name: "name",
            label: "Nombre",
            placeholder: "ie. John Doe",
            initialValue: "",
            as: "input",
          },
        ],
        [
          {
            name: "email",
            label: "Correo",
            placeholder: "i.e. john.doe@email.com",
            type: "email",
            initialValue: "",
            as: "input",
          },
        ],
        [
          {
            name: "country",
            label: "Código de país",
            placeholder: "123",
            type: "number",
            initialValue: "",
            as: "input",
            styles: {
              width: 143,
              marginRight: 24,
            },
          },
          {
            name: "phone",
            label: "Número de teléfono",
            placeholder: "123-456-7890",
            type: "number",
            initialValue: "",
            as: "input",
          },
        ],
        [
          {
            name: "comments",
            label: "¡Cuéntanos tu idea!",
            placeholder: `Mensaje...`,
            initialValue: "",
            as: "textarea",
          },
        ],
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
