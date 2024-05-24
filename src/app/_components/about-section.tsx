import Image from "next/image";
import Link from "next/link";
import {
  GitHubIcon,
  InstagramIcon,
  LinkedInIcon,
  YoutTubeIcon,
} from "@/components/social-icons";

function SocialLink({ icon: Icon, ...props }: any) {
  return (
    <Link className="group -m-1 p-1" {...props}>
      <Icon className="h-6 w-6 fill-zinc-500 transition group-hover:fill-zinc-600 dark:fill-zinc-400 dark:group-hover:fill-zinc-300" />
    </Link>
  );
}

function AboutSection() {
  return (
    <section
      id="about"
      className="container flex flex-col md:max-w-[64rem] md:py-12 lg:py-24"
    >
      <div className="grid grid-cols-1 gap-y-16 lg:grid-cols-2 lg:gap-y-12 lg:grid-rows-[auto-1fr]">
        <div className="lg:pl-20 flex justify-center">
          <div className="max-w-xs px-2.5 lg:max-w-none">
            <Image
              src="/avatar.jpg"
              alt="Lucas Nhimi"
              width={800}
              height={800}
              quality="95"
              priority={true}
              className="aspect-square rotate-3 rounded-lg bg-zinc-100 dark:bg-zinc-800 object-cover"
            />
          </div>
        </div>
        <div className="lg:order-first lg:row-span-2 text-center md:text-start">
          <h1 className="font-heading text-3xl md:text-4xl lg:text-5xl">
            @giovanafda
          </h1>
          <p className="mt-6 text-base text-muted-foreground">
            Profissional durante o dia, entusiasta da beleza à noite! Com mais
            de 10 anos de experiência no mundo da beleza.Sou totalmente a favor
            de fomentar a colaboração e inspirar profissionais a criar soluções
            revolucionárias para o sucesso no mundo da beleza. Fora do salão,
            você pode me encontrar apaixonadamente criando conteúdo digital para
            inspirar, educar e entreter. Sempre atento para aprender e me manter
            à frente das tendências do mercado, estou constantemente desafiando
            os limites da criatividade e inovação. Vivo e respiro beleza 24/7...
            Invista na sua carreira e aprenda as técnicas que os melhores
            profissionais de beleza estão utilizando. Faça parte da próxima
            turma do curso mais completo de Alongamento de Unhas em Gel.
            Destinado tanto a iniciantes quanto a profissionais, nosso curso
            presencial de 30 dias oferece: Técnicas específicas e habilidades
            práticas para um alongamento de unhas perfeito. Tendências do
            mercado que mantêm você atualizado com as últimas novidades.
            Certificação reconhecida no mercado. Professores experientes que são
            referências na área. Materiais exclusivos para prática e
            aperfeiçoamento. Inspire confiança e entusiasmo em seus clientes com
            o domínio das técnicas mais avançadas de alongamento de unhas em
            gel. Não perca essa oportunidade de transformar sua paixão em uma
            carreira de sucesso!
          </p>
          <div className="mt-6 flex justify-center md:justify-start gap-6">
            <SocialLink
              href="https://instagram.com/giovanafda"
              icon={InstagramIcon}
            />

            <SocialLink href="https://youtube.com/" icon={YoutTubeIcon} />
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutSection;
