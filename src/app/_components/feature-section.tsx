"use client";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Separator } from "@/components/ui/separator";

const content = [
  {
    id: 1,
    title: "Módulo 1: Introdução",
    data: "04 de Dezembro de 2023",
    episodes: [
      { id: 1, title: "Sobre o curso" },
      { id: 2, title: "Base de conhecimento" },
    ],
  },
  {
    id: 2,
    title: "Módulo 2: Preparando o Ambiente",
    data: "11 de Dezembro de 2023",
    episodes: [
      { id: 1, title: "Ferramentas Necessárias" },
      { id: 2, title: "Configurando o Espaço de Trabalho" },
    ],
  },
  {
    id: 3,
    title: "Módulo 3: Técnicas Básicas",
    data: "18 de Dezembro de 2023",
    episodes: [
      { id: 1, title: "Introdução às Técnicas de Nail Art" },
      { id: 2, title: "Preparação das Unhas" },
      { id: 3, title: "Aplicação de Base" },
      { id: 4, title: "Desenhos Simples" },
      { id: 5, title: "Cuidado e Manutenção" },
    ],
  },
  {
    id: 4,
    title: "Módulo 4: Técnicas Avançadas",
    data: "25 de Dezembro de 2023",
    episodes: [
      { id: 1, title: "Designs Complexos" },
      { id: 2, title: "Uso de Ferramentas Especiais" },
      { id: 3, title: "Trabalhando com Gel" },
      { id: 4, title: "Cores e Estilos Modernos" },
    ],
  },
  {
    id: 5,
    title: "Módulo 5: Manutenção e Cuidados",
    data: "01 de Janeiro de 2024",
    episodes: [
      { id: 1, title: "Cuidados Pós-Aplicação" },
      { id: 2, title: "Dicas de Manutenção" },
      { id: 3, title: "Resolução de Problemas Comuns" },
      { id: 4, title: "Produtos Recomendados" },
    ],
  },
  {
    id: 6,
    title: "Módulo 6: Marketing e Negócios",
    data: "08 de Janeiro de 2024",
    episodes: [
      { id: 1, title: "Criando seu Portfólio" },
      { id: 2, title: "Estratégias de Marketing" },
    ],
  },
  {
    id: 7,
    title: "Módulo 7: Preparação para o Mercado",
    data: "15 de Janeiro de 2024",
    episodes: [
      { id: 1, title: "Preparação para o Primeiro Cliente" },
      { id: 2, title: "Gestão de Expectativas" },
      { id: 3, title: "Feedback e Melhoria Contínua" },
    ],
  },
  {
    id: 8,
    title: "Módulo 8: Tendências e Inovações",
    data: "22 de Janeiro de 2024",
    episodes: [
      { id: 1, title: "Tendências Atuais" },
      { id: 2, title: "Inovações no Mercado" },
    ],
  },
  {
    id: 9,
    title: "Módulo 9: Ferramentas e Equipamentos",
    data: "29 de Janeiro de 2024",
    episodes: [
      { id: 1, title: "Introdução às Ferramentas" },
      { id: 2, title: "Cuidados com os Equipamentos" },
    ],
  },
  {
    id: 10,
    title: "Módulo 10: Preparação para Certificação",
    data: "05 de Fevereiro de 2024",
    episodes: [
      { id: 1, title: "Requisitos de Certificação" },
      { id: 2, title: "Dicas para o Exame" },
    ],
  },
  {
    id: 11,
    title: "Módulo 11: Recursos Adicionais",
    data: "12 de Fevereiro de 2024",
    episodes: [
      { id: 1, title: "Biblioteca de Recursos" },
      { id: 2, title: "Apoio e Comunidade" },
    ],
  },
  {
    id: 12,
    title: "Bônus 1",
    data: "06 de Dezembro de 2023",
    episodes: [
      { id: 1, title: "Sessão Extra" },
      {
        id: 2,
        title:
          "Live: Quarta-feira, 6 de dezembro · 7:00 até 8:00pm Fuso horário: America/Sao_Paulo Como participar do Google Meet Link da videochamada: https://meet.google.com/som-akuz-nbo",
      },
    ],
  },
  {
    id: 13,
    title: "Bônus 2",
    data: "10 de Janeiro de 2024",
    episodes: [
      { id: 1, title: "Sessão Extra" },
      {
        id: 2,
        title:
          "Live: Quarta-feira, 10 de janeiro de 2024 · 7:00 até 8:00pm Fuso horário: America/Sao_Paulo Como participar do Google Meet Link da videochamada: https://meet.google.com/emy-cgvp-zav",
      },
    ],
  },
];

