type PageIntroProps = {
  title: string;
  description: string;
};

export default function PageIntro({ title, description }: PageIntroProps) {
  return (
    <header className="border-b border-neutral-800 bg-neutral-950 px-4 pb-12 pt-28 text-center sm:px-6 lg:px-8">
      <h1 className="mb-4 text-3xl font-bold tracking-tight text-teal-400 md:text-4xl">{title}</h1>
      <p className="mx-auto max-w-2xl text-base text-neutral-400 md:text-lg">{description}</p>
    </header>
  );
}
