import { Link } from "react-router-dom";
import ArticleSection from "@/components/blog/ArticleSection";
import Marginalia from "@/components/blog/Marginalia";
import PullQuote from "@/components/blog/PullQuote";

const PagespeedCoreWebVitalsGuide = () => (
  <>
    <div className="lead mb-12 space-y-5 article-prose">
      <p className="text-muted-foreground leading-relaxed drop-cap">
        Vous ouvrez PageSpeed Insights, vous collez l'URL de votre site et vous voyez un chiffre en rouge : 42 sur mobile. Plus bas, trois acronymes énigmatiques (LCP, INP, CLS) et une liste de diagnostics qui parlent de bundles JavaScript et de rendu bloquant. Vous fermez l'onglet.
      </p>
      <p className="text-muted-foreground leading-relaxed">
        Ce scénario se répète chez la quasi-totalité des PME romandes qui découvrent l'outil. La performance technique d'un site est devenue un sujet à la fois central pour Google et totalement opaque pour la plupart des dirigeants. Pourtant, trois indicateurs suffisent à comprendre l'essentiel.
      </p>
      <p className="text-muted-foreground leading-relaxed">
        Ce guide explique ce que mesure PageSpeed Insights, ce que sont les Core Web Vitals, comment les interpréter et quel score viser en 2026 pour un site de PME suisse. Sans jargon inutile, avec des exemples concrets.
      </p>
    </div>

    <ArticleSection number="01" title="PageSpeed Insights, à quoi ça sert réellement">
      <div className="space-y-5 article-prose">
        <p className="text-muted-foreground leading-relaxed">
          PageSpeed Insights est l'outil d'analyse de performance web développé par Google. Il est gratuit, accessible publiquement depuis pagespeed.web.dev et utilisé par les équipes SEO du monde entier comme référence de mesure.
        </p>
        <Marginalia label="DÉFINITION">
          PageSpeed Insights : outil d'audit performance web officiel Google. Combine données de terrain (Chrome UX Report) et test en laboratoire (Lighthouse) sur une URL donnée.
        </Marginalia>
        <p className="text-muted-foreground leading-relaxed">
          L'outil combine deux sources de données. Les données de terrain proviennent du Chrome User Experience Report, un dataset agrégeant les performances réellement perçues par les utilisateurs de Chrome qui ont accepté le partage de données. Les données de laboratoire sont produites par Lighthouse, qui simule un chargement sur mobile ou desktop dans des conditions contrôlées.
        </p>
        <p className="text-muted-foreground leading-relaxed">
          Le score global (0 à 100) que PageSpeed Insights affiche est une synthèse pondérée de plusieurs métriques Lighthouse. Ce n'est pas ce chiffre qui détermine votre classement Google. Ce qui compte pour Google, ce sont les Core Web Vitals mesurés sur le terrain, dans la section « Origine » du rapport.
        </p>
        <p className="text-muted-foreground leading-relaxed">
          Autrement dit : un score de 92 sur desktop peut masquer un échec complet sur mobile, là où 60 à 70% du trafic se joue aujourd'hui chez les PME suisses.
        </p>
      </div>
    </ArticleSection>

    <ArticleSection number="02" title="Les 3 métriques Core Web Vitals expliquées">
      <div className="space-y-5 article-prose">
        <p className="text-muted-foreground leading-relaxed">
          Les Core Web Vitals sont un ensemble de trois métriques que Google a choisi de mettre au centre de son évaluation de l'expérience utilisateur. Chaque métrique répond à une question simple et mesure une dimension différente du chargement d'une page.
        </p>
        <Marginalia label="REPÈRE">
          Seuils officiels Google : LCP ≤ 2,5s, INP ≤ 200ms, CLS ≤ 0,1. Une page est considérée « bonne » quand le 75e percentile des visites passe ces trois seuils.
        </Marginalia>

        <h3 className="text-lg font-semibold mt-8 mb-3">LCP - Largest Contentful Paint</h3>
        <p className="text-muted-foreground leading-relaxed">
          Le LCP mesure le temps que met le plus gros élément visible de la page à s'afficher. En pratique, c'est souvent l'image principale, une vidéo ou un bloc de texte en haut de page. La question à laquelle il répond : combien de temps l'utilisateur attend-il avant de voir apparaître le contenu principal ?
        </p>
        <p className="text-muted-foreground leading-relaxed">
          Les seuils officiels publiés par Google sur web.dev sont les suivants : un LCP inférieur ou égal à 2,5 secondes est considéré comme bon, entre 2,5 et 4 secondes il est jugé à améliorer, au-dessus de 4 secondes il est médiocre. Un site avec un LCP de 5 secondes perd une part significative de ses visiteurs avant même qu'ils n'aient vu la page.
        </p>

        <h3 className="text-lg font-semibold mt-8 mb-3">INP - Interaction to Next Paint</h3>
        <p className="text-muted-foreground leading-relaxed">
          L'INP mesure la réactivité de la page aux interactions de l'utilisateur : clics, taps, pression de touche. Concrètement, il calcule le délai le plus long entre une action et la mise à jour visuelle qui en découle. La question : quand je clique, la page répond-elle instantanément ou faut-il attendre ?
        </p>
        <p className="text-muted-foreground leading-relaxed">
          L'INP a remplacé officiellement la métrique FID (First Input Delay) dans les Core Web Vitals. Les seuils : bon jusqu'à 200 ms, à améliorer entre 200 et 500 ms, médiocre au-delà de 500 ms. Sur les sites chargés de scripts tiers (chatbots, pixels publicitaires, gestionnaires de cookies), l'INP est souvent la métrique la plus dégradée.
        </p>

        <h3 className="text-lg font-semibold mt-8 mb-3">CLS - Cumulative Layout Shift</h3>
        <p className="text-muted-foreground leading-relaxed">
          Le CLS mesure la stabilité visuelle de la page. Quand un visiteur est sur le point de cliquer sur un bouton et que la page se décale à cause d'une image qui charge tardivement ou d'une bannière qui s'injecte, c'est un layout shift. Ces décalages sont frustrants et parfois coûteux : cliquer par erreur sur une publicité au lieu d'un lien n'est pas un accident rare.
        </p>
        <p className="text-muted-foreground leading-relaxed">
          Le CLS est noté sans unité, entre 0 et l'infini théorique. Les seuils Google : bon en dessous de 0,1, à améliorer entre 0,1 et 0,25, médiocre au-delà de 0,25. Les causes les plus fréquentes sont les images sans dimensions déclarées, les polices web qui changent de taille au chargement, et les encarts publicitaires injectés après le rendu initial.
        </p>
      </div>
    </ArticleSection>

    <PullQuote>
      Un score de 92 sur desktop peut masquer un échec complet sur mobile, là où 60 à 70% du trafic se joue aujourd'hui.
    </PullQuote>

    <ArticleSection number="03" title="Comment mesurer la performance de votre site">
      <div className="space-y-5 article-prose">
        <p className="text-muted-foreground leading-relaxed">
          La méthode la plus directe est de passer par pagespeed.web.dev, d'entrer l'URL de votre page d'accueil et d'attendre le rapport. Trois précautions changent totalement la fiabilité de la mesure.
        </p>
        <p className="text-muted-foreground leading-relaxed">
          Première précaution : tester systématiquement la version mobile en priorité. Depuis plusieurs années, Google indexe votre site dans sa version mobile en premier (mobile-first indexing). Le score desktop a peu de valeur informative si le score mobile est mauvais. Pour la plupart des PME suisses, plus de la moitié des visites proviennent d'un smartphone.
        </p>
        <p className="text-muted-foreground leading-relaxed">
          Deuxième précaution : tester plusieurs pages, pas seulement la page d'accueil. Les pages service, les articles de blog et les pages produit ont souvent des performances différentes. Une home optimisée avec une page contact à 3 secondes de LCP reste un problème SEO.
        </p>
        <p className="text-muted-foreground leading-relaxed">
          Troisième précaution : regarder les données de terrain avant les données de laboratoire. Si votre site a assez de trafic pour être couvert par le Chrome UX Report, Google affichera un encart « Les données de terrain indiquent que cette page réussit l'évaluation Core Web Vitals » (ou échoue). C'est ce signal qui compte pour le référencement, pas le score Lighthouse isolé.
        </p>
        <p className="text-muted-foreground leading-relaxed">
          À titre d'exemple, kumo-seo.ch affichait le 17 avril 2026 un score mobile de 58 sur 100, avec un LCP de 3,9 secondes et un TBT (Total Blocking Time, proxy en laboratoire de l'INP) de 1160 ms. Un site qui conseille les autres sur le SEO, donc, et qui a lui aussi des marges de progression. L'honnêteté vaut mieux que les scores inventés.
        </p>
      </div>
    </ArticleSection>

    <ArticleSection number="04" title="GTmetrix et les autres outils à connaître">
      <div className="space-y-5 article-prose">
        <p className="text-muted-foreground leading-relaxed">
          PageSpeed Insights est l'outil de référence, mais il n'est pas le seul. GTmetrix apporte une lecture complémentaire utile, principalement via son graphique en cascade (waterfall) qui montre dans quel ordre les ressources se chargent et combien de temps chacune prend. C'est précieux pour identifier un script tiers qui bloque le rendu ou une image non compressée qui pèse plusieurs mégaoctets.
        </p>
        <Marginalia label="VOIR AUSSI">
          L'audit SEO KUMO intègre une analyse PageSpeed complète sur vos pages clés, avec recommandations de correction priorisées. Voir{" "}
          <Link to="/blog/audit-seo-pourquoi-indispensable/" className="text-primary-light hover:text-primary/80 underline underline-offset-4 transition-colors">Audit SEO, pourquoi c'est indispensable</Link>.
        </Marginalia>
        <p className="text-muted-foreground leading-relaxed">
          Pour un diagnostic local détaillé depuis votre navigateur, Chrome DevTools propose un onglet Lighthouse intégré. Il produit le même type de rapport que PageSpeed Insights, mais permet de tester des pages en accès restreint (intranet, environnement de préproduction). C'est l'outil préféré des développeurs pour itérer pendant les corrections.
        </p>
        <p className="text-muted-foreground leading-relaxed">
          WebPageTest, plus technique, permet de choisir le lieu de test (Europe, Amérique du Nord, Asie) et la qualité de connexion simulée. Un site hébergé aux États-Unis mais destiné à une clientèle vaudoise présentera un LCP sensiblement différent selon le point de test. WebPageTest rend cette réalité visible.
        </p>
      </div>
    </ArticleSection>

    <ArticleSection number="05" title="Six causes de mauvaise performance observées chez les PME suisses">
      <div className="space-y-5 article-prose">
        <p className="text-muted-foreground leading-relaxed">
          Sur la cinquantaine d'audits PageSpeed réalisés pour des PME romandes depuis 2024, les mêmes causes reviennent avec une régularité remarquable. Voici les six principales, classées par fréquence décroissante.
        </p>
        <p className="text-muted-foreground leading-relaxed">
          <strong className="text-foreground">1. Images trop lourdes et mal dimensionnées.</strong> Une photo de 3 megaoctets en JPG haute résolution sur la page d'accueil pèse directement sur le LCP. Les formats modernes (WebP, AVIF) réduisent le poids de 30 à 50% à qualité visuelle équivalente. Peu de prestataires web les mettent en place par défaut.
        </p>
        <p className="text-muted-foreground leading-relaxed">
          <strong className="text-foreground">2. Scripts tiers en cascade.</strong> Google Tag Manager, pixels Facebook, chatbots, outils d'analyse, hotjar, intercom. Chaque script ajoute du temps de blocage et dégrade l'INP. Rares sont les sites qui en ont besoin de tous.
        </p>
        <p className="text-muted-foreground leading-relaxed">
          <strong className="text-foreground">3. Polices web non optimisées.</strong> Charger cinq variantes de Google Fonts avec un FOIT (Flash of Invisible Text) bloque l'affichage et génère du CLS quand le texte apparaît. Un font-display: swap et la réduction à deux variantes règlent 80% du problème.
        </p>
        <p className="text-muted-foreground leading-relaxed">
          <strong className="text-foreground">4. Hébergement sous-dimensionné ou éloigné.</strong> Un hébergement mutualisé à 4 francs par mois, avec un TTFB (Time to First Byte) de 800 ms, plombe mécaniquement le LCP. Un hébergement suisse correct (Infomaniak, Hostpoint) démarre plus rapidement et réduit la latence pour une clientèle locale.
        </p>
        <p className="text-muted-foreground leading-relaxed">
          <strong className="text-foreground">5. Plugins WordPress superposés.</strong> Sur un WordPress, l'accumulation de plugins (slider, formulaires, SEO, sécurité, cache, sauvegarde, statistiques) injecte souvent plus de 1 megaoctet de JavaScript et CSS sans que personne n'en ait besoin sur la page d'accueil.
        </p>
        <p className="text-muted-foreground leading-relaxed">
          <strong className="text-foreground">6. Absence totale de cache navigateur et CDN.</strong> Les fichiers statiques renvoyés sans en-tête Cache-Control forcent un téléchargement complet à chaque visite. Pour un visiteur qui revient, la deuxième page chargée est aussi lente que la première.
        </p>
      </div>
    </ArticleSection>

    <ArticleSection number="06" title="Quel score viser en 2026 quand on est une PME">
      <div className="space-y-5 article-prose">
        <p className="text-muted-foreground leading-relaxed">
          Viser 100 sur 100 en score Lighthouse n'a pas de sens pour un site de PME. Ce niveau est atteignable sur un site statique minimaliste, mais il implique des compromis (pas d'animations, pas de tracking, peu d'images) que la plupart des entreprises ne peuvent pas se permettre.
        </p>
        <Marginalia label="NOTE">
          L'objectif réaliste pour un site PME en 2026 : 75+ sur mobile, 90+ sur desktop, et les trois Core Web Vitals dans le vert sur les données de terrain.
        </Marginalia>
        <p className="text-muted-foreground leading-relaxed">
          L'objectif réaliste et suffisant pour bien ranker : atteindre le seuil « bon » sur les trois Core Web Vitals (LCP sous 2,5s, INP sous 200ms, CLS sous 0,1) dans la section Origine du rapport PageSpeed. En score Lighthouse synthétique, cela correspond généralement à 75+ sur mobile et 90+ sur desktop.
        </p>
        <p className="text-muted-foreground leading-relaxed">
          Ce niveau permet à votre site de passer l'évaluation Page Experience de Google, qui est un des signaux de classement parmi une centaine d'autres. La performance n'est pas le premier facteur SEO (le contenu l'est), mais c'est un facteur différenciant quand vous êtes en concurrence avec d'autres sites au contenu équivalent.
        </p>
        <p className="text-muted-foreground leading-relaxed">
          En dessous de ce seuil, le problème n'est pas seulement le classement. C'est aussi le taux de rebond. Des études de Google sur le mobile ont montré qu'au-delà de 3 secondes de chargement, la probabilité d'abandon augmente fortement. Pour un artisan qui investit dans Google Ads, chaque seconde de lenteur se traduit en francs perdus.
        </p>
      </div>
    </ArticleSection>

    <ArticleSection number="07" title="Core Web Vitals et SEO local, le lien souvent oublié">
      <div className="space-y-5 article-prose">
        <p className="text-muted-foreground leading-relaxed">
          Pour une PME qui cible une zone géographique précise (un canton, une vallée, une ville), la performance a un impact direct sur le SEO local. Google Business Profile pousse les utilisateurs vers votre site depuis les résultats de recherche locale. Si ce site met 6 secondes à charger, une partie des prospects abandonne avant d'arriver sur le formulaire contact.
        </p>
        <p className="text-muted-foreground leading-relaxed">
          Le lien est mécanique : Google observe le comportement des utilisateurs qui cliquent depuis les résultats locaux. Un site avec un taux de retour élevé (l'utilisateur revient vers Google et clique sur un concurrent) envoie un signal négatif qui, cumulé, fait perdre des positions dans le pack local.
        </p>
        <p className="text-muted-foreground leading-relaxed">
          Les secteurs les plus sensibles sont ceux où la décision est rapide : restauration, services de dépannage, artisans. Un client qui cherche un plombier à 22 heures pour une fuite d'eau ne va pas patienter 5 secondes pour voir votre numéro de téléphone apparaître.
        </p>
      </div>
    </ArticleSection>

    <div className="article-prose space-y-6">
      <hr className="border-border/50 my-12" />

      <h2 className="text-xl md:text-2xl font-bold mt-12 mb-4">Questions fréquentes</h2>

      <h3 className="text-lg font-semibold mt-8 mb-3">C'est quoi exactement les Core Web Vitals ?</h3>
      <p className="text-muted-foreground leading-relaxed">
        Les Core Web Vitals sont trois métriques de performance définies par Google pour évaluer l'expérience utilisateur d'une page web : le LCP (vitesse d'affichage du contenu principal), l'INP (réactivité aux clics) et le CLS (stabilité visuelle). Elles sont intégrées aux signaux de classement via l'évaluation Page Experience.
      </p>

      <h3 className="text-lg font-semibold mt-8 mb-3">Quel outil utiliser pour tester mon site ?</h3>
      <p className="text-muted-foreground leading-relaxed">
        PageSpeed Insights (pagespeed.web.dev) est l'outil officiel de Google et la référence pour évaluer les Core Web Vitals. GTmetrix complète utilement l'analyse grâce à son graphique en cascade. Chrome DevTools permet des tests locaux rapides pendant les corrections.
      </p>

      <h3 className="text-lg font-semibold mt-8 mb-3">Mon site a un bon LCP mais un mauvais CLS, c'est grave ?</h3>
      <p className="text-muted-foreground leading-relaxed">
        Oui. Google évalue les trois Core Web Vitals ensemble. Un site ne peut passer l'évaluation que si le 75e percentile de ses visiteurs obtient de bonnes valeurs sur les trois métriques simultanément. Un CLS dégradé annule les efforts faits sur le LCP.
      </p>

      <h3 className="text-lg font-semibold mt-8 mb-3">Quel score PageSpeed viser pour un site de PME ?</h3>
      <p className="text-muted-foreground leading-relaxed">
        Viser 75 sur 100 ou plus sur mobile et 90 sur 100 ou plus sur desktop, avec les trois Core Web Vitals dans le vert sur les données de terrain. Ce niveau permet de passer l'évaluation Page Experience sans compromis majeur sur les fonctionnalités du site (tracking, animations, images).
      </p>

      <hr className="border-border/50 my-12" />

      <p className="text-muted-foreground leading-relaxed italic">
        Vous voulez une analyse complète de la performance de votre site ?{" "}
        <Link to="/services/audit-seo/" className="text-primary-light hover:text-primary/80 underline underline-offset-4 transition-colors">L'audit SEO KUMO</Link>{" "}
        inclut l'analyse PageSpeed et un plan d'action priorisé. Ou{" "}
        <Link to="/contact/" className="text-primary-light hover:text-primary/80 underline underline-offset-4 transition-colors">prenez contact</Link>{" "}
        pour un échange de 15 minutes.
      </p>
    </div>
  </>
);

export default PagespeedCoreWebVitalsGuide;