function FeatureSection() {
  return (
    <section
      id="feature"
      className="bg-slate-50 dark:bg-transparent container space-y-6 py-8 md:py-12 lg:py-24"
    >
      <div className="mx-auto flex max-w-[58rem] flex-col items-center space-y-4 text-center">
        <h2 className="font-heading text-3xl leading-[1.1] sm:text-3xl md:text-6xl">
          Nail Artist
        </h2>
        <p className="max-w-[85%] leading-normal text-muted-foreground sm:text-lg sm:leading-7">
          Venha desenvolver comigo unhas de gel perfeitas, do zero, usando as
          melhores técnicas do mercado.
        </p>
      </div>

      <div className="mx-auto grid justify-center gap-4 sm:grid-cols-2 md:max-w-[64rem] md:grid-cols-3">
        <div className="relative overflow-hidden rounded-lg border bg-background p-2">
          <div className="flex h-[180px] flex-col justify-between rounded-md p-6">
            <svg viewBox="0 0 24 24" className="h-12 w-12 fill-current">
              <path d="M11.572 0c-.176 0-.31.001-.358.007a19.76 19.76 0 0 1-.364.033C7.443.346 4.25 2.185 2.228 5.012a11.875 11.875 0 0 0-2.119 5.243c-.096.659-.108.854-.108 1.747s.012 1.089.108 1.748c.652 4.506 3.86 8.292 8.209 9.695.779.25 1.6.422 2.534.525.363.04 1.935.04 2.299 0 1.611-.178 2.977-.577 4.323-1.264.207-.106.247-.134.219-.158-.02-.013-.9-1.193-1.955-2.62l-1.919-2.592-2.404-3.558a338.739 338.739 0 0 0-2.422-3.556c-.009-.002-.018 1.579-.023 3.51-.007 3.38-.01 3.515-.052 3.595a.426.426 0 0 1-.206.214c-.075.037-.14.044-.495.044H7.81l-.108-.068a.438.438 0 0 1-.157-.171l-.05-.106.006-4.703.007-4.705.072-.092a.645.645 0 0 1 .174-.143c.096-.047.134-.051.54-.051.478 0 .558.018.682.154.035.038 1.337 1.999 2.895 4.361a10760.433 10760.433 0 0 0 4.735 7.17l1.9 2.878.096-.063a12.317 12.317 0 0 0 2.466-2.163 11.944 11.944 0 0 0 2.824-6.134c.096-.66.108-.854.108-1.748s-.012-1.088-.108-1.747c-.652-4.506-3.859-8.292-8.208-9.695a12.597 12.597 0 0 0-2.499-.523 33.119 33.119 0 0 0-1.997-.041zm4.069 7.217c.347 0 .408.005.486.047a.473.473 0 0 1 .237.277c.018.06.023 1.365.019 4.304l-.003 4.223-.74-1.117-.742-1.117v-3.098c0-1.982.01-3.132.023-3.191a.478.478 0 0 1 .253-.318c.096-.05.13-.054.467-.054zm-8.466 5.6c.347 0 .408.005.486.047a.473.473 0 0 1 .237.277c.018.06.023 1.365.019 4.304l-.003 4.223-.74-1.117-.742-1.117v-3.098c0-1.982.01-3.132.023-3.191a.478.478 0 0 1 .253-.318c.096-.05.13-.054.467-.054z" />
            </svg>
            <div className="space-y-2">
              <h3 className="font-bold">Comunidade Exclusiva</h3>
              <p className="text-sm text-muted-foreground">
                Tenha acesso à comunidade exclusiva para alunos.
              </p>
            </div>
          </div>
        </div>

        <div className="relative overflow-hidden rounded-lg border bg-background p-2">
          <div className="flex h-[180px] flex-col justify-between rounded-md p-6">
            <svg viewBox="0 0 24 24" className="h-12 w-12 fill-current">
              <path d="M12 0c-1.325 0-2.365 1.08-2.365 2.417S10.675 4.834 12 4.834c1.325 0 2.365-1.08 2.365-2.417S13.325 0 12 0zm0 6.31c-2.956 0-5.622 2.403-5.622 5.36v7.512c0 .777.635 1.406 1.419 1.406s1.419-.63 1.419-1.406v-7.512c0-1.24 1.014-2.548 2.784-2.548 1.77 0 2.784 1.308 2.784 2.548v7.512c0 .777.635 1.406 1.419 1.406s1.419-.63 1.419-1.406v-7.512c0-2.957-2.666-5.36-5.622-5.36z" />
            </svg>
            <div className="space-y-2">
              <h3 className="font-bold">Mentoria Personalizada</h3>
              <p className="text-sm text-muted-foreground">
                Acompanhe mentorias exclusivas e tenha todo o suporte
                necessário.
              </p>
            </div>
          </div>
        </div>

        <div className="relative overflow-hidden rounded-lg border bg-background p-2">
          <div className="flex h-[180px] flex-col justify-between rounded-md p-6">
            <svg viewBox="0 0 24 24" className="h-12 w-12 fill-current">
              <path d="M6.094 0C4.937 0 4 1.02 4 2.273v19.454C4 22.98 4.937 24 6.094 24h11.812C19.063 24 20 22.98 20 21.727V2.273C20 1.02 19.063 0 17.906 0H6.094zM6.09 2h11.82c.004 0 .09.06.09.273V21.73c0 .213-.086.272-.09.272H6.09c-.003 0-.09-.06-.09-.273V2.273C6 2.06 6.087 2 6.09 2zM7 3v4.5c0 .276.24.5.533.5h8.934c.293 0 .533-.224.533-.5V3h1v4.5c0 .828-.72 1.5-1.533 1.5H7.533C6.72 9 6 8.328 6 7.5V3h1zm3 10v1.5H8V13h2zm4 0v1.5h-2V13h2zm-6 3v1.5H8V16h2zm4 0v1.5h-2V16h2zm2 0h2v1.5h-2V16z" />
            </svg>
            <div className="space-y-2">
              <h3 className="font-bold">Conteúdo Exclusivo</h3>
              <p className="text-sm text-muted-foreground">
                Tenha acesso a conteúdos exclusivos e atualizações constantes.
              </p>
            </div>
          </div>
        </div>
      </div>

      <Separator className="my-8 md:my-12" />

      <div className="mx-auto flex max-w-[58rem] flex-col items-center space-y-4 text-center">
        <h2 className="font-heading text-3xl leading-[1.1] sm:text-3xl md:text-6xl">
          Conteúdo do Curso
        </h2>
      </div>

      <Accordion type="single" collapsible className="w-full">
        {content.map((module) => (
          <AccordionItem key={module.id} value={`item-${module.id}`}>
            <AccordionTrigger>
              <h3 className="font-heading flex text-lg md:text-xl">
                {module.title}
                <span className="ml-auto font-medium tracking-tight">
                  {module.data}
                </span>
              </h3>
            </AccordionTrigger>
            <AccordionContent>
              <ul className="list-inside list-disc [&>li]:leading-relaxed">
                {module.episodes.map((episode) => (
                  <li key={episode.id}>{episode.title}</li>
                ))}
              </ul>
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </section>
  );
}

export default FeatureSection;
