import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import heroBurger from "@/assets/hero-burger.jpg";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogFooter } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Flame, ChefHat, Clock } from "lucide-react";

export const Route = createFileRoute("/")({
  component: Index,
});

const ingredients = [
  "360g de Acém bovino",
  "120g de Peito bovino",
  "2 pães Brioche",
  "4 fatias de Cheddar amarelo",
  "30g de Manteiga sem sal",
  "Sal grosso e Pimenta-do-reino",
];

const steps = [
  { title: "O Blend", body: "Combine o Acém e o Peito numa proporção 75/25. Essa mistura entrega sabor profundo e a gordura ideal para a suculência. Moa na hora, sem amassar." },
  { title: "O Pão", body: "Use sempre Brioche fresco. Passe manteiga na parte interna e toste na chapa até obter uma crosta dourada — base do equilíbrio entre maciez e estrutura." },
  { title: "A Chapa Quente", body: "A chapa deve estar fumegando. Temperatura alta é o segredo da reação de Maillard, responsável pela crosta crocante e pelo aroma irresistível." },
  { title: "O Ponto e a Crosta", body: "Pese 120g por bola, esmague firmemente por 45 segundos, vire uma única vez, adicione o Cheddar e tampe por 30 segundos para derreter perfeitamente." },
  { title: "Montagem", body: "Pão tostado, carne com queijo derretido, fechar. Simples. O Burgz não precisa de molhos elaborados — a qualidade dos ingredientes fala por si." },
];

