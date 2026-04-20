import { Link } from "react-router-dom";
import ArticleSection from "@/components/blog/ArticleSection";
import Marginalia from "@/components/blog/Marginalia";
import PullQuote from "@/components/blog/PullQuote";

const AuditSeoGuideCompletPmeSuisse = () => (
  <>
    <div className="lead mb-12 space-y-5 article-prose">
      <p className="text-muted-foreground leading-relaxed drop-cap">
        La plupart des audits SEO livrés aux PME suisses sont soit trop techniques (un PDF de 80 pages incompréhensible), soit trop superficiels (un scan gratuit qui sort trois alertes et rien d'exploitable). Entre les deux se trouve un vrai métier : regarder un site, comprendre pourquoi il ne performe pas, et produire un plan d'action qui se lit en une heure et s'exécute en trois mois.
      </p>
      <p className="text-muted-foreground leading-relaxed">
        Ce guide explique comment fonctionne un audit SEO sérieux en 2026. Quelles composantes il couvre, quels outils professionnels (gratuits et payants) sont utilisés, à quoi ressemble le résultat concret, combien ça coûte en Suisse et dans quels cas vous pouvez le faire vous-même.
      </p>
      <p className="text-muted-foreground leading-relaxed">
        Il complète l'article{" "}
        <Link to="/blog/audit-seo-pourquoi-indispensable/" className="text-primary-light hover:text-primary/80 underline underline-offset-4 transition-colors">Audit SEO, pourquoi c'est indispensable</Link>
        , qui explique le pourquoi. Ici, on regarde le comment.
      </p>
    </div>

    <ArticleSection number="01" title="Ce qu'un audit SEO doit vraiment couvrir">
      <div className="space-y-5 article-prose">
        <p className="text-muted-foreground leading-relaxed">
          Un audit SEO complet examine votre site sous quatre angles complémentaires. Chacun répond à une question différente, et les quatre sont interdépendants : corriger l'un sans toucher aux autres produit rarement des résultats durables.
        </p>
        <Marginalia label="REPÈRE">
          Les 4 composantes : technique (Google peut-il lire ?), contenu (vos pages répondent-elles aux recherches ?), local (êtes-vous visible dans votre zone ?), backlinks (qui parle de vous ?).
        </Marginalia>
        <p className="text-muted-foreground leading-relaxed">
          La composante technique vérifie que Google peut accéder aux pages, les comprendre et les indexer. C'est la fondation : sans ça, tout le reste est invisible. La composante contenu évalue la correspondance entre vos pages et les recherches réelles de vos clients. La composante locale, souvent négligée, couvre la fiche Google Business Profile, la cohérence NAP et les annuaires suisses. La composante backlinks mesure l'autorité du site et identifie les liens toxiques éventuels.
        </p>
        <p className="text-muted-foreground leading-relaxed">
          Un audit qui ne couvre qu'une seule composante (« audit technique » seul, par exemple) laisse 75% du travail à faire.
        </p>
      </div>
    </ArticleSection>

    <ArticleSection number="02" title="Les 4 composantes en détail">
      <div className="space-y-5 article-prose">

        <h3 className="text-lg font-semibold mt-8 mb-3">Composante technique</h3>
        <p className="text-muted-foreground leading-relaxed">
          L'audit technique examine les fondations : statut d'indexation des pages dans Google, vitesse de chargement et Core Web Vitals (voir{" "}
          <Link to="/blog/pagespeed-insights-core-web-vitals-guide/" className="text-primary-light hover:text-primary/80 underline underline-offset-4 transition-colors">notre guide PageSpeed et Core Web Vitals</Link>
          ), qualité du HTML (balises title, méta, hiérarchie des H1 à H6), sitemap XML et robots.txt, redirections, erreurs 404, balises canonical, présence et validité des données structurées Schema.org.
        </p>
        <p className="text-muted-foreground leading-relaxed">
          Pour un site WordPress vitrine de 10 à 30 pages, une vingtaine de points sont à examiner. Pour un site e-commerce de plusieurs centaines de pages, le volume est dix fois supérieur et justifie un crawl avec un outil dédié.
        </p>

        <h3 className="text-lg font-semibold mt-8 mb-3">Composante contenu</h3>
        <p className="text-muted-foreground leading-relaxed">
          L'audit contenu commence par la recherche de mots-clés : quelles requêtes tapent réellement vos clients sur Google en Suisse romande, avec quel volume mensuel, quel niveau de concurrence. À partir de là, chaque page du site est évaluée sur sa correspondance avec une intention de recherche précise.
        </p>
        <p className="text-muted-foreground leading-relaxed">
          Les problèmes récurrents : titre de page qui ne contient pas le mot-clé cible, H1 absent ou dupliqué, pages qui parlent d'elles-mêmes sans répondre à une question, contenu trop mince (moins de 300 mots) sur des pages stratégiques, cannibalisation (deux pages qui visent le même mot-clé).
        </p>

        <h3 className="text-lg font-semibold mt-8 mb-3">Composante locale</h3>
        <p className="text-muted-foreground leading-relaxed">
          La composante locale est cruciale pour les PME qui servent une zone géographique précise. L'audit vérifie la fiche Google Business Profile (complétude, photos, catégorie principale, avis), la cohérence NAP (Nom, Adresse, Téléphone) entre le site, la fiche GBP et les annuaires suisses (local.ch, search.ch, annuaires cantonaux), la présence des mentions géographiques naturelles dans les contenus, et la présence du schéma LocalBusiness sur les pages clés.
        </p>

        <h3 className="text-lg font-semibold mt-8 mb-3">Composante backlinks</h3>
        <p className="text-muted-foreground leading-relaxed">
          L'audit des backlinks utilise Ahrefs ou Semrush pour cartographier tous les liens entrants pointant vers votre domaine. L'objectif : identifier les liens de qualité (à préserver et amplifier), détecter les liens toxiques éventuels (fermes de liens, sites hackés) et mesurer l'écart d'autorité avec vos concurrents directs.
        </p>
      </div>
    </ArticleSection>

    <PullQuote>
      Un audit qui ne couvre qu'une seule composante laisse 75% du travail à faire.
    </PullQuote>

    <ArticleSection number="03" title="Les outils utilisés en audit professionnel">
      <div className="space-y-5 article-prose">
        <p className="text-muted-foreground leading-relaxed">
          Un audit SEO n'est pas fait avec un seul outil. Il croise les données de plusieurs sources pour éviter les angles morts. Voici la pile utilisée chez KUMO et dans la plupart des cabinets sérieux.
        </p>

        <h3 className="text-lg font-semibold mt-8 mb-3">Google Search Console</h3>
        <p className="text-muted-foreground leading-relaxed">
          Outil officiel et gratuit de Google. Il donne accès aux données réelles : sur quelles requêtes votre site apparaît, combien de clics vous recevez, quelles pages sont indexées, quelles erreurs Google rencontre en explorant le site. Tout audit sérieux commence par un accès à la Search Console. Sans ces données, l'analyse est basée sur des suppositions.
        </p>
        <Marginalia label="NOTE">
          Si votre prestataire ne demande pas un accès à Google Search Console avant de commencer l'audit, c'est un signal d'alerte. Sans ces données, il ne peut pas mesurer votre performance réelle, seulement simuler.
        </Marginalia>

        <h3 className="text-lg font-semibold mt-8 mb-3">Screaming Frog SEO Spider</h3>
        <p className="text-muted-foreground leading-relaxed">
          Screaming Frog est le crawler SEO de référence. Il simule le passage d'un robot Google sur votre site et remonte chaque problème technique page par page : title manquant, meta trop long, redirection cassée, image sans attribut alt, temps de réponse anormal. La version gratuite crawle jusqu'à 500 URL, ce qui couvre la plupart des sites vitrines de PME. Au-delà, la licence payante coûte 199 livres sterling par an selon les tarifs officiels de l'éditeur (prix susceptibles d'évoluer).
        </p>
        <p className="text-muted-foreground leading-relaxed">
          La procédure de base tient en cinq étapes. Un, entrer l'URL du site et lancer le crawl. Deux, attendre que l'outil parcoure toutes les pages (quelques minutes pour un site vitrine, plusieurs heures pour un e-commerce). Trois, passer en revue l'onglet « Response Codes » pour détecter les 404 et redirections anormales. Quatre, examiner les onglets « Page Titles », « Meta Description » et « H1 » pour identifier les balises manquantes ou dupliquées. Cinq, exporter les données en CSV pour croiser avec les données Search Console.
        </p>

        <h3 className="text-lg font-semibold mt-8 mb-3">PageSpeed Insights et Lighthouse</h3>
        <p className="text-muted-foreground leading-relaxed">
          PageSpeed Insights évalue la performance et les Core Web Vitals, qui sont un signal de classement Google depuis 2021. Pour une PME suisse, le test mobile compte davantage que le desktop (mobile-first indexing). L'outil est gratuit et accessible sur pagespeed.web.dev.
        </p>

        <h3 className="text-lg font-semibold mt-8 mb-3">Semrush, Ahrefs ou Majestic</h3>
        <p className="text-muted-foreground leading-relaxed">
          Ces trois outils payants (entre 100 et 400 CHF par mois selon la formule) donnent accès aux données de backlinks, au suivi de positionnement et à l'analyse concurrentielle. Ils ne remplacent pas la Search Console (ils estiment, ils ne mesurent pas), mais ils sont indispensables pour comprendre ce que font vos concurrents. Un audit sans analyse concurrentielle est incomplet.
        </p>
      </div>
    </ArticleSection>

    <ArticleSection number="04" title="Étude de cas - audit d'une boutique e-commerce">
      <div className="space-y-5 article-prose">
        <p className="text-muted-foreground leading-relaxed">
          Pour illustrer ce à quoi ressemble un vrai résultat d'audit, voici les chiffres extraits d'un audit récent réalisé sur une boutique e-commerce suisse de taille moyenne (100 pages). Les données sont tirées de l'étude de cas publique disponible sur le site KUMO.
        </p>
        <p className="text-muted-foreground leading-relaxed">
          <strong className="text-foreground">Score de santé initial : 29 sur 100.</strong> Classé « Critique » par l'outil d'audit. Le score est un indicateur composite qui agrège les erreurs techniques, la qualité du contenu et les signaux d'autorité.
        </p>
        <p className="text-muted-foreground leading-relaxed">
          <strong className="text-foreground">318 problèmes identifiés sur les 100 pages analysées.</strong> Cela représente une moyenne de trois problèmes par page, ce qui est typique d'un site e-commerce qui n'a jamais fait l'objet d'un audit préalable.
        </p>
        <p className="text-muted-foreground leading-relaxed">
          <strong className="text-foreground">33 pages avec problèmes de balise H1.</strong> Un tiers des pages du site avait soit aucun H1, soit plusieurs H1 concurrents. C'est un problème que Google remonte régulièrement dans la Search Console et qui affecte directement la compréhension du sujet de chaque page.
        </p>
        <p className="text-muted-foreground leading-relaxed">
          <strong className="text-foreground">LCP mobile à 10,7 secondes.</strong> Pour rappel, le seuil « bon » défini par Google est de 2,5 secondes. Ce site était donc plus de quatre fois plus lent que le seuil acceptable sur mobile, ce qui pénalisait mécaniquement le classement et faisait fuir une partie du trafic payant (Google Ads).
        </p>
        <p className="text-muted-foreground leading-relaxed">
          <strong className="text-foreground">71 pages sous-performantes sur 100.</strong> Pages au contenu trop mince, ou ciblant des mots-clés sans volume de recherche, ou cannibalisées par d'autres pages. Le constat : les deux tiers du site consommaient du budget crawl sans contribuer au trafic.
        </p>
        <p className="text-muted-foreground leading-relaxed">
          Ce que l'audit a produit : un plan d'action 90 jours priorisant les corrections techniques (LCP, H1), la consolidation des pages cannibalisées et la réécriture des pages stratégiques. La méthodologie complète est visible dans la section étude de cas du site KUMO.
        </p>
      </div>
    </ArticleSection>

    <ArticleSection number="05" title="Combien coûte un audit SEO en Suisse en 2026">
      <div className="space-y-5 article-prose">
        <p className="text-muted-foreground leading-relaxed">
          Les tarifs observés sur le marché suisse en 2026 (estimations marché) s'échelonnent dans une fourchette large. Voici les repères.
        </p>
        <p className="text-muted-foreground leading-relaxed">
          <strong className="text-foreground">Scans automatiques gratuits</strong> (Semrush Free, outils en ligne divers) : utiles pour un premier coup d'œil, mais se limitent à la surface technique. Ils ne détectent ni les problèmes de contenu ni les angles concurrentiels, et ne produisent pas de plan d'action exploitable.
        </p>
        <p className="text-muted-foreground leading-relaxed">
          <strong className="text-foreground">Audits freelance courts (800 à 1'500 CHF)</strong>. Analyse manuelle sur un périmètre défini, livrable synthétique, une heure d'échange. Convient pour un site de 5 à 15 pages sans problématique concurrentielle complexe.
        </p>
        <p className="text-muted-foreground leading-relaxed">
          <strong className="text-foreground">Audits professionnels complets (1'500 à 3'000 CHF).</strong> Les quatre composantes couvertes, étude concurrentielle incluse, rapport écrit, plan d'action 90 jours et appel de restitution. C'est le niveau standard chez les consultants SEO indépendants sérieux en Suisse romande.
        </p>
        <p className="text-muted-foreground leading-relaxed">
          <strong className="text-foreground">Audits agence (3'000 à 6'000 CHF).</strong> Même niveau de profondeur, mais avec un livrable plus formel et souvent plusieurs intervenants. Convient pour des sites complexes, des e-commerces importants ou des entreprises qui ont besoin d'un document présentable en comité de direction.
        </p>
        <p className="text-muted-foreground leading-relaxed">
          À titre de référence, l'{" "}
          <Link to="/services/audit-seo/" className="text-primary-light hover:text-primary/80 underline underline-offset-4 transition-colors">audit SEO KUMO</Link>
          {" "}est proposé à 1'200 CHF forfaitaire. Le tarif est fixe, le périmètre couvre les quatre composantes, et le livrable inclut le rapport interactif, le plan d'action 90 jours et la restitution. Pour un comparatif plus large, voir l'article sur le choix entre{" "}
          <Link to="/blog/freelance-seo-vs-agence-suisse/" className="text-primary-light hover:text-primary/80 underline underline-offset-4 transition-colors">freelance SEO et agence</Link>.
        </p>
      </div>
    </ArticleSection>

    <ArticleSection number="06" title="Faire l'audit soi-même ou déléguer">
      <div className="space-y-5 article-prose">
        <p className="text-muted-foreground leading-relaxed">
          La question se pose légitimement, surtout pour les dirigeants à l'aise avec les sujets techniques. La réponse dépend de deux paramètres : le temps que vous pouvez y consacrer et la profondeur d'analyse dont vous avez besoin.
        </p>
        <p className="text-muted-foreground leading-relaxed">
          <strong className="text-foreground">Faisable en interne</strong> : la partie technique de base (Search Console + Screaming Frog gratuit), la vérification des balises title et meta, la vérification de la cohérence NAP, la fiche Google Business Profile. Compter une à deux journées de travail pour un site vitrine, à condition d'avoir déjà une familiarité avec les concepts SEO.
        </p>
        <p className="text-muted-foreground leading-relaxed">
          <strong className="text-foreground">Difficile en interne sans expérience</strong> : la recherche de mots-clés stratégiques (biais du propriétaire qui croit deviner ce que ses clients cherchent), l'analyse concurrentielle (nécessite des outils payants et une méthodologie), la priorisation des corrections (un consultant expérimenté sait quelle action aura le plus d'impact sur votre site, un outil automatique ne sait pas).
        </p>
        <p className="text-muted-foreground leading-relaxed">
          Une approche intermédiaire fonctionne bien : réaliser la partie technique en interne pour réduire le coût, puis mandater un consultant pour l'analyse stratégique et le plan d'action. C'est le compromis qui offre le meilleur rapport qualité-prix pour les PME disposant de compétences techniques.
        </p>
      </div>
    </ArticleSection>

    <ArticleSection number="07" title="Checklist - 10 points à vérifier vous-même">
      <div className="space-y-5 article-prose">
        <p className="text-muted-foreground leading-relaxed">
          Avant de commander un audit professionnel, ou simplement pour faire un premier état des lieux, voici dix vérifications accessibles sans outil payant.
        </p>
        <ul className="list-decimal pl-6 space-y-3 text-muted-foreground leading-relaxed marker:text-primary-light marker:font-mono">
          <li>Taper <code className="text-primary-light text-sm">site:votre-domaine.ch</code> dans Google. Si aucun résultat ou très peu, votre site n'est pas indexé correctement.</li>
          <li>Ouvrir Google Search Console (gratuit) et vérifier la section « Indexation des pages ». Lister les erreurs remontées.</li>
          <li>Tester la page d'accueil sur pagespeed.web.dev. Noter le score mobile et les trois Core Web Vitals (LCP, INP, CLS).</li>
          <li>Vérifier que chaque page du site a un title unique et contient le mot-clé principal de la page.</li>
          <li>Vérifier que chaque page a exactement un seul H1, et que ce H1 correspond au sujet de la page.</li>
          <li>Sur mobile, tester le formulaire de contact : se remplit-il facilement, le bouton d'envoi est-il visible sans scroll ?</li>
          <li>Chercher votre entreprise sur Google Maps. La fiche existe-t-elle, est-elle revendiquée, les horaires sont-ils à jour ?</li>
          <li>Vérifier que les coordonnées (NAP) sont strictement identiques sur le site, Google Business Profile, local.ch et search.ch.</li>
          <li>Compter les pages avec moins de 300 mots : ce sont des candidates à enrichir ou fusionner.</li>
          <li>Taper vos trois principaux mots-clés dans Google (en navigation privée, depuis la Suisse romande) : qui ressort en position 1 à 3, et où êtes-vous ?</li>
        </ul>
        <p className="text-muted-foreground leading-relaxed">
          Si plus de trois points reviennent en rouge, l'investissement dans un audit professionnel est généralement rentabilisé par les gains de trafic organique dans les six mois.
        </p>
      </div>
    </ArticleSection>

    <div className="article-prose space-y-6">
      <hr className="border-border/50 my-12" />

      <h2 className="text-xl md:text-2xl font-bold mt-12 mb-4">Questions fréquentes</h2>

      <h3 className="text-lg font-semibold mt-8 mb-3">Quelle est la différence entre audit SEO et audit technique ?</h3>
      <p className="text-muted-foreground leading-relaxed">
        Un audit technique couvre uniquement la composante technique (performance, indexation, HTML). Un audit SEO complet inclut en plus l'analyse de contenu, de concurrence, de SEO local et de backlinks. L'audit technique est un sous-ensemble de l'audit SEO, pas un équivalent.
      </p>

      <h3 className="text-lg font-semibold mt-8 mb-3">Screaming Frog gratuit suffit-il pour un audit ?</h3>
      <p className="text-muted-foreground leading-relaxed">
        La version gratuite crawle jusqu'à 500 URL et donne accès aux fonctions de base (titres, métadescriptions, redirections, erreurs 404). Pour un site vitrine, elle couvre 80% des besoins techniques. Pour un e-commerce ou un site de plus de 500 pages, la licence payante devient nécessaire.
      </p>

      <h3 className="text-lg font-semibold mt-8 mb-3">Un audit SEO sans Google Search Console est-il fiable ?</h3>
      <p className="text-muted-foreground leading-relaxed">
        Non. La Search Console donne accès aux données réelles de Google : requêtes d'apparition, pages indexées, erreurs d'exploration. Un audit qui se base uniquement sur des outils tiers (Semrush, Ahrefs) fonctionne avec des estimations, pas avec les données sources. L'accès GSC est indispensable.
      </p>

      <h3 className="text-lg font-semibold mt-8 mb-3">Combien de temps faut-il pour un audit SEO complet ?</h3>
      <p className="text-muted-foreground leading-relaxed">
        Pour un site vitrine de PME (10 à 30 pages), compter 5 à 7 jours ouvrables incluant la collecte des données, l'analyse, la rédaction du rapport et la préparation du plan d'action. Pour un site plus volumineux ou multilingue, le délai peut atteindre 2 à 3 semaines.
      </p>

      <hr className="border-border/50 my-12" />

      <p className="text-muted-foreground leading-relaxed italic">
        Vous voulez un diagnostic clair de votre site ?{" "}
        <Link to="/services/audit-seo/" className="text-primary-light hover:text-primary/80 underline underline-offset-4 transition-colors">Découvrez l'audit SEO KUMO</Link>
        {" "}ou{" "}
        <Link to="/contact/" className="text-primary-light hover:text-primary/80 underline underline-offset-4 transition-colors">prenez contact</Link>
        {" "}pour un échange de 15 minutes.
      </p>
    </div>
  </>
);

export default AuditSeoGuideCompletPmeSuisse;
