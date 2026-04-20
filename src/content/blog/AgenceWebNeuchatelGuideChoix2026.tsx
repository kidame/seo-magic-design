import { Link } from "react-router-dom";
import ArticleSection from "@/components/blog/ArticleSection";
import Marginalia from "@/components/blog/Marginalia";
import PullQuote from "@/components/blog/PullQuote";

const AgenceWebNeuchatelGuideChoix2026 = () => (
  <>
    <div className="lead mb-12 space-y-5 article-prose">
      <p className="text-muted-foreground leading-relaxed drop-cap">
        À Neuchâtel, refaire son site web en 2026 revient à choisir parmi trois catégories de prestataires : les agences établies (avec locaux, équipe, devis à 5 chiffres), les freelances ou consultants indépendants, et les plateformes type Wix ou Squarespace. Chacune cible un budget et un besoin différents, et aucune n'est universellement meilleure.
      </p>
      <p className="text-muted-foreground leading-relaxed">
        Ce guide explique comment faire le bon choix en fonction de votre situation. Les critères qui comptent vraiment, les pièges typiques sur lesquels butent les PME du canton, les fourchettes de prix observées sur le marché et les questions à poser avant de signer un devis.
      </p>
      <p className="text-muted-foreground leading-relaxed">
        Il complète utilement les articles existants sur le{" "}
        <Link to="/blog/freelance-seo-vs-agence-suisse/" className="text-primary-light hover:text-primary/80 underline underline-offset-4 transition-colors">choix freelance ou agence</Link>
        {" "}et sur la{" "}
        <Link to="/blog/creer-site-internet-pme-suisse-2026/" className="text-primary-light hover:text-primary/80 underline underline-offset-4 transition-colors">création de site internet en 2026</Link>
        . Ici, on se place du point de vue d'une entreprise neuchâteloise qui doit trancher.
      </p>
    </div>

    <ArticleSection number="01" title="Agence, freelance ou plateforme, trois logiques différentes">
      <div className="space-y-5 article-prose">
        <p className="text-muted-foreground leading-relaxed">
          Les trois catégories ne jouent pas dans la même cour, et les comparer en prix brut est trompeur. Chacune répond à un contexte d'entreprise précis.
        </p>
        <Marginalia label="REPÈRE">
          Trois modèles distincts : l'agence (équipe, processus, devis élevés), le freelance (un interlocuteur, coûts intermédiaires), la plateforme (outil en libre-service, coûts faibles mais plafond technique).
        </Marginalia>

        <p className="text-muted-foreground leading-relaxed">
          <strong className="text-foreground">Les agences web établies à Neuchâtel</strong> proposent une prestation complète : stratégie, design, développement, hébergement, maintenance. Elles sont adaptées aux entreprises qui veulent un interlocuteur unique sur un projet d'envergure (refonte complète, site multilingue, e-commerce avec catalogue important) et qui ont le budget correspondant.
        </p>
        <p className="text-muted-foreground leading-relaxed">
          <strong className="text-foreground">Les freelances et consultants indépendants</strong> offrent une prestation comparable en qualité technique, avec un interlocuteur unique (celui qui code est celui qui vous parle) et des tarifs inférieurs de 30 à 50% en moyenne. Le compromis : la bande passante est limitée (un freelance gère 2 à 4 projets en parallèle, pas 20) et l'absence d'équipe peut poser un problème en cas de maladie ou de congés prolongés.
        </p>
        <p className="text-muted-foreground leading-relaxed">
          <strong className="text-foreground">Les plateformes SaaS</strong> comme Wix, Squarespace ou Webflow permettent de créer un site en quelques heures pour quelques centaines de francs par an. Pour un artisan avec un site vitrine de 3 pages qui ne vise pas le référencement naturel, c'est une solution rationnelle. Au-delà, les limitations techniques (vitesse, flexibilité SEO, personnalisation) deviennent bloquantes.
        </p>
      </div>
    </ArticleSection>

    <ArticleSection number="02" title="Wix, WordPress ou code sur mesure - comparatif sur 5 critères">
      <div className="space-y-5 article-prose">
        <p className="text-muted-foreground leading-relaxed">
          Une fois la catégorie de prestataire choisie, reste à décider de la technologie. Voici un comparatif honnête sur les cinq critères qui comptent pour une PME neuchâteloise.
        </p>

        <h3 className="text-lg font-semibold mt-8 mb-3">Vitesse et Core Web Vitals</h3>
        <p className="text-muted-foreground leading-relaxed">
          Les ordres de grandeur typiques observés en audit (scores PageSpeed mobile sur une page d'accueil standard, sans optimisation poussée) se répartissent ainsi : Wix et Squarespace plafonnent généralement entre 40 et 70, WordPress standard entre 50 et 80 selon le thème et les plugins, un site développé sur mesure (Astro, Next.js, Svelte) dépasse facilement 90. Ces chiffres sont des tendances observées sur le terrain, pas une mesure officielle.
        </p>
        <p className="text-muted-foreground leading-relaxed">
          Pour comprendre pourquoi ces différences existent et ce qu'elles impliquent, voir{" "}
          <Link to="/blog/pagespeed-insights-core-web-vitals-guide/" className="text-primary-light hover:text-primary/80 underline underline-offset-4 transition-colors">notre guide PageSpeed et Core Web Vitals</Link>.
        </p>

        <h3 className="text-lg font-semibold mt-8 mb-3">Flexibilité SEO</h3>
        <p className="text-muted-foreground leading-relaxed">
          WordPress et le sur mesure permettent un contrôle fin sur les balises title, les données structurées, les redirections, le sitemap et les fichiers robots.txt. Wix a progressé mais reste moins souple sur les données structurées avancées et le contrôle d'URL. Pour une stratégie SEO locale sérieuse à Neuchâtel, la flexibilité technique n'est pas un luxe.
        </p>

        <h3 className="text-lg font-semibold mt-8 mb-3">Sécurité</h3>
        <p className="text-muted-foreground leading-relaxed">
          WordPress représente plus de 40% des sites web dans le monde selon les chiffres publiés par l'éditeur, ce qui en fait une cible privilégiée des attaques automatisées. Un WordPress non maintenu (plugins non mis à jour, mots de passe faibles) est piraté en moyenne dans les mois qui suivent sa mise en ligne. Les plateformes SaaS et les sites sur mesure éliminent cette classe de risque par construction.
        </p>

        <h3 className="text-lg font-semibold mt-8 mb-3">Coût total sur 5 ans</h3>
        <p className="text-muted-foreground leading-relaxed">
          Le prix de création n'est qu'une partie de l'équation. Sur un horizon 5 ans, une plateforme SaaS coûte entre 1'500 et 3'000 CHF (abonnements cumulés). Un WordPress avec maintenance régulière, entre 3'000 et 8'000 CHF selon le niveau de suivi. Un site sur mesure avec hébergement simple, entre 500 et 2'000 CHF de frais récurrents (hors création initiale). Ces fourchettes sont des estimations marché suisse 2026.
        </p>

        <h3 className="text-lg font-semibold mt-8 mb-3">Conformité LPD et nLPD</h3>
        <p className="text-muted-foreground leading-relaxed">
          La loi suisse sur la protection des données (LPD révisée, entrée en vigueur en septembre 2023) impose des obligations précises sur la gestion des cookies, le consentement explicite et la déclaration des traitements. Un site correctement configuré intègre un bandeau cookies conforme, une politique de confidentialité à jour et un hébergement dans une juridiction compatible. La plupart des plateformes SaaS fournissent les outils de base mais la configuration finale reste à faire.
        </p>
      </div>
    </ArticleSection>

    <PullQuote>
      Le prix de création n'est qu'une partie de l'équation. Sur cinq ans, le coût total peut varier d'un facteur trois selon la technologie choisie.
    </PullQuote>

    <ArticleSection number="03" title="Combien coûte un site web à Neuchâtel en 2026">
      <div className="space-y-5 article-prose">
        <p className="text-muted-foreground leading-relaxed">
          Les fourchettes de prix varient fortement selon le prestataire et la complexité. Voici les repères observés sur le marché suisse romand en 2026 (estimations marché), applicables au canton de Neuchâtel.
        </p>
        <Marginalia label="NOTE">
          Ces fourchettes sont des estimations observées sur les devis reçus ou analysés depuis 2024. Elles ne reflètent pas un tarif officiel unique et varient selon la complexité du projet, les intégrations et le niveau de personnalisation.
        </Marginalia>

        <p className="text-muted-foreground leading-relaxed">
          <strong className="text-foreground">Site vitrine simple (3 à 5 pages), plateforme SaaS ou WordPress standard</strong> : 1'500 à 3'500 CHF. Contenu fourni par le client, peu ou pas de travail SEO, design à partir d'un modèle. Convient à un artisan, un indépendant ou une petite structure qui cherche une présence en ligne basique.
        </p>
        <p className="text-muted-foreground leading-relaxed">
          <strong className="text-foreground">Site vitrine optimisé (5 à 10 pages), freelance ou petit studio</strong> : 3'500 à 7'000 CHF. Design personnalisé, travail SEO de base (recherche de mots-clés, balises, maillage), performance correcte, rédaction des contenus principaux. C'est la fourchette où se trouvent les{" "}
          <Link to="/services/creation-site-web/" className="text-primary-light hover:text-primary/80 underline underline-offset-4 transition-colors">formules KUMO</Link>
          {" "}(Essentiel à 3'900 CHF, Pro à 4'900 CHF, Premium à 6'500 CHF).
        </p>
        <p className="text-muted-foreground leading-relaxed">
          <strong className="text-foreground">Site vitrine premium (10 à 20 pages) avec stratégie SEO complète</strong> : 7'000 à 15'000 CHF. Étude stratégique, recherche de mots-clés approfondie, design sur mesure, rédaction complète, optimisation technique poussée, suivi post-lancement. Standard des agences web établies sur ce périmètre.
        </p>
        <p className="text-muted-foreground leading-relaxed">
          <strong className="text-foreground">E-commerce ou site complexe multilingue</strong> : 15'000 à 50'000 CHF selon le volume de produits, les intégrations (ERP, paiement, logistique) et le nombre de langues. Le ticket d'entrée varie énormément selon la plateforme choisie (WooCommerce, Shopify, PrestaShop, sur mesure).
        </p>
        <p className="text-muted-foreground leading-relaxed">
          Aux coûts de création s'ajoutent les frais récurrents : hébergement (50 à 300 CHF par an pour un site vitrine, chez un hébergeur suisse comme Infomaniak ou Hostpoint), maintenance WordPress le cas échéant (600 à 2'400 CHF par an), nom de domaine (15 à 50 CHF par an).
        </p>
      </div>
    </ArticleSection>

    <ArticleSection number="04" title="Les 5 questions à poser avant de signer">
      <div className="space-y-5 article-prose">
        <p className="text-muted-foreground leading-relaxed">
          Avant d'engager quelques milliers de francs, ces cinq questions filtrent efficacement les prestataires sérieux de ceux qui vendent un produit pré-fabriqué enveloppé d'un discours personnalisé.
        </p>
        <ul className="list-decimal pl-6 space-y-3 text-muted-foreground leading-relaxed marker:text-primary-light marker:font-mono">
          <li><strong className="text-foreground">Quel est le plan SEO intégré à la création du site ?</strong> Un site livré sans recherche de mots-clés ni structure pensée pour le référencement est un site à refaire dans deux ans.</li>
          <li><strong className="text-foreground">Qui est propriétaire du code et du contenu à la fin du projet ?</strong> Certains prestataires livrent sur une plateforme fermée que vous ne pouvez pas récupérer si vous changez d'avis. Exigez une clause de propriété et la possibilité de récupérer les sources.</li>
          <li><strong className="text-foreground">Quel sera le score PageSpeed mobile à la livraison ?</strong> Un engagement chiffré (par exemple, 75 ou plus) est un bon filtre. Les prestataires qui bottent en touche sont généralement ceux dont les sites plafonnent à 50.</li>
          <li><strong className="text-foreground">Où sera hébergé le site et sous quelle juridiction ?</strong> Pour une PME suisse, un hébergement en Suisse est souvent préférable (latence, conformité LPD, support en français).</li>
          <li><strong className="text-foreground">Quel est le coût de la maintenance et des évolutions après livraison ?</strong> Un devis initial attractif peut cacher des coûts récurrents élevés ou des tarifs horaires prohibitifs pour toute modification.</li>
        </ul>
      </div>
    </ArticleSection>

    <ArticleSection number="05" title="Les 5 erreurs les plus fréquentes">
      <div className="space-y-5 article-prose">
        <p className="text-muted-foreground leading-relaxed">
          Sur une centaine de projets de refonte observés depuis 2024 en Suisse romande, les mêmes erreurs reviennent. En connaître la liste avant de démarrer évite de les reproduire.
        </p>
        <p className="text-muted-foreground leading-relaxed">
          <strong className="text-foreground">1. Choisir sur le prix uniquement.</strong> Un site à 1'500 CHF qui ne convertit aucun visiteur est plus cher qu'un site à 5'000 CHF qui génère 3 demandes par mois. Le prix d'achat est rarement le bon critère de décision.
        </p>
        <p className="text-muted-foreground leading-relaxed">
          <strong className="text-foreground">2. Oublier le SEO dans le cahier des charges.</strong> Créer un beau site et se dire que le référencement viendra après est l'erreur la plus coûteuse. Un site pensé pour le SEO dès le départ est trois fois plus rentable qu'une refonte SEO post-livraison.
        </p>
        <p className="text-muted-foreground leading-relaxed">
          <strong className="text-foreground">3. Ne pas prévoir de contenu.</strong> Les contenus textuels, photos et vidéos représentent souvent 30 à 40% de la valeur perçue du site final. Attendre la dernière minute pour s'en occuper retarde la livraison de plusieurs semaines.
        </p>
        <p className="text-muted-foreground leading-relaxed">
          <strong className="text-foreground">4. Ignorer la conformité LPD.</strong> Un bandeau cookies approximatif ou une politique de confidentialité copiée-collée d'un template français peut exposer l'entreprise à des remarques du Préposé fédéral à la protection des données. La vérification coûte quelques centaines de francs, un contentieux en coûte plusieurs dizaines de milliers.
        </p>
        <p className="text-muted-foreground leading-relaxed">
          <strong className="text-foreground">5. Omettre la mesure post-lancement.</strong> Sans Google Search Console, Google Analytics et un suivi de performance au moins mensuel les six premiers mois, vous ne saurez pas si votre site fonctionne. L'absence de mesure est l'équivalent d'une campagne publicitaire sans code promo.
        </p>
      </div>
    </ArticleSection>

    <ArticleSection number="06" title="Checklist - 7 points à valider avant de choisir">
      <div className="space-y-5 article-prose">
        <p className="text-muted-foreground leading-relaxed">
          Cette checklist courte résume les vérifications à faire avant de valider un prestataire ou une plateforme. Si deux points restent incertains, demandez des précisions avant de signer.
        </p>
        <ul className="list-decimal pl-6 space-y-3 text-muted-foreground leading-relaxed marker:text-primary-light marker:font-mono">
          <li>Le devis détaille les livrables (nombre de pages, rédaction incluse ou non, intégration SEO, formation au backoffice).</li>
          <li>Le prestataire s'engage sur un score PageSpeed mobile minimal à la livraison (75 ou plus recommandé).</li>
          <li>Les contenus, photos et textes sources sont clairement attribués (qui les fournit, dans quel délai).</li>
          <li>La propriété du code, du contenu et du nom de domaine vous revient à la fin du projet.</li>
          <li>L'hébergement proposé est en Suisse ou en Union européenne, avec un contrat écrit et une clause LPD.</li>
          <li>La maintenance post-livraison est chiffrée séparément et sans engagement contraignant au-delà de 12 mois.</li>
          <li>Vous avez rencontré le prestataire (en visio ou en physique) et avez obtenu au moins deux références récentes vérifiables.</li>
        </ul>
      </div>
    </ArticleSection>

    <div className="article-prose space-y-6">
      <hr className="border-border/50 my-12" />

      <h2 className="text-xl md:text-2xl font-bold mt-12 mb-4">Questions fréquentes</h2>

      <h3 className="text-lg font-semibold mt-8 mb-3">Combien coûte un site web à Neuchâtel en 2026 ?</h3>
      <p className="text-muted-foreground leading-relaxed">
        Pour un site vitrine de PME (5 à 10 pages) avec travail SEO inclus, compter entre 3'500 et 7'000 CHF en 2026 (estimations marché). Les plateformes SaaS (type Wix) démarrent plus bas (1'500 à 3'500 CHF) mais plafonnent rapidement. Les agences établies se positionnent généralement au-dessus de 7'000 CHF sur le même périmètre.
      </p>

      <h3 className="text-lg font-semibold mt-8 mb-3">Vaut-il mieux WordPress, Wix ou un site sur mesure ?</h3>
      <p className="text-muted-foreground leading-relaxed">
        Wix convient à un site vitrine de 3 à 5 pages sans ambition SEO. WordPress offre plus de flexibilité mais exige une maintenance régulière et pose des questions de sécurité. Un site sur mesure (Astro, Next.js, Svelte) est le plus performant mais demande un prestataire technique et n'est pas toujours rentable pour un site simple. Le bon choix dépend du volume de pages, des ambitions SEO et du budget de maintenance.
      </p>

      <h3 className="text-lg font-semibold mt-8 mb-3">Un site web doit-il obligatoirement être hébergé en Suisse ?</h3>
      <p className="text-muted-foreground leading-relaxed">
        Ce n'est pas une obligation légale, mais c'est fortement recommandé pour une PME suisse : latence réduite pour une clientèle locale, conformité LPD simplifiée (pas de transfert transfrontalier à justifier), support technique en français ou allemand. Les hébergeurs suisses comme Infomaniak ou Hostpoint offrent des offres compétitives à partir de quelques centaines de francs par an.
      </p>

      <hr className="border-border/50 my-12" />

      <p className="text-muted-foreground leading-relaxed italic">
        Vous réfléchissez à refaire votre site à Neuchâtel ?{" "}
        <Link to="/services/creation-site-web/" className="text-primary-light hover:text-primary/80 underline underline-offset-4 transition-colors">Découvrez les formules KUMO</Link>
        {" "}ou{" "}
        <Link to="/contact/" className="text-primary-light hover:text-primary/80 underline underline-offset-4 transition-colors">prenez contact</Link>
        {" "}pour un échange de 15 minutes.
      </p>
    </div>
  </>
);

export default AgenceWebNeuchatelGuideChoix2026;