function Index() {
  const [checked, setChecked] = useState<Record<number, boolean>>({});
  const [openTerms, setOpenTerms] = useState(false);
  const [openPrivacy, setOpenPrivacy] = useState(false);

  const scrollTo = (id: string) => (e: React.MouseEvent) => {
    e.preventDefault();
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Nav */}
      <header className="sticky top-0 z-40 backdrop-blur-xl bg-background/70 border-b border-border">
        <nav className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          <a href="#home" onClick={scrollTo("home")} className="text-2xl font-black tracking-tight">
            Burg<span className="text-primary">z</span>
          </a>
          <ul className="flex items-center gap-8 text-sm font-medium">
            <li><a href="#home" onClick={scrollTo("home")} className="text-primary">Home</a></li>
            <li><a href="#recipe" onClick={scrollTo("recipe")} className="text-muted-foreground hover:text-foreground transition-colors">Recipe</a></li>
            <li><a href="#contact" onClick={scrollTo("contact")} className="text-muted-foreground hover:text-foreground transition-colors">Contact</a></li>
          </ul>
        </nav>
      </header>

      {/* Hero */}
      <section id="home" className="relative overflow-hidden">
        <div className="max-w-6xl mx-auto px-6 pt-16 pb-24 grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-secondary border border-border text-xs uppercase tracking-widest text-muted-foreground mb-6">
              <Flame className="h-3.5 w-3.5 text-primary" /> O Guia Definitivo
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black leading-[1.05] tracking-tight">
              O Guia Definitivo: Como Fazer o <span className="text-primary">Hambúrguer Perfeitamente Perfeito</span> em Casa
            </h1>
            <p className="mt-6 text-lg text-muted-foreground max-w-xl">
              O segredo por trás do Burgz: o blend ideal, a técnica da chapa e como alcançar a suculência máxima.
            </p>
            <div className="mt-8 flex flex-wrap gap-6 text-sm text-muted-foreground">
              <div className="flex items-center gap-2"><ChefHat className="h-4 w-4 text-primary" /> Receita do Chef</div>
              <div className="flex items-center gap-2"><Clock className="h-4 w-4 text-primary" /> 25 minutos</div>
              <div className="flex items-center gap-2"><Flame className="h-4 w-4 text-primary" /> Nível Artesanal</div>
            </div>
          </div>
          <div className="relative">
            <div className="absolute -inset-6 bg-[image:var(--gradient-amber)] opacity-20 blur-3xl rounded-full" aria-hidden />
            <img
              src={heroBurger}
              alt="Hambúrguer Burgz gourmet com queijo cheddar derretido"
              width={1536}
              height={1280}
              className="relative rounded-2xl shadow-2xl ring-1 ring-border w-full h-auto"
            />
          </div>
        </div>
      </section>

      {/* Recipe / Content */}
      <section id="recipe" className="border-t border-border bg-card/30">
        <div className="max-w-6xl mx-auto px-6 py-20">
          <div className="max-w-3xl mb-12">
            <p className="text-base md:text-lg leading-relaxed text-muted-foreground">
              Pela primeira vez, a <strong className="text-foreground">JOVEM LANCHONETE DELIVERY</strong> revela
              a receita que transformou o Burgz numa referência artesanal. Cada etapa foi refinada ao longo de anos
              de chapa quente, blends testados e atenção obsessiva ao detalhe. Este é o passo a passo completo —
              sem atalhos, sem segredos guardados.
            </p>
          </div>

          <div className="grid lg:grid-cols-[1fr_2fr] gap-10">
            {/* Ingredients */}
            <aside className="lg:sticky lg:top-24 h-fit rounded-2xl border border-border bg-card p-6">
              <h2 className="text-sm font-bold uppercase tracking-widest text-primary mb-4">Ingredientes</h2>
              <ul className="space-y-3">
                {ingredients.map((ing, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <Checkbox
                      id={`ing-${i}`}
                      checked={!!checked[i]}
                      onCheckedChange={(v) => setChecked((p) => ({ ...p, [i]: !!v }))}
                      className="mt-0.5"
                    />
                    <label
                      htmlFor={`ing-${i}`}
                      className={`text-sm cursor-pointer leading-snug ${checked[i] ? "line-through text-muted-foreground" : "text-foreground"}`}
                    >
                      {ing}
                    </label>
                  </li>
                ))}
              </ul>
            </aside>

            {/* Steps */}
            <ol className="space-y-8">
              {steps.map((s, i) => (
                <li key={i} className="relative pl-16">
                  <div className="absolute left-0 top-0 h-12 w-12 rounded-xl bg-[image:var(--gradient-amber)] text-primary-foreground font-black text-lg flex items-center justify-center shadow-[var(--shadow-glow)]">
                    {i + 1}
                  </div>
                  <h3 className="text-2xl font-bold tracking-tight">{s.title}</h3>
                  <p className="mt-2 text-muted-foreground leading-relaxed">{s.body}</p>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>

      {/* Contact stub */}
      <section id="contact" className="border-t border-border">
        <div className="max-w-6xl mx-auto px-6 py-16 text-center">
          <h2 className="text-3xl font-black tracking-tight">Fale com o Burgz</h2>
          <p className="mt-3 text-muted-foreground">Dúvidas sobre a receita? Escreva para <span className="text-primary">contato@burgz.blog</span></p>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[oklch(0.10_0.01_60)] border-t border-border">
        <div className="max-w-6xl mx-auto px-6 py-12 space-y-6 text-sm text-muted-foreground">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <div>
              <div className="text-xl font-black text-foreground">Burg<span className="text-primary">z</span></div>
              <p className="mt-1">© 2026 Burgz Blog. Todos os direitos reservados.</p>
            </div>
            <div className="flex gap-3">
              <Button variant="outline" size="sm" onClick={() => setOpenTerms(true)}>Termos de Uso</Button>
              <Button variant="outline" size="sm" onClick={() => setOpenPrivacy(true)}>Política de Privacidade</Button>
            </div>
          </div>
          <div className="pt-6 border-t border-border space-y-3 text-xs leading-relaxed">
            <p>Cabeca Lanches & Delivery Fraga Maia | CNPJ: 52.674.962/0001-20</p>
            <p className="max-w-3xl">
              Este site não faz parte do Google Inc. ou do Facebook Inc. Além disso, este site NÃO é endossado pelo
              Google ou Facebook de nenhuma maneira.
            </p>
          </div>
        </div>
      </footer>

      {/* Terms Modal */}
      <Dialog open={openTerms} onOpenChange={setOpenTerms}>
        <DialogContent className="max-w-2xl max-h-[85vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle>Termos de Uso</DialogTitle>
            <DialogDescription>Burgz / Cabeca Lanches & Delivery Fraga Maia - CNPJ 52.674.962/0001-20</DialogDescription>
          </DialogHeader>
          <div className="space-y-4 text-sm text-muted-foreground leading-relaxed">
            <p>Bem-vindo ao Burgz Blog. Ao acessar este site, você concorda com os termos descritos a seguir. Este é um blog informativo dedicado à gastronomia, com foco em receitas, técnicas culinárias e cultura do hambúrguer artesanal.</p>
            <p><strong className="text-foreground">1. Natureza do conteúdo.</strong> Todo o material publicado tem caráter exclusivamente informativo e educativo. As receitas e técnicas refletem a experiência da JOVEM LANCHONETE DELIVERY e não substituem orientação profissional de nutricionistas ou chefs.</p>
            <p><strong className="text-foreground">2. Propriedade intelectual.</strong> Textos, imagens e marca "Burgz" são protegidos por direitos autorais. Reprodução total ou parcial requer autorização prévia.</p>
            <p><strong className="text-foreground">3. Responsabilidade.</strong> O usuário é responsável pelo correto manuseio de ingredientes, equipamentos e procedimentos culinários descritos no site.</p>
            <p><strong className="text-foreground">4. Alterações.</strong> Estes termos podem ser atualizados a qualquer momento; recomendamos consulta periódica.</p>
            <p>Em caso de dúvidas, entre em contato com a JOVEM LANCHONETE DELIVERY pelo canal oficial do blog.</p>
          </div>
          <DialogFooter>
            <Button onClick={() => setOpenTerms(false)}>Fechar</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      {/* Privacy Modal */}
      <Dialog open={openPrivacy} onOpenChange={setOpenPrivacy}>
        <DialogContent className="max-w-2xl max-h-[85vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle>Política de Privacidade</DialogTitle>
            <DialogDescription>Sua privacidade é prioridade no Burgz Blog.</DialogDescription>
          </DialogHeader>
          <div className="space-y-4 text-sm text-muted-foreground leading-relaxed">
            <p>A Cabeca Lanches & Delivery Fraga Maia (CNPJ 52.674.962/0001-20) respeita a privacidade de todos os visitantes do Burgz Blog e está comprometida com a proteção dos seus dados pessoais, nos termos da Lei Geral de Proteção de Dados (LGPD).</p>
            <p><strong className="text-foreground">1. Coleta de dados.</strong> Coletamos apenas dados estritamente necessários para o funcionamento do site, como informações técnicas de navegação anonimizadas.</p>
            <p><strong className="text-foreground">2. Cookies.</strong> Utilizamos cookies padrão de segurança e desempenho para garantir uma experiência fluida e protegida. Não compartilhamos dados com terceiros para fins publicitários.</p>
            <p><strong className="text-foreground">3. Segurança.</strong> Adotamos medidas técnicas e organizacionais para proteger informações contra acessos não autorizados, perda ou alteração.</p>
            <p><strong className="text-foreground">4. Seus direitos.</strong> Você pode solicitar a qualquer momento acesso, correção ou exclusão dos seus dados pessoais entrando em contato com nossa equipe.</p>
            <p>Esta política pode ser atualizada periodicamente para refletir melhorias ou novas exigências legais.</p>
          </div>
          <DialogFooter>
            <Button onClick={() => setOpenPrivacy(false)}>Fechar</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
}
